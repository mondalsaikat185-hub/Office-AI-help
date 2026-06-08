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

const APPLICANT_GROUP: WizardGroup = {
  groupId: "applicant",
  groupTitle: "Applicant Details",
  groupTitleBn: "আবেদনকারীর তথ্য",
  fields: [
    { id: "importerName", label: "Importer / Noticee Name", labelBn: "আমদানিকারকের নাম", type: "text", required: true, placeholder: "M/s ABC Impex Pvt Ltd" },
    { id: "iec", label: "IEC Code / GSTIN", labelBn: "IEC কোড / GSTIN", type: "text", required: true, placeholder: "e.g. 0512345678 / 21AAAAA0000A1Z1" },
    { id: "importerAddress", label: "Address", labelBn: "ঠিকানা", type: "textarea", required: false, placeholder: "Full address of the importer / noticee" }
  ]
};

const AI_INSTRUCTIONS_GROUP: WizardGroup = {
  groupId: "ai_instructions",
  groupTitle: "Additional Instructions for AI",
  groupTitleBn: "AI-কে অতিরিক্ত নির্দেশনা",
  fields: [
    { id: "extraIns", label: "Special Instructions (Optional)", labelBn: "विशेष নির্দেশনা (ঐচ্ছিক)", type: "textarea", required: false, placeholder: "e.g. Use strong rejection language. Emphasize unjust enrichment.", hint: "AI এই নির্দেশনা অনুযায়ী letter তৈরি করবে" }
  ]
};

