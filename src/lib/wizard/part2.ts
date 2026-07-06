import { WizardConfig, APPLICANT_GROUP, AI_INSTRUCTIONS_GROUP } from './wizardTypes';

// Wizard configs: gst_55 … gst_70
export const WIZARD_PART2: WizardConfig[] = [
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
  }
];
