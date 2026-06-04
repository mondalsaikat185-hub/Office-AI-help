import { create } from 'zustand';
import { AppState, Workspace, Letter, InboxItem, ApiKey, CaseItem, DraftState } from '../types';
import { db, auth } from './firebase';
import { doc, getDoc, setDoc, collection, query, getDocs, limit, orderBy, deleteDoc, writeBatch } from 'firebase/firestore';
import { User } from 'firebase/auth';
import { learningEngine } from './learningEngine';

interface GlobalStore extends AppState {
  user: User | null;
  activeWorkspaceId: string | null;
  activeDirectoryId: string | null;
  activeFileId: string | null;
  activeSignatureId: string | null;
  letters: Letter[];
  inbox: InboxItem[];
  cases: CaseItem[];
  drafts: Record<string, DraftState>;
  theme: 'dark' | 'light';

  // Actions
  setUser: (user: User | null) => void;
  setTheme: (theme: 'dark' | 'light') => void;
  setActiveWorkspace: (id: string) => void;
  setActiveDirectory: (id: string) => void;
  setActiveFile: (id: string) => void;
  setActiveSignature: (id: string) => void;
  setDraft: (id: string, payload: DraftState) => void;
  loadUserData: () => Promise<void>;
  saveUserData: (data?: Partial<GlobalStore>) => Promise<void>;
  saveLetter: (letter: Letter) => Promise<void>;
  deleteLetter: (id: string) => Promise<void>;
  saveCase: (c: CaseItem) => Promise<void>;
  updateCase: (c: CaseItem) => Promise<void>;
  deleteCase: (id: string) => Promise<void>;
  deleteFileCascade: (wsId: string, dirId: string, fileId: string) => Promise<void>;
  deleteDirCascade: (wsId: string, dirId: string) => Promise<void>;
}

let saveDraftTimeout: any = null;

// Helper: safely read JSON from localStorage
function readLocalJSON<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return parsed ?? fallback;
  } catch { return fallback; }
}

// Helper: safely write JSON to localStorage
function writeLocalJSON(key: string, value: any): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn('[OfficeAI] localStorage write failed:', e);
  }
}

