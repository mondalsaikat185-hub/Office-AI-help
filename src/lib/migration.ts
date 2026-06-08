/**
 * Firebase to Hybrid Data Migration Tool
 * Reads all user documents and subcollections from Firestore
 * and writes them into local IndexedDB (and Drive if connected).
 */

import { FirestoreAdapter } from './storageAdapter';
import { HybridAdapter } from './hybridAdapter';

export async function migrateFirebaseToHybrid(
  userId: string,
  onProgress: (status: string, progress: number) => void
): Promise<void> {
  onProgress('Adapters প্রস্তুত করা হচ্ছে...', 0);
  const firestore = new FirestoreAdapter();
  await firestore.initialize(userId);

  const hybrid = new HybridAdapter();
  await hybrid.initialize(userId);

  const collections = [
    'workspaces', 'letters', 'cases', 'diary', 'demands',
    'employees', 'bonds', 'revenue', 'inbox'
  ];

  const totalSteps = collections.length + 2; // user settings + collections + sync
  let currentStep = 0;

  // 1. User settings doc
  currentStep++;
  onProgress('User settings মাইগ্রেট করা হচ্ছে...', (currentStep / totalSteps) * 100);
  try {
    const userDoc = await firestore.getUserDoc();
    if (userDoc && Object.keys(userDoc).length > 0) {
      await hybrid.setUserDoc(userDoc);
    }
  } catch (e: any) {
    console.error('Failed to migrate user settings:', e);
  }

  // 2. Subcollections
  for (const col of collections) {
    currentStep++;
    onProgress(`Collection (${col}) মাইগ্রেট করা হচ্ছে...`, (currentStep / totalSteps) * 100);
    try {
      const docs = await firestore.queryDocs(col);
      if (docs.length > 0) {
        const ops = docs.map(d => ({
          type: 'set' as const,
          collection: col,
          id: d.id,
          data: d
        }));
        await hybrid.batchWrite(ops);
      }
    } catch (e: any) {
      console.error(`Failed to migrate collection ${col}:`, e);
    }
  }

  // 3. Sync to Google Drive if connected
  currentStep++;
  onProgress('Google Drive-এ ব্যাকআপ সিঙ্ক করা হচ্ছে...', (currentStep / totalSteps) * 100);
  try {
    const { isDriveConnected } = await import('./googleDriveSync');
    if (isDriveConnected()) {
      await hybrid.syncToCloud();
    }
  } catch (e: any) {
    console.error('Failed to sync migrated data to Google Drive:', e);
  }

  onProgress('মাইগ্রেশন সফলভাবে সম্পন্ন!', 100);
}
