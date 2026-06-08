/**
 * IndexedDB Store — Local encrypted storage using Dexie.js
 * 
 * Each record is stored with AES-256-GCM encryption.
 * Provides CRUD operations matching the StorageAdapter interface.
 * All data stays in the browser — no network calls.
 */

import Dexie from 'dexie';

// =================== Database Schema ===================

interface StoredRecord {
  /** Composite key: `${collection}::${id}` */
  pk: string;
  collection: string;
  docId: string;
  data: string; // Encrypted JSON string
  lastModified: number;
  _deleted: number; // 0 = active, 1 = soft-deleted
  deletedAt: number;
}

interface SyncMeta {
  key: string;
  value: any;
}

class OfficeAILocalDB extends Dexie {
  records!: Dexie.Table<StoredRecord, string>;
  syncMeta!: Dexie.Table<SyncMeta, string>;

  constructor() {
    super('officeai_hybrid_db');
    this.version(1).stores({
      records: 'pk, collection, lastModified, _deleted, [collection+_deleted]',
      syncMeta: 'key'
    });
  }
}

const localDB = new OfficeAILocalDB();

// =================== Encryption (AES-256-GCM) ===================

let encryptionKey: CryptoKey | null = null;
const SALT_KEY = 'officeai_enc_salt';

/** Derive an AES-256-GCM key from a user password using PBKDF2 */
async function deriveKey(password: string): Promise<CryptoKey> {
  const enc = new TextEncoder();

  // Retrieve or generate a persistent salt
  let saltB64 = localStorage.getItem(SALT_KEY);
  let salt: Uint8Array;
  if (saltB64) {
    salt = Uint8Array.from(atob(saltB64), c => c.charCodeAt(0));
  } else {
    salt = crypto.getRandomValues(new Uint8Array(16));
    localStorage.setItem(SALT_KEY, btoa(String.fromCharCode(...salt)));
  }

  const keyMaterial = await crypto.subtle.importKey(
    'raw', enc.encode(password), 'PBKDF2', false, ['deriveKey']
  );

  return crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt, iterations: 100000, hash: 'SHA-256' },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
}

/** Encrypt a plain string → base64 ciphertext */
async function encrypt(plaintext: string, key: CryptoKey): Promise<string> {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encoded = new TextEncoder().encode(plaintext);
  const ciphertext = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, encoded);
  const combined = new Uint8Array(iv.length + ciphertext.byteLength);
  combined.set(iv);
  combined.set(new Uint8Array(ciphertext), iv.length);
  return btoa(String.fromCharCode(...combined));
}

/** Decrypt base64 ciphertext → plain string */
async function decrypt(b64: string, key: CryptoKey): Promise<string> {
  const combined = Uint8Array.from(atob(b64), c => c.charCodeAt(0));
  const iv = combined.slice(0, 12);
  const ciphertext = combined.slice(12);
  const plainBuffer = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, ciphertext);
  return new TextDecoder().decode(plainBuffer);
}

// =================== Public API ===================

/** Initialize encryption with user password. Must be called before any CRUD ops. */
export async function initEncryption(password: string): Promise<void> {
  encryptionKey = await deriveKey(password);
}

/** Check if encryption is initialized */
export function isEncryptionReady(): boolean {
  return encryptionKey !== null;
}

/** Clear all local data (for logout or mode switch) */
export async function clearLocalDB(): Promise<void> {
  await localDB.records.clear();
  await localDB.syncMeta.clear();
}

function requireKey(): CryptoKey {
  if (!encryptionKey) throw new Error('Encryption not initialized. Call initEncryption() first.');
  return encryptionKey;
}

function makePK(collection: string, id: string): string {
  return `${collection}::${id}`;
}

// =================== CRUD Operations ===================

/** Get a single document */
export async function localGetDoc(collectionName: string, id: string): Promise<any | null> {
  const key = requireKey();
  const record = await localDB.records.get(makePK(collectionName, id));
  if (!record || record._deleted === 1) return null;
  try {
    const json = await decrypt(record.data, key);
    return { id: record.docId, ...JSON.parse(json) };
  } catch (e) {
    console.error('[IndexedDB] Decryption failed for', collectionName, id, e);
    return null;
  }
}

/** Set (create/update) a document */
export async function localSetDoc(collectionName: string, id: string, data: any): Promise<void> {
  const key = requireKey();
  const clean = { ...data };
  delete clean.id;
  const encrypted = await encrypt(JSON.stringify(clean), key);
  await localDB.records.put({
    pk: makePK(collectionName, id),
    collection: collectionName,
    docId: id,
    data: encrypted,
    lastModified: Date.now(),
    _deleted: 0,
    deletedAt: 0
  });
}

/** Soft-delete a document (marks as deleted, doesn't remove for sync purposes) */
export async function localDeleteDoc(collectionName: string, id: string): Promise<void> {
  const pk = makePK(collectionName, id);
  const existing = await localDB.records.get(pk);
  if (existing) {
    existing._deleted = 1;
    existing.deletedAt = Date.now();
    existing.lastModified = Date.now();
    await localDB.records.put(existing);
  }
}

/** Hard-delete — permanently removes (used after sync confirms deletion) */
export async function localHardDelete(collectionName: string, id: string): Promise<void> {
  await localDB.records.delete(makePK(collectionName, id));
}

