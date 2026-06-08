import { create } from 'zustand';
import { AppState, Workspace, Letter, InboxItem, ApiKey, CaseItem, DraftState } from '../types';
import { getAdapter, initializeAdapter } from './storageAdapter';
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
  homePreview: { letters: Letter[], cases: CaseItem[], diary: any[], demands: any[] };
  loadingScreen: string | null;
  errorToast: string | null;
  theme: 'dark' | 'light';

  // Actions
  setUser: (user: User | null) => void;
  setTheme: (theme: 'dark' | 'light') => void;
  setActiveWorkspace: (id: string) => void;
  setActiveDirectory: (id: string) => void;
  setActiveFile: (id: string) => void;
  setActiveSignature: (id: string) => void;
  setDraft: (id: string, payload: DraftState) => void;
  setErrorToast: (msg: string | null) => void;
  loadUserData: () => Promise<void>;
  saveUserData: (data?: Partial<GlobalStore>) => Promise<void>;
  saveLetter: (letter: Letter) => Promise<void>;
  deleteLetter: (id: string) => Promise<void>;
  saveCase: (c: CaseItem) => Promise<void>;
  updateCase: (c: CaseItem) => Promise<void>;
  deleteCase: (id: string) => Promise<void>;
  deleteFileCascade: (wsId: string, dirId: string, fileId: string) => Promise<void>;
  deleteDirCascade: (wsId: string, dirId: string) => Promise<void>;
  loadLettersForDirectory: (directoryId: string) => Promise<void>;
  loadSingleLetter: (id: string) => Promise<Letter | null>;
  loadCases: () => Promise<void>;
  loadDiary: () => Promise<void>;
  loadDemands: () => Promise<void>;
  loadReportsData: () => Promise<void>;
  loadInbox: () => Promise<void>;
  loadHomeData: () => Promise<void>;
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
  homePreview: { letters: [], cases: [], diary: [], demands: [] },
  loadingScreen: null,
  errorToast: null,

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
  setErrorToast: (msg) => {
    set({ errorToast: msg });
    if (msg) setTimeout(() => set({ errorToast: null }), 5000);
  },

  loadUserData: async () => {
    const { user } = get();
    if (!user) return;

    try {
      // Initialize the Storage Adapter
      const adapter = await initializeAdapter(user.uid);

      await learningEngine.load(user.uid);
      
      let coreData: any = {};
      try {
        coreData = await adapter.getUserDoc();
      } catch (e) {
        console.error("Error reading user settings doc:", e);
      }

      // Load workspaces from subcollection
      let loadedWorkspaces: Workspace[] = [];
      try {
        loadedWorkspaces = await adapter.queryDocs('workspaces');
      } catch (e) {
        console.error("Error loading workspaces:", e);
      }

      // Load pending inbox items only for startup reminders
      let loadedInbox: InboxItem[] = [];
      try {
        loadedInbox = await adapter.queryDocs('inbox', {
          where: [{ field: 'status', op: '==', value: 'pending' }]
        });
      } catch (e) {
        console.error("Error loading inbox reminders:", e);
      }

      // ── CRITICAL: Validate apiKeys and selectedModel before overwriting ──
      const currentState = get();
      const localApiKeys = readLocalJSON<ApiKey[]>('officeai_apiKeys', []);
      const localModel = localStorage.getItem('officeai_selectedModel') || 'gemini-2.5-flash';

      const firestoreApiKeys = coreData.apiKeys;
      if (firestoreApiKeys && Array.isArray(firestoreApiKeys) && firestoreApiKeys.length > 0) {
        writeLocalJSON('officeai_apiKeys', firestoreApiKeys);
      } else if (localApiKeys.length > 0) {
        console.warn('[OfficeAI] Adapter returned empty apiKeys, restoring from localStorage backup');
        coreData.apiKeys = localApiKeys;
      } else if (currentState.apiKeys.length > 0) {
        coreData.apiKeys = currentState.apiKeys;
      }

      const VALID_MODELS = ['gemini-2.5-flash', 'gemini-2.0-flash', 'gemini-1.5-pro', 'gemini-1.5-flash'];
      const firestoreModel = coreData.selectedModel;
      
      let finalModel = 'gemini-2.5-flash';
      if (firestoreModel && VALID_MODELS.includes(firestoreModel)) {
        finalModel = firestoreModel;
      } else if (localModel && VALID_MODELS.includes(localModel)) {
        finalModel = localModel;
      }

      coreData.selectedModel = finalModel;
      localStorage.setItem('officeai_selectedModel', finalModel);

      const cleanCoreData: any = { ...coreData };
      delete cleanCoreData.workspaces;
      delete cleanCoreData.demands;
      delete cleanCoreData.diary;
      delete cleanCoreData.drafts;
      delete cleanCoreData.employees;
      delete cleanCoreData.bonds;
      delete cleanCoreData.revenue;

      set((state) => ({
        ...state,
        ...cleanCoreData,
        workspaces: loadedWorkspaces,
        demands: [],
        diary: [],
        employees: [],
        bonds: [],
        revenue: [],
        inbox: loadedInbox,
        letters: [],
        cases: []
      }));

    } catch (error) {
      console.error("Error loading user data:", error);
    }
  },

  saveUserData: async (partialData) => {
    const { user } = get();
    if (!user) return;

    try {
      const adapter = getAdapter();

      if (partialData) {
        const ops: any[] = [];
        const syncSub = (key: string, oldItems: any[], newItems: any[]) => {
          const deleted = oldItems.filter((oi: any) => !newItems.some((ni: any) => ni.id === oi.id));
          for (const d of deleted) {
            ops.push({ type: 'delete', collection: key, id: d.id });
          }
          for (const n of newItems) {
            ops.push({ type: 'set', collection: key, id: n.id, data: n });
          }
        };

        if ('workspaces' in partialData) syncSub('workspaces', get().workspaces, partialData.workspaces || []);
        if ('demands' in partialData) syncSub('demands', get().demands || [], partialData.demands || []);
        if ('diary' in partialData) syncSub('diary', get().diary || [], partialData.diary || []);
        if ('employees' in partialData) syncSub('employees', get().employees || [], partialData.employees || []);
        if ('bonds' in partialData) syncSub('bonds', get().bonds || [], partialData.bonds || []);
        if ('revenue' in partialData) syncSub('revenue', get().revenue || [], partialData.revenue || []);
        if ('inbox' in partialData) syncSub('inbox', get().inbox || [], partialData.inbox || []);

        if (ops.length > 0) {
          await adapter.batchWrite(ops);
        }

        set(partialData);
      }

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

      writeLocalJSON('officeai_apiKeys', rawCoreToSave.apiKeys);
      localStorage.setItem('officeai_selectedModel', rawCoreToSave.selectedModel);

      try {
        await adapter.setUserDoc(rawCoreToSave);
      } catch (adapterError) {
        console.error("Adapter save failed, but localStorage backup is intact:", adapterError);
        setTimeout(async () => {
          try {
            await adapter.setUserDoc(rawCoreToSave);
            console.log('[OfficeAI] Retry succeeded');
          } catch (retryError) {
            console.error('[OfficeAI] Retry failed:', retryError);
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

    set({ letters: [letter, ...letters.filter(l => l.id !== letter.id)] });

    try {
      await getAdapter().setDoc('letters', letter.id, letter);
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
      await getAdapter().deleteDoc('letters', id);
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
      await getAdapter().setDoc('cases', c.id, c);
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
      await getAdapter().setDoc('cases', c.id, c);
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
      await getAdapter().deleteDoc('cases', id);
    } catch (error) {
      console.error("Error deleting case:", error);
      throw error;
    }
  },

  deleteFileCascade: async (wsId: string, dirId: string, fileId: string) => {
    const { workspaces, letters, drafts, user } = get();
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
      const ops = lettersToDelete.map(l => ({ type: 'delete' as const, collection: 'letters', id: l.id }));
      await getAdapter().batchWrite(ops).catch(e => console.error("Error deleting letters:", e));
    }
  },

  deleteDirCascade: async (wsId: string, dirId: string) => {
    const { workspaces, letters, drafts, user } = get();
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
      const ops = lettersToDelete.map(l => ({ type: 'delete' as const, collection: 'letters', id: l.id }));
      await getAdapter().batchWrite(ops).catch(e => console.error("Error deleting directory letters:", e));
    }
  },

  loadLettersForDirectory: async (directoryId: string) => {
    const { user } = get();
    if (!user) return;
    try {
      const loaded = await getAdapter().queryDocs('letters', {
        where: [{ field: 'directoryId', op: '==', value: directoryId }],
        orderBy: [{ field: 'createdAt', direction: 'desc' }]
      });
      set(state => ({
        letters: [
          ...state.letters.filter(l => l.directoryId !== directoryId),
          ...loaded
        ]
      }));
    } catch (e) {
      console.error("Error loading letters for directory:", e);
    }
  },

  loadSingleLetter: async (id: string) => {
    const { user, letters } = get();
    if (!user) return null;
    const existing = letters.find(l => l.id === id);
    if (existing) return existing;
    try {
      const letter = await getAdapter().getDoc('letters', id);
      if (letter) {
        set({ letters: [letter, ...letters.filter(l => l.id !== letter.id)] });
        return letter;
      }
    } catch (e) {
      console.error("Error loading single letter:", e);
    }
    return null;
  },

  loadCases: async () => {
    const { user, activeWorkspaceId } = get();
    if (!user || !activeWorkspaceId) return;
    try {
      const loaded = await getAdapter().queryDocs('cases', {
        where: [{ field: 'workspaceId', op: '==', value: activeWorkspaceId }],
        orderBy: [{ field: 'createdAt', direction: 'desc' }]
      });
      set({ cases: loaded });
    } catch (e) {
      console.error("Error loading cases:", e);
    }
  },

  loadDiary: async () => {
    const { user, activeWorkspaceId } = get();
    if (!user || !activeWorkspaceId) return;
    try {
      const loaded = await getAdapter().queryDocs('diary', {
        where: [{ field: 'workspaceId', op: '==', value: activeWorkspaceId }],
        orderBy: [{ field: 'createdAt', direction: 'desc' }]
      });
      set({ diary: loaded });
    } catch (e) {
      console.error("Error loading diary:", e);
    }
  },

  loadDemands: async () => {
    const { user, activeWorkspaceId } = get();
    if (!user || !activeWorkspaceId) return;
    try {
      const loaded = await getAdapter().queryDocs('demands', {
        where: [{ field: 'workspaceId', op: '==', value: activeWorkspaceId }]
      });
      set({ demands: loaded });
    } catch (e) {
      console.error("Error loading demands:", e);
    }
  },

  loadReportsData: async () => {
    const { user, activeWorkspaceId } = get();
    if (!user || !activeWorkspaceId) return;
    try {
      const adapter = getAdapter();
      const employees = await adapter.queryDocs('employees', {
        where: [{ field: 'workspaceId', op: '==', value: activeWorkspaceId }]
      });
      const bonds = await adapter.queryDocs('bonds', {
        where: [{ field: 'workspaceId', op: '==', value: activeWorkspaceId }]
      });
      const revenue = await adapter.queryDocs('revenue', {
        where: [{ field: 'workspaceId', op: '==', value: activeWorkspaceId }]
      });

      set({ employees, bonds, revenue } as any);
    } catch (e) {
      console.error("Error loading reports data:", e);
    }
  },

  loadInbox: async () => {
    const { user } = get();
    if (!user) return;
    try {
      const loaded = await getAdapter().queryDocs('inbox', {
        orderBy: [{ field: 'createdAt', direction: 'desc' }],
        limit: 100
      });
      set({ inbox: loaded });
    } catch (e) {
      console.error("Error loading inbox:", e);
    }
  },

  loadHomeData: async () => {
    const { user, activeWorkspaceId } = get();
    if (!user) return;
    try {
      const adapter = getAdapter();
      
      const lettersOptions: any = {
        orderBy: [{ field: 'createdAt', direction: 'desc' }],
        limit: 10
      };
      if (activeWorkspaceId) {
        lettersOptions.where = [{ field: 'workspaceId', op: '==', value: activeWorkspaceId }];
      }
      const letters = await adapter.queryDocs('letters', lettersOptions);

      const casesOptions: any = {
        orderBy: [{ field: 'createdAt', direction: 'desc' }],
        limit: 10
      };
      if (activeWorkspaceId) {
        casesOptions.where = [{ field: 'workspaceId', op: '==', value: activeWorkspaceId }];
      }
      const cases = await adapter.queryDocs('cases', casesOptions);

      const demandsOptions: any = { limit: 10 };
      if (activeWorkspaceId) {
        demandsOptions.where = [{ field: 'workspaceId', op: '==', value: activeWorkspaceId }];
      }
      const demands = await adapter.queryDocs('demands', demandsOptions);

      const diaryOptions: any = { limit: 10 };
      if (activeWorkspaceId) {
        diaryOptions.where = [{ field: 'workspaceId', op: '==', value: activeWorkspaceId }];
      }
      const diary = await adapter.queryDocs('diary', diaryOptions);

      set({ homePreview: { letters, cases, demands, diary } });
    } catch (e) {
      console.error("Error loading home data:", e);
    }
  }
}));
