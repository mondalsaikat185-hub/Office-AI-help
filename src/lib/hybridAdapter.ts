/**
 * Hybrid Adapter — IndexedDB (primary) + Google Drive (backup)
 * 
 * Implements StorageAdapter interface.
 * All reads/writes go to IndexedDB first (fast, offline-capable).
 * Changes are queued and synced to Google Drive in the background.
 */

import type { StorageAdapter, QueryOptions, BatchOp } from './storageAdapter';
import {
  localGetDoc, localSetDoc, localDeleteDoc, localQueryDocs,
  localBatchWrite, initEncryption, isEncryptionReady,
  exportAllData, importAllData, getSyncMeta, setSyncMeta,
  getAllRecordsRaw, localPutRaw, localGetRecordTimestamp
} from './indexedDBStore';
import {
  isDriveConnected, uploadCollection, downloadCollection,
  queueSync, getLastSyncTime as driveGetLastSyncTime
} from './googleDriveSync';

// =================== Hybrid Adapter ===================

export class HybridAdapter implements StorageAdapter {
  private userId: string = '';
  private _lastSyncTime: number = 0;

  async initialize(userId: string): Promise<void> {
    this.userId = userId;

    // Check if encryption is already initialized
    if (!isEncryptionReady()) {
      // Try to use a stored password hash or prompt user
      const savedPwdHash = localStorage.getItem('officeai_hybridPwd');
      if (savedPwdHash) {
        await initEncryption(savedPwdHash);
      } else {
        // Fallback: use userId as encryption key (user should set a password in settings)
        await initEncryption(`officeai_default_${userId}`);
      }
    }

    // Load last sync time
    this._lastSyncTime = (await getSyncMeta('lastSyncTime')) || 0;
  }

  async getDoc(collectionName: string, id: string): Promise<any | null> {
    return localGetDoc(collectionName, id);
  }

  async setDoc(collectionName: string, id: string, data: any): Promise<void> {
    await localSetDoc(collectionName, id, data);
    // Queue background sync to Drive
    if (isDriveConnected()) {
      queueSync(collectionName);
    }
  }

  async deleteDoc(collectionName: string, id: string): Promise<void> {
    await localDeleteDoc(collectionName, id);
    if (isDriveConnected()) {
      queueSync(collectionName);
    }
  }

  async queryDocs(collectionName: string, options?: QueryOptions): Promise<any[]> {
    return localQueryDocs(collectionName, options);
  }

  async batchWrite(ops: BatchOp[]): Promise<void> {
    await localBatchWrite(ops);

    // Queue all affected collections for sync
    if (isDriveConnected()) {
      const collections = new Set(ops.map(op => op.collection));
      for (const col of collections) {
        queueSync(col);
      }
    }
  }

  async getUserDoc(): Promise<any> {
    const doc = await localGetDoc('_settings', this.userId);
    return doc || {};
  }

  async setUserDoc(data: any): Promise<void> {
    await localSetDoc('_settings', this.userId, data);
    if (isDriveConnected()) {
      queueSync('_settings');
    }
  }

  // =================== Sync Methods ===================

  async syncToCloud(): Promise<void> {
    if (!isDriveConnected()) {
      console.warn('[Hybrid] Drive not connected, skipping cloud sync');
      return;
    }

    const collections = ['workspaces', 'letters', 'cases', 'diary', 'demands',
                         'employees', 'bonds', 'revenue', 'inbox', '_settings'];

    for (const col of collections) {
      try {
        const records = await getAllRecordsRaw(col);
        const uploadData = records.map(r => ({
          id: r.docId,
          data: r.data, // Still encrypted
          lastModified: r.lastModified,
          _deleted: r._deleted === 1
        }));
        await uploadCollection(col, uploadData);
      } catch (e) {
        console.error(`[Hybrid] Failed to sync ${col} to cloud:`, e);
      }
    }

    this._lastSyncTime = Date.now();
    await setSyncMeta('lastSyncTime', this._lastSyncTime);
  }

  async syncFromCloud(): Promise<void> {
    if (!isDriveConnected()) {
      console.warn('[Hybrid] Drive not connected, skipping cloud download');
      return;
    }

    const collections = ['workspaces', 'letters', 'cases', 'diary', 'demands',
                         'employees', 'bonds', 'revenue', 'inbox', '_settings'];

    for (const col of collections) {
      try {
        const driveData = await downloadCollection(col);
        if (!driveData || driveData.records.length === 0) continue;

        // For each Drive record, check if local is newer
        for (const driveRecord of driveData.records) {
          const driveModified = driveRecord.lastModified || 0;
          const localModified = await localGetRecordTimestamp(col, driveRecord.id);

          if (driveModified > localModified) {
            // Drive is newer — update local directly with encrypted data
            await localPutRaw(
              col,
              driveRecord.id,
              driveRecord.data,
              driveModified,
              driveRecord._deleted ? 1 : 0,
              driveRecord._deleted ? driveModified : 0
            );
          }
        }
      } catch (e) {
        console.error(`[Hybrid] Failed to sync ${col} from cloud:`, e);
      }
    }

    this._lastSyncTime = Date.now();
    await setSyncMeta('lastSyncTime', this._lastSyncTime);
  }

  async sync(): Promise<void> {
    await this.syncFromCloud();
    await this.syncToCloud();
  }

  getLastSyncTime(): number {
    return this._lastSyncTime || driveGetLastSyncTime();
  }
}

// =================== Utility Exports ===================

export { exportAllData, importAllData } from './indexedDBStore';
export { initEncryption, isEncryptionReady } from './indexedDBStore';
export {
  initTokenClient, isDriveConnected, disconnectDrive,
  getGoogleClientId, setGoogleClientId, getLastSyncTime
} from './googleDriveSync';
