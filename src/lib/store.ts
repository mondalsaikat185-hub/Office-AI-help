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

export const useStore = create<GlobalStore>((set, get) => ({
  user: null,
  profile: null,
  workspaces: [],
  apiKeys: [],
  selectedModel: 'gemini-1.5-flash',
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
    if (saveDraftTimeout) clearTimeout(saveDraftTimeout);
    saveDraftTimeout = setTimeout(() => {
      get().saveUserData();
    }, 5000);
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

      set((state) => ({
        ...state,
        ...cleanCoreData,
        workspaces: loadedWorkspaces,
        demands: loadedDemands,
        diary: loadedDiary,
        inbox: loadedInbox,
        letters: loadedLetters,
        cases: loadedCases
      }));

    } catch (error) {
      console.error("Error loading user data:", error);
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

        set(partialData);
      } else {
        // Full sync
        const { workspaces, demands, diary } = get();
        for (const w of workspaces) {
          await setDoc(doc(db, 'officeai_users', user.uid, 'workspaces', w.id), JSON.parse(JSON.stringify(w)));
        }
        for (const d of demands) {
          await setDoc(doc(db, 'officeai_users', user.uid, 'demands', d.id), JSON.parse(JSON.stringify(d)));
        }
        for (const d of diary) {
          await setDoc(doc(db, 'officeai_users', user.uid, 'diary', d.id), JSON.parse(JSON.stringify(d)));
        }
      }

      // Save core user doc without subcollection datasets and drafts
      const state = get();
      const rawCoreToSave = {
        profile: state.profile ?? null,
        apiKeys: state.apiKeys ?? [],
        selectedModel: state.selectedModel ?? '',
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

      const coreToSave = JSON.parse(JSON.stringify(rawCoreToSave));
      await setDoc(doc(db, 'officeai_users', user.uid), coreToSave, { merge: true });
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
