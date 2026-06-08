/**
 * Storage Adapter — Unified interface for Firebase and Hybrid storage modes.
 * 
 * FirestoreAdapter wraps the current Firestore SDK calls.
 * HybridAdapter (in hybridAdapter.ts) uses IndexedDB + Google Drive.
 * 
 * The store.ts will call getAdapter().setDoc(...) instead of directly
 * using Firestore SDK, making the backend swappable via settings.
 */

import { db } from './firebase';
import {
  doc, getDoc as fsGetDoc, setDoc as fsSetDoc, deleteDoc as fsDeleteDoc,
  collection, query, getDocs, where, orderBy, limit as fsLimit,
  writeBatch
} from 'firebase/firestore';

// =================== Interfaces ===================

export interface QueryFilter {
  field: string;
  op: '==' | '!=' | '<' | '>' | '<=' | '>=';
  value: any;
}

export interface QueryOptions {
  where?: QueryFilter[];
  orderBy?: { field: string; direction: 'asc' | 'desc' }[];
  limit?: number;
}

export interface BatchOp {
  type: 'set' | 'delete';
  collection: string;
  id: string;
  data?: any;
}

export interface StorageAdapter {
  /** Initialize with the authenticated user's ID */
  initialize(userId: string): Promise<void>;

  /** Get a single document from a sub-collection */
  getDoc(collectionName: string, id: string): Promise<any | null>;

  /** Set (create/update) a document in a sub-collection */
  setDoc(collectionName: string, id: string, data: any): Promise<void>;

  /** Delete a document from a sub-collection */
  deleteDoc(collectionName: string, id: string): Promise<void>;

  /** Query documents from a sub-collection with optional filters */
  queryDocs(collectionName: string, options?: QueryOptions): Promise<any[]>;

  /** Atomic batch write — all or nothing */
  batchWrite(ops: BatchOp[]): Promise<void>;

  /** Read the core user settings document */
  getUserDoc(): Promise<any>;

  /** Write the core user settings document (merge) */
  setUserDoc(data: any): Promise<void>;

  /** Sync data to cloud (no-op for Firebase, uploads to Drive for Hybrid) */
  syncToCloud?(): Promise<void>;

  /** Sync data from cloud (no-op for Firebase, downloads from Drive for Hybrid) */
  syncFromCloud?(): Promise<void>;

  /** Get last sync timestamp */
  getLastSyncTime?(): number;
}

// =================== Firestore Adapter ===================

export class FirestoreAdapter implements StorageAdapter {
  private userId: string = '';

  async initialize(userId: string): Promise<void> {
    this.userId = userId;
  }

  private subRef(collectionName: string) {
    return collection(db, 'officeai_users', this.userId, collectionName);
  }

  private docRef(collectionName: string, id: string) {
    return doc(db, 'officeai_users', this.userId, collectionName, id);
  }

  async getDoc(collectionName: string, id: string): Promise<any | null> {
    const snap = await fsGetDoc(this.docRef(collectionName, id));
    return snap.exists() ? { id: snap.id, ...snap.data() } : null;
  }

  async setDoc(collectionName: string, id: string, data: any): Promise<void> {
    const clean = JSON.parse(JSON.stringify(data));
    delete clean.id; // Firestore stores id as the document key, not inside the doc
    await fsSetDoc(this.docRef(collectionName, id), clean);
  }

  async deleteDoc(collectionName: string, id: string): Promise<void> {
    await fsDeleteDoc(this.docRef(collectionName, id));
  }

  async queryDocs(collectionName: string, options?: QueryOptions): Promise<any[]> {
    const constraints: any[] = [];

    if (options?.where) {
      for (const w of options.where) {
        constraints.push(where(w.field, w.op as any, w.value));
      }
    }
    if (options?.orderBy) {
      for (const o of options.orderBy) {
        constraints.push(orderBy(o.field, o.direction));
      }
    }
    if (options?.limit) {
      constraints.push(fsLimit(options.limit));
    }

    const q = query(this.subRef(collectionName), ...constraints);
    const snap = await getDocs(q);
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  }

  async batchWrite(ops: BatchOp[]): Promise<void> {
    // Firestore batch limit is 500 ops; chunk if needed
    const MAX = 490;
    for (let i = 0; i < ops.length; i += MAX) {
      const chunk = ops.slice(i, i + MAX);
      const batch = writeBatch(db);
      for (const op of chunk) {
        const ref = this.docRef(op.collection, op.id);
        if (op.type === 'delete') {
          batch.delete(ref);
        } else {
          const clean = JSON.parse(JSON.stringify(op.data));
          delete clean.id;
          batch.set(ref, clean);
        }
      }
      await batch.commit();
    }
  }

  async getUserDoc(): Promise<any> {
    const snap = await fsGetDoc(doc(db, 'officeai_users', this.userId));
    return snap.exists() ? snap.data() : {};
  }

  async setUserDoc(data: any): Promise<void> {
    const clean = JSON.parse(JSON.stringify(data));
    await fsSetDoc(doc(db, 'officeai_users', this.userId), clean, { merge: true });
  }
}

// =================== Adapter Factory ===================

let currentAdapter: StorageAdapter | null = null;
let currentMode: 'firebase' | 'hybrid' = (() => {
  try {
    return (localStorage.getItem('officeai_storageMode') as 'firebase' | 'hybrid') || 'firebase';
  } catch {
    return 'firebase';
  }
})();

export function getStorageMode(): 'firebase' | 'hybrid' {
  return currentMode;
}

export async function initializeAdapter(userId: string, mode?: 'firebase' | 'hybrid'): Promise<StorageAdapter> {
  const targetMode = mode || currentMode;

  if (targetMode === 'hybrid') {
    // Dynamic import to avoid loading hybrid code when not needed
    const { HybridAdapter } = await import('./hybridAdapter');
    currentAdapter = new HybridAdapter();
  } else {
    currentAdapter = new FirestoreAdapter();
  }

  await currentAdapter.initialize(userId);
  currentMode = targetMode;
  localStorage.setItem('officeai_storageMode', targetMode);
  return currentAdapter;
}

export function getAdapter(): StorageAdapter {
  if (!currentAdapter) {
    // Fallback: create a Firestore adapter (will need initialize() call later)
    currentAdapter = new FirestoreAdapter();
  }
  return currentAdapter;
}
