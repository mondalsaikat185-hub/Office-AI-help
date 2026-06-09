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
