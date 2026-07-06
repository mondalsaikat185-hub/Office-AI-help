export type FieldType = 'text' | 'textarea' | 'date' | 'currency' | 'select';

export interface WizardField {
  id: string;
  label: string;
  labelBn: string;        // Bengali label
  type: FieldType;
  required: boolean;
  placeholder?: string;
  options?: string[];     // For select type
  hint?: string;          // Brief helper text
}

export interface WizardGroup {
  groupId: string;
  groupTitle: string;
  groupTitleBn: string;
  fields: WizardField[];
}

export interface WizardConfig {
  templateId: string;
  groups: WizardGroup[];
}

export const APPLICANT_GROUP: WizardGroup = {
  groupId: "applicant",
  groupTitle: "Applicant Details",
  groupTitleBn: "আবেদনকারীর তথ্য",
  fields: [
    { id: "importerName", label: "Importer / Noticee Name", labelBn: "আমদানিকারকের নাম", type: "text", required: true, placeholder: "M/s ABC Impex Pvt Ltd" },
    { id: "iec", label: "IEC Code / GSTIN", labelBn: "IEC কোড / GSTIN", type: "text", required: true, placeholder: "e.g. 0512345678 / 21AAAAA0000A1Z1" },
    { id: "importerAddress", label: "Address", labelBn: "ঠিকানা", type: "textarea", required: false, placeholder: "Full address of the importer / noticee" }
  ]
};

export const AI_INSTRUCTIONS_GROUP: WizardGroup = {
  groupId: "ai_instructions",
  groupTitle: "Additional Instructions for AI",
  groupTitleBn: "AI-কে অতিরিক্ত নির্দেশনা",
  fields: [
    { id: "extraIns", label: "Special Instructions (Optional)", labelBn: "विशेष নির্দেশনা (ঐচ্ছিক)", type: "textarea", required: false, placeholder: "e.g. Use strong rejection language. Emphasize unjust enrichment.", hint: "AI এই নির্দেশনা অনুযায়ী letter তৈরি করবে" }
  ]
};
