export interface SignatureBlock {
  id: string;
  name: string;
  designation: string;
  section: string;
  active: boolean;
}

export interface AppFile {
  id: string;
  name: string;
  fileNumber: string;
  defaultSignatureId?: string | null;
  notes?: string;
  createdAt: number;
  _noteCount?: number;
}

export interface AppDirectory {
  id: string;
  name: string;
  parentId?: string; // Optional parent directory id
  filePrefix: string;
  defaultSignatureId?: string | null;
  files: AppFile[];
}

export interface Letterhead {
  l1: string;
  l2: string;
  l3: string;
  l4: string;
  l5: string;
  l6: string;
  logo1?: string;
  logo2?: string;
  logo3?: string;
  s1?: number; // sizes
  s2?: number;
  s3?: number;
  s4?: number;
  s5?: number;
  s6?: number;
  color?: string; // e.g. #1A3A8A
}

export interface Workspace {
  id: string;
  name: string;
  office_en: string;
  office_hi: string;
  address: string;
  phone: string;
  email: string;
  logo: string; // base64
  letterhead?: Letterhead;
  createdAt: number;
  signatures: SignatureBlock[];
  directories: AppDirectory[];
}

export interface ApiKey {
  key: string;
  label: string;
  added: number;
  usage: {
    date: string;
    tokens: number;
  };
}

export interface AddressBookEntry {
  id: string;
  name: string;
  desig: string;
  office: string;
  address: string;
  salutation: string;
}

export interface Phrase {
  id: string;
  category: string;
  text: string;
}

export interface Template {
  id: string;
  name: string;
  category?: 'Leave & Service' | 'GPF' | 'GST' | 'Customs' | 'General' | 'Custom';
  subject: string;
  opening: string;
  closing: string;
  copyTo?: string[];
}

export interface Letter {
  id: string;
  workspaceId: string;
  workspaceName: string;
  directoryId: string;
  directoryName: string;
  fileId: string;
  fileName: string;
  fileNumber: string;
  subject: string;
  mode: 'ai' | 'format' | 'note' | 'order' | 'legal';
  body: string;
  bodyHtml: string;
  signatureId: string;
  signatureName: string;
  signatureDesig: string;
  confidentiality: 'routine' | 'confidential' | 'secret';
  recipient: string;
  copyTo: string[];
  enclosures: string;
  salutation: string;
  createdAt: number;
}

export interface InboxItem {
  id: string;
  photo: string; // base64
  note: string;
  remindOn: string;
  workspaceId: string;
  status: 'pending' | 'done';
  createdAt: number;
}

export interface UserProfile {
  displayName?: string;
  email?: string;
  setupAt?: number;
}

export interface DiaryItem {
  id: string;
  date: string; // YYYY-MM-DD
  title: string;
  description: string;
  type: 'hearing' | 'deadline' | 'meeting' | 'general';
  isCompleted: boolean;
  workspaceId: string;
  createdAt: number;
}

export interface EmployeeRecord {
  id: string;
  name: string;
  designation: string;
  phone: string;
  dob: string;
  doj: string;
  dor: string;
  gpfNo: string;
  postingStation: string;
  status: 'active' | 'retired' | 'transferred';
  workspaceId: string;
}

export interface BondRecord {
  id: string;
  type: string;
  party: string;
  amount: string;
  expiryDate: string;
  status: string;
  workspaceId: string;
}

export interface RevenueRecord {
  id: string;
  month: string;
  totalRevenue: string;
  customDuty: string;
  cgst: string;
  sgst: string;
  workspaceId: string;
}

export interface AppState {
  profile: UserProfile | null;
  workspaces: Workspace[];
  apiKeys: ApiKey[];
  selectedModel: string;
  mistralKey: string;
  tokenBudget: number;
  addressBook: AddressBookEntry[];
  phrases: Phrase[];
  templates: Template[];
  appPasswordHash: string;
  tgBotToken: string;
  tgChatId: string;
  diary?: DiaryItem[];
  demands?: DemandItem[];
  employees?: EmployeeRecord[];
  bonds?: BondRecord[];
  revenue?: RevenueRecord[];
}

export interface DemandItem {
  id: string;
  date: string;
  party: string;
  partyName?: string;
  oio: string;
  oioNo?: string;
  oioDate?: string;
  tax?: string;
  penalty?: string;
  interest?: string;
  amount: number;
  recovered: number;
  recoveredAmount?: number;
  status: string;
  workspaceId?: string;
}

export interface CaseItem {
  id: string;
  caseNo: string;
  caseType: 'SCN' | 'OIO' | 'Appeal' | 'Prosecution' | 'Other';
  party: string;
  gstin?: string;
  taxAmount: number;
  penaltyAmount: number;
  interestAmount: number;
  totalAmount: number;
  oioNo?: string;
  oioDate?: string;
  nextHearing: string;
  stage: 'SCN Issued' | 'Personal Hearing' | 'OIO Passed' | 'Appeal Filed' | 'Appeal Pending' | 'Closed' | 'Prosecution';
  adjudicatingAuthority?: string;
  remarks?: string;
  workspaceId: string;
  createdAt: number;
}

export interface DraftState {
  subject?: string;
  recipient?: string;
  salutation?: string;
  body?: string;
  copyTo?: string | string[];
  enclosures?: string;
  mode?: string;
  signatureId?: string;
  confidentiality?: string;
  details?: string;
  refText?: string;
  extraIns?: string;
  output?: string;
  din?: string;
  includeDin?: boolean;
  styleRefText?: string;
  styleImageBase64?: string;
  // Wizard fields
  wizardTemplateId?: string;
  wizardValues?: Record<string, string>;
  wizardSelectedRules?: string[];
  wizardSelectedTone?: 'Formal' | 'Strong' | 'Moderate';
  wizardSelectedLanguage?: string;
  includeLetterhead?: boolean;
  legalDocType?: string;
  arnNo?: string;
  arnDate?: string;
  boeNo?: string;
  boeDate?: string;
  importerName?: string;
  iec?: string;
  amount?: string;
  goods?: string;
  scnDate?: string;
}

