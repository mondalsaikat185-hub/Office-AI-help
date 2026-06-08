/**
 * Google Drive Sync — Cloud backup via Drive REST API v3
 * 
 * Uses Google Identity Services (GIS) for OAuth2 authentication.
 * Stores data in the appDataFolder (hidden from user's Drive UI).
 * Each collection = one JSON file on Drive.
 * 
 * Sync strategy: Timestamp-based last-write-wins with soft deletes.
 */

// =================== Types ===================

interface DriveFile {
  id: string;
  name: string;
  modifiedTime: string;
}

interface SyncState {
  accessToken: string | null;
  tokenExpiry: number;
  lastSyncTime: number;
  fileIdCache: Record<string, string>; // filename -> Drive file ID
  syncInProgress: boolean;
  syncQueue: Set<string>; // collections pending sync
}

// =================== State ===================

const state: SyncState = {
  accessToken: null,
  tokenExpiry: 0,
  lastSyncTime: 0,
  fileIdCache: {},
  syncInProgress: false,
  syncQueue: new Set()
};

let tokenClient: any = null;
let debounceTimer: ReturnType<typeof setTimeout> | null = null;
const DEBOUNCE_MS = 30_000; // 30 seconds delay before syncing
const DRIVE_API = 'https://www.googleapis.com/drive/v3';
const UPLOAD_API = 'https://www.googleapis.com/upload/drive/v3';

// =================== GIS Auth ===================

/** Load Google Identity Services script */
export function loadGISScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if ((window as any).google?.accounts?.oauth2) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Google Identity Services'));
    document.head.appendChild(script);
  });
}

/** Initialize the OAuth2 token client */
export function initTokenClient(clientId: string): Promise<string> {
  return new Promise(async (resolve, reject) => {
    try {
      await loadGISScript();

      tokenClient = (window as any).google.accounts.oauth2.initTokenClient({
        client_id: clientId,
        scope: 'https://www.googleapis.com/auth/drive.appdata',
        callback: (response: any) => {
          if (response.error) {
            reject(new Error(response.error));
            return;
          }
          state.accessToken = response.access_token;
          state.tokenExpiry = Date.now() + (response.expires_in * 1000) - 60_000; // 1 min buffer
          localStorage.setItem('officeai_driveToken', JSON.stringify({
            token: state.accessToken,
            expiry: state.tokenExpiry
          }));
          resolve(response.access_token);
        },
        error_callback: (err: any) => {
          reject(new Error(err.message || 'OAuth error'));
        }
      });

      tokenClient.requestAccessToken({ prompt: 'consent' });
    } catch (e) {
      reject(e);
    }
  });
}

/** Refresh access token silently (if possible) */
export function refreshToken(): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!tokenClient) {
      reject(new Error('Token client not initialized'));
      return;
    }
    tokenClient.requestAccessToken({ prompt: '' });
    // The callback set in initTokenClient will fire
    const checkInterval = setInterval(() => {
      if (state.accessToken && state.tokenExpiry > Date.now()) {
        clearInterval(checkInterval);
        resolve(state.accessToken);
      }
    }, 200);
    setTimeout(() => {
      clearInterval(checkInterval);
      reject(new Error('Token refresh timed out'));
    }, 15_000);
  });
}

/** Get a valid access token (auto-refresh if expired) */
async function getToken(): Promise<string> {
  // Try cached token from localStorage
  if (!state.accessToken) {
    try {
      const cached = localStorage.getItem('officeai_driveToken');
      if (cached) {
        const { token, expiry } = JSON.parse(cached);
        if (expiry > Date.now()) {
          state.accessToken = token;
          state.tokenExpiry = expiry;
        }
      }
    } catch { /* ignore */ }
  }

  if (state.accessToken && state.tokenExpiry > Date.now()) {
    return state.accessToken;
  }

  // Try silent refresh
  return refreshToken();
}

/** Check if Drive is connected */
export function isDriveConnected(): boolean {
  try {
    const cached = localStorage.getItem('officeai_driveToken');
    if (cached) {
      const { expiry } = JSON.parse(cached);
      return expiry > Date.now();
    }
  } catch { /* ignore */ }
  return !!(state.accessToken && state.tokenExpiry > Date.now());
}

