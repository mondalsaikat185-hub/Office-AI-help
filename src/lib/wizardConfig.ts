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
  // ── Phase 1: GST Official Notices ──────────────────────────────
  {
    templateId: "gst_44",
    groups: [
      {
        groupId: "noticee",
        groupTitle: "Taxpayer Details",
        groupTitleBn: "করদাতার তথ্য",
        fields: [
          { id: "taxpayerName", label: "Taxpayer Name (M/s)", labelBn: "করদাতার নাম", type: "text", required: true, placeholder: "e.g. M/s ABC Trading Pvt Ltd" },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true, placeholder: "e.g. 21XXXXX1234Z5" },
          { id: "address", label: "Registered Address", labelBn: "নিবন্ধিত ঠিকানা", type: "textarea", required: true, placeholder: "Full address..." }
        ]
      },
      {
        groupId: "demand",
        groupTitle: "Demand Details",
        groupTitleBn: "দাবির বিবরণ",
        fields: [
          { id: "taxPeriod", label: "Tax Period", labelBn: "কর সময়কাল", type: "text", required: true, placeholder: "e.g. April 2022 to March 2023 (FY 2022-23)" },
          { id: "gstr1TaxableValue", label: "Taxable Value as per GSTR-1 (Rs.)", labelBn: "জিএসটিআর-১ অনুযায়ী করযোগ্য মূল্য", type: "currency", required: true, placeholder: "e.g. 5000000" },
          { id: "gstr3bTaxableValue", label: "Taxable Value as per GSTR-3B (Rs.)", labelBn: "জিএসটিআর-৩বি অনুযায়ী করযোগ্য মূল্য", type: "currency", required: true, placeholder: "e.g. 4500000" },
          { id: "cgstShort", label: "CGST Short-paid (Rs.)", labelBn: "সিজিএসটি কম পরিশোধ", type: "currency", required: false, placeholder: "e.g. 25000" },
          { id: "sgstShort", label: "SGST Short-paid (Rs.)", labelBn: "এসজিএসটি কম পরিশোধ", type: "currency", required: false, placeholder: "e.g. 25000" },
          { id: "igstShort", label: "IGST Short-paid (Rs.)", labelBn: "আইজিএসটি কম পরিশোধ", type: "currency", required: false, placeholder: "e.g. 50000" },
          { id: "totalTax", label: "Total Tax Proposed (Rs.)", labelBn: "মোট প্রস্তাবিত কর", type: "currency", required: true, placeholder: "e.g. 50000" },
          { id: "interest", label: "Interest u/s 50 (Rs.)", labelBn: "সুদ (ধারা ৫০)", type: "currency", required: false, placeholder: "e.g. 9000" },
          { id: "penalty", label: "Penalty @ 10% (Rs.)", labelBn: "জরিমানা ১০%", type: "currency", required: false, placeholder: "e.g. 5000" },
          { id: "grandTotal", label: "Grand Total Demand (Rs.)", labelBn: "মোট দাবি", type: "currency", required: true, placeholder: "e.g. 64000" }
        ]
      },
      {
        groupId: "hearing",
        groupTitle: "Hearing Details",
        groupTitleBn: "শুনানির তথ্য",
        fields: [
          { id: "hearingDate", label: "Personal Hearing Date", labelBn: "ব্যক্তিগত শুনানির তারিখ", type: "date", required: true },
          { id: "hearingTime", label: "Hearing Time", labelBn: "শুনানির সময়", type: "text", required: false, placeholder: "e.g. 11:00 AM" },
          { id: "officerName", label: "Officer Name", labelBn: "কর্মকর্তার নাম", type: "text", required: false, placeholder: "e.g. Shri Ramesh Kumar" },
          { id: "officerDesignation", label: "Designation", labelBn: "পদবী", type: "text", required: false, placeholder: "e.g. Superintendent, CGST Division-II" },
          { id: "din", label: "DIN (Document Identification No.)", labelBn: "ডকুমেন্ট আইডেন্টিফিকেশন নম্বর", type: "text", required: false, placeholder: "e.g. 20240612XXXXXXXXXX" }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_45",
    groups: [
      {
        groupId: "noticee",
        groupTitle: "Taxpayer Details",
        groupTitleBn: "করদাতার তথ্য",
        fields: [
          { id: "taxpayerName", label: "Taxpayer Name (M/s)", labelBn: "করদাতার নাম", type: "text", required: true, placeholder: "e.g. M/s XYZ Industries" },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true, placeholder: "e.g. 21XXXXX1234Z5" },
          { id: "address", label: "Registered Address", labelBn: "নিবন্ধিত ঠিকানা", type: "textarea", required: false, placeholder: "Full address..." }
        ]
      },
      {
        groupId: "itcDemand",
        groupTitle: "Excess ITC Details",
        groupTitleBn: "অতিরিক্ত আইটিসি বিবরণ",
        fields: [
          { id: "taxPeriod", label: "Tax Period", labelBn: "কর সময়কাল", type: "text", required: true, placeholder: "e.g. FY 2022-23" },
          { id: "itcAsPerGstr2b", label: "ITC as per GSTR-2B (Rs.)", labelBn: "জিএসটিআর-২বি অনুযায়ী আইটিসি", type: "currency", required: true, placeholder: "e.g. 200000" },
          { id: "itcClaimedGstr3b", label: "ITC Claimed in GSTR-3B (Rs.)", labelBn: "জিএসটিআর-৩বি-তে দাবিকৃত আইটিসি", type: "currency", required: true, placeholder: "e.g. 250000" },
          { id: "excessItc", label: "Excess ITC Availed (Rs.)", labelBn: "অতিরিক্ত আইটিসি", type: "currency", required: true, placeholder: "e.g. 50000" },
          { id: "interest", label: "Interest u/s 50(3) @ 24% (Rs.)", labelBn: "সুদ ২৪%", type: "currency", required: false, placeholder: "e.g. 12000" },
          { id: "penalty", label: "Penalty @ 10% (Rs.)", labelBn: "জরিমানা", type: "currency", required: false, placeholder: "e.g. 5000" },
          { id: "grandTotal", label: "Grand Total (Rs.)", labelBn: "মোট দাবি", type: "currency", required: true, placeholder: "e.g. 67000" }
        ]
      },
      {
        groupId: "hearing",
        groupTitle: "Hearing & Officer Details",
        groupTitleBn: "শুনানি ও কর্মকর্তার তথ্য",
        fields: [
          { id: "hearingDate", label: "Hearing Date", labelBn: "শুনানির তারিখ", type: "date", required: false },
          { id: "officerName", label: "Officer Name & Designation", labelBn: "কর্মকর্তার নাম ও পদবী", type: "text", required: false, placeholder: "e.g. Shri Anand Sharma, AC, CGST Div-I" },
          { id: "din", label: "DIN", labelBn: "ডিআইএন", type: "text", required: false }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_46",
    groups: [
      {
        groupId: "noticee",
        groupTitle: "Taxpayer Details",
        groupTitleBn: "করদাতার তথ্য",
        fields: [
          { id: "taxpayerName", label: "Taxpayer Name", labelBn: "করদাতার নাম", type: "text", required: true },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true },
          { id: "address", label: "Address", labelBn: "ঠিকানা", type: "textarea", required: false }
        ]
      },
      {
        groupId: "rcmDetails",
        groupTitle: "RCM Details",
        groupTitleBn: "আরসিএম বিবরণ",
        fields: [
          { id: "taxPeriod", label: "Tax Period", labelBn: "কর সময়কাল", type: "text", required: true, placeholder: "e.g. FY 2022-23" },
          { id: "serviceDescription", label: "Nature of RCM Supply", labelBn: "আরসিএম সরবরাহের প্রকৃতি", type: "text", required: true, placeholder: "e.g. Goods Transport Agency (GTA) services" },
          { id: "notificationNo", label: "Applicable Notification No.", labelBn: "প্রযোজ্য বিজ্ঞপ্তি নম্বর", type: "text", required: false, placeholder: "e.g. 13/2017-CT(Rate)" },
          { id: "supplyValue", label: "Value of RCM Supply (Rs.)", labelBn: "আরসিএম সরবরাহের মূল্য", type: "currency", required: true },
          { id: "totalTax", label: "RCM Tax Not Paid (Rs.)", labelBn: "আরসিএম কর অপরিশোধিত", type: "currency", required: true },
          { id: "interest", label: "Interest u/s 50 (Rs.)", labelBn: "সুদ", type: "currency", required: false },
          { id: "penalty", label: "Penalty (Rs.)", labelBn: "জরিমানা", type: "currency", required: false },
          { id: "grandTotal", label: "Grand Total (Rs.)", labelBn: "মোট", type: "currency", required: true }
        ]
      },
      {
        groupId: "hearing",
        groupTitle: "Hearing & Officer",
        groupTitleBn: "শুনানি ও কর্মকর্তা",
        fields: [
          { id: "hearingDate", label: "Hearing Date", labelBn: "শুনানির তারিখ", type: "date", required: false },
          { id: "officerName", label: "Officer Name & Designation", labelBn: "কর্মকর্তা", type: "text", required: false },
          { id: "din", label: "DIN", labelBn: "ডিআইএন", type: "text", required: false }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_47",
    groups: [
      {
        groupId: "noticee",
        groupTitle: "Taxpayer Details",
        groupTitleBn: "করদাতার তথ্য",
        fields: [
          { id: "taxpayerName", label: "Taxpayer Name", labelBn: "করদাতার নাম", type: "text", required: true },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true },
          { id: "address", label: "Address", labelBn: "ঠিকানা", type: "textarea", required: false }
        ]
      },
      {
        groupId: "taxCollected",
        groupTitle: "Tax Collection Details",
        groupTitleBn: "সংগৃহীত কর বিবরণ",
        fields: [
          { id: "taxPeriod", label: "Tax Period", labelBn: "সময়কাল", type: "text", required: true },
          { id: "collectedAmount", label: "Tax Collected from Customers (Rs.)", labelBn: "গ্রাহকদের কাছ থেকে সংগৃহীত কর", type: "currency", required: true },
          { id: "depositedAmount", label: "Tax Deposited in GSTR-3B (Rs.)", labelBn: "জমা করা কর", type: "currency", required: true },
          { id: "shortfall", label: "Shortfall / Not Deposited (Rs.)", labelBn: "ঘাটতি", type: "currency", required: true },
          { id: "interest", label: "Interest u/s 50 (Rs.)", labelBn: "সুদ", type: "currency", required: false },
          { id: "penalty", label: "Penalty u/s 76(2) (Rs.)", labelBn: "জরিমানা", type: "currency", required: false },
          { id: "grandTotal", label: "Grand Total (Rs.)", labelBn: "মোট", type: "currency", required: true }
        ]
      },
      {
        groupId: "hearing",
        groupTitle: "Hearing & Officer",
        groupTitleBn: "শুনানি ও কর্মকর্তা",
        fields: [
          { id: "hearingDate", label: "Hearing Date", labelBn: "শুনানির তারিখ", type: "date", required: false },
          { id: "officerName", label: "Officer Name & Designation", labelBn: "কর্মকর্তা", type: "text", required: false },
          { id: "din", label: "DIN", labelBn: "ডিআইএন", type: "text", required: false }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_48",
    groups: [
      {
        groupId: "noticee",
        groupTitle: "Taxpayer / Noticee Details",
        groupTitleBn: "নোটিশি তথ্য",
        fields: [
          { id: "taxpayerName", label: "Noticee Name (M/s / Shri)", labelBn: "নোটিশির নাম", type: "text", required: true },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true },
          { id: "address", label: "Address", labelBn: "ঠিকানা", type: "textarea", required: false }
        ]
      },
      {
        groupId: "fraudDetails",
        groupTitle: "Fraud / Evasion Details",
        groupTitleBn: "জালিয়াতি / ফাঁকির বিবরণ",
        fields: [
          { id: "taxPeriod", label: "Tax Period (Extended 5 Years)", labelBn: "কর সময়কাল (৫ বছর)", type: "text", required: true, placeholder: "e.g. FY 2018-19 to 2022-23" },
          { id: "natureOfFraud", label: "Nature of Fraud / Evasion", labelBn: "জালিয়াতির প্রকৃতি", type: "textarea", required: true, placeholder: "Describe: fake invoices / suppression / fake ITC..." },
          { id: "actualTurnover", label: "Actual Turnover (Rs.)", labelBn: "প্রকৃত টার্নওভার", type: "currency", required: false },
          { id: "declaredTurnover", label: "Declared Turnover (Rs.)", labelBn: "ঘোষিত টার্নওভার", type: "currency", required: false },
          { id: "fakeItc", label: "Fake ITC Availed (Rs.)", labelBn: "ভুয়া আইটিসি", type: "currency", required: false },
          { id: "totalTax", label: "Total Tax Evaded (Rs.)", labelBn: "মোট ফাঁকি দেওয়া কর", type: "currency", required: true },
          { id: "interest", label: "Interest u/s 50 (Rs.)", labelBn: "সুদ", type: "currency", required: false },
          { id: "penalty", label: "Penalty @ 100% u/s 74 (Rs.)", labelBn: "জরিমানা ১০০%", type: "currency", required: false },
          { id: "grandTotal", label: "Grand Total (Rs.)", labelBn: "মোট দাবি", type: "currency", required: true }
        ]
      },
      {
        groupId: "hearing",
        groupTitle: "Hearing & Officer",
        groupTitleBn: "শুনানি ও কর্মকর্তা",
        fields: [
          { id: "hearingDate", label: "Hearing Date", labelBn: "শুনানির তারিখ", type: "date", required: false },
          { id: "officerName", label: "Officer Name & Designation", labelBn: "কর্মকর্তা", type: "text", required: false },
          { id: "din", label: "DIN", labelBn: "ডিআইএন", type: "text", required: false }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_49",
    groups: [
      {
        groupId: "parties",
        groupTitle: "Case Details",
        groupTitleBn: "মামলার তথ্য",
        fields: [
          { id: "taxpayerName", label: "Taxpayer Name", labelBn: "করদাতার নাম", type: "text", required: true },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true },
          { id: "scnReference", label: "SCN No. / DIN", labelBn: "এসসিএন নম্বর/ডিআইএন", type: "text", required: true },
          { id: "scnDate", label: "SCN Date", labelBn: "এসসিএন তারিখ", type: "date", required: true },
          { id: "taxPeriod", label: "Tax Period", labelBn: "কর সময়কাল", type: "text", required: true },
          { id: "replyDate", label: "Date of Reply Filed", labelBn: "উত্তর দাখিলের তারিখ", type: "date", required: false },
          { id: "hearingDate", label: "Personal Hearing Date", labelBn: "শুনানির তারিখ", type: "date", required: false }
        ]
      },
      {
        groupId: "confirmedDemand",
        groupTitle: "Confirmed Demand",
        groupTitleBn: "নিশ্চিত দাবি",
        fields: [
          { id: "taxConfirmed", label: "Tax Confirmed (Rs.)", labelBn: "নিশ্চিত কর", type: "currency", required: true },
          { id: "interestConfirmed", label: "Interest Confirmed (Rs.)", labelBn: "নিশ্চিত সুদ", type: "currency", required: false },
          { id: "penaltyConfirmed", label: "Penalty Confirmed (Rs.)", labelBn: "নিশ্চিত জরিমানা", type: "currency", required: false },
          { id: "totalConfirmed", label: "Total Confirmed (Rs.)", labelBn: "মোট নিশ্চিত", type: "currency", required: true },
          { id: "groundsForConfirmation", label: "Key Grounds for Confirmation", labelBn: "নিশ্চিত করার ভিত্তি", type: "textarea", required: false, placeholder: "Briefly state why reply was rejected..." }
        ]
      },
      {
        groupId: "officer",
        groupTitle: "Officer Details",
        groupTitleBn: "কর্মকর্তার তথ্য",
        fields: [
          { id: "officerName", label: "Officer Name & Designation", labelBn: "কর্মকর্তা", type: "text", required: false },
          { id: "din", label: "DIN", labelBn: "ডিআইএন", type: "text", required: false }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_50",
    groups: [
      {
        groupId: "caseDetails",
        groupTitle: "Case Details",
        groupTitleBn: "মামলার তথ্য",
        fields: [
          { id: "taxpayerName", label: "Taxpayer Name", labelBn: "করদাতার নাম", type: "text", required: true },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true },
          { id: "scnReference", label: "SCN DIN / Reference", labelBn: "এসসিএন ডিআইএন", type: "text", required: true },
          { id: "scnDate", label: "SCN Date", labelBn: "এসসিএন তারিখ", type: "date", required: true },
          { id: "replyDate", label: "Reply Date", labelBn: "উত্তরের তারিখ", type: "date", required: false },
          { id: "proposedAmount", label: "Proposed Demand Amount (Rs.)", labelBn: "প্রস্তাবিত দাবি", type: "currency", required: false },
          { id: "groundsAccepted", label: "Grounds Accepted (for dropping)", labelBn: "গৃহীত কারণ", type: "textarea", required: true, placeholder: "Why is demand being dropped? e.g. Returns filed and reconciliation accepted..." },
          { id: "paidAmount", label: "Amount Paid (if any) (Rs.)", labelBn: "প্রদত্ত পরিমাণ", type: "currency", required: false }
        ]
      },
      {
        groupId: "officer",
        groupTitle: "Officer Details",
        groupTitleBn: "কর্মকর্তার তথ্য",
        fields: [
          { id: "officerName", label: "Officer Name & Designation", labelBn: "কর্মকর্তা", type: "text", required: false },
          { id: "din", label: "DIN", labelBn: "ডিআইএন", type: "text", required: false }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_51",
    groups: [
      {
        groupId: "caseDetails",
        groupTitle: "Section 74 — Fraud Case Details",
        groupTitleBn: "ধারা ৭৪ জালিয়াতির তথ্য",
        fields: [
          { id: "noticeeName", label: "Noticee Name", labelBn: "নোটিশির নাম", type: "text", required: true },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true },
          { id: "scnReference", label: "SCN DIN", labelBn: "এসসিএন ডিআইএন", type: "text", required: true },
          { id: "scnDate", label: "SCN Date", labelBn: "এসসিএন তারিখ", type: "date", required: true },
          { id: "taxPeriod", label: "Tax Period (5 Years)", labelBn: "কর সময়কাল", type: "text", required: true },
          { id: "fraudEvidence", label: "Fraud Evidence Summary", labelBn: "জালিয়াতির প্রমাণ সারসংক্ষেপ", type: "textarea", required: true, placeholder: "Key evidence establishing fraud..." }
        ]
      },
      {
        groupId: "confirmedDemand",
        groupTitle: "Confirmed Demand (Section 74)",
        groupTitleBn: "নিশ্চিত দাবি (ধারা ৭৪)",
        fields: [
          { id: "taxConfirmed", label: "Tax Confirmed (Rs.)", labelBn: "নিশ্চিত কর", type: "currency", required: true },
          { id: "interestConfirmed", label: "Interest (Rs.)", labelBn: "সুদ", type: "currency", required: false },
          { id: "penaltyConfirmed", label: "Penalty @ 100% (Rs.)", labelBn: "জরিমানা ১০০%", type: "currency", required: false },
          { id: "totalConfirmed", label: "Total Demand (Rs.)", labelBn: "মোট দাবি", type: "currency", required: true }
        ]
      },
      {
        groupId: "officer",
        groupTitle: "Officer Details",
        groupTitleBn: "কর্মকর্তার তথ্য",
        fields: [
          { id: "officerName", label: "Officer Name & Designation", labelBn: "কর্মকর্তা", type: "text", required: false },
          { id: "din", label: "DIN", labelBn: "ডিআইএন", type: "text", required: false }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_52",
    groups: [
      {
        groupId: "caseDetails",
        groupTitle: "Ex-Parte Case Details",
        groupTitleBn: "একতরফা মামলার তথ্য",
        fields: [
          { id: "taxpayerName", label: "Taxpayer Name", labelBn: "করদাতার নাম", type: "text", required: true },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true },
          { id: "scnReference", label: "SCN DIN / Reference", labelBn: "এসসিএন রেফারেন্স", type: "text", required: true },
          { id: "scnDate", label: "SCN Date", labelBn: "এসসিএন তারিখ", type: "date", required: true },
          { id: "serviceDate", label: "Date of Service", labelBn: "নোটিশ প্রদানের তারিখ", type: "date", required: false },
          { id: "hearing1Date", label: "Hearing Date 1 (Fixed)", labelBn: "প্রথম শুনানির তারিখ", type: "date", required: false },
          { id: "hearing2Date", label: "Hearing Date 2 (Reminder)", labelBn: "দ্বিতীয় শুনানির তারিখ", type: "date", required: false }
        ]
      },
      {
        groupId: "confirmedDemand",
        groupTitle: "Ex-Parte Demand",
        groupTitleBn: "একতরফা দাবি",
        fields: [
          { id: "taxAmount", label: "Tax (Rs.)", labelBn: "কর", type: "currency", required: true },
          { id: "interest", label: "Interest (Rs.)", labelBn: "সুদ", type: "currency", required: false },
          { id: "penalty", label: "Penalty (Rs.)", labelBn: "জরিমানা", type: "currency", required: false },
          { id: "total", label: "Total (Rs.)", labelBn: "মোট", type: "currency", required: true },
          { id: "basisOfDemand", label: "Basis of Ex-Parte Assessment", labelBn: "একতরফা মূল্যায়নের ভিত্তি", type: "textarea", required: false, placeholder: "GSTR data / portal records used..." }
        ]
      },
      {
        groupId: "officer",
        groupTitle: "Officer",
        groupTitleBn: "কর্মকর্তা",
        fields: [
          { id: "officerName", label: "Officer Name & Designation", labelBn: "কর্মকর্তা", type: "text", required: false },
          { id: "din", label: "DIN", labelBn: "ডিআইএন", type: "text", required: false }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_53",
    groups: [
      {
        groupId: "hearingDetails",
        groupTitle: "Personal Hearing Details",
        groupTitleBn: "ব্যক্তিগত শুনানির তথ্য",
        fields: [
          { id: "taxpayerName", label: "Taxpayer Name / Noticee", labelBn: "নোটিশির নাম", type: "text", required: true },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true },
          { id: "scnReference", label: "SCN No. / DIN", labelBn: "এসসিএন নম্বর", type: "text", required: true },
          { id: "scnDate", label: "SCN Date", labelBn: "এসসিএন তারিখ", type: "date", required: true },
          { id: "applicableSection", label: "SCN Under Section", labelBn: "প্রযোজ্য ধারা", type: "select", required: false,
            options: [
              "Section 73 (Normal Period)",
              "Section 74 (Fraud/Suppression)",
              "Section 74A (Finance Act 2024)",
              "Section 76 (Tax Collected Not Deposited)"
            ]
          },
          { id: "taxPeriod", label: "Tax Period", labelBn: "কর সময়কাল", type: "text", required: false },
          { id: "hearingDate", label: "Hearing Date", labelBn: "শুনানির তারিখ", type: "date", required: true },
          { id: "hearingTime", label: "Hearing Time", labelBn: "শুনানির সময়", type: "text", required: false, placeholder: "e.g. 11:00 AM" },
          { id: "hearingVenue", label: "Hearing Venue", labelBn: "শুনানির স্থান", type: "text", required: false, placeholder: "e.g. Office of the Superintendent, CGST Div-II, Bhubaneswar" },
          { id: "officerName", label: "Officer Name & Designation", labelBn: "কর্মকর্তা", type: "text", required: false }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_54",
    groups: [
      {
        groupId: "noticee",
        groupTitle: "Taxpayer Details",
        groupTitleBn: "করদাতার তথ্য",
        fields: [
          { id: "taxpayerName", label: "Taxpayer Name", labelBn: "করদাতার নাম", type: "text", required: true, placeholder: "e.g. M/s ABC Trading" },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true, placeholder: "e.g. 21XXXXX1234Z5" },
          { id: "address", label: "Address", labelBn: "ঠিকানা", type: "textarea", required: false }
        ]
      },
      {
        groupId: "nonFilingDetails",
        groupTitle: "Non-Filing Details",
        groupTitleBn: "রিটার্ন না দেওয়ার বিবরণ",
        fields: [
          { id: "pendingPeriods", label: "Pending Return Periods", labelBn: "বকেয়া রিটার্নের সময়কাল", type: "textarea", required: true, placeholder: "e.g. GSTR-3B for Apr-23, May-23, Jun-23..." },
          { id: "sec46NoticeDate", label: "Section 46 Notice Date", labelBn: "ধারা ৪৬ নোটিশের তারিখ", type: "date", required: false },
          { id: "lastFiledPeriod", label: "Last Filed Return Period", labelBn: "সর্বশেষ দাখিলকৃত রিটার্নের সময়কাল", type: "text", required: false },
          { id: "lastFiledTax", label: "Tax in Last Filed Return (Rs.)", labelBn: "সর্বশেষ রিটার্নে কর", type: "currency", required: false },
          { id: "assessedTurnover", label: "Assessed / Estimated Turnover (Rs.)", labelBn: "আনুমানিক টার্নওভার", type: "currency", required: true },
          { id: "totalTaxAssessed", label: "Total Tax Assessed (Rs.)", labelBn: "মোট আহরণকৃত কর", type: "currency", required: true },
          { id: "interest", label: "Interest (Rs.)", labelBn: "সুদ", type: "currency", required: false },
          { id: "penalty", label: "Penalty (Rs.)", labelBn: "জরিমানা", type: "currency", required: false },
          { id: "grandTotal", label: "Total Demand (Rs.)", labelBn: "মোট দাবি", type: "currency", required: true }
        ]
      },
      {
        groupId: "officer",
        groupTitle: "Officer Details",
        groupTitleBn: "কর্মকর্তার তথ্য",
        fields: [
          { id: "officerName", label: "Officer Name & Designation", labelBn: "কর্মকর্তা", type: "text", required: false },
          { id: "din", label: "DIN", labelBn: "ডিআইএন", type: "text", required: false }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_55",
    groups: [
      {
        groupId: "noticee",
        groupTitle: "Taxpayer Details",
        groupTitleBn: "করদাতার তথ্য",
        fields: [
          { id: "taxpayerName", label: "Taxpayer Name", labelBn: "করদাতার নাম", type: "text", required: true },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true },
          { id: "address", label: "Address", labelBn: "ঠিকানা", type: "textarea", required: false }
        ]
      },
      {
        groupId: "scrutinyDetails",
        groupTitle: "Scrutiny Discrepancies",
        groupTitleBn: "স্ক্রুটিনি অসঙ্গতি",
        fields: [
          { id: "taxPeriod", label: "Tax Period", labelBn: "কর সময়কাল", type: "text", required: true },
          { id: "gstr1Taxable", label: "Outward Supplies (GSTR-1) (Rs.)", labelBn: "জিএসটিআর-১ অনুযায়ী সরবরাহ", type: "currency", required: false },
          { id: "gstr3bTaxable", label: "Taxable Value (GSTR-3B) (Rs.)", labelBn: "জিএসটিআর-৩বি অনুযায়ী মূল্য", type: "currency", required: false },
          { id: "gstr2bItc", label: "ITC as per GSTR-2B (Rs.)", labelBn: "জিএসটিআর-২বি অনুযায়ী আইটিসি", type: "currency", required: false },
          { id: "gstr3bItc", label: "ITC Claimed in GSTR-3B (Rs.)", labelBn: "দাবিকৃত আইটিসি", type: "currency", required: false },
          { id: "otherDiscrepancy", label: "Other Discrepancy (describe)", labelBn: "অন্যান্য অসঙ্গতি", type: "textarea", required: false },
          { id: "totalDiscrepancy", label: "Total Discrepancy Amount (Rs.)", labelBn: "মোট অসঙ্গতির পরিমাণ", type: "currency", required: false },
          { id: "shortTax", label: "Estimated Short-Payment of Tax (Rs.)", labelBn: "আনুমানিক কম পরিশোধ", type: "currency", required: false }
        ]
      },
      {
        groupId: "officer",
        groupTitle: "Officer Details",
        groupTitleBn: "কর্মকর্তার তথ্য",
        fields: [
          { id: "officerName", label: "Officer Name & Designation", labelBn: "কর্মকর্তা", type: "text", required: false },
          { id: "din", label: "DIN", labelBn: "ডিআইএন", type: "text", required: false }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_56",
    groups: [
      {
        groupId: "taxpartyDetails",
        groupTitle: "Taxpayer & Bank Details",
        groupTitleBn: "করদাতা ও ব্যাংকের তথ্য",
        fields: [
          { id: "taxpayerName", label: "Taxpayer Name (M/s)", labelBn: "করদাতার নাম", type: "text", required: true, placeholder: "e.g. M/s ABC Trading Pvt Ltd" },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true, placeholder: "e.g. 21XXXXX1234Z5" },
          { id: "bankName", label: "Bank Name", labelBn: "ব্যাংকের নাম", type: "text", required: true, placeholder: "e.g. State Bank of India" },
          { id: "branchName", label: "Branch Name & Address", labelBn: "শাখার নাম ও ঠিকানা", type: "text", required: true, placeholder: "e.g. Main Branch, Station Road, Bhubaneswar" },
          { id: "accountNo", label: "Bank Account Number", labelBn: "ব্যাংক অ্যাকাউন্ট নম্বর", type: "text", required: true, placeholder: "e.g. 1234567890123" }
        ]
      },
      {
        groupId: "recoveryDetails",
        groupTitle: "Recovery Details",
        groupTitleBn: "রিকভারির বিবরণ",
        fields: [
          { id: "drc07Reference", label: "DRC-07 Order Reference / DIN", labelBn: "ডিআরসি-০৭ রেফারেন্স", type: "text", required: true, placeholder: "e.g. DIN 20240612XXXXXXXXXX" },
          { id: "drc07Date", label: "DRC-07 Order Date", labelBn: "ডিআরসি-০৭ তারিখ", type: "date", required: true },
          { id: "totalOutstanding", label: "Total Outstanding Demand (Rs.)", labelBn: "মোট বকেয়া দাবি", type: "currency", required: true, placeholder: "e.g. 150000" },
          { id: "alreadyPaid", label: "Amount Already Paid (Rs.)", labelBn: "ইতিমধ্যে প্রদত্ত", type: "currency", required: false, placeholder: "e.g. 0" },
          { id: "balanceOutstanding", label: "Balance Outstanding (Rs.)", labelBn: "বকেয়া ব্যালেন্স", type: "currency", required: true, placeholder: "e.g. 150000" }
        ]
      },
      {
        groupId: "officer",
        groupTitle: "Officer Details",
        groupTitleBn: "কর্মকর্তার তথ্য",
        fields: [
          { id: "officerName", label: "Officer Name & Designation", labelBn: "কর্মকর্তার নাম ও পদবী", type: "text", required: false, placeholder: "e.g. Shri Ramesh Kumar, Superintendent, CGST Div-II" },
          { id: "din", label: "DIN", labelBn: "ডিআইএন", type: "text", required: false, placeholder: "e.g. 20240612XXXXXXXXXX" }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_57",
    groups: [
      {
        groupId: "registrationDetails",
        groupTitle: "Registration Details",
        groupTitleBn: "নিবন্ধনের তথ্য",
        fields: [
          { id: "taxpayerName", label: "Taxpayer Name (M/s / Shri)", labelBn: "করদাতার নাম", type: "text", required: true, placeholder: "e.g. M/s XYZ Enterprises" },
          { id: "gstin", label: "GSTIN to be Cancelled", labelBn: "বাতিলযোগ্য জিএসটিএন", type: "text", required: true, placeholder: "e.g. 21XXXXX1234Z5" },
          { id: "address", label: "Registered Address", labelBn: "নিবন্ধিত ঠিকানা", type: "textarea", required: false, placeholder: "Full registered address..." }
        ]
      },
      {
        groupId: "cancellationGrounds",
        groupTitle: "Ground for Cancellation",
        groupTitleBn: "বাতিলের কারণ",
        fields: [
          { id: "groundType", label: "Primary Ground", labelBn: "মূল কারণ", type: "select", required: true,
            options: [
              "Non-filing of returns (6 consecutive months)",
              "Registration obtained by fraud / misrepresentation",
              "Business discontinued / wound up",
              "Business not commenced within stipulated time"
            ]
          },
          { id: "pendingReturns", label: "Pending Return Periods (list)", labelBn: "বকেয়া রিটার্নের সময়কাল", type: "textarea", required: false, placeholder: "e.g. GSTR-3B for Apr-2024, May-2024, Jun-2024, Jul-2024, Aug-2024, Sep-2024" },
          { id: "additionalGrounds", label: "Additional Grounds (if any)", labelBn: "অতিরিক্ত কারণ", type: "textarea", required: false, placeholder: "e.g. Business premises found non-existent on physical verification on [date]..." },
          { id: "hearingDate", label: "Personal Hearing Date", labelBn: "শুনানির তারিখ", type: "date", required: false },
          { id: "suspensionDate", label: "Suspension Effective From (Rule 21A)", labelBn: "স্থগিতাদেশের তারিখ", type: "date", required: false }
        ]
      },
      {
        groupId: "officer",
        groupTitle: "Officer Details",
        groupTitleBn: "কর্মকর্তার তথ্য",
        fields: [
          { id: "officerName", label: "Officer Name & Designation", labelBn: "কর্মকর্তার নাম ও পদবী", type: "text", required: false, placeholder: "e.g. Shri Suresh Patel, Superintendent, CGST Range-III" },
          { id: "din", label: "DIN", labelBn: "ডিআইএন", type: "text", required: false, placeholder: "e.g. 20240612XXXXXXXXXX" }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_58",
    groups: [
      {
        groupId: "applicantDetails",
        groupTitle: "Applicant Details",
        groupTitleBn: "আবেদনকারীর তথ্য",
        fields: [
          { id: "applicantName", label: "Applicant Name (M/s)", labelBn: "আবেদনকারীর নাম", type: "text", required: true, placeholder: "e.g. M/s ABC Exports Pvt Ltd" },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true, placeholder: "e.g. 21XXXXX1234Z5" },
          { id: "address", label: "Address", labelBn: "ঠিকানা", type: "textarea", required: false }
        ]
      },
      {
        groupId: "refundDetails",
        groupTitle: "Refund Application Details",
        groupTitleBn: "রিফান্ড আবেদনের তথ্য",
        fields: [
          { id: "arn", label: "ARN (Application Reference Number)", labelBn: "এআরএন নম্বর", type: "text", required: true, placeholder: "e.g. AA210420123456X" },
          { id: "applicationDate", label: "Date of Application", labelBn: "আবেদনের তারিখ", type: "date", required: true },
          { id: "claimedAmount", label: "Refund Amount Claimed (Rs.)", labelBn: "দাবিকৃত রিফান্ড", type: "currency", required: true },
          { id: "period", label: "Tax Period", labelBn: "কর সময়কাল", type: "text", required: true, placeholder: "e.g. Apr 2022 to Mar 2023" },
          { id: "shippingBills", label: "Shipping Bill No(s). & Date(s)", labelBn: "শিপিং বিল নম্বর", type: "textarea", required: false, placeholder: "e.g. SB No. 1234567 dt. 01.05.2022..." },
          { id: "relevantDate", label: "Relevant Date (Date of Ship's Departure)", labelBn: "প্রাসঙ্গিক তারিখ", type: "date", required: true },
          { id: "scnReference", label: "RFD-08 SCN No. / DIN", labelBn: "এসসিএন নম্বর", type: "text", required: false },
          { id: "scnDate", label: "RFD-08 Date", labelBn: "এসসিএন তারিখ", type: "date", required: false }
        ]
      },
      {
        groupId: "officer",
        groupTitle: "Officer Details",
        groupTitleBn: "কর্মকর্তার তথ্য",
        fields: [
          { id: "officerName", label: "Officer Name & Designation", labelBn: "কর্মকর্তার নাম", type: "text", required: false },
          { id: "din", label: "DIN", labelBn: "ডিআইএন", type: "text", required: false }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_59",
    groups: [
      {
        groupId: "applicantDetails",
        groupTitle: "Applicant Details",
        groupTitleBn: "আবেদনকারীর তথ্য",
        fields: [
          { id: "applicantName", label: "Applicant Name", labelBn: "আবেদনকারীর নাম", type: "text", required: true },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true },
          { id: "address", label: "Address", labelBn: "ঠিকানা", type: "textarea", required: false }
        ]
      },
      {
        groupId: "refundDetails",
        groupTitle: "Unjust Enrichment Details",
        groupTitleBn: "অন্যায় সমৃদ্ধির বিবরণ",
        fields: [
          { id: "arn", label: "ARN", labelBn: "এআরএন", type: "text", required: true },
          { id: "applicationDate", label: "Application Date", labelBn: "আবেদনের তারিখ", type: "date", required: true },
          { id: "claimedAmount", label: "Amount Claimed (Rs.)", labelBn: "দাবিকৃত পরিমাণ", type: "currency", required: true },
          { id: "period", label: "Period", labelBn: "সময়কাল", type: "text", required: true },
          { id: "natureOfRefund", label: "Nature of Refund", labelBn: "রিফান্ডের প্রকৃতি", type: "text", required: false, placeholder: "e.g. Excess tax paid / Tax on cancelled supply" },
          { id: "enrichmentEvidence", label: "Evidence of Unjust Enrichment", labelBn: "অন্যায় সমৃদ্ধির প্রমাণ", type: "textarea", required: true, placeholder: "e.g. Tax charged on invoices to buyers; buyers availed ITC in GSTR-2A..." }
        ]
      },
      {
        groupId: "officer",
        groupTitle: "Officer",
        groupTitleBn: "কর্মকর্তা",
        fields: [
          { id: "officerName", label: "Officer Name & Designation", labelBn: "কর্মকর্তা", type: "text", required: false },
          { id: "din", label: "DIN", labelBn: "ডিআইএন", type: "text", required: false }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_60",
    groups: [
      {
        groupId: "applicantDetails",
        groupTitle: "Applicant Details",
        groupTitleBn: "আবেদনকারীর তথ্য",
        fields: [
          { id: "applicantName", label: "Applicant Name", labelBn: "আবেদনকারীর নাম", type: "text", required: true },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true }
        ]
      },
      {
        groupId: "invertedDutyDetails",
        groupTitle: "Inverted Duty Refund Details",
        groupTitleBn: "ইনভার্টেড ডিউটি রিফান্ড তথ্য",
        fields: [
          { id: "arn", label: "ARN", labelBn: "এআরএন", type: "text", required: true },
          { id: "applicationDate", label: "Application Date", labelBn: "আবেদনের তারিখ", type: "date", required: true },
          { id: "claimedAmount", label: "Amount Claimed (Rs.)", labelBn: "দাবিকৃত পরিমাণ", type: "currency", required: true },
          { id: "period", label: "Period", labelBn: "সময়কাল", type: "text", required: true },
          { id: "inputRate", label: "Input GST Rate (%)", labelBn: "ইনপুটের জিএসটি হার", type: "text", required: false, placeholder: "e.g. 18%" },
          { id: "outputRate", label: "Output GST Rate (%)", labelBn: "আউটপুটের জিএসটি হার", type: "text", required: false, placeholder: "e.g. 5%" },
          { id: "invTurnover", label: "Inverted Rated Turnover (Rs.)", labelBn: "ইনভার্টেড টার্নওভার", type: "currency", required: false },
          { id: "netItc", label: "Net ITC (inputs only, Rs.)", labelBn: "নেট আইটিসি", type: "currency", required: false },
          { id: "adjTurnover", label: "Adjusted Total Turnover (Rs.)", labelBn: "অ্যাডজাস্টেড টার্নওভার", type: "currency", required: false },
          { id: "calculatedAmount", label: "Dept. Calculated Admissible Amount (Rs.)", labelBn: "বিভাগ কর্তৃক গণনাকৃত", type: "currency", required: false },
          { id: "rejectionGround", label: "Specific Ground of Rejection", labelBn: "প্রত্যাখ্যানের কারণ", type: "textarea", required: true, placeholder: "e.g. ITC on capital goods included in Net ITC / excess over formula limit..." },
          { id: "sanctionedAmount", label: "Amount Sanctioned (if partial) (Rs.)", labelBn: "স্বীকৃত পরিমাণ", type: "currency", required: false }
        ]
      },
      {
        groupId: "officer",
        groupTitle: "Officer",
        groupTitleBn: "কর্মকর্তা",
        fields: [
          { id: "officerName", label: "Officer Name & Designation", labelBn: "কর্মকর্তা", type: "text", required: false },
          { id: "din", label: "DIN", labelBn: "ডিআইএন", type: "text", required: false }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_61",
    groups: [
      {
        groupId: "applicantDetails",
        groupTitle: "Applicant Details",
        groupTitleBn: "আবেদনকারীর তথ্য",
        fields: [
          { id: "applicantName", label: "Applicant Name", labelBn: "আবেদনকারীর নাম", type: "text", required: true },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true },
          { id: "address", label: "Address", labelBn: "ঠিকানা", type: "textarea", required: false }
        ]
      },
      {
        groupId: "deficiencyDetails",
        groupTitle: "Deficiency Details",
        groupTitleBn: "ঘাটতির বিবরণ",
        fields: [
          { id: "arn", label: "ARN", labelBn: "এআরএন", type: "text", required: true },
          { id: "applicationDate", label: "Application Date", labelBn: "আবেদনের তারিখ", type: "date", required: true },
          { id: "claimedAmount", label: "Amount Claimed (Rs.)", labelBn: "দাবিকৃত পরিমাণ", type: "currency", required: true },
          { id: "period", label: "Period", labelBn: "সময়কাল", type: "text", required: true },
          { id: "natureOfRefund", label: "Nature / Type of Refund", labelBn: "রিফান্ডের ধরন", type: "text", required: false, placeholder: "e.g. Export IGST / Inverted Duty / SEZ" },
          { id: "deficiency1", label: "Deficiency 1", labelBn: "ঘাটতি ১", type: "textarea", required: true, placeholder: "Describe first missing document or error..." },
          { id: "deficiency2", label: "Deficiency 2 (if any)", labelBn: "ঘাটতি ২", type: "textarea", required: false },
          { id: "deficiency3", label: "Deficiency 3 (if any)", labelBn: "ঘাটতি ৩", type: "textarea", required: false }
        ]
      },
      {
        groupId: "officer",
        groupTitle: "Officer",
        groupTitleBn: "কর্মকর্তা",
        fields: [
          { id: "officerName", label: "Officer Name & Designation", labelBn: "কর্মকর্তা", type: "text", required: false },
          { id: "din", label: "DIN", labelBn: "ডিআইএন", type: "text", required: false }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_62",
    groups: [
      {
        groupId: "applicantDetails",
        groupTitle: "Exporter / Applicant Details",
        groupTitleBn: "রপ্তানিকারকের তথ্য",
        fields: [
          { id: "applicantName", label: "Applicant Name", labelBn: "আবেদনকারীর নাম", type: "text", required: true },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true },
          { id: "address", label: "Address", labelBn: "ঠিকানা", type: "textarea", required: false }
        ]
      },
      {
        groupId: "sanctionDetails",
        groupTitle: "Export IGST Sanction Details",
        groupTitleBn: "রপ্তানি আইজিএসটি স্বীকৃতির তথ্য",
        fields: [
          { id: "arn", label: "ARN", labelBn: "এআরএন", type: "text", required: true },
          { id: "applicationDate", label: "Application Date", labelBn: "আবেদনের তারিখ", type: "date", required: true },
          { id: "claimedAmount", label: "Amount Claimed (Rs.)", labelBn: "দাবিকৃত পরিমাণ", type: "currency", required: true },
          { id: "sanctionedAmount", label: "Amount Sanctioned (Rs.)", labelBn: "স্বীকৃত পরিমাণ", type: "currency", required: true },
          { id: "period", label: "Tax Period", labelBn: "সময়কাল", type: "text", required: true },
          { id: "shippingBills", label: "Shipping Bill No(s). & IGST Paid", labelBn: "শিপিং বিল ও আইজিএসটি", type: "textarea", required: false, placeholder: "SB No. | Date | Port | FOB Value | IGST Paid" },
          { id: "bankName", label: "Bank Name", labelBn: "ব্যাংকের নাম", type: "text", required: false },
          { id: "accountNo", label: "Bank Account No.", labelBn: "অ্যাকাউন্ট নম্বর", type: "text", required: false },
          { id: "ifscCode", label: "IFSC Code", labelBn: "আইএফএসসি কোড", type: "text", required: false },
          { id: "interest56", label: "Interest u/s 56 (if applicable) (Rs.)", labelBn: "ধারা ৫৬ সুদ", type: "currency", required: false }
        ]
      },
      {
        groupId: "officer",
        groupTitle: "Officer",
        groupTitleBn: "কর্মকর্তা",
        fields: [
          { id: "officerName", label: "Officer Name & Designation", labelBn: "কর্মকর্তা", type: "text", required: false },
          { id: "din", label: "DIN", labelBn: "ডিআইএন", type: "text", required: false }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_63",
    groups: [
      {
        groupId: "applicantDetails",
        groupTitle: "Applicant Details",
        groupTitleBn: "আবেদনকারীর তথ্য",
        fields: [
          { id: "applicantName", label: "Applicant Name", labelBn: "আবেদনকারীর নাম", type: "text", required: true },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true },
          { id: "businessDescription", label: "Business / Goods Description", labelBn: "ব্যবসার বিবরণ", type: "text", required: false, placeholder: "e.g. Manufacturer of Textile goods (HSN 5209)" }
        ]
      },
      {
        groupId: "formulaDetails",
        groupTitle: "Rule 89(5) Formula Details",
        groupTitleBn: "নিয়ম ৮৯(৫) সূত্রের তথ্য",
        fields: [
          { id: "arn", label: "ARN", labelBn: "এআরএন", type: "text", required: true },
          { id: "applicationDate", label: "Application Date", labelBn: "আবেদনের তারিখ", type: "date", required: true },
          { id: "claimedAmount", label: "Amount Claimed (Rs.)", labelBn: "দাবিকৃত পরিমাণ", type: "currency", required: true },
          { id: "period", label: "Period", labelBn: "সময়কাল", type: "text", required: true },
          { id: "inputRate", label: "Input GST Rate", labelBn: "ইনপুটের জিএসটি হার", type: "text", required: false, placeholder: "e.g. 18%" },
          { id: "outputRate", label: "Output GST Rate", labelBn: "আউটপুটের জিএসটি হার", type: "text", required: false, placeholder: "e.g. 5%" },
          { id: "invertedTurnover", label: "Turnover of Inverted Supply — A (Rs.)", labelBn: "ইনভার্টেড টার্নওভার A", type: "currency", required: false },
          { id: "netItc", label: "Net ITC — B (Rs.) [inputs only]", labelBn: "নেট আইটিসি B", type: "currency", required: false },
          { id: "adjTurnover", label: "Adjusted Total Turnover — C (Rs.)", labelBn: "অ্যাডজাস্টেড টার্নওভার C", type: "currency", required: false },
          { id: "taxPayable", label: "Tax Payable on Inverted Supply — D (Rs.)", labelBn: "কর প্রদেয় D", type: "currency", required: false },
          { id: "sanctionedAmount", label: "Amount Sanctioned (Rs.)", labelBn: "স্বীকৃত পরিমাণ", type: "currency", required: true }
        ]
      },
      {
        groupId: "officer",
        groupTitle: "Officer",
        groupTitleBn: "কর্মকর্তা",
        fields: [
          { id: "officerName", label: "Officer Name & Designation", labelBn: "কর্মকর্তা", type: "text", required: false },
          { id: "din", label: "DIN", labelBn: "ডিআইএন", type: "text", required: false }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_64",
    groups: [
      {
        groupId: "applicantDetails",
        groupTitle: "Applicant Details",
        groupTitleBn: "আবেদনকারীর তথ্য",
        fields: [
          { id: "applicantName", label: "Applicant Name", labelBn: "আবেদনকারীর নাম", type: "text", required: true },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true }
        ]
      },
      {
        groupId: "wrongHeadDetails",
        groupTitle: "Wrong Head Payment Details",
        groupTitleBn: "ভুল হেড পেমেন্টের তথ্য",
        fields: [
          { id: "arn", label: "ARN", labelBn: "এআরএন", type: "text", required: true },
          { id: "claimedAmount", label: "Amount Claimed (Rs.)", labelBn: "দাবিকৃত পরিমাণ", type: "currency", required: true },
          { id: "period", label: "Period", labelBn: "সময়কাল", type: "text", required: true },
          { id: "wrongTaxPaid", label: "Wrong Tax Paid (Head & Amount)", labelBn: "ভুলে দেওয়া কর", type: "text", required: true, placeholder: "e.g. IGST Rs. 50,000 paid (should be CGST+SGST)" },
          { id: "correctTaxPaid", label: "Correct Tax Paid (subsequent)", labelBn: "পরবর্তীতে সঠিক কর", type: "text", required: false, placeholder: "e.g. CGST+SGST Rs. 50,000 paid on [Date]" },
          { id: "sanctionedAmount", label: "Amount Sanctioned (Rs.)", labelBn: "স্বীকৃত পরিমাণ", type: "currency", required: true }
        ]
      },
      {
        groupId: "officer",
        groupTitle: "Officer",
        groupTitleBn: "কর্মকর্তা",
        fields: [
          { id: "officerName", label: "Officer Name & Designation", labelBn: "কর্মকর্তা", type: "text", required: false },
          { id: "din", label: "DIN", labelBn: "ডিআইএন", type: "text", required: false }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_65",
    groups: [
      {
        groupId: "applicantDetails",
        groupTitle: "Applicant Details",
        groupTitleBn: "আবেদনকারীর তথ্য",
        fields: [
          { id: "applicantName", label: "Applicant Name", labelBn: "আবেদনকারীর নাম", type: "text", required: true },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true }
        ]
      },
      {
        groupId: "provisionalDetails",
        groupTitle: "Provisional Refund Details",
        groupTitleBn: "অস্থায়ী রিফান্ডের তথ্য",
        fields: [
          { id: "arn", label: "ARN", labelBn: "এআরএন", type: "text", required: true },
          { id: "applicationDate", label: "Application Date", labelBn: "আবেদনের তারিখ", type: "date", required: true },
          { id: "claimedAmount", label: "Total Amount Claimed (Rs.)", labelBn: "মোট দাবিকৃত", type: "currency", required: true },
          { id: "admissibleAmount", label: "Amount Prima Facie Admissible (Rs.)", labelBn: "আনুমানিক স্বীকৃত", type: "currency", required: true },
          { id: "provisionalAmount", label: "Provisional 90% Amount (Rs.)", labelBn: "৯০% অস্থায়ী", type: "currency", required: true },
          { id: "balance10", label: "Balance 10% (to be released later) (Rs.)", labelBn: "বাকি ১০%", type: "currency", required: true },
          { id: "lutBondRef", label: "LUT/Bond Reference", labelBn: "এলইউটি/বন্ড রেফারেন্স", type: "text", required: false }
        ]
      },
      {
        groupId: "officer",
        groupTitle: "Officer",
        groupTitleBn: "কর্মকর্তা",
        fields: [
          { id: "officerName", label: "Officer Name & Designation", labelBn: "কর্মকর্তা", type: "text", required: false },
          { id: "din", label: "DIN", labelBn: "ডিআইএন", type: "text", required: false }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_66",
    groups: [
      {
        groupId: "applicantDetails",
        groupTitle: "Applicant Details",
        groupTitleBn: "আবেদনকারীর তথ্য",
        fields: [
          { id: "applicantName", label: "Applicant Name", labelBn: "আবেদনকারীর নাম", type: "text", required: true },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true }
        ]
      },
      {
        groupId: "withholdingDetails",
        groupTitle: "Withholding Details",
        groupTitleBn: "আটকানোর বিবরণ",
        fields: [
          { id: "arn", label: "ARN", labelBn: "এআরএন", type: "text", required: true },
          { id: "withheldAmount", label: "Amount Withheld (Rs.)", labelBn: "আটকানো পরিমাণ", type: "currency", required: true },
          { id: "groundForWithholding", label: "Ground for Withholding", labelBn: "আটকানোর কারণ", type: "select", required: true,
            options: [
              "Audit Pending (Section 65/66)",
              "Investigation Pending (Section 67)",
              "SCN / Demand Proceedings Pending"
            ]
          },
          { id: "proceedingReference", label: "Reference of Pending Proceeding", labelBn: "বিচারাধীন কার্যক্রমের রেফারেন্স", type: "text", required: false, placeholder: "e.g. ADT-01 No. / INS-01 No. / SCN DIN" },
          { id: "proceedingDate", label: "Date of Pending Proceeding", labelBn: "কার্যক্রমের তারিখ", type: "date", required: false }
        ]
      },
      {
        groupId: "officer",
        groupTitle: "Officer",
        groupTitleBn: "কর্মকর্তা",
        fields: [
          { id: "officerName", label: "Officer Name & Designation", labelBn: "কর্মকর্তা", type: "text", required: false },
          { id: "din", label: "DIN", labelBn: "ডিআইএন", type: "text", required: false }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_67",
    groups: [
      {
        groupId: "applicantDetails",
        groupTitle: "Applicant Details",
        groupTitleBn: "আবেদনকারীর তথ্য",
        fields: [
          { id: "applicantName", label: "Applicant Name", labelBn: "আবেদনকারীর নাম", type: "text", required: true },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true },
          { id: "address", label: "Address", labelBn: "ঠিকানা", type: "textarea", required: false }
        ]
      },
      {
        groupId: "scnDetails",
        groupTitle: "SCN (RFD-08) Details",
        groupTitleBn: "এসএনসি বিবরণ",
        fields: [
          { id: "arn", label: "ARN", labelBn: "এআরএন", type: "text", required: true },
          { id: "applicationDate", label: "Application Date", labelBn: "আবেদনের তারিখ", type: "date", required: true },
          { id: "claimedAmount", label: "Amount Claimed (Rs.)", labelBn: "দাবিকৃত পরিমাণ", type: "currency", required: true },
          { id: "rejectionAmount", label: "Amount Proposed for Rejection (Rs.)", labelBn: "প্রস্তাবিত প্রত্যাখ্যান", type: "currency", required: true },
          { id: "admissibleAmount", label: "Admissible Amount (if partial) (Rs.)", labelBn: "স্বীকৃত পরিমাণ", type: "currency", required: false },
          { id: "ground1", label: "Ground 1 for Rejection", labelBn: "প্রত্যাখ্যানের কারণ ১", type: "textarea", required: true },
          { id: "ground2", label: "Ground 2 (if any)", labelBn: "কারণ ২", type: "textarea", required: false },
          { id: "hearingDate", label: "Hearing Date", labelBn: "শুনানির তারিখ", type: "date", required: false }
        ]
      },
      {
        groupId: "officer",
        groupTitle: "Officer",
        groupTitleBn: "কর্মকর্তা",
        fields: [
          { id: "officerName", label: "Officer Name & Designation", labelBn: "কর্মকর্তা", type: "text", required: false },
          { id: "din", label: "DIN", labelBn: "ডিআইএন", type: "text", required: false }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_68",
    groups: [
      {
        groupId: "applicantDetails",
        groupTitle: "Applicant Details",
        groupTitleBn: "আবেদনকারীর তথ্য",
        fields: [
          { id: "applicantName", label: "Applicant Name", labelBn: "আবেদনকারীর নাম", type: "text", required: true },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true }
        ]
      },
      {
        groupId: "sezDetails",
        groupTitle: "SEZ Supply Details",
        groupTitleBn: "এসইজেড সরবরাহের তথ্য",
        fields: [
          { id: "arn", label: "ARN", labelBn: "এআরএন", type: "text", required: true },
          { id: "applicationDate", label: "Application Date", labelBn: "আবেদনের তারিখ", type: "date", required: true },
          { id: "claimedAmount", label: "Amount Claimed (Rs.)", labelBn: "দাবিকৃত পরিমাণ", type: "currency", required: true },
          { id: "sanctionedAmount", label: "Amount Sanctioned (Rs.)", labelBn: "স্বীকৃত পরিমাণ", type: "currency", required: true },
          { id: "period", label: "Period", labelBn: "সময়কাল", type: "text", required: true },
          { id: "sezName", label: "SEZ Unit / Developer Name", labelBn: "এসইজেড ইউনিটের নাম", type: "text", required: false },
          { id: "sezGstin", label: "SEZ GSTIN", labelBn: "এসইজেড জিএসটিএন", type: "text", required: false },
          { id: "lutBondNo", label: "LUT/Bond No. & Date", labelBn: "এলইউটি/বন্ড নম্বর", type: "text", required: false }
        ]
      },
      {
        groupId: "officer",
        groupTitle: "Officer",
        groupTitleBn: "কর্মকর্তা",
        fields: [
          { id: "officerName", label: "Officer Name & Designation", labelBn: "কর্মকর্তা", type: "text", required: false },
          { id: "din", label: "DIN", labelBn: "ডিআইএন", type: "text", required: false }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_69",
    groups: [
      {
        groupId: "applicantDetails",
        groupTitle: "Applicant Details",
        groupTitleBn: "আবেদনকারীর তথ্য",
        fields: [
          { id: "applicantName", label: "Applicant Name", labelBn: "আবেদনকারীর নাম", type: "text", required: true },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true }
        ]
      },
      {
        groupId: "interestDetails",
        groupTitle: "Interest Calculation (Section 56)",
        groupTitleBn: "ধারা ৫৬ সুদ গণনা",
        fields: [
          { id: "arn", label: "ARN", labelBn: "এআরএন", type: "text", required: true },
          { id: "refundOrderNo", label: "Refund Order No.", labelBn: "রিফান্ড আদেশ নম্বর", type: "text", required: true },
          { id: "refundAmount", label: "Principal Refund Amount (Rs.)", labelBn: "মূল রিফান্ড", type: "currency", required: true },
          { id: "completeAppDate", label: "Date of Complete Application", labelBn: "সম্পূর্ণ আবেদনের তারিখ", type: "date", required: true },
          { id: "dueDate60", label: "60-Day Due Date", labelBn: "৬০ দিনের নির্ধারিত তারিখ", type: "date", required: false },
          { id: "actualPaymentDate", label: "Actual Date of Refund Payment", labelBn: "প্রকৃত পেমেন্টের তারিখ", type: "date", required: true },
          { id: "delayDays", label: "Delay in Days", labelBn: "বিলম্বের দিন", type: "text", required: false },
          { id: "interestAmount", label: "Interest Amount @ 6% (Rs.)", labelBn: "৬% সুদের পরিমাণ", type: "currency", required: true }
        ]
      },
      {
        groupId: "officer",
        groupTitle: "Officer",
        groupTitleBn: "কর্মকর্তা",
        fields: [
          { id: "officerName", label: "Officer Name & Designation", labelBn: "কর্মকর্তা", type: "text", required: false }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_70",
    groups: [
      {
        groupId: "applicantDetails",
        groupTitle: "Applicant Details",
        groupTitleBn: "আবেদনকারীর তথ্য",
        fields: [
          { id: "applicantName", label: "Applicant Name", labelBn: "আবেদনকারীর নাম", type: "text", required: true },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true }
        ]
      },
      {
        groupId: "sezLutDetails",
        groupTitle: "SEZ LUT/Bond Issue Details",
        groupTitleBn: "এসইজেড এলইউটি সমস্যার তথ্য",
        fields: [
          { id: "arn", label: "ARN", labelBn: "এআরএন", type: "text", required: true },
          { id: "claimedAmount", label: "Amount Claimed (Rs.)", labelBn: "দাবিকৃত পরিমাণ", type: "currency", required: true },
          { id: "period", label: "Period", labelBn: "সময়কাল", type: "text", required: true },
          { id: "lutIssue", label: "LUT/Bond Issue", labelBn: "এলইউটি/বন্ড সমস্যা", type: "select", required: true,
            options: [
              "No LUT/Bond executed before supply",
              "LUT/Bond expired at time of supply",
              "LUT signed by unauthorized person",
              "Only physical LUT, not filed online"
            ]
          },
          { id: "supplyDate", label: "Date of Supply (when LUT was invalid)", labelBn: "সরবরাহের তারিখ", type: "date", required: false },
          { id: "lutExpiryDate", label: "LUT Expiry Date (if applicable)", labelBn: "এলইউটি মেয়াদ শেষের তারিখ", type: "date", required: false }
        ]
      },
      {
        groupId: "officer",
        groupTitle: "Officer",
        groupTitleBn: "কর্মকর্তা",
        fields: [
          { id: "officerName", label: "Officer Name & Designation", labelBn: "কর্মকর্তা", type: "text", required: false },
          { id: "din", label: "DIN", labelBn: "ডিআইএন", type: "text", required: false }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_71",
    groups: [
      {
        groupId: "applicantDetails",
        groupTitle: "Applicant Details",
        groupTitleBn: "আবেদনকারীর তথ্য",
        fields: [
          { id: "applicantName", label: "Applicant Name", labelBn: "আবেদনকারীর নাম", type: "text", required: true },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true }
        ]
      },
      {
        groupId: "cashLedgerDetails",
        groupTitle: "Cash Ledger Refund Details",
        groupTitleBn: "ক্যাশ লেজার রিফান্ড তথ্য",
        fields: [
          { id: "arn", label: "ARN", labelBn: "এআরএন", type: "text", required: true },
          { id: "claimedAmount", label: "Amount Claimed (Rs.)", labelBn: "দাবিকৃত পরিমাণ", type: "currency", required: true },
          { id: "taxHead", label: "Tax Head", labelBn: "কর হেড", type: "select", required: true,
            options: [
              "CGST",
              "IGST",
              "SGST / UTGST",
              "Cess"
            ]
          },
          { id: "reasonForExcess", label: "Reason for Excess Balance", labelBn: "উদ্বৃত্তের কারণ", type: "textarea", required: true, placeholder: "e.g. Excess deposit / Wrong head / Business closed..." },
          { id: "sanctionedAmount", label: "Amount Sanctioned (Rs.)", labelBn: "স্বীকৃত পরিমাণ", type: "currency", required: true }
        ]
      },
      {
        groupId: "officer",
        groupTitle: "Officer",
        groupTitleBn: "কর্মকর্তা",
        fields: [
          { id: "officerName", label: "Officer Name & Designation", labelBn: "কর্মকর্তা", type: "text", required: false },
          { id: "din", label: "DIN", labelBn: "ডিআইএন", type: "text", required: false }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_72",
    groups: [
      {
        groupId: "applicantDetails",
        groupTitle: "Applicant Details",
        groupTitleBn: "আবেদনকারীর তথ্য",
        fields: [
          { id: "applicantName", label: "Applicant Name", labelBn: "আবেদনকারীর নাম", type: "text", required: true },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true }
        ]
      },
      {
        groupId: "clarificationDetails",
        groupTitle: "Clarification Required",
        groupTitleBn: "প্রয়োজনীয় স্পষ্টীকরণ",
        fields: [
          { id: "arn", label: "ARN", labelBn: "এআরএন", type: "text", required: true },
          { id: "applicationDate", label: "Application Date", labelBn: "আবেদনের তারিখ", type: "date", required: true },
          { id: "refundAmount", label: "Refund Amount (Rs.)", labelBn: "রিফান্ড পরিমাণ", type: "currency", required: true },
          { id: "period", label: "Period", labelBn: "সময়কাল", type: "text", required: true },
          { id: "clarification1", label: "Clarification / Document 1 Required", labelBn: "স্পষ্টীকরণ ১", type: "textarea", required: true },
          { id: "clarification2", label: "Clarification / Document 2 (if any)", labelBn: "স্পষ্টীকরণ ২", type: "textarea", required: false },
          { id: "clarification3", label: "Clarification / Document 3 (if any)", labelBn: "স্পষ্টীকরণ ৩", type: "textarea", required: false }
        ]
      },
      {
        groupId: "officer",
        groupTitle: "Officer",
        groupTitleBn: "কর্মকর্তা",
        fields: [
          { id: "officerName", label: "Officer Name & Designation", labelBn: "কর্মকর্তা", type: "text", required: false },
          { id: "din", label: "DIN", labelBn: "ডিআইএন", type: "text", required: false }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
{
    templateId: "gst_73",
    groups: [
      {
        groupId: "noticeeDetails",
        groupTitle: "Noticee / Taxpayer Details",
        groupTitleBn: "করদাতার তথ্য",
        fields: [
          { id: "taxpayerName", label: "Taxpayer Name (M/s)", labelBn: "করদাতার নাম", type: "text", required: true, placeholder: "e.g. M/s ABC Traders Pvt Ltd" },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true, placeholder: "e.g. 21AAAAA0000A1Z1" },
          { id: "address", label: "Registered Address", labelBn: "নিবন্ধিত ঠিকানা", type: "textarea", required: false }
        ]
      },
      {
        groupId: "blockingDetails",
        groupTitle: "ITC Blocking Details (Rule 86A)",
        groupTitleBn: "আইটিসি ব্লকিং বিবরণ",
        fields: [
          { id: "fileNumber", label: "File / Order Number", labelBn: "ফাইল নম্বর", type: "text", required: true },
          { id: "blockingDate", label: "Date of Blocking Order", labelBn: "ব্লকিং আদেশের তারিখ", type: "date", required: true },
          { id: "itcAmount", label: "ITC Amount to be Blocked (Rs.)", labelBn: "ব্লক করার আইটিসি পরিমাণ", type: "currency", required: true },
          { id: "supplierGstin", label: "Supplier GSTIN (whose invoices are suspect)", labelBn: "সন্দেহজনক সরবরাহকারীর GSTIN", type: "text", required: true },
          { id: "invoiceDetails", label: "Invoice Number(s) & Date(s)", labelBn: "ইনভয়েস নম্বর ও তারিখ", type: "textarea", required: true, placeholder: "e.g. INV/2023/001 dt. 01.04.2023 – Rs. 1,50,000/-" },
          { id: "blockingReason", label: "Reason for Blocking", labelBn: "ব্লকিং-এর কারণ", type: "select", required: true, options: ["Supplier does not exist / fake registration", "Non-reflection in GSTR-2B / Supplier non-filer", "Goods/Services not actually received", "Tax not paid to Government by supplier"] },
          { id: "reasonDetails", label: "Reason Details / Supporting Evidence", labelBn: "বিস্তারিত কারণ ও প্রমাণ", type: "textarea", required: true, placeholder: "Describe specific evidence: verification date, findings, etc." }
        ]
      },
      {
        groupId: "officer",
        groupTitle: "Authorised Officer Details",
        groupTitleBn: "অনুমোদিত কর্মকর্তার তথ্য",
        fields: [
          { id: "officerName", label: "Officer Name & Designation", labelBn: "কর্মকর্তার নাম ও পদবি", type: "text", required: true, placeholder: "e.g. Rajesh Kumar, Asst. Commissioner" },
          { id: "commissionerate", label: "CGST Division / Commissionerate", labelBn: "কমিশনারেট", type: "text", required: false }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_74",
    groups: [
      {
        groupId: "noticeeDetails",
        groupTitle: "Taxpayer Details",
        groupTitleBn: "করদাতার তথ্য",
        fields: [
          { id: "taxpayerName", label: "Taxpayer Name (M/s)", labelBn: "করদাতার নাম", type: "text", required: true },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true },
          { id: "address", label: "Registered Address", labelBn: "নিবন্ধিত ঠিকানা", type: "textarea", required: false }
        ]
      },
      {
        groupId: "unblockingDetails",
        groupTitle: "ITC Unblocking Details",
        groupTitleBn: "আইটিসি আনব্লকিং বিবরণ",
        fields: [
          { id: "previousOrderNo", label: "Previous Blocking Order No.", labelBn: "পূর্ববর্তী ব্লকিং আদেশ নম্বর", type: "text", required: true },
          { id: "blockingDate", label: "Date of Original Blocking Order", labelBn: "মূল ব্লকিং আদেশের তারিখ", type: "date", required: true },
          { id: "itcAmount", label: "ITC Amount to be Unblocked (Rs.)", labelBn: "আনব্লক করার আইটিসি পরিমাণ", type: "currency", required: true },
          { id: "unblockingDate", label: "Date of Unblocking Order", labelBn: "আনব্লকিং আদেশের তারিখ", type: "date", required: true },
          { id: "unblockingReason", label: "Reason for Unblocking", labelBn: "আনব্লকিং-এর কারণ", type: "select", required: true, options: ["Verification completed — ITC found eligible", "Taxpayer objection accepted with documentary evidence", "Demand paid / proceedings concluded", "One-year limitation period expired (Rule 86A(3))"] },
          { id: "reasonDetails", label: "Details / Summary of Findings", labelBn: "বিস্তারিত তথ্য", type: "textarea", required: false }
        ]
      },
      {
        groupId: "officer",
        groupTitle: "Officer Details",
        groupTitleBn: "কর্মকর্তার তথ্য",
        fields: [
          { id: "officerName", label: "Officer Name & Designation", labelBn: "কর্মকর্তার নাম", type: "text", required: true },
          { id: "commissionerate", label: "CGST Division / Commissionerate", labelBn: "কমিশনারেট", type: "text", required: false }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_75",
    groups: [
      {
        groupId: "noticeeDetails",
        groupTitle: "Noticee Details",
        groupTitleBn: "নোটিশ প্রাপকের তথ্য",
        fields: [
          { id: "taxpayerName", label: "Taxpayer Name (M/s)", labelBn: "করদাতার নাম", type: "text", required: true },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true },
          { id: "address", label: "Registered Address", labelBn: "নিবন্ধিত ঠিকানা", type: "textarea", required: false }
        ]
      },
      {
        groupId: "invoiceDetails",
        groupTitle: "Unpaid Invoice Details (180-Day Rule)",
        groupTitleBn: "অপরিশোধিত ইনভয়েসের তথ্য (১৮০ দিনের বিধি)",
        fields: [
          { id: "period", label: "Tax Period", labelBn: "কর সময়কাল", type: "text", required: true, placeholder: "e.g. April 2023 to March 2024" },
          { id: "supplierGstin", label: "Supplier GSTIN", labelBn: "সরবরাহকারীর GSTIN", type: "text", required: true },
          { id: "invoiceDetails", label: "Invoice No(s), Date(s) & Value(s)", labelBn: "ইনভয়েস বিবরণ", type: "textarea", required: true, placeholder: "Invoice No. | Date | Value | ITC Availed" },
          { id: "invoiceDate", label: "Earliest Invoice Date", labelBn: "প্রথম ইনভয়েসের তারিখ", type: "date", required: true },
          { id: "deadline180Day", label: "180-Day Deadline", labelBn: "১৮০ দিনের সময়সীমা", type: "date", required: true },
          { id: "itcAmount", label: "Total ITC to be Reversed (Rs.)", labelBn: "বিপরীতকরণযোগ্য মোট আইটিসি", type: "currency", required: true },
          { id: "outstandingPayment", label: "Outstanding Payment to Supplier (Rs.)", labelBn: "সরবরাহকারীকে বকেয়া পরিমাণ", type: "currency", required: false }
        ]
      },
      {
        groupId: "demandDetails",
        groupTitle: "Demand Details",
        groupTitleBn: "দাবির বিবরণ",
        fields: [
          { id: "interestAmount", label: "Interest u/s 50 (Rs.)", labelBn: "সুদ (ধারা ৫০)", type: "currency", required: false },
          { id: "penaltyAmount", label: "Penalty @ 10% u/s 73(9) (Rs.)", labelBn: "জরিমানা @ ১০%", type: "currency", required: false },
          { id: "fileNumber", label: "SCN File Number / DIN", labelBn: "এসসিএন ফাইল নম্বর", type: "text", required: false }
        ]
      },
      {
        groupId: "officer",
        groupTitle: "Officer Details",
        groupTitleBn: "কর্মকর্তার তথ্য",
        fields: [
          { id: "officerName", label: "Officer Name & Designation", labelBn: "কর্মকর্তার নাম", type: "text", required: false },
          { id: "din", label: "DIN", labelBn: "ডিআইএন", type: "text", required: false }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_76",
    groups: [
      {
        groupId: "noticeeDetails",
        groupTitle: "Noticee Details",
        groupTitleBn: "নোটিশ প্রাপকের তথ্য",
        fields: [
          { id: "taxpayerName", label: "Taxpayer Name (M/s)", labelBn: "করদাতার নাম", type: "text", required: true },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true },
          { id: "address", label: "Registered Address", labelBn: "নিবন্ধিত ঠিকানা", type: "textarea", required: false }
        ]
      },
      {
        groupId: "scnDetails",
        groupTitle: "Original SCN Details",
        groupTitleBn: "মূল এসসিএন-এর তথ্য",
        fields: [
          { id: "scnNumber", label: "SCN Number (C.No.)", labelBn: "এসসিএন নম্বর", type: "text", required: true },
          { id: "scnDate", label: "Date of SCN", labelBn: "এসসিএন তারিখ", type: "date", required: true },
          { id: "period", label: "Tax Period", labelBn: "কর সময়কাল", type: "text", required: true },
          { id: "replyReceived", label: "Reply Status", labelBn: "উত্তরের অবস্থা", type: "select", required: true, options: ["Reply received on [date]", "No reply received within stipulated period"] },
          { id: "hearingStatus", label: "Personal Hearing Status", labelBn: "ব্যক্তিগত শুনানির অবস্থা", type: "select", required: false, options: ["Personal hearing conducted on [date]", "Personal hearing not availed"] }
        ]
      },
      {
        groupId: "demandDetails",
        groupTitle: "Confirmed Demand",
        groupTitleBn: "নিশ্চিত দাবির বিবরণ",
        fields: [
          { id: "itcAmount", label: "ITC Reversal Confirmed (Rs.)", labelBn: "নিশ্চিত আইটিসি বিপরীতকরণ", type: "currency", required: true },
          { id: "interestAmount", label: "Interest u/s 50 (Rs.)", labelBn: "সুদ", type: "currency", required: false },
          { id: "penaltyAmount", label: "Penalty (Rs.)", labelBn: "জরিমানা", type: "currency", required: false },
          { id: "taxpayerContention", label: "Taxpayer's Main Contention (for rejection in order)", labelBn: "করদাতার মূল যুক্তি", type: "textarea", required: false, placeholder: "Briefly state taxpayer's argument so it can be addressed and rejected in the order" },
          { id: "fileNumber", label: "Order Number / DIN", labelBn: "আদেশ নম্বর / ডিআইএন", type: "text", required: false }
        ]
      },
      {
        groupId: "officer",
        groupTitle: "Officer Details",
        groupTitleBn: "কর্মকর্তার তথ্য",
        fields: [
          { id: "officerName", label: "Officer Name & Designation", labelBn: "কর্মকর্তার নাম", type: "text", required: false },
          { id: "din", label: "DIN", labelBn: "ডিআইএন", type: "text", required: false }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_77",
    groups: [
      {
        groupId: "noticeeDetails",
        groupTitle: "Noticee Details",
        groupTitleBn: "নোটিশ প্রাপকের তথ্য",
        fields: [
          { id: "taxpayerName", label: "Taxpayer Name (M/s)", labelBn: "করদাতার নাম", type: "text", required: true },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true },
          { id: "address", label: "Registered Address", labelBn: "নিবন্ধিত ঠিকানা", type: "textarea", required: false }
        ]
      },
      {
        groupId: "fakeInvoiceDetails",
        groupTitle: "Fraudulent ITC Details (Fake Invoice / Goods Not Received)",
        groupTitleBn: "জালিয়াতি আইটিসির বিবরণ",
        fields: [
          { id: "supplierName", label: "Supplier Name (M/s)", labelBn: "সরবরাহকারীর নাম", type: "text", required: true },
          { id: "supplierGstin", label: "Supplier GSTIN", labelBn: "সরবরাহকারীর GSTIN", type: "text", required: true },
          { id: "invoiceDetails", label: "Invoice No(s), Date(s), Value(s) & ITC Availed", labelBn: "ইনভয়েস বিবরণ", type: "textarea", required: true, placeholder: "Invoice No. | Date | Taxable Value | ITC" },
          { id: "period", label: "Period", labelBn: "সময়কাল", type: "text", required: true },
          { id: "itcAmount", label: "Total Fraudulent ITC (Rs.)", labelBn: "মোট জালিয়াতি আইটিসি", type: "currency", required: true },
          { id: "fraudReason", label: "Specific Reason for Fraud Allegation", labelBn: "জালিয়াতির নির্দিষ্ট কারণ", type: "select", required: true, options: ["Supplier is non-existent / fictitious entity", "Supplier lacks capacity — no infrastructure/employees", "No transport/e-way bill evidence of physical receipt", "Supplier filed nil GSTR-1 / invoices not in GSTR-1", "Circular financial transactions — accommodation entries"] },
          { id: "fraudEvidence", label: "Evidence Details", labelBn: "প্রমাণের বিস্তারিত", type: "textarea", required: true, placeholder: "Physical verification date and findings, GSTR analysis, transport document analysis, financial flow details etc." }
        ]
      },
      {
        groupId: "demandDetails",
        groupTitle: "Demand Details (Section 74)",
        groupTitleBn: "দাবির বিবরণ (ধারা ৭৪)",
        fields: [
          { id: "interestAmount", label: "Interest u/s 50 (Rs.)", labelBn: "সুদ", type: "currency", required: false },
          { id: "penaltyAmount", label: "Penalty 100% u/s 74(9) (Rs.)", labelBn: "১০০% জরিমানা", type: "currency", required: false },
          { id: "fileNumber", label: "SCN Number / DIN", labelBn: "এসসিএন নম্বর", type: "text", required: false }
        ]
      },
      {
        groupId: "officer",
        groupTitle: "Officer Details",
        groupTitleBn: "কর্মকর্তার তথ্য",
        fields: [
          { id: "officerName", label: "Officer Name & Designation", labelBn: "কর্মকর্তার নাম", type: "text", required: false },
          { id: "din", label: "DIN", labelBn: "ডিআইএন", type: "text", required: false }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_78",
    groups: [
      {
        groupId: "noticeeDetails",
        groupTitle: "Noticee Details",
        groupTitleBn: "নোটিশ প্রাপকের তথ্য",
        fields: [
          { id: "taxpayerName", label: "Taxpayer Name (M/s)", labelBn: "করদাতার নাম", type: "text", required: true },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true },
          { id: "address", label: "Registered Address", labelBn: "নিবন্ধিত ঠিকানা", type: "textarea", required: false }
        ]
      },
      {
        groupId: "blockedCreditDetails",
        groupTitle: "Blocked Credit Details — Section 17(5)",
        groupTitleBn: "অবরুদ্ধ ক্রেডিটের বিবরণ — ধারা ১৭(৫)",
        fields: [
          { id: "period", label: "Period", labelBn: "সময়কাল", type: "text", required: true, placeholder: "e.g. Apr 2022 – Mar 2023" },
          { id: "blockedCategory", label: "Category of Blocked Credit", labelBn: "অবরুদ্ধ ক্রেডিটের বিভাগ", type: "select", required: true, options: ["Motor Vehicles — Section 17(5)(a)", "Food & Beverages / Outdoor Catering — Section 17(5)(b)(i)", "Club / Health / Fitness Membership — Section 17(5)(b)(iii)", "Travel Benefits / LTC extended to employees — Section 17(5)(b)(iv)", "Works Contract for Immovable Property — Section 17(5)(c)", "Construction of Immovable Property on own account — Section 17(5)(d)", "Multiple categories — describe below"] },
          { id: "invoiceDetails", label: "Invoice / Expense Details", labelBn: "ইনভয়েস / ব্যয়ের বিবরণ", type: "textarea", required: true, placeholder: "e.g. Vehicle No. KA-01-AB-1234 (Motor Vehicle) Invoice dt. 15.05.2022 Rs. 10,00,000/-; ITC availed Rs. 1,80,000/-" },
          { id: "itcAmount", label: "Total Ineligible ITC (Rs.)", labelBn: "মোট অযোগ্য আইটিসি", type: "currency", required: true }
        ]
      },
      {
        groupId: "demandDetails",
        groupTitle: "Demand Details",
        groupTitleBn: "দাবির বিবরণ",
        fields: [
          { id: "interestAmount", label: "Interest u/s 50 (Rs.)", labelBn: "সুদ", type: "currency", required: false },
          { id: "penaltyAmount", label: "Penalty 10% u/s 73(9) (Rs.)", labelBn: "১০% জরিমানা", type: "currency", required: false },
          { id: "fileNumber", label: "SCN Number / DIN", labelBn: "এসসিএন নম্বর", type: "text", required: false }
        ]
      },
      {
        groupId: "officer",
        groupTitle: "Officer Details",
        groupTitleBn: "কর্মকর্তার তথ্য",
        fields: [
          { id: "officerName", label: "Officer Name & Designation", labelBn: "কর্মকর্তার নাম", type: "text", required: false },
          { id: "din", label: "DIN", labelBn: "ডিআইএন", type: "text", required: false }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_79",
    groups: [
      {
        groupId: "noticeeDetails",
        groupTitle: "Noticee Details",
        groupTitleBn: "নোটিশ প্রাপকের তথ্য",
        fields: [
          { id: "taxpayerName", label: "Taxpayer Name (M/s)", labelBn: "করদাতার নাম", type: "text", required: true },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true },
          { id: "address", label: "Registered Address", labelBn: "নিবন্ধিত ঠিকানা", type: "textarea", required: false }
        ]
      },
      {
        groupId: "mismatchDetails",
        groupTitle: "GSTR-2B Mismatch Details — Section 16(2)(aa)",
        groupTitleBn: "GSTR-2B মিসম্যাচের বিবরণ",
        fields: [
          { id: "period", label: "Tax Period", labelBn: "কর সময়কাল", type: "text", required: true, placeholder: "e.g. April 2023" },
          { id: "supplierGstin", label: "Supplier GSTIN (not in GSTR-2B)", labelBn: "সরবরাহকারীর GSTIN", type: "text", required: true },
          { id: "supplierName", label: "Supplier Name", labelBn: "সরবরাহকারীর নাম", type: "text", required: false },
          { id: "itcIn3B", label: "ITC Claimed in GSTR-3B (Rs.)", labelBn: "GSTR-3B তে দাবিকৃত আইটিসি", type: "currency", required: true },
          { id: "itcIn2B", label: "ITC Available in GSTR-2B (Rs.)", labelBn: "GSTR-2B তে উপলব্ধ আইটিসি", type: "currency", required: true },
          { id: "excessItc", label: "Excess ITC (not in GSTR-2B) (Rs.)", labelBn: "অতিরিক্ত আইটিসি (GSTR-2B তে নেই)", type: "currency", required: true },
          { id: "mismatchReason", label: "Reason for Mismatch", labelBn: "মিসম্যাচের কারণ", type: "select", required: true, options: ["Supplier did not file GSTR-1/IFF for the period", "Supplier filed GSTR-1 but did not upload these invoices", "Supplier filed nil GSTR-1 despite issuing tax invoices"] }
        ]
      },
      {
        groupId: "demandDetails",
        groupTitle: "Demand Details",
        groupTitleBn: "দাবির বিবরণ",
        fields: [
          { id: "interestAmount", label: "Interest u/s 50 (Rs.)", labelBn: "সুদ", type: "currency", required: false },
          { id: "penaltyAmount", label: "Penalty 10% u/s 73(9) (Rs.)", labelBn: "১০% জরিমানা", type: "currency", required: false },
          { id: "fileNumber", label: "SCN Number / DIN", labelBn: "এসসিএন নম্বর", type: "text", required: false }
        ]
      },
      {
        groupId: "officer",
        groupTitle: "Officer Details",
        groupTitleBn: "কর্মকর্তার তথ্য",
        fields: [
          { id: "officerName", label: "Officer Name & Designation", labelBn: "কর্মকর্তার নাম", type: "text", required: false },
          { id: "din", label: "DIN", labelBn: "ডিআইএন", type: "text", required: false }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_80",
    groups: [
      {
        groupId: "noticeeDetails",
        groupTitle: "Noticee Details",
        groupTitleBn: "নোটিশ প্রাপকের তথ্য",
        fields: [
          { id: "taxpayerName", label: "Taxpayer Name (M/s)", labelBn: "করদাতার নাম", type: "text", required: true },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true },
          { id: "address", label: "Registered Address", labelBn: "নিবন্ধিত ঠিকানা", type: "textarea", required: false }
        ]
      },
      {
        groupId: "scnDetails",
        groupTitle: "SCN Reference Details",
        groupTitleBn: "মূল এসসিএন-এর তথ্য",
        fields: [
          { id: "scnNumber", label: "SCN Number (C.No.)", labelBn: "এসসিএন নম্বর", type: "text", required: true },
          { id: "scnDate", label: "SCN Date", labelBn: "এসসিএন তারিখ", type: "date", required: true },
          { id: "period", label: "Tax Period", labelBn: "কর সময়কাল", type: "text", required: true },
          { id: "supplierGstin", label: "Supplier GSTIN", labelBn: "সরবরাহকারীর GSTIN", type: "text", required: true },
          { id: "replyStatus", label: "Reply Status", labelBn: "উত্তরের অবস্থা", type: "select", required: true, options: ["Reply received on [date]", "No reply received within stipulated period"] },
          { id: "hearingStatus", label: "Hearing Status", labelBn: "শুনানির অবস্থা", type: "select", required: false, options: ["Personal hearing conducted on [date]", "Personal hearing not availed"] }
        ]
      },
      {
        groupId: "demandDetails",
        groupTitle: "Confirmed Demand",
        groupTitleBn: "নিশ্চিত দাবি",
        fields: [
          { id: "itcAmount", label: "ITC Reversal Confirmed (Rs.)", labelBn: "নিশ্চিত আইটিসি বিপরীতকরণ", type: "currency", required: true },
          { id: "interestAmount", label: "Interest u/s 50 (Rs.)", labelBn: "সুদ", type: "currency", required: false },
          { id: "penaltyAmount", label: "Penalty (Rs.)", labelBn: "জরিমানা", type: "currency", required: false },
          { id: "taxpayerContention", label: "Taxpayer's Contention (to be addressed in order)", labelBn: "করদাতার যুক্তি", type: "textarea", required: false },
          { id: "fileNumber", label: "Order Number / DIN", labelBn: "আদেশ নম্বর / ডিআইএন", type: "text", required: false }
        ]
      },
      {
        groupId: "officer",
        groupTitle: "Officer Details",
        groupTitleBn: "কর্মকর্তার তথ্য",
        fields: [
          { id: "officerName", label: "Officer Name & Designation", labelBn: "কর্মকর্তার নাম", type: "text", required: false },
          { id: "din", label: "DIN", labelBn: "ডিআইএন", type: "text", required: false }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_81",
    groups: [
      {
        groupId: "noticeeDetails",
        groupTitle: "Noticee Details",
        groupTitleBn: "নোটিশ প্রাপকের তথ্য",
        fields: [
          { id: "taxpayerName", label: "Taxpayer Name (M/s)", labelBn: "করদাতার নাম", type: "text", required: true },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true },
          { id: "address", label: "Registered Address", labelBn: "নিবন্ধিত ঠিকানা", type: "textarea", required: false }
        ]
      },
      {
        groupId: "turnoverDetails",
        groupTitle: "Turnover & ITC Details for Rule 42/43 Calculation",
        groupTitleBn: "টার্নওভার ও আইটিসির তথ্য (Rule 42/43)",
        fields: [
          { id: "period", label: "Period / Financial Year", labelBn: "সময়কাল / অর্থবছর", type: "text", required: true, placeholder: "e.g. FY 2022-23" },
          { id: "totalItcAvailed", label: "Total ITC Availed in GSTR-3B (Rs.)", labelBn: "মোট আইটিসি গ্রহণ", type: "currency", required: true },
          { id: "taxableTurnover", label: "Taxable Turnover (Rs.)", labelBn: "করযোগ্য টার্নওভার", type: "currency", required: true },
          { id: "exemptTurnover", label: "Exempt Turnover (Rs.)", labelBn: "ছাড়প্রাপ্ত টার্নওভার", type: "currency", required: true },
          { id: "totalTurnover", label: "Total Turnover (Rs.)", labelBn: "মোট টার্নওভার", type: "currency", required: true },
          { id: "exemptRatio", label: "Exempt Supply Ratio (%)", labelBn: "ছাড়প্রাপ্ত সরবরাহের অনুপাত (%)", type: "text", required: false, placeholder: "e.g. 35%" },
          { id: "itcToBeReversed", label: "ITC Required to be Reversed as per Rule 42 (Rs.)", labelBn: "Rule 42 অনুযায়ী বিপরীতকরণযোগ্য আইটিসি", type: "currency", required: true },
          { id: "itcActuallyReversed", label: "ITC Actually Reversed by Taxpayer (Rs.)", labelBn: "করদাতার বিপরীতকৃত আইটিসি", type: "currency", required: true },
          { id: "shortfallAmount", label: "Shortfall in Reversal (Rs.)", labelBn: "বিপরীতকরণে ঘাটতি", type: "currency", required: true }
        ]
      },
      {
        groupId: "demandDetails",
        groupTitle: "Demand Details",
        groupTitleBn: "দাবির বিবরণ",
        fields: [
          { id: "interestAmount", label: "Interest u/s 50 (Rs.)", labelBn: "সুদ", type: "currency", required: false },
          { id: "penaltyAmount", label: "Penalty 10% u/s 73(9) (Rs.)", labelBn: "১০% জরিমানা", type: "currency", required: false },
          { id: "fileNumber", label: "SCN Number / DIN", labelBn: "এসসিএন নম্বর", type: "text", required: false }
        ]
      },
      {
        groupId: "officer",
        groupTitle: "Officer Details",
        groupTitleBn: "কর্মকর্তার তথ্য",
        fields: [
          { id: "officerName", label: "Officer Name & Designation", labelBn: "কর্মকর্তার নাম", type: "text", required: false },
          { id: "din", label: "DIN", labelBn: "ডিআইএন", type: "text", required: false }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_82",
    groups: [
      {
        groupId: "noticeeDetails",
        groupTitle: "Noticee Details",
        groupTitleBn: "নোটিশ প্রাপকের তথ্য",
        fields: [
          { id: "taxpayerName", label: "Taxpayer Name (M/s)", labelBn: "করদাতার নাম", type: "text", required: true },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true },
          { id: "address", label: "Registered Address", labelBn: "নিবন্ধিত ঠিকানা", type: "textarea", required: false }
        ]
      },
      {
        groupId: "tranDetails",
        groupTitle: "TRAN-1 / TRAN-2 Credit Details",
        groupTitleBn: "TRAN-1 / TRAN-2 ক্রেডিটের বিবরণ",
        fields: [
          { id: "tran1Date", label: "Date of TRAN-1 Filing", labelBn: "TRAN-1 দাখিলের তারিখ", type: "date", required: true },
          { id: "tran2Date", label: "Date of TRAN-2 Filing (if applicable)", labelBn: "TRAN-2 দাখিলের তারিখ", type: "date", required: false },
          { id: "closingStockValue", label: "Closing Stock Value Claimed (Rs.)", labelBn: "দাবিকৃত সমাপনী স্টক মূল্য", type: "currency", required: false },
          { id: "unavailedCenvat", label: "Unavailed CENVAT Credit Claimed (Rs.)", labelBn: "দাবিকৃত CENVAT ক্রেডিট", type: "currency", required: false },
          { id: "totalTranCredit", label: "Total Transitional ITC Claimed (Rs.)", labelBn: "মোট ট্রানজিশনাল আইটিসি দাবি", type: "currency", required: true },
          { id: "discrepancyType", label: "Nature of Discrepancy Found", labelBn: "অসংগতির ধরন", type: "select", required: true, options: ["CENVAT credit not in pre-GST ER-1/ST-3 return", "Closing stock inflated / fictitious — no purchase invoices", "Credit relates to ineligible pre-GST categories", "Documents produced do not match TRAN-1 claim"] },
          { id: "discrepancyDetails", label: "Discrepancy Details", labelBn: "অসংগতির বিস্তারিত", type: "textarea", required: true }
        ]
      },
      {
        groupId: "demandDetails",
        groupTitle: "Demand Details (Section 74 — Fraud)",
        groupTitleBn: "দাবির বিবরণ (ধারা ৭৪)",
        fields: [
          { id: "itcAmount", label: "Wrongly Availed TRAN Credit (Rs.)", labelBn: "অবৈধভাবে গৃহীত TRAN ক্রেডিট", type: "currency", required: true },
          { id: "interestAmount", label: "Interest u/s 50 (Rs.)", labelBn: "সুদ", type: "currency", required: false },
          { id: "penaltyAmount", label: "Penalty 100% u/s 74(9) (Rs.)", labelBn: "১০০% জরিমানা", type: "currency", required: false },
          { id: "fileNumber", label: "SCN Number / DIN", labelBn: "এসসিএন নম্বর", type: "text", required: false }
        ]
      },
      {
        groupId: "officer",
        groupTitle: "Officer Details",
        groupTitleBn: "কর্মকর্তার তথ্য",
        fields: [
          { id: "officerName", label: "Officer Name & Designation", labelBn: "কর্মকর্তার নাম", type: "text", required: false },
          { id: "din", label: "DIN", labelBn: "ডিআইএন", type: "text", required: false }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_83",
    groups: [
      {
        groupId: "noticeeDetails",
        groupTitle: "Noticee Details (Cancelled Registration)",
        groupTitleBn: "নোটিশ প্রাপকের তথ্য (বাতিল নিবন্ধন)",
        fields: [
          { id: "taxpayerName", label: "Taxpayer Name (M/s)", labelBn: "করদাতার নাম", type: "text", required: true },
          { id: "gstin", label: "GSTIN (Cancelled)", labelBn: "বাতিলকৃত GSTIN", type: "text", required: true },
          { id: "address", label: "Last Known Address", labelBn: "সর্বশেষ পরিচিত ঠিকানা", type: "textarea", required: false }
        ]
      },
      {
        groupId: "cancellationDetails",
        groupTitle: "Cancellation & Closing Stock Details",
        groupTitleBn: "বাতিল ও সমাপনী স্টকের বিবরণ",
        fields: [
          { id: "cancellationDate", label: "Effective Cancellation Date", labelBn: "কার্যকর বাতিলের তারিখ", type: "date", required: true },
          { id: "cancellationSection", label: "Cancellation Under Section", labelBn: "কোন ধারায় বাতিল", type: "select", required: false, options: ["Section 29(1) — Voluntary cancellation", "Section 29(2) — Cancellation by proper officer", "Section 29(2)(e) — Cancellation for non-compliance"] },
          { id: "closingStockValue", label: "Estimated Closing Stock Value as on Cancellation Date (Rs.)", labelBn: "সমাপনী স্টকের আনুমানিক মূল্য", type: "currency", required: true },
          { id: "itcOnStock", label: "ITC on Closing Stock (Rs.)", labelBn: "স্টকের উপর আইটিসি", type: "currency", required: true },
          { id: "capitalGoodsItc", label: "ITC on Capital Goods (reduced by 5%/quarter) (Rs.)", labelBn: "মূলধনী পণ্যের আইটিসি (৫%/ত্রৈমাসিক হ্রাসকৃত)", type: "currency", required: false },
          { id: "totalReversalRequired", label: "Total ITC Reversal Required under Rule 44 (Rs.)", labelBn: "Rule 44 অনুযায়ী মোট বিপরীতকরণ", type: "currency", required: true },
          { id: "itcReversalFiled", label: "Has FORM GST ITC-03 Been Filed?", labelBn: "FORM GST ITC-03 দাখিল হয়েছে?", type: "select", required: true, options: ["No — ITC-03 not filed", "Yes — but partially reversed", "Yes — fully reversed"] }
        ]
      },
      {
        groupId: "demandDetails",
        groupTitle: "Demand Details",
        groupTitleBn: "দাবির বিবরণ",
        fields: [
          { id: "interestAmount", label: "Interest u/s 50 (Rs.)", labelBn: "সুদ", type: "currency", required: false },
          { id: "penaltyAmount", label: "Penalty 10% u/s 73(9) (Rs.)", labelBn: "১০% জরিমানা", type: "currency", required: false },
          { id: "fileNumber", label: "SCN Number / DIN", labelBn: "এসসিএন নম্বর", type: "text", required: false }
        ]
      },
      {
        groupId: "officer",
        groupTitle: "Officer Details",
        groupTitleBn: "কর্মকর্তার তথ্য",
        fields: [
          { id: "officerName", label: "Officer Name & Designation", labelBn: "কর্মকর্তার নাম", type: "text", required: false },
          { id: "din", label: "DIN", labelBn: "ডিআইএন", type: "text", required: false }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_84",
    groups: [
      {
        groupId: "noticeeDetails",
        groupTitle: "Taxpayer Details",
        groupTitleBn: "করদাতার তথ্য",
        fields: [
          { id: "taxpayerName", label: "Taxpayer Name (M/s)", labelBn: "করদাতার নাম", type: "text", required: true },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true },
          { id: "address", label: "Registered Address", labelBn: "নিবন্ধিত ঠিকানা", type: "textarea", required: false }
        ]
      },
      {
        groupId: "orderDetails",
        groupTitle: "Order Details (DRC-07)",
        groupTitleBn: "আদেশের তথ্য (DRC-07)",
        fields: [
          { id: "orderNumber", label: "Order-in-Original Number", labelBn: "আদেশ নম্বর", type: "text", required: true },
          { id: "orderDate", label: "Date of Order", labelBn: "আদেশের তারিখ", type: "date", required: true },
          { id: "din", label: "DIN of Order", labelBn: "আদেশের ডিআইএন", type: "text", required: false },
          { id: "period", label: "Tax Period", labelBn: "কর সময়কাল", type: "text", required: true },
          { id: "sectionOfOrder", label: "Section under which Order Passed", labelBn: "যে ধারায় আদেশ পাশ হয়েছে", type: "text", required: true, placeholder: "e.g. Section 73 read with Section 16(2)(aa)" },
          { id: "itcIssueType", label: "Nature of ITC Issue", labelBn: "আইটিসি সমস্যার ধরন", type: "select", required: true, options: ["ITC reversal — 180-day non-payment (Rule 37)", "ITC reversal — GSTR-2B mismatch (s.16(2)(aa))", "ITC reversal — Blocked credit s.17(5)", "ITC reversal — Fake invoice / goods not received", "ITC reversal — Rule 42/43 proportional reversal", "ITC reversal — TRAN-1/TRAN-2 wrongly availed", "ITC reversal — Cancellation of registration (Rule 44)"] }
        ]
      },
      {
        groupId: "demandTable",
        groupTitle: "Demand Summary (Tax-wise)",
        groupTitleBn: "দাবির সারাংশ (করের ধরন অনুযায়ী)",
        fields: [
          { id: "cgstTax", label: "CGST Tax (Rs.)", labelBn: "সিজিএসটি কর", type: "currency", required: false },
          { id: "sgstTax", label: "SGST/UTGST Tax (Rs.)", labelBn: "এসজিএসটি/ইউটিজিএসটি কর", type: "currency", required: false },
          { id: "igstTax", label: "IGST Tax (Rs.)", labelBn: "আইজিএসটি কর", type: "currency", required: false },
          { id: "totalTax", label: "Total Tax (Rs.)", labelBn: "মোট কর", type: "currency", required: true },
          { id: "totalInterest", label: "Total Interest (Rs.)", labelBn: "মোট সুদ", type: "currency", required: false },
          { id: "totalPenalty", label: "Total Penalty (Rs.)", labelBn: "মোট জরিমানা", type: "currency", required: false },
          { id: "grandTotal", label: "Grand Total (Rs.)", labelBn: "সর্বমোট দাবি", type: "currency", required: true },
          { id: "amountAlreadyPaid", label: "Amount Already Paid (Rs.)", labelBn: "পূর্বে পরিশোধিত পরিমাণ", type: "currency", required: false },
          { id: "paymentDueDate", label: "Payment Due Date (3 months from order)", labelBn: "পরিশোধের শেষ তারিখ", type: "date", required: false }
        ]
      },
      {
        groupId: "officer",
        groupTitle: "Officer Details",
        groupTitleBn: "কর্মকর্তার তথ্য",
        fields: [
          { id: "officerName", label: "Officer Name & Designation", labelBn: "কর্মকর্তার নাম", type: "text", required: false }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_85",
    groups: [
      {
        groupId: "noticeeDetails",
        groupTitle: "Taxpayer Under Scrutiny",
        groupTitleBn: "যাচাইকৃত করদাতার তথ্য",
        fields: [
          { id: "taxpayerName", label: "Taxpayer Name (M/s)", labelBn: "করদাতার নাম", type: "text", required: true },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true },
          { id: "period", label: "Period Under Examination", labelBn: "পরীক্ষাধীন সময়কাল", type: "text", required: true, placeholder: "e.g. FY 2022-23 (Apr 2022 – Mar 2023)" }
        ]
      },
      {
        groupId: "itcData",
        groupTitle: "ITC Reconciliation Data",
        groupTitleBn: "আইটিসি সমন্বয়ের তথ্য",
        fields: [
          { id: "totalItcIn3B", label: "Total ITC in GSTR-3B (Rs.)", labelBn: "GSTR-3B তে মোট আইটিসি", type: "currency", required: true },
          { id: "totalItcIn2B", label: "Total ITC in GSTR-2B (Rs.)", labelBn: "GSTR-2B তে মোট আইটিসি", type: "currency", required: true },
          { id: "excess3BOver2B", label: "Excess in GSTR-3B over GSTR-2B (Rs.)", labelBn: "GSTR-3B এ অতিরিক্ত আইটিসি", type: "currency", required: false },
          { id: "s175BlockedItc", label: "ITC on s.17(5) Blocked Categories (Rs.)", labelBn: "ধারা ১৭(৫) অযোগ্য আইটিসি", type: "currency", required: false },
          { id: "s162bItc", label: "ITC on 180-Day Non-Payment — s.16(2)(b) (Rs.)", labelBn: "১৮০ দিন অপরিশোধ — আইটিসি", type: "currency", required: false },
          { id: "s162aaItc", label: "ITC Not in GSTR-2B — s.16(2)(aa) (Rs.)", labelBn: "GSTR-2B মিসম্যাচ আইটিসি", type: "currency", required: false },
          { id: "rule42ShortReversal", label: "Rule 42 Short Reversal (Exempt Supply) (Rs.)", labelBn: "Rule 42 ঘাটতি বিপরীতকরণ", type: "currency", required: false },
          { id: "otherIneligibleItc", label: "Any Other Ineligible ITC (Rs.)", labelBn: "অন্য অযোগ্য আইটিসি", type: "currency", required: false },
          { id: "totalDemand", label: "Total ITC Demand Proposed (Rs.)", labelBn: "প্রস্তাবিত মোট আইটিসি দাবি", type: "currency", required: true }
        ]
      },
      {
        groupId: "recommendation",
        groupTitle: "Recommendation",
        groupTitleBn: "সুপারিশ",
        fields: [
          { id: "sectionForSCN", label: "Section for SCN", labelBn: "নোটিশের ধারা", type: "select", required: true, options: ["Section 73 — No fraud/suppression", "Section 74 — Fraud/wilful misstatement/suppression"] },
          { id: "priorApprovalObtained", label: "Prior Approval Status (for s.74)", labelBn: "পূর্বানুমোদনের অবস্থা", type: "select", required: false, options: ["Not applicable (s.73 case)", "Prior approval obtained from Joint Commissioner", "Prior approval obtained from Additional Commissioner", "Prior approval obtained from Commissioner"] }
        ]
      },
      {
        groupId: "officer",
        groupTitle: "Prepared By",
        groupTitleBn: "প্রস্তুতকর্তার তথ্য",
        fields: [
          { id: "officerName", label: "Prepared By (Name & Designation)", labelBn: "প্রস্তুতকর্তা", type: "text", required: true },
          { id: "reviewedBy", label: "Reviewed By (Name & Designation)", labelBn: "পর্যালোচনাকর্তা", type: "text", required: false },
          { id: "approvedBy", label: "Approved By (Name & Designation)", labelBn: "অনুমোদনকর্তা", type: "text", required: false },
          { id: "fileNumber", label: "File Number", labelBn: "ফাইল নম্বর", type: "text", required: false }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_86",
    groups: [
      {
        groupId: "noticeeDetails",
        groupTitle: "Noticee Details",
        groupTitleBn: "নোটিশ প্রাপকের তথ্য",
        fields: [
          { id: "taxpayerName", label: "Taxpayer Name (M/s)", labelBn: "করদাতার নাম", type: "text", required: true },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true },
          { id: "address", label: "Registered Address", labelBn: "নিবন্ধিত ঠিকানা", type: "textarea", required: false }
        ]
      },
      {
        groupId: "ineligibilityDetails",
        groupTitle: "Ineligibility Details",
        groupTitleBn: "অযোগ্যতার বিবরণ",
        fields: [
          { id: "period", label: "Period", labelBn: "সময়কাল", type: "text", required: true },
          { id: "registrationType", label: "Type of Ineligible Registration", labelBn: "অযোগ্য নিবন্ধনের ধরন", type: "select", required: true, options: ["Composition Scheme — Section 10(4)", "Making ONLY exempt supplies — Section 17(2)"] },
          { id: "itcAmount", label: "ITC Wrongly Availed (Rs.)", labelBn: "অবৈধভাবে গৃহীত আইটিসি", type: "currency", required: true },
          { id: "itcDetails", label: "Details of ITC Wrongly Availed", labelBn: "অবৈধ আইটিসির বিবরণ", type: "textarea", required: false, placeholder: "e.g. Availed ITC in ECL during composition period on invoices from regular suppliers" }
        ]
      },
      {
        groupId: "demandDetails",
        groupTitle: "Demand Details",
        groupTitleBn: "দাবির বিবরণ",
        fields: [
          { id: "interestAmount", label: "Interest u/s 50 (Rs.)", labelBn: "সুদ", type: "currency", required: false },
          { id: "penaltyAmount", label: "Penalty 10% u/s 73(9) (Rs.)", labelBn: "১০% জরিমানা", type: "currency", required: false },
          { id: "fileNumber", label: "SCN Number / DIN", labelBn: "এসসিএন নম্বর", type: "text", required: false }
        ]
      },
      {
        groupId: "officer",
        groupTitle: "Officer Details",
        groupTitleBn: "কর্মকর্তার তথ্য",
        fields: [
          { id: "officerName", label: "Officer Name & Designation", labelBn: "কর্মকর্তার নাম", type: "text", required: false },
          { id: "din", label: "DIN", labelBn: "ডিআইএন", type: "text", required: false }
        ]
      },
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_87",
    groups: [
      {
        groupId: "noticeeDetails",
        groupTitle: "Noticee Details",
        groupTitleBn: "নোটিশ প্রাপকের তথ্য",
        fields: [
          { id: "taxpayerName", label: "Taxpayer Name (M/s)", labelBn: "করদাতার নাম", type: "text", required: true },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true },
          { id: "address", label: "Registered Address", labelBn: "নিবন্ধিত ঠিকানা", type: "textarea", required: false }
        ]
      },
      {
        groupId: "demandDetails74A",
        groupTitle: "Demand Details — Section 74A (FY 2024-25 onwards ONLY)",
        groupTitleBn: "দাবির বিবরণ — ধারা ৭৪A (শুধুমাত্র FY ২০২৪-২৫ থেকে)",
        fields: [
          { id: "financialYear", label: "Financial Year (FY 2024-25 or later)", labelBn: "অর্থবছর", type: "select", required: true, options: ["FY 2024-25", "FY 2025-26", "FY 2026-27 or later"] },
          { id: "demandType", label: "Nature of Demand", labelBn: "দাবির ধরন", type: "select", required: true, options: ["Short payment of output tax (GSTR-1 vs GSTR-3B mismatch)", "ITC wrongly availed — GSTR-2B mismatch", "ITC wrongly availed — s.17(5) blocked credit", "ITC wrongly availed — fake invoice / goods not received", "ITC wrongly availed — 180-day non-payment", "RCM tax not paid", "Other (describe in details)"] },
          { id: "demandDescription", label: "Demand Description / Discrepancy Details", labelBn: "দাবির বিস্তারিত বিবরণ", type: "textarea", required: true, placeholder: "Describe the specific mismatch/discrepancy with figures: e.g. GSTR-1 shows Rs. X/-, GSTR-3B shows Rs. Y/-, Short payment Rs. Z/-" },
          { id: "taxAmount", label: "Tax Demand (Rs.)", labelBn: "করের দাবি", type: "currency", required: true },
          { id: "interestAmount", label: "Interest u/s 50 (Rs.)", labelBn: "সুদ", type: "currency", required: false }
        ]
      },
      {
        groupId: "fraudDetails",
        groupTitle: "Fraud / No-Fraud Classification",
        groupTitleBn: "জালিয়াতি / সরল ভুলের শ্রেণিবিন্যাস",
        fields: [
          { id: "fraudOrNot", label: "Nature of Default", labelBn: "খেলাপির ধরন", type: "select", required: true, options: ["FRAUD / Wilful misstatement / Suppression of facts (Penalty = 100%)", "NO FRAUD — Inadvertence / Error / Miscalculation (Penalty = 10%)"] },
          { id: "fraudEvidence", label: "Evidence / Reasons (for fraud cases — leave blank if no fraud)", labelBn: "জালিয়াতির প্রমাণ", type: "textarea", required: false, placeholder: "Required only if fraud alleged. State specific reasons." }
        ]
      },
      {
        groupId: "limitationDetails",
        groupTitle: "Limitation Period Details",
        groupTitleBn: "সময়সীমার তথ্য",
        fields: [
          { id: "annualReturnDueDate", label: "Due Date of Annual Return for the FY", labelBn: "বার্ষিক রিটার্নের নির্ধারিত তারিখ", type: "date", required: true, hint: "Section 74A time limit = 42 months from this date" },
          { id: "scnIssuanceDate", label: "Date of this SCN", labelBn: "এই নোটিশের তারিখ", type: "date", required: true }
        ]
      },
      {
        groupId: "officer",
        groupTitle: "Officer Details",
        groupTitleBn: "কর্মকর্তার তথ্য",
        fields: [
          { id: "officerName", label: "Officer Name & Designation", labelBn: "কর্মকর্তার নাম", type: "text", required: false },
          { id: "din", label: "DIN", labelBn: "ডিআইএন", type: "text", required: false }
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