export const WIZARD_CONFIGS: WizardConfig[] = [
  {
    templateId: "cus_22",
    groups: [
      APPLICANT_GROUP,
      {
        groupId: "case_details",
        groupTitle: "Case Details",
        groupTitleBn: "মামলার তথ্য",
        fields: [
          { id: "arnNo", label: "ARN Number", labelBn: "ARN নম্বর", type: "text", required: true, placeholder: "AD0506240001234" },
          { id: "arnDate", label: "ARN Date", labelBn: "ARN তারিখ", type: "date", required: true },
          { id: "boeNo", label: "Bill of Entry Number", labelBn: "Bill of Entry নম্বর", type: "text", required: true, placeholder: "e.g. 5463728" },
          { id: "boeDate", label: "BoE Date", labelBn: "BoE তারিখ", type: "date", required: true },
          { id: "amount", label: "Claim Amount (Rs.)", labelBn: "দাবিকৃত অর্থ (টাকা)", type: "currency", required: true, placeholder: "1,25,000", hint: "Late presentation charges amount claimed for refund" },
          { id: "goods", label: "Description of Goods", labelBn: "পণ্যের বিবরণ", type: "text", required: false, placeholder: "Coal, Iron Ore, Machinery parts..." }
        ]
      },
      {
        groupId: "scn_details",
        groupTitle: "SCN & Hearing Details",
        groupTitleBn: "SCN ও Hearing তথ্য",
        fields: [
          { id: "scnDate", label: "SCN Date", labelBn: "SCN তারিখ", type: "date", required: false },
          { id: "replyDate", label: "Reply Date", labelBn: "Reply তারিখ", type: "date", required: false },
          { id: "hearingDate", label: "Personal Hearing Date", labelBn: "Personal Hearing তারিখ", type: "date", required: false }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "cus_21",
    groups: [
      APPLICANT_GROUP,
      {
        groupId: "case_details",
        groupTitle: "Case Details",
        groupTitleBn: "মামলার তথ্য",
        fields: [
          { id: "arnNo", label: "ARN Number", labelBn: "ARN নম্বর", type: "text", required: true, placeholder: "AD0506240001234" },
          { id: "arnDate", label: "ARN Date", labelBn: "ARN তারিখ", type: "date", required: true },
          { id: "boeNo", label: "Bill of Entry Number", labelBn: "Bill of Entry নম্বর", type: "text", required: true, placeholder: "e.g. 5463728" },
          { id: "boeDate", label: "BoE Date", labelBn: "BoE তারিখ", type: "date", required: true },
          { id: "amount", label: "Claim Amount (Rs.)", labelBn: "দাবিকৃত অর্থ (টাকা)", type: "currency", required: true, placeholder: "1,25,000" },
          { id: "goods", label: "Description of Goods", labelBn: "পণ্যের বিবরণ", type: "text", required: false, placeholder: "Coal, Iron Ore, Machinery parts..." }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "cus_23",
    groups: [
      {
        groupId: "applicant",
        groupTitle: "Applicant Details",
        groupTitleBn: "আবেদনকারীর তথ্য",
        fields: [
          { id: "importerName", label: "Importer / Noticee Name", labelBn: "আমদানিকারকের নাম", type: "text", required: true, placeholder: "M/s ABC Impex Pvt Ltd" },
          { id: "iec", label: "IEC Code / GSTIN", labelBn: "IEC কোড / GSTIN", type: "text", required: true, placeholder: "e.g. 0512345678 / 21AAAAA0000A1Z1" }
        ]
      },
      {
        groupId: "hearing_details",
        groupTitle: "Hearing Details",
        groupTitleBn: "Hearing তথ্যাবলী",
        fields: [
          { id: "scnNo", label: "SCN Number", labelBn: "SCN নম্বর", type: "text", required: true, placeholder: "e.g. SCN-102/2026" },
          { id: "scnDate", label: "SCN Date", labelBn: "SCN তারিখ", type: "date", required: true },
          { id: "hearingDate", label: "Hearing Date", labelBn: "Hearing তারিখ", type: "date", required: true },
          { id: "hearingTime", label: "Hearing Time", labelBn: "Hearing সময়", type: "text", required: true, placeholder: "e.g. 11:00 AM" }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "cus_24",
    groups: [
      {
        groupId: "applicant",
        groupTitle: "Applicant Details",
        groupTitleBn: "আবেদনকারীর তথ্য",
        fields: [
          { id: "importerName", label: "Importer / Noticee Name", labelBn: "আমদানিকারকের নাম", type: "text", required: true, placeholder: "M/s ABC Impex Pvt Ltd" },
          { id: "iec", label: "IEC Code / GSTIN", labelBn: "IEC কোড / GSTIN", type: "text", required: true, placeholder: "e.g. 0512345678 / 21AAAAA0000A1Z1" }
        ]
      },
      {
        groupId: "refund_details",
        groupTitle: "Refund Details",
        groupTitleBn: "Refund তথ্য",
        fields: [
          { id: "arnNo", label: "ARN Number", labelBn: "ARN নম্বর", type: "text", required: true, placeholder: "AD0506240001234" },
          { id: "arnDate", label: "ARN Date", labelBn: "ARN তারিখ", type: "date", required: true },
          { id: "amount", label: "Sanctioned Amount (Rs.)", labelBn: "মঞ্জুরীকৃত অর্থ (টাকা)", type: "currency", required: true, hint: "Amount being sanctioned for refund" },
          { id: "sanctionReason", label: "Reason for Refund", labelBn: "Refund-এর কারণ", type: "select", required: true, options: ["Excess duty paid", "Fine paid under Section 125", "Late presentation charges", "Other"] }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "cus_25",
    groups: [
      {
        groupId: "applicant",
        groupTitle: "Applicant Details",
        groupTitleBn: "আবেদনকারীর তথ্য",
        fields: [
          { id: "importerName", label: "Importer / Noticee Name", labelBn: "আমদানিকারকের নাম", type: "text", required: true, placeholder: "M/s ABC Impex Pvt Ltd" },
          { id: "iec", label: "IEC Code / GSTIN", labelBn: "IEC কোড / GSTIN", type: "text", required: true, placeholder: "e.g. 0512345678 / 21AAAAA0000A1Z1" }
        ]
      },
      {
        groupId: "cargo_details",
        groupTitle: "Cargo Details",
        groupTitleBn: "পণ্যের তথ্য",
        fields: [
          { id: "boeNo", label: "Bill of Entry Number", labelBn: "Bill of Entry নম্বর", type: "text", required: true },
          { id: "boeDate", label: "BoE Date", labelBn: "BoE তারিখ", type: "date", required: true },
          { id: "goods", label: "Description of Goods", labelBn: "পণ্যের বিবরণ", type: "text", required: true, placeholder: "e.g. Coal, Iron Ore, Machinery parts..." },
          { id: "excessQty", label: "Excess Quantity (MTS)", labelBn: "অতিরিক্ত পরিমাণ", type: "text", required: true, placeholder: "e.g. 52.5 MTS" },
          { id: "surveyDate", label: "Survey Date", labelBn: "জরিপের তারিখ", type: "date", required: false },
          { id: "surveyTime", label: "Survey Time", labelBn: "জরিপের সময়", type: "text", required: false, placeholder: "e.g. 10:00 AM" }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "__default__",
    groups: [
      {
        groupId: "basic",
        groupTitle: "Basic Details",
        groupTitleBn: "মূল তথ্য",
        fields: [
          { id: "recipientName", label: "Recipient / Noticee Name", labelBn: "প্রাপকের নাম", type: "text", required: false, placeholder: "e.g. M/s ABC Impex Pvt Ltd" },
          { id: "refNo", label: "Reference Number", labelBn: "রেফারেন্স নম্বর", type: "text", required: false, placeholder: "e.g. SCN No. or File No." },
          { id: "subject", label: "Subject", labelBn: "বিষয়", type: "text", required: false, placeholder: "Brief subject of the correspondence" }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  }
];