/** Disconnect Drive (revoke token) */
export function disconnectDrive(): void {
  if (state.accessToken) {
    (window as any).google?.accounts?.oauth2?.revoke?.(state.accessToken);
  }
  state.accessToken = null;
  state.tokenExpiry = 0;
  state.fileIdCache = {};
  localStorage.removeItem('officeai_driveToken');
  localStorage.removeItem('officeai_driveFileCache');
}

// =================== Drive File Operations ===================

/** List files in appDataFolder */
async function listFiles(): Promise<DriveFile[]> {
  const token = await getToken();
  const res = await fetch(
    `${DRIVE_API}/files?spaces=appDataFolder&fields=files(id,name,modifiedTime)&pageSize=100`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  if (!res.ok) throw new Error(`Drive list failed: ${res.status}`);
  const data = await res.json();
  return data.files || [];
}

/** Download a file's content as JSON */
async function downloadFile(fileId: string): Promise<any> {
  const token = await getToken();
  const res = await fetch(
    `${DRIVE_API}/files/${fileId}?alt=media`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  if (!res.ok) throw new Error(`Drive download failed: ${res.status}`);
  return res.json();
}

/** Create a new file in appDataFolder */
async function createFile(filename: string, data: any): Promise<string> {
  const token = await getToken();
  const metadata = {
    name: filename,
    parents: ['appDataFolder']
  };

  const boundary = '---officeai_boundary---';
  const body = [
    `--${boundary}`,
    'Content-Type: application/json; charset=UTF-8',
    '',
    JSON.stringify(metadata),
    `--${boundary}`,
    'Content-Type: application/json',
    '',
    JSON.stringify(data),
    `--${boundary}--`
  ].join('\r\n');

  const res = await fetch(
    `${UPLOAD_API}/files?uploadType=multipart`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': `multipart/related; boundary=${boundary}`
      },
      body
    }
  );
  if (!res.ok) throw new Error(`Drive create failed: ${res.status}`);
  const result = await res.json();
  return result.id;
}

/** Update an existing file's content */
async function updateFile(fileId: string, data: any): Promise<void> {
  const token = await getToken();
  const res = await fetch(
    `${UPLOAD_API}/files/${fileId}?uploadType=media`,
    {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
  );
  if (!res.ok) throw new Error(`Drive update failed: ${res.status}`);
}

// =================== High-Level Sync ===================

/** Get or create a Drive file for a collection, returns file ID */
async function ensureFileId(filename: string): Promise<string> {
  // Check cache first
  if (state.fileIdCache[filename]) return state.fileIdCache[filename];

  // Check localStorage cache
  try {
    const cached = localStorage.getItem('officeai_driveFileCache');
    if (cached) {
      const map = JSON.parse(cached);
      if (map[filename]) {
        state.fileIdCache[filename] = map[filename];
        return map[filename];
      }
    }
  } catch { /* ignore */ }

  // List files to find it
  const files = await listFiles();
  for (const f of files) {
    state.fileIdCache[f.name] = f.id;
  }

  // Save cache
  localStorage.setItem('officeai_driveFileCache', JSON.stringify(state.fileIdCache));

  if (state.fileIdCache[filename]) return state.fileIdCache[filename];

  // File doesn't exist, create it
  const fileId = await createFile(filename, { records: [], lastModified: Date.now() });
  state.fileIdCache[filename] = fileId;
  localStorage.setItem('officeai_driveFileCache', JSON.stringify(state.fileIdCache));
  return fileId;
}

/** Upload a collection's data to Drive */
export async function uploadCollection(
  collectionName: string,
  records: { id: string; data: any; lastModified: number; _deleted: boolean }[]
): Promise<void> {
  const filename = `officeai_${collectionName}.json`;
  const fileId = await ensureFileId(filename);
  await updateFile(fileId, {
    records,
    lastModified: Date.now(),
    collection: collectionName
  });
}

/** Download a collection's data from Drive */
export async function downloadCollection(
  collectionName: string
): Promise<{ records: any[]; lastModified: number } | null> {
  try {
    const filename = `officeai_${collectionName}.json`;
    const fileId = await ensureFileId(filename);
    const data = await downloadFile(fileId);
    return {
      records: data.records || [],
      lastModified: data.lastModified || 0
    };
  } catch (e) {
    console.error(`[Drive] Failed to download ${collectionName}:`, e);
    return null;
  }
}

// =================== Debounced Sync Queue ===================

/** Queue a collection for sync (debounced) */
export function queueSync(collectionName: string): void {
  state.syncQueue.add(collectionName);

  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    flushSyncQueue().catch(e => console.error('[Drive] Sync queue flush failed:', e));
  }, DEBOUNCE_MS);
}