/** Save a raw encrypted record directly (used in cloud sync) */
export async function localPutRaw(
  collectionName: string,
  id: string,
  encryptedData: string,
  lastModified: number,
  _deleted: number,
  deletedAt: number = 0
): Promise<void> {
  await localDB.records.put({
    pk: makePK(collectionName, id),
    collection: collectionName,
    docId: id,
    data: encryptedData,
    lastModified,
    _deleted,
    deletedAt
  });
}

/** Get the lastModified timestamp of a local record directly */
export async function localGetRecordTimestamp(collectionName: string, id: string): Promise<number> {
  const record = await localDB.records.get(makePK(collectionName, id));
  return record ? record.lastModified : 0;
}

/** Query documents from a collection with optional filters */
export async function localQueryDocs(
  collectionName: string,
  options?: {
    where?: { field: string; op: string; value: any }[];
    orderBy?: { field: string; direction: 'asc' | 'desc' }[];
    limit?: number;
  }
): Promise<any[]> {
  const key = requireKey();

  // Get all active (non-deleted) records for this collection
  const records = await localDB.records
    .where({ collection: collectionName, _deleted: 0 })
    .toArray();

  // Decrypt all records
  const docs: any[] = [];
  for (const record of records) {
    try {
      const json = await decrypt(record.data, key);
      docs.push({ id: record.docId, ...JSON.parse(json), _lastModified: record.lastModified });
    } catch (e) {
      console.warn('[IndexedDB] Skipping corrupt record:', record.pk);
    }
  }

  // Apply WHERE filters in-memory
  let filtered = docs;
  if (options?.where) {
    for (const w of options.where) {
      filtered = filtered.filter(doc => {
        const val = doc[w.field];
        switch (w.op) {
          case '==': return val === w.value;
          case '!=': return val !== w.value;
          case '<': return val < w.value;
          case '>': return val > w.value;
          case '<=': return val <= w.value;
          case '>=': return val >= w.value;
          default: return true;
        }
      });
    }
  }

  // Apply ORDER BY
  if (options?.orderBy) {
    for (const o of options.orderBy.reverse()) {
      filtered.sort((a, b) => {
        const aVal = a[o.field] ?? 0;
        const bVal = b[o.field] ?? 0;
        return o.direction === 'asc' ? (aVal > bVal ? 1 : -1) : (aVal < bVal ? 1 : -1);
      });
    }
  }

  // Apply LIMIT
  if (options?.limit) {
    filtered = filtered.slice(0, options.limit);
  }

  // Clean up internal fields
  return filtered.map(d => {
    delete d._lastModified;
    return d;
  });
}

/** Batch write — atomic local operations */
export async function localBatchWrite(
  ops: { type: 'set' | 'delete'; collection: string; id: string; data?: any }[]
): Promise<void> {
  await localDB.transaction('rw', localDB.records, async () => {
    for (const op of ops) {
      if (op.type === 'delete') {
        await localDeleteDoc(op.collection, op.id);
      } else if (op.data) {
        await localSetDoc(op.collection, op.id, op.data);
      }
    }
  });
}

// =================== Sync Helpers ===================

/** Get all records modified after a given timestamp */
export async function getModifiedSince(timestamp: number): Promise<StoredRecord[]> {
  return localDB.records
    .where('lastModified')
    .above(timestamp)
    .toArray();
}

/** Get all records for a collection (including deleted, for sync) */
export async function getAllRecordsRaw(collectionName: string): Promise<StoredRecord[]> {
  return localDB.records
    .where('collection')
    .equals(collectionName)
    .toArray();
}

/** Bulk upsert from Drive sync (already encrypted) */
export async function bulkUpsert(records: StoredRecord[]): Promise<void> {
  await localDB.records.bulkPut(records);
}

/** Purge all soft-deleted records older than given timestamp */
export async function purgeOldDeleted(olderThan: number): Promise<void> {
  const toDelete = await localDB.records
    .where('_deleted').equals(1)
    .filter(r => r.deletedAt < olderThan)
    .toArray();
  await localDB.records.bulkDelete(toDelete.map(r => r.pk));
}

// =================== Sync Metadata ===================

export async function getSyncMeta(key: string): Promise<any> {
  const record = await localDB.syncMeta.get(key);
  return record?.value ?? null;
}

export async function setSyncMeta(key: string, value: any): Promise<void> {
  await localDB.syncMeta.put({ key, value });
}

// =================== Export / Import ===================

/** Export all data as unencrypted JSON (for manual backup) */
export async function exportAllData(): Promise<Record<string, any[]>> {
  const key = requireKey();
  const allRecords = await localDB.records.where('_deleted').equals(0).toArray();
  const result: Record<string, any[]> = {};

  for (const record of allRecords) {
    if (!result[record.collection]) result[record.collection] = [];
    try {
      const json = await decrypt(record.data, key);
      result[record.collection].push({ id: record.docId, ...JSON.parse(json) });
    } catch (e) {
      console.warn('[Export] Skipping corrupt record:', record.pk);
    }
  }

  return result;
}

/** Import data from a JSON backup */
export async function importAllData(data: Record<string, any[]>): Promise<number> {
  let count = 0;
  for (const [collectionName, docs] of Object.entries(data)) {
    for (const docData of docs) {
      const id = docData.id;
      if (!id) continue;
      await localSetDoc(collectionName, id, docData);
      count++;
    }
  }
  return count;
}