export const useStore = create<GlobalStore>((set, get) => ({
  user: null,
  profile: null,
  workspaces: [],
  apiKeys: readLocalJSON<ApiKey[]>('officeai_apiKeys', []),
  selectedModel: (() => {
    const local = localStorage.getItem('officeai_selectedModel');
    const VALID_MODELS = ['gemini-2.5-flash', 'gemini-2.0-flash', 'gemini-1.5-pro', 'gemini-1.5-flash'];
    return (local && VALID_MODELS.includes(local)) ? local : 'gemini-2.5-flash';
  })(),
  mistralKey: '',
  tokenBudget: 0,
  addressBook: [],
  phrases: [],
  templates: [],
  appPasswordHash: '',
  tgBotToken: '',
  tgChatId: '',
  diary: [],
  demands: [],
  employees: [],
  bonds: [],
  revenue: [],

  drafts: {},

  activeWorkspaceId: null,
  activeDirectoryId: null,
  activeFileId: null,
  activeSignatureId: null,

  letters: [],
  inbox: [],
  cases: [],
  theme: (localStorage.getItem('officeai_theme') as 'dark'|'light') || 'dark',

  setUser: (user) => set({ user }),
  setTheme: (theme) => {
    localStorage.setItem('officeai_theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
    set({ theme });
  },
  setActiveWorkspace: (id) => {
    localStorage.setItem('officeai_lastWs', id);
    set({ activeWorkspaceId: id });
  },
  setActiveDirectory: (id) => {
    const { activeWorkspaceId } = get();
    if (activeWorkspaceId) localStorage.setItem('officeai_lastDir_' + activeWorkspaceId, id);
    set({ activeDirectoryId: id });
  },
  setActiveFile: (id) => {
    const { activeDirectoryId } = get();
    if (activeDirectoryId) localStorage.setItem('officeai_lastFile_' + activeDirectoryId, id);
    set({ activeFileId: id });
  },
  setActiveSignature: (id) => set({ activeSignatureId: id }),
  setDraft: (id, payload) => {
    set(state => ({ drafts: { ...state.drafts, [id]: payload } }));
  },

  loadUserData: async () => {
    const { user } = get();
    if (!user) return;

    try {
      await learningEngine.load(user.uid);
      const userDocRef = doc(db, 'officeai_users', user.uid);
      const snap = await getDoc(userDocRef);
      
      let coreData: Partial<AppState> = {};
      let migratedWorkspaces: Workspace[] = [];
      let migratedDemands: any[] = [];
      let migratedDiary: any[] = [];
      let needsMigrationSave = false;

      if (snap.exists()) {
        coreData = snap.data() as Partial<AppState>;
        if (coreData.workspaces && coreData.workspaces.length > 0) {
          migratedWorkspaces = coreData.workspaces;
          needsMigrationSave = true;
        }
        if (coreData.demands && coreData.demands.length > 0) {
          migratedDemands = coreData.demands;
          needsMigrationSave = true;
        }
        if (coreData.diary && coreData.diary.length > 0) {
          migratedDiary = coreData.diary;
          needsMigrationSave = true;
        }
      }

      // Load workspaces from subcollection
      const workspacesRef = collection(db, 'officeai_users', user.uid, 'workspaces');
      const workspacesSnap = await getDocs(workspacesRef);
      let loadedWorkspaces = workspacesSnap.docs.map(d => ({ id: d.id, ...d.data() } as Workspace));

      // Load demands from subcollection
      const demandsRef = collection(db, 'officeai_users', user.uid, 'demands');
      const demandsSnap = await getDocs(demandsRef);
      let loadedDemands = demandsSnap.docs.map(d => ({ id: d.id, ...d.data() } as any));

      // Load diary from subcollection
      const diaryRef = collection(db, 'officeai_users', user.uid, 'diary');
      const diarySnap = await getDocs(diaryRef);
      let loadedDiary = diarySnap.docs.map(d => ({ id: d.id, ...d.data() } as any));

      // Load employees from subcollection
      const employeesRef = collection(db, 'officeai_users', user.uid, 'employees');
      const employeesSnap = await getDocs(employeesRef);
      let loadedEmployees = employeesSnap.docs.map(d => ({ id: d.id, ...d.data() } as any));

      // Load bonds from subcollection
      const bondsRef = collection(db, 'officeai_users', user.uid, 'bonds');
      const bondsSnap = await getDocs(bondsRef);
      let loadedBonds = bondsSnap.docs.map(d => ({ id: d.id, ...d.data() } as any));

      // Load revenue from subcollection
      const revenueRef = collection(db, 'officeai_users', user.uid, 'revenue');
      const revenueSnap = await getDocs(revenueRef);
      let loadedRevenue = revenueSnap.docs.map(d => ({ id: d.id, ...d.data() } as any));


      // Migration fallback
      if (loadedWorkspaces.length === 0 && migratedWorkspaces.length > 0) {
        console.log("Migrating legacy workspaces...");
        const batch = writeBatch(db);
        migratedWorkspaces.forEach(w => {
          batch.set(doc(db, 'officeai_users', user.uid, 'workspaces', w.id), w);
        });
        await batch.commit();
        loadedWorkspaces = migratedWorkspaces;
      }

      if (loadedDemands.length === 0 && migratedDemands.length > 0) {
        console.log("Migrating legacy demands...");
        const batch = writeBatch(db);
        migratedDemands.forEach(d => {
          batch.set(doc(db, 'officeai_users', user.uid, 'demands', d.id), d);
        });
        await batch.commit();
        loadedDemands = migratedDemands;
      }

      if (loadedDiary.length === 0 && migratedDiary.length > 0) {
        console.log("Migrating legacy diary...");
        const batch = writeBatch(db);
        migratedDiary.forEach(d => {
          batch.set(doc(db, 'officeai_users', user.uid, 'diary', d.id), d);
        });
        await batch.commit();
        loadedDiary = migratedDiary;
      }

      if (needsMigrationSave) {
        console.log("Cleaning up legacy core user document fields...");
        const cleanupData = {
          workspaces: [],
          demands: [],
          diary: [],
          drafts: {}
        };
        await setDoc(userDocRef, cleanupData, { merge: true });
      }

      // Load inbox
      const inboxRef = collection(db, 'officeai_users', user.uid, 'inbox');
      const inboxSnap = await getDocs(query(inboxRef, orderBy('createdAt', 'desc'), limit(50)));
      const loadedInbox = inboxSnap.docs.map(d => ({ id: d.id, ...d.data() } as InboxItem));

      // Load letters
      const lettersRef = collection(db, 'officeai_users', user.uid, 'letters');
      const lettersSnap = await getDocs(query(lettersRef, orderBy('createdAt', 'desc'), limit(500)));
      const loadedLetters = lettersSnap.docs.map(d => ({ id: d.id, ...d.data() } as Letter));

      // Load cases
      const casesRef = collection(db, 'officeai_users', user.uid, 'cases');
      const casesSnap = await getDocs(query(casesRef, orderBy('createdAt', 'desc'), limit(200)));
      const loadedCases = casesSnap.docs.map(d => ({ id: d.id, ...d.data() } as CaseItem));

      const cleanCoreData: any = { ...coreData };
      delete cleanCoreData.workspaces;
      delete cleanCoreData.demands;
      delete cleanCoreData.diary;
      delete cleanCoreData.drafts;
      delete cleanCoreData.employees;
      delete cleanCoreData.bonds;
      delete cleanCoreData.revenue;

      // ── CRITICAL: Validate apiKeys and selectedModel before overwriting ──
      // Never allow empty/stale Firestore data to destroy valid local state
      const currentState = get();
      const localApiKeys = readLocalJSON<ApiKey[]>('officeai_apiKeys', []);
      const localModel = localStorage.getItem('officeai_selectedModel') || 'gemini-2.5-flash';

      // Determine best apiKeys: Firestore > localStorage > current state
      const firestoreApiKeys = cleanCoreData.apiKeys;
      if (firestoreApiKeys && Array.isArray(firestoreApiKeys) && firestoreApiKeys.length > 0) {
        // Firestore has valid keys — use them and update localStorage backup
        writeLocalJSON('officeai_apiKeys', firestoreApiKeys);
      } else if (localApiKeys.length > 0) {
        // Firestore returned empty but localStorage has keys — preserve them
        console.warn('[OfficeAI] Firestore returned empty apiKeys, restoring from localStorage backup');
        cleanCoreData.apiKeys = localApiKeys;
      } else if (currentState.apiKeys.length > 0) {
        // Both empty but current state has keys (shouldn't happen, but safety net)
        cleanCoreData.apiKeys = currentState.apiKeys;
      }
      // else: all sources empty — user truly has no keys

      // Determine best selectedModel: Firestore > localStorage > default
      const VALID_MODELS = ['gemini-2.5-flash', 'gemini-2.0-flash', 'gemini-1.5-pro', 'gemini-1.5-flash'];
      const firestoreModel = cleanCoreData.selectedModel;
      
      let finalModel = 'gemini-2.5-flash';
      if (firestoreModel && VALID_MODELS.includes(firestoreModel)) {
        finalModel = firestoreModel;
      } else if (localModel && VALID_MODELS.includes(localModel)) {
        finalModel = localModel;
        console.warn('[OfficeAI] Stored model is invalid, fell back to local model:', localModel);
      } else {
        console.warn('[OfficeAI] Stored and local models invalid, falling back to gemini-2.5-flash');
      }

      cleanCoreData.selectedModel = finalModel;
      localStorage.setItem('officeai_selectedModel', finalModel);

      set((state) => ({
        ...state,
        ...cleanCoreData,
        workspaces: loadedWorkspaces,
        demands: loadedDemands,
        diary: loadedDiary,
        employees: loadedEmployees,
        bonds: loadedBonds,
        revenue: loadedRevenue,
        inbox: loadedInbox,
        letters: loadedLetters,
        cases: loadedCases
      }));

    } catch (error) {
      console.error("Error loading user data:", error);
      // On load failure, keep whatever is in localStorage/current state
      // Do NOT reset to defaults
    }
  },

  saveUserData: async (partialData) => {
    const { user } = get();
    if (!user) return;

    try {
      if (partialData) {
        // Sync subcollections if they are updated in partialData
        if ('workspaces' in partialData) {
          const oldWs = get().workspaces;
          const newWs = partialData.workspaces || [];
          const deleted = oldWs.filter(ow => !newWs.some(nw => nw.id === ow.id));
          for (const w of deleted) {
            await deleteDoc(doc(db, 'officeai_users', user.uid, 'workspaces', w.id));
          }
          for (const w of newWs) {
            await setDoc(doc(db, 'officeai_users', user.uid, 'workspaces', w.id), JSON.parse(JSON.stringify(w)));
          }
        }
        if ('demands' in partialData) {
          const oldDemands = get().demands;
          const newDemands = partialData.demands || [];
          const deleted = oldDemands.filter(od => !newDemands.some(nd => nd.id === od.id));
          for (const d of deleted) {
            await deleteDoc(doc(db, 'officeai_users', user.uid, 'demands', d.id));
          }
          for (const d of newDemands) {
            await setDoc(doc(db, 'officeai_users', user.uid, 'demands', d.id), JSON.parse(JSON.stringify(d)));
          }
        }
        if ('diary' in partialData) {
          const oldDiary = get().diary;
          const newDiary = partialData.diary || [];
          const deleted = oldDiary.filter(od => !newDiary.some(nd => nd.id === od.id));
          for (const d of deleted) {
            await deleteDoc(doc(db, 'officeai_users', user.uid, 'diary', d.id));
          }
          for (const d of newDiary) {
            await setDoc(doc(db, 'officeai_users', user.uid, 'diary', d.id), JSON.parse(JSON.stringify(d)));
          }
        }
        if ('employees' in partialData) {
          const oldEmps = get().employees || [];
          const newEmps = partialData.employees || [];
          const deleted = oldEmps.filter(oe => !newEmps.some(ne => ne.id === oe.id));
          for (const e of deleted) {
            await deleteDoc(doc(db, 'officeai_users', user.uid, 'employees', e.id));
          }
          for (const e of newEmps) {
            await setDoc(doc(db, 'officeai_users', user.uid, 'employees', e.id), JSON.parse(JSON.stringify(e)));
          }
        }
        if ('bonds' in partialData) {
          const oldBonds = get().bonds || [];
          const newBonds = partialData.bonds || [];
          const deleted = oldBonds.filter(ob => !newBonds.some(nb => nb.id === ob.id));
          for (const b of deleted) {
            await deleteDoc(doc(db, 'officeai_users', user.uid, 'bonds', b.id));
          }
          for (const b of newBonds) {
            await setDoc(doc(db, 'officeai_users', user.uid, 'bonds', b.id), JSON.parse(JSON.stringify(b)));
          }
        }
        if ('revenue' in partialData) {
          const oldRevenue = get().revenue || [];
          const newRevenue = partialData.revenue || [];
          const deleted = oldRevenue.filter(or => !newRevenue.some(nr => nr.id === or.id));
          for (const r of deleted) {
            await deleteDoc(doc(db, 'officeai_users', user.uid, 'revenue', r.id));
          }
          for (const r of newRevenue) {
            await setDoc(doc(db, 'officeai_users', user.uid, 'revenue', r.id), JSON.parse(JSON.stringify(r)));
          }
        }

        set(partialData);
      } else {
        // Full sync
        const { workspaces, demands, diary, employees, bonds, revenue } = get();
        for (const w of workspaces) {
          await setDoc(doc(db, 'officeai_users', user.uid, 'workspaces', w.id), JSON.parse(JSON.stringify(w)));
        }
        for (const d of demands) {
          await setDoc(doc(db, 'officeai_users', user.uid, 'demands', d.id), JSON.parse(JSON.stringify(d)));
        }
        for (const d of diary) {
          await setDoc(doc(db, 'officeai_users', user.uid, 'diary', d.id), JSON.parse(JSON.stringify(d)));
        }
        for (const e of (employees || [])) {
          await setDoc(doc(db, 'officeai_users', user.uid, 'employees', e.id), JSON.parse(JSON.stringify(e)));
        }
        for (const b of (bonds || [])) {
          await setDoc(doc(db, 'officeai_users', user.uid, 'bonds', b.id), JSON.parse(JSON.stringify(b)));
        }
        for (const r of (revenue || [])) {
          await setDoc(doc(db, 'officeai_users', user.uid, 'revenue', r.id), JSON.parse(JSON.stringify(r)));
        }
      }

      // Save core user doc without subcollection datasets and drafts
      const state = get();
      const rawCoreToSave = {
        profile: state.profile ?? null,
        apiKeys: state.apiKeys ?? [],
        selectedModel: state.selectedModel || 'gemini-2.5-flash',
        mistralKey: state.mistralKey ?? '',
        tokenBudget: state.tokenBudget ?? 0,
        addressBook: state.addressBook ?? [],
        phrases: state.phrases ?? [],
        templates: state.templates ?? [],
        appPasswordHash: state.appPasswordHash ?? '',
        tgBotToken: state.tgBotToken ?? '',
        tgChatId: state.tgChatId ?? '',
        activeWorkspaceId: state.activeWorkspaceId ?? null,
        activeDirectoryId: state.activeDirectoryId ?? null,
        activeFileId: state.activeFileId ?? null,
        activeSignatureId: state.activeSignatureId ?? null,
        lastUpdate: Date.now()
      };

      // ── CRITICAL: Always backup apiKeys and selectedModel to localStorage ──
      // This ensures settings survive even if Firestore fails on next load
      writeLocalJSON('officeai_apiKeys', rawCoreToSave.apiKeys);
      localStorage.setItem('officeai_selectedModel', rawCoreToSave.selectedModel);

      const coreToSave = JSON.parse(JSON.stringify(rawCoreToSave));
      try {
        await setDoc(doc(db, 'officeai_users', user.uid), coreToSave, { merge: true });
      } catch (firestoreError) {
        console.error("Firestore save failed, but localStorage backup is intact:", firestoreError);
        // Don't throw — localStorage backup ensures data survives
        // Schedule a retry after 5 seconds
        setTimeout(async () => {
          try {
            await setDoc(doc(db, 'officeai_users', user.uid), coreToSave, { merge: true });
            console.log('[OfficeAI] Firestore retry succeeded');
          } catch (retryError) {
            console.error('[OfficeAI] Firestore retry also failed:', retryError);
          }
        }, 5000);
      }
    } catch (error) {
      console.error("Error saving user data:", error);
      throw error;
    }
  },

  saveLetter: async (letter: Letter) => {
    const { user, letters } = get();
    if (!user) return;

    set({ letters: [letter, ...letters] });

    try {
      const cleanLetter = JSON.parse(JSON.stringify(letter));
      await setDoc(doc(db, 'officeai_users', user.uid, 'letters', letter.id), cleanLetter);
    } catch (error) {
      console.error("Error saving letter:", error);
      throw error;
    }
  },

  deleteLetter: async (id: string) => {
    const { user, letters } = get();
    if (!user) return;

    set({ letters: letters.filter(l => l.id !== id) });

    try {
      await deleteDoc(doc(db, 'officeai_users', user.uid, 'letters', id));
    } catch (error) {
      console.error("Error deleting letter:", error);
      set({ letters });
      throw error;
    }
  },

  saveCase: async (c: CaseItem) => {
    const { user, cases } = get();
    if (!user) return;
    set({ cases: [c, ...cases] });
    try {
      await setDoc(doc(db, 'officeai_users', user.uid, 'cases', c.id), JSON.parse(JSON.stringify(c)));
    } catch (error) {
      console.error("Error saving case:", error);
      set({ cases });
      throw error;
    }
  },

  updateCase: async (c: CaseItem) => {
    const { user, cases } = get();
    if (!user) return;
    set({ cases: cases.map(x => x.id === c.id ? c : x) });
    try {
      await setDoc(doc(db, 'officeai_users', user.uid, 'cases', c.id), JSON.parse(JSON.stringify(c)));
    } catch (error) {
      console.error("Error updating case:", error);
      throw error;
    }
  },

  deleteCase: async (id: string) => {
    const { user, cases } = get();
    if (!user) return;
    set({ cases: cases.filter(c => c.id !== id) });
    try {
      await deleteDoc(doc(db, 'officeai_users', user.uid, 'cases', id));
    } catch (error) {
      console.error("Error deleting case:", error);
      throw error;
    }
  },

  deleteFileCascade: async (wsId: string, dirId: string, fileId: string) => {
    const { workspaces, letters, drafts, user, saveUserData } = get();
    if (!user) return;

    const wsList = [...workspaces];
    const wsIdx = wsList.findIndex(w => w.id === wsId);
    if (wsIdx >= 0) {
      const dirIdx = wsList[wsIdx].directories.findIndex(d => d.id === dirId);
      if (dirIdx >= 0) {
        wsList[wsIdx].directories[dirIdx].files = wsList[wsIdx].directories[dirIdx].files.filter(f => f.id !== fileId);
      }
    }

    const lettersToDelete = letters.filter(l => l.fileId === fileId);
    const newLetters = letters.filter(l => l.fileId !== fileId);

    const newDrafts = { ...drafts };
    delete newDrafts[fileId];

    set({ letters: newLetters, drafts: newDrafts });

    await get().saveUserData({ workspaces: wsList, drafts: newDrafts });

    if (lettersToDelete.length > 0) {
      const batch = writeBatch(db);
      for (const l of lettersToDelete) {
        batch.delete(doc(db, 'officeai_users', user.uid, 'letters', l.id));
      }
      await batch.commit().catch(e => console.error("Error deleting letters:", e));
    }
  },

  deleteDirCascade: async (wsId: string, dirId: string) => {
    const { workspaces, letters, drafts, user, saveUserData } = get();
    if (!user) return;

    const wsList = [...workspaces];
    const wsIdx = wsList.findIndex(w => w.id === wsId);

    let subDirsToDelete = new Set<string>([dirId]);
    let fileIdsToDelete = new Set<string>();

    if (wsIdx >= 0) {
      let foundNew = true;
      while (foundNew) {
        foundNew = false;
        wsList[wsIdx].directories.forEach(d => {
          if (d.parentId && subDirsToDelete.has(d.parentId) && !subDirsToDelete.has(d.id)) {
            subDirsToDelete.add(d.id);
            foundNew = true;
          }
        });
      }

      wsList[wsIdx].directories.forEach(d => {
        if (subDirsToDelete.has(d.id)) {
          d.files.forEach(f => fileIdsToDelete.add(f.id));
        }
      });

      wsList[wsIdx].directories = wsList[wsIdx].directories.filter(d => !subDirsToDelete.has(d.id));
    }

    const lettersToDelete = letters.filter(l => fileIdsToDelete.has(l.fileId) || subDirsToDelete.has(l.directoryId));
    const newLetters = letters.filter(l => !(fileIdsToDelete.has(l.fileId) || subDirsToDelete.has(l.directoryId)));

    const newDrafts = { ...drafts };
    fileIdsToDelete.forEach(fid => delete newDrafts[fid]);

    set({ letters: newLetters, drafts: newDrafts });
    await get().saveUserData({ workspaces: wsList, drafts: newDrafts });

    if (lettersToDelete.length > 0) {
      const batch = writeBatch(db);
      for (const l of lettersToDelete) {
        batch.delete(doc(db, 'officeai_users', user.uid, 'letters', l.id));
      }
      await batch.commit().catch(e => console.error("Error deleting directory letters:", e));
    }
  }
}));