/** Manually trigger sync for all queued collections */
export async function flushSyncQueue(): Promise<void> {
  if (state.syncInProgress || state.syncQueue.size === 0) return;
  if (!isDriveConnected()) return;

  state.syncInProgress = true;
  const collections = [...state.syncQueue];
  state.syncQueue.clear();

  try {
    const { getAllRecordsRaw } = await import('./indexedDBStore');
    for (const col of collections) {
      const records = await getAllRecordsRaw(col);
      const uploadData = records.map(r => ({
        id: r.docId,
        data: r.data, // Still encrypted
        lastModified: r.lastModified,
        _deleted: r._deleted === 1
      }));
      await uploadCollection(col, uploadData);
      console.log(`[Drive] Synced collection to cloud: ${col}`);
    }
    state.lastSyncTime = Date.now();
    localStorage.setItem('officeai_lastDriveSync', String(state.lastSyncTime));
  } catch (e) {
    // Re-queue failed collections
    for (const col of collections) state.syncQueue.add(col);
    console.error('[Drive] Sync failed:', e);
  } finally {
    state.syncInProgress = false;
  }
}

/** Force a full sync of all collections */
export async function fullSync(
  getCollectionData: (col: string) => Promise<any[]>
): Promise<{ uploaded: number; downloaded: number }> {
  if (!isDriveConnected()) throw new Error('Drive not connected');

  const collections = ['workspaces', 'letters', 'cases', 'diary', 'demands',
                       'employees', 'bonds', 'revenue', 'inbox', 'settings'];
  let uploaded = 0, downloaded = 0;

  for (const col of collections) {
    try {
      const localData = await getCollectionData(col);
      const driveData = await downloadCollection(col);

      if (!driveData || driveData.records.length === 0) {
        // Drive is empty — upload local data
        if (localData.length > 0) {
          await uploadCollection(col, localData.map(r => ({
            id: r.id,
            data: r,
            lastModified: r.lastModified || Date.now(),
            _deleted: false
          })));
          uploaded += localData.length;
        }
      } else {
        // Merge: timestamp-based last-write-wins
        const merged = mergeRecords(localData, driveData.records);
        await uploadCollection(col, merged);
        uploaded += merged.length;
      }
    } catch (e) {
      console.error(`[Drive] Full sync failed for ${col}:`, e);
    }
  }

  state.lastSyncTime = Date.now();
  localStorage.setItem('officeai_lastDriveSync', String(state.lastSyncTime));
  return { uploaded, downloaded };
}

/** Merge local and remote records using timestamps */
function mergeRecords(localRecords: any[], remoteRecords: any[]): any[] {
  const mergedMap = new Map<string, any>();

  // Add all remote records
  for (const r of remoteRecords) {
    mergedMap.set(r.id, r);
  }

  // Merge local records (newer wins)
  for (const l of localRecords) {
    const existing = mergedMap.get(l.id);
    if (!existing || (l.lastModified || 0) >= (existing.lastModified || 0)) {
      mergedMap.set(l.id, {
        id: l.id,
        data: l.data || l,
        lastModified: l.lastModified || Date.now(),
        _deleted: l._deleted || false
      });
    }
  }

  return [...mergedMap.values()];
}

// =================== Status ===================

export function getLastSyncTime(): number {
  if (state.lastSyncTime) return state.lastSyncTime;
  try {
    return parseInt(localStorage.getItem('officeai_lastDriveSync') || '0', 10);
  } catch { return 0; }
}

export function isSyncInProgress(): boolean {
  return state.syncInProgress;
}

export function getGoogleClientId(): string {
  return localStorage.getItem('officeai_googleClientId') || '';
}

export function setGoogleClientId(clientId: string): void {
  localStorage.setItem('officeai_googleClientId', clientId);
}
