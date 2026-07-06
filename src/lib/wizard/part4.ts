import { WizardConfig, APPLICANT_GROUP, AI_INSTRUCTIONS_GROUP } from './wizardTypes';

// Wizard configs: gst_87 … __default__
export const WIZARD_PART4: WizardConfig[] = [
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
    templateId: "gst_88",
    groups: [
      {
        groupId: "taxpayerDetails",
        groupTitle: "Taxpayer / Noticee Details",
        groupTitleBn: "করদাতার তথ্য",
        fields: [
          { id: "taxpayerName", label: "Taxpayer Name (M/s)", labelBn: "করদাতার নাম", type: "text", required: true },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true },
          { id: "address", label: "Address", labelBn: "ঠিকানা", type: "textarea", required: true }
        ]
      },
      {
        groupId: "scnDetails",
        groupTitle: "SCN Details",
        groupTitleBn: "নোটিশের তথ্য",
        fields: [
          { id: "scnNumber", label: "SCN Number", labelBn: "নোটিশ নম্বর", type: "text", required: true },
          { id: "scnDate", label: "SCN Date", labelBn: "নোটিশের তারিখ", type: "date", required: true },
          { id: "hearingDate", label: "Personal Hearing Date", labelBn: "শুনানির তারিখ", type: "date", required: true },
          { id: "hearingTime", label: "Hearing Time", labelBn: "শুনানির সময়", type: "text", required: false, placeholder: "e.g. 11:00 AM" }
        ]
      },
      {
        groupId: "nonFilingDetails",
        groupTitle: "Non-Filing Details",
        groupTitleBn: "রিটার্ন দাখিল না করার বিবরণ",
        fields: [
          { id: "returnType", label: "Return Type", labelBn: "রিটার্নের ধরন", type: "select", required: true, options: ["GSTR-3B", "GSTR-1", "GSTR-3B and GSTR-1", "CMP-08 (Composition)", "GSTR-7 (TDS)", "GSTR-8 (TCS)"] },
          { id: "numberOfMonths", label: "Number of Consecutive Periods Defaulted", labelBn: "ধারাবাহিক ডিফল্ট পিরিয়ড সংখ্যা", type: "text", required: true, placeholder: "e.g. 6 months / 2 quarters" },
          { id: "periodsNotFiled", label: "Specific Periods Not Filed", labelBn: "যে পিরিয়ডগুলো দাখিল হয়নি", type: "textarea", required: true, placeholder: "e.g. Apr 2024 to Sep 2024" }
        ]
      },
      APPLICANT_GROUP,
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_89",
    groups: [
      {
        groupId: "taxpayerDetails",
        groupTitle: "Taxpayer / Noticee Details",
        groupTitleBn: "করদাতার তথ্য",
        fields: [
          { id: "taxpayerName", label: "Taxpayer Name (M/s)", labelBn: "করদাতার নাম", type: "text", required: true },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true },
          { id: "address", label: "Address", labelBn: "ঠিকানা", type: "textarea", required: true },
          { id: "registrationDate", label: "Registration Date", labelBn: "নিবন্ধনের তারিখ", type: "date", required: true },
          { id: "declaredAddress", label: "Address Declared at Registration", labelBn: "নিবন্ধে ঘোষিত ঠিকানা", type: "textarea", required: false }
        ]
      },
      {
        groupId: "scnDetails",
        groupTitle: "SCN & Inspection Details",
        groupTitleBn: "নোটিশ ও পরিদর্শনের তথ্য",
        fields: [
          { id: "scnNumber", label: "SCN Number", labelBn: "নোটিশ নম্বর", type: "text", required: true },
          { id: "scnDate", label: "SCN Date", labelBn: "নোটিশের তারিখ", type: "date", required: true },
          { id: "inspectionDate", label: "Date of Inspection/Enquiry", labelBn: "পরিদর্শনের তারিখ", type: "date", required: true },
          { id: "retrospectiveDate", label: "Proposed Retrospective Cancellation Date", labelBn: "প্রস্তাবিত পূর্ববর্তী তারিখ থেকে বাতিল", type: "date", required: true },
          { id: "hearingDate", label: "Personal Hearing Date", labelBn: "শুনানির তারিখ", type: "date", required: true },
          { id: "hearingTime", label: "Hearing Time", labelBn: "শুনানির সময়", type: "text", required: false }
        ]
      },
      {
        groupId: "fraudDetails",
        groupTitle: "Fraud / Misrepresentation Details",
        groupTitleBn: "জালিয়াতি/মিথ্যা তথ্যের বিবরণ",
        fields: [
          { id: "fraudDetails", label: "Description of Fraud/Misrepresentation Found", labelBn: "জালিয়াতি/মিথ্যা তথ্যের বিবরণ", type: "textarea", required: true, placeholder: "Describe the specific fraud or misstatement found during inspection" },
          { id: "finding1", label: "Finding 1", labelBn: "অনুসন্ধান ১", type: "text", required: true },
          { id: "finding2", label: "Finding 2", labelBn: "অনুসন্ধান ২", type: "text", required: false },
          { id: "finding3", label: "Finding 3", labelBn: "অনুসন্ধান ৩", type: "text", required: false }
        ]
      },
      APPLICANT_GROUP,
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_90",
    groups: [
      {
        groupId: "taxpayerDetails",
        groupTitle: "Taxpayer / Noticee Details",
        groupTitleBn: "করদাতার তথ্য",
        fields: [
          { id: "taxpayerName", label: "Taxpayer Name (M/s)", labelBn: "করদাতার নাম", type: "text", required: true },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true },
          { id: "address", label: "Address", labelBn: "ঠিকানা", type: "textarea", required: true },
          { id: "registrationDate", label: "Date of Registration", labelBn: "নিবন্ধনের তারিখ", type: "date", required: true }
        ]
      },
      {
        groupId: "cancellationDetails",
        groupTitle: "Cancellation Ground Details",
        groupTitleBn: "বাতিলের কারণের বিবরণ",
        fields: [
          { id: "cancellationGround", label: "Ground for Cancellation", labelBn: "বাতিলের কারণ", type: "select", required: true, options: ["not commenced business within 6 months of registration", "business has been discontinued / closed", "business has been transferred / amalgamated", "all supplies are exempted from GST", "registered person is no longer liable to pay tax"] },
          { id: "groundDetails", label: "Specific Details of Ground", labelBn: "কারণের বিস্তারিত তথ্য", type: "textarea", required: true },
          { id: "basis1", label: "Basis / Evidence 1", labelBn: "ভিত্তি/প্রমাণ ১", type: "text", required: true },
          { id: "basis2", label: "Basis / Evidence 2", labelBn: "ভিত্তি/প্রমাণ ২", type: "text", required: false },
          { id: "basis3", label: "Basis / Evidence 3", labelBn: "ভিত্তি/প্রমাণ ৩", type: "text", required: false }
        ]
      },
      {
        groupId: "scnDetails",
        groupTitle: "SCN Details",
        groupTitleBn: "নোটিশের তথ্য",
        fields: [
          { id: "scnNumber", label: "SCN Number", labelBn: "নোটিশ নম্বর", type: "text", required: true },
          { id: "scnDate", label: "SCN Date", labelBn: "নোটিশের তারিখ", type: "date", required: true },
          { id: "hearingDate", label: "Hearing Date", labelBn: "শুনানির তারিখ", type: "date", required: true },
          { id: "hearingTime", label: "Hearing Time", labelBn: "শুনানির সময়", type: "text", required: false }
        ]
      },
      APPLICANT_GROUP,
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_91",
    groups: [
      {
        groupId: "taxpayerDetails",
        groupTitle: "Taxpayer Details",
        groupTitleBn: "করদাতার তথ্য",
        fields: [
          { id: "taxpayerName", label: "Taxpayer Name (M/s)", labelBn: "করদাতার নাম", type: "text", required: true },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true },
          { id: "address", label: "Address", labelBn: "ঠিকানা", type: "textarea", required: true }
        ]
      },
      {
        groupId: "orderDetails",
        groupTitle: "Order & SCN Reference",
        groupTitleBn: "আদেশ ও নোটিশের রেফারেন্স",
        fields: [
          { id: "orderNumber", label: "Order Number", labelBn: "আদেশ নম্বর", type: "text", required: true },
          { id: "orderDate", label: "Order Date", labelBn: "আদেশের তারিখ", type: "date", required: true },
          { id: "scnNumber", label: "SCN Number (Reference)", labelBn: "নোটিশ নম্বর (রেফারেন্স)", type: "text", required: true },
          { id: "scnDate", label: "SCN Date", labelBn: "নোটিশের তারিখ", type: "date", required: true }
        ]
      },
      {
        groupId: "cancellationFindings",
        groupTitle: "Cancellation Findings & Order",
        groupTitleBn: "বাতিলের কারণ ও আদেশ",
        fields: [
          { id: "groundSummary", label: "Ground for Cancellation (Summary)", labelBn: "বাতিলের কারণ (সংক্ষেপ)", type: "text", required: true },
          { id: "replyStatus", label: "Reply Status", labelBn: "জবাবের অবস্থা", type: "select", required: true, options: ["No reply received within stipulated time", "Reply filed but found unsatisfactory", "Reply filed — examined and rejected", "Ex-parte proceedings"] },
          { id: "hearingStatus", label: "Hearing Status", labelBn: "শুনানির অবস্থা", type: "select", required: true, options: ["Personal hearing availed on [date]", "Personal hearing not availed despite opportunity", "Hearing waived by taxpayer in writing"] },
          { id: "findingDetails", label: "Detailed Findings", labelBn: "বিস্তারিত অনুসন্ধান", type: "textarea", required: true },
          { id: "replyConsideration", label: "Consideration of Reply", labelBn: "জবাব বিবেচনা", type: "textarea", required: true },
          { id: "conclusionReasons", label: "Reasons for Conclusion", labelBn: "সিদ্ধান্তের কারণ", type: "textarea", required: true },
          { id: "cancellationDate", label: "Effective Date of Cancellation", labelBn: "বাতিলের কার্যকর তারিখ", type: "date", required: true }
        ]
      },
      APPLICANT_GROUP,
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_92",
    groups: [
      {
        groupId: "taxpayerDetails",
        groupTitle: "Taxpayer Details",
        groupTitleBn: "করদাতার তথ্য",
        fields: [
          { id: "taxpayerName", label: "Taxpayer Name (M/s)", labelBn: "করদাতার নাম", type: "text", required: true },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true },
          { id: "address", label: "Address", labelBn: "ঠিকানা", type: "textarea", required: true }
        ]
      },
      {
        groupId: "suspensionDetails",
        groupTitle: "Suspension Details",
        groupTitleBn: "সাসপেনশনের বিবরণ",
        fields: [
          { id: "noticeNumber", label: "Suspension Notice Number", labelBn: "সাসপেনশন নোটিশ নম্বর", type: "text", required: true },
          { id: "noticeDate", label: "Notice Date", labelBn: "নোটিশের তারিখ", type: "date", required: true },
          { id: "scnNumber", label: "Related SCN Number", labelBn: "সংশ্লিষ্ট এসসিএন নম্বর", type: "text", required: true },
          { id: "scnDate", label: "SCN Date", labelBn: "এসসিএন তারিখ", type: "date", required: true },
          { id: "suspensionDate", label: "Effective Date of Suspension", labelBn: "সাসপেনশনের কার্যকর তারিখ", type: "date", required: true },
          { id: "groundSummary", label: "Ground for SCN/Suspension", labelBn: "এসসিএন/সাসপেনশনের কারণ", type: "text", required: true }
        ]
      },
      APPLICANT_GROUP,
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_93",
    groups: [
      {
        groupId: "taxpayerDetails",
        groupTitle: "Taxpayer Details",
        groupTitleBn: "করদাতার তথ্য",
        fields: [
          { id: "taxpayerName", label: "Taxpayer Name (M/s)", labelBn: "করদাতার নাম", type: "text", required: true },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true },
          { id: "address", label: "Address", labelBn: "ঠিকানা", type: "textarea", required: true }
        ]
      },
      {
        groupId: "revocationDetails",
        groupTitle: "Suspension Revocation Details",
        groupTitleBn: "সাসপেনশন প্রত্যাহারের বিবরণ",
        fields: [
          { id: "orderNumber", label: "Order Number", labelBn: "আদেশ নম্বর", type: "text", required: true },
          { id: "orderDate", label: "Order Date", labelBn: "আদেশের তারিখ", type: "date", required: true },
          { id: "scnNumber", label: "Original SCN Number", labelBn: "মূল এসসিএন নম্বর", type: "text", required: true },
          { id: "scnDate", label: "SCN Date", labelBn: "এসসিএন তারিখ", type: "date", required: true },
          { id: "suspensionNoticeNumber", label: "Suspension Notice Number", labelBn: "সাসপেনশন নোটিশ নম্বর", type: "text", required: true },
          { id: "suspensionDate", label: "Date of Suspension", labelBn: "সাসপেনশনের তারিখ", type: "date", required: true },
          { id: "replyDate", label: "Date of Taxpayer Reply", labelBn: "করদাতার জবাবের তারিখ", type: "date", required: false },
          { id: "revocationGround", label: "Ground for Revoking Suspension", labelBn: "সাসপেনশন প্রত্যাহারের কারণ", type: "select", required: true, options: ["SCN withdrawn by officer", "Taxpayer reply accepted — grounds not established", "All pending returns filed and dues paid", "Revocation of cancellation granted under s.30", "Court/Appellate order directing revocation"] },
          { id: "complianceStatus", label: "Compliance Status Details", labelBn: "সম্মতির অবস্থা", type: "textarea", required: true },
          { id: "revocationDate", label: "Effective Date of Revocation", labelBn: "প্রত্যাহারের কার্যকর তারিখ", type: "date", required: true },
          { id: "scnStatus", label: "Status of Underlying SCN", labelBn: "মূল এসসিএনের অবস্থা", type: "select", required: true, options: ["withdrawn", "dropped", "pending — to be proceeded separately", "resolved by payment of dues"] }
        ]
      },
      APPLICANT_GROUP,
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_94",
    groups: [
      {
        groupId: "taxpayerDetails",
        groupTitle: "Applicant (Cancelled Taxpayer) Details",
        groupTitleBn: "আবেদনকারীর তথ্য (বাতিল করদাতা)",
        fields: [
          { id: "taxpayerName", label: "Taxpayer Name (M/s)", labelBn: "করদাতার নাম", type: "text", required: true },
          { id: "gstin", label: "Cancelled GSTIN", labelBn: "বাতিল জিএসটিএন", type: "text", required: true },
          { id: "address", label: "Address", labelBn: "ঠিকানা", type: "textarea", required: true }
        ]
      },
      {
        groupId: "revocationApplicationDetails",
        groupTitle: "Revocation Application Details",
        groupTitleBn: "প্রত্যাহার আবেদনের বিবরণ",
        fields: [
          { id: "scnNumber", label: "SCN Number (for rejection)", labelBn: "নোটিশ নম্বর (প্রত্যাখ্যানের জন্য)", type: "text", required: true },
          { id: "scnDate", label: "SCN Date", labelBn: "নোটিশের তারিখ", type: "date", required: true },
          { id: "cancellationOrderNumber", label: "Original Cancellation Order No.", labelBn: "মূল বাতিলের আদেশ নম্বর", type: "text", required: true },
          { id: "cancellationDate", label: "Date of Cancellation", labelBn: "বাতিলের তারিখ", type: "date", required: true },
          { id: "cancellationGround", label: "Original Cancellation Ground", labelBn: "মূল বাতিলের কারণ", type: "text", required: true },
          { id: "revocationApplicationDate", label: "Date of Revocation Application (REG-21)", labelBn: "প্রত্যাহার আবেদনের তারিখ", type: "date", required: true },
          { id: "arn", label: "ARN of Application", labelBn: "আবেদনের এআরএন", type: "text", required: true },
          { id: "deficiencyDetails", label: "Deficiencies in Revocation Application", labelBn: "আবেদনের ত্রুটির বিবরণ", type: "textarea", required: true, hint: "List specific deficiencies like: returns not filed, dues not paid, application filed late, insufficient documents" },
          { id: "hearingDate", label: "Hearing Date", labelBn: "শুনানির তারিখ", type: "date", required: true },
          { id: "hearingTime", label: "Hearing Time", labelBn: "শুনানির সময়", type: "text", required: false }
        ]
      },
      APPLICANT_GROUP,
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_95",
    groups: [
      {
        groupId: "taxpayerDetails",
        groupTitle: "Applicant Details",
        groupTitleBn: "আবেদনকারীর তথ্য",
        fields: [
          { id: "taxpayerName", label: "Taxpayer Name (M/s)", labelBn: "করদাতার নাম", type: "text", required: true },
          { id: "gstin", label: "Cancelled GSTIN", labelBn: "বাতিল জিএসটিএন", type: "text", required: true },
          { id: "address", label: "Address", labelBn: "ঠিকানা", type: "textarea", required: true }
        ]
      },
      {
        groupId: "orderDetails",
        groupTitle: "Revocation Order Details",
        groupTitleBn: "প্রত্যাহার আদেশের বিবরণ",
        fields: [
          { id: "orderNumber", label: "Order Number", labelBn: "আদেশ নম্বর", type: "text", required: true },
          { id: "orderDate", label: "Order Date", labelBn: "আদেশের তারিখ", type: "date", required: true },
          { id: "cancellationOrderNumber", label: "Original Cancellation Order No.", labelBn: "মূল বাতিলের আদেশ নম্বর", type: "text", required: true },
          { id: "cancellationDate", label: "Date of Original Cancellation", labelBn: "মূল বাতিলের তারিখ", type: "date", required: true },
          { id: "revocationApplicationDate", label: "Date of Revocation Application", labelBn: "প্রত্যাহার আবেদনের তারিখ", type: "date", required: true },
          { id: "arn", label: "ARN of Application", labelBn: "আবেদনের এআরএন", type: "text", required: true },
          { id: "scnReference", label: "SCN Reference (if issued)", labelBn: "এসসিএন রেফারেন্স (যদি থাকে)", type: "text", required: false },
          { id: "replyDate", label: "Date of Reply (if filed)", labelBn: "জবাবের তারিখ", type: "date", required: false },
          { id: "examinationDetails", label: "Examination Details", labelBn: "পরীক্ষার বিবরণ", type: "textarea", required: true },
          { id: "restorationDate", label: "Effective Date of Restoration", labelBn: "পুনরুদ্ধারের কার্যকর তারিখ", type: "date", required: true }
        ]
      },
      APPLICANT_GROUP,
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_96",
    groups: [
      {
        groupId: "taxpayerDetails",
        groupTitle: "Applicant Details",
        groupTitleBn: "আবেদনকারীর তথ্য",
        fields: [
          { id: "taxpayerName", label: "Taxpayer Name (M/s)", labelBn: "করদাতার নাম", type: "text", required: true },
          { id: "gstin", label: "Cancelled GSTIN", labelBn: "বাতিল জিএসটিএন", type: "text", required: true },
          { id: "address", label: "Address", labelBn: "ঠিকানা", type: "textarea", required: true }
        ]
      },
      {
        groupId: "rejectionDetails",
        groupTitle: "Rejection Order Details",
        groupTitleBn: "প্রত্যাখ্যান আদেশের বিবরণ",
        fields: [
          { id: "orderNumber", label: "Order Number", labelBn: "আদেশ নম্বর", type: "text", required: true },
          { id: "orderDate", label: "Order Date", labelBn: "আদেশের তারিখ", type: "date", required: true },
          { id: "cancellationOrderNumber", label: "Cancellation Order No.", labelBn: "বাতিলের আদেশ নম্বর", type: "text", required: true },
          { id: "cancellationDate", label: "Date of Cancellation", labelBn: "বাতিলের তারিখ", type: "date", required: true },
          { id: "revocationApplicationDate", label: "Date of Revocation Application", labelBn: "প্রত্যাহার আবেদনের তারিখ", type: "date", required: true },
          { id: "arn", label: "ARN", labelBn: "এআরএন", type: "text", required: true },
          { id: "scnNumber", label: "SCN Number", labelBn: "এসসিএন নম্বর", type: "text", required: true },
          { id: "scnDate", label: "SCN Date", labelBn: "এসসিএন তারিখ", type: "date", required: true },
          { id: "replyStatus", label: "Reply Status", labelBn: "জবাবের অবস্থা", type: "select", required: true, options: ["No reply received", "Reply filed but unsatisfactory", "Reply filed — examined and found insufficient"] },
          { id: "findingDetails", label: "Findings", labelBn: "অনুসন্ধান", type: "textarea", required: true },
          { id: "rejectionReasons", label: "Reasons for Rejection", labelBn: "প্রত্যাখ্যানের কারণ", type: "textarea", required: true }
        ]
      },
      APPLICANT_GROUP,
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_97",
    groups: [
      {
        groupId: "taxpayerDetails",
        groupTitle: "Taxpayer / Applicant Details",
        groupTitleBn: "করদাতা/আবেদনকারীর তথ্য",
        fields: [
          { id: "taxpayerName", label: "Taxpayer / Applicant Name", labelBn: "করদাতা/আবেদনকারীর নাম", type: "text", required: true },
          { id: "gstin", label: "GSTIN / ARN", labelBn: "জিএসটিএন/এআরএন", type: "text", required: true },
          { id: "address", label: "Registered Address", labelBn: "নিবন্ধিত ঠিকানা", type: "textarea", required: true }
        ]
      },
      {
        groupId: "verificationDetails",
        groupTitle: "Physical Verification Details",
        groupTitleBn: "ভৌতিক যাচাইয়ের বিবরণ",
        fields: [
          { id: "noticeNumber", label: "Notice Number", labelBn: "নোটিশ নম্বর", type: "text", required: true },
          { id: "noticeDate", label: "Notice Date", labelBn: "নোটিশের তারিখ", type: "date", required: true },
          { id: "verificationPurpose", label: "Purpose of Verification", labelBn: "যাচাইয়ের উদ্দেশ্য", type: "select", required: true, options: ["Physical verification before grant of registration (new application)", "Verification of existing registration premises", "Post-registration periodic verification", "Verification based on complaint/intelligence", "Verification for suspension/cancellation proceedings"] },
          { id: "addressToVerify", label: "Address to be Verified", labelBn: "যে ঠিকানা যাচাই হবে", type: "textarea", required: true },
          { id: "verificationReason", label: "Specific Reason for Verification", labelBn: "যাচাইয়ের নির্দিষ্ট কারণ", type: "textarea", required: true },
          { id: "verificationDate", label: "Date of Verification", labelBn: "যাচাইয়ের তারিখ", type: "date", required: true },
          { id: "verificationTime", label: "Time of Verification", labelBn: "যাচাইয়ের সময়", type: "text", required: true, placeholder: "e.g. 11:00 AM" },
          { id: "verifyingOfficerName", label: "Verification Officer Name", labelBn: "যাচাইকারী কর্মকর্তার নাম", type: "text", required: true },
          { id: "verifyingOfficerDesignation", label: "Verification Officer Designation", labelBn: "যাচাইকারী কর্মকর্তার পদবী", type: "text", required: true }
        ]
      },
      APPLICANT_GROUP,
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_98",
    groups: [
      {
        groupId: "applicantDetails",
        groupTitle: "Applicant Details",
        groupTitleBn: "আবেদনকারীর তথ্য",
        fields: [
          { id: "applicantName", label: "Applicant Name", labelBn: "আবেদনকারীর নাম", type: "text", required: true },
          { id: "arn", label: "ARN (Application Reference Number)", labelBn: "আবেদনের রেফারেন্স নম্বর", type: "text", required: true },
          { id: "applicationDate", label: "Date of Application", labelBn: "আবেদনের তারিখ", type: "date", required: true },
          { id: "address", label: "Applied Address", labelBn: "আবেদনকৃত ঠিকানা", type: "textarea", required: true },
          { id: "registrationCategory", label: "Registration Category Applied", labelBn: "আবেদনকৃত নিবন্ধনের ধরন", type: "select", required: true, options: ["Regular Taxpayer", "Composition Scheme", "Casual Taxable Person", "Non-Resident Taxable Person", "OIDAR Service Provider", "SEZ Unit / SEZ Developer", "TDS Deductor (Government)", "TCS Collector (E-Commerce)"] }
        ]
      },
      {
        groupId: "scnDetails",
        groupTitle: "SCN & Deficiency Details",
        groupTitleBn: "এসসিএন ও ত্রুটির বিবরণ",
        fields: [
          { id: "scnNumber", label: "SCN Number", labelBn: "এসসিএন নম্বর", type: "text", required: true },
          { id: "scnDate", label: "SCN Date", labelBn: "এসসিএন তারিখ", type: "date", required: true },
          { id: "verificationDate", label: "Verification Report Date (if any)", labelBn: "যাচাই রিপোর্টের তারিখ", type: "date", required: false },
          { id: "deficiencyDetails", label: "Deficiencies Found", labelBn: "চিহ্নিত ত্রুটি", type: "textarea", required: true, hint: "List each deficiency — e.g. address proof invalid, business not operational, documents fraudulent, PAN mismatch" },
          { id: "observation1", label: "Specific Observation 1", labelBn: "নির্দিষ্ট পর্যবেক্ষণ ১", type: "text", required: true },
          { id: "observation2", label: "Specific Observation 2", labelBn: "নির্দিষ্ট পর্যবেক্ষণ ২", type: "text", required: false },
          { id: "observation3", label: "Specific Observation 3", labelBn: "নির্দিষ্ট পর্যবেক্ষণ ৩", type: "text", required: false },
          { id: "hearingDate", label: "Personal Hearing Date", labelBn: "ব্যক্তিগত শুনানির তারিখ", type: "date", required: true },
          { id: "hearingTime", label: "Hearing Time", labelBn: "শুনানির সময়", type: "text", required: false }
        ]
      },
      APPLICANT_GROUP,
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_99",
    groups: [
      {
        groupId: "applicantDetails",
        groupTitle: "Applicant Details",
        groupTitleBn: "আবেদনকারীর তথ্য",
        fields: [
          { id: "applicantName", label: "Applicant Name", labelBn: "আবেদনকারীর নাম", type: "text", required: true },
          { id: "arn", label: "ARN", labelBn: "এআরএন", type: "text", required: true },
          { id: "applicationDate", label: "Application Date", labelBn: "আবেদনের তারিখ", type: "date", required: true },
          { id: "address", label: "Address", labelBn: "ঠিকানা", type: "textarea", required: true }
        ]
      },
      {
        groupId: "rejectionOrderDetails",
        groupTitle: "Rejection Order Details",
        groupTitleBn: "প্রত্যাখ্যান আদেশের বিবরণ",
        fields: [
          { id: "orderNumber", label: "Order Number", labelBn: "আদেশ নম্বর", type: "text", required: true },
          { id: "orderDate", label: "Order Date", labelBn: "আদেশের তারিখ", type: "date", required: true },
          { id: "scnNumber", label: "SCN Number", labelBn: "এসসিএন নম্বর", type: "text", required: true },
          { id: "scnDate", label: "SCN Date", labelBn: "এসসিএন তারিখ", type: "date", required: true },
          { id: "verificationDate", label: "Verification Date (if applicable)", labelBn: "যাচাইয়ের তারিখ", type: "date", required: false },
          { id: "deficiencySummary", label: "Summary of Deficiencies", labelBn: "ত্রুটির সংক্ষেপ", type: "text", required: true },
          { id: "replyStatus", label: "Reply Status", labelBn: "জবাবের অবস্থা", type: "select", required: true, options: ["No reply received within time", "Reply filed but deficiencies not addressed", "Reply unsatisfactory — documents invalid"] },
          { id: "replyExamination", label: "Examination of Reply", labelBn: "জবাব পরীক্ষা", type: "textarea", required: true },
          { id: "findingDetails", label: "Findings", labelBn: "অনুসন্ধান", type: "textarea", required: true },
          { id: "rejectionReasons", label: "Reasons for Rejection", labelBn: "প্রত্যাখ্যানের কারণ", type: "textarea", required: true }
        ]
      },
      APPLICANT_GROUP,
      AI_INSTRUCTIONS_GROUP
    ]
  },
  {
    templateId: "gst_100",
    groups: [
      {
        groupId: "taxpayerDetails",
        groupTitle: "Taxpayer Details",
        groupTitleBn: "করদাতার তথ্য",
        fields: [
          { id: "taxpayerName", label: "Taxpayer Name (M/s)", labelBn: "করদাতার নাম", type: "text", required: true },
          { id: "gstin", label: "GSTIN", labelBn: "জিএসটিএন", type: "text", required: true },
          { id: "address", label: "Current Registered Address", labelBn: "বর্তমান নিবন্ধিত ঠিকানা", type: "textarea", required: true }
        ]
      },
      {
        groupId: "amendmentDetails",
        groupTitle: "Amendment Details",
        groupTitleBn: "সংশোধনীর বিবরণ",
        fields: [
          { id: "noticeNumber", label: "Notice Number", labelBn: "নোটিশ নম্বর", type: "text", required: true },
          { id: "noticeDate", label: "Notice Date", labelBn: "নোটিশের তারিখ", type: "date", required: true },
          { id: "basisForAmendment", label: "Basis for Amendment", labelBn: "সংশোধনীর ভিত্তি", type: "select", required: true, options: ["Physical verification report showing discrepancy", "Intelligence/complaint received", "Mismatch with PAN/Aadhaar records", "Change of business activity detected", "Court/appellate direction", "Suo-motu correction of data entry error"] },
          { id: "amendmentGrounds", label: "Detailed Grounds for Amendment", labelBn: "সংশোধনীর বিস্তারিত কারণ", type: "textarea", required: true },
          { id: "field1", label: "Field to be Amended 1", labelBn: "সংশোধনীয় ক্ষেত্র ১", type: "text", required: true, placeholder: "e.g. Principal Place of Business Address" },
          { id: "currentValue1", label: "Current Value (Field 1)", labelBn: "বর্তমান মান ১", type: "text", required: true },
          { id: "amendedValue1", label: "Proposed Amended Value (Field 1)", labelBn: "প্রস্তাবিত সংশোধিত মান ১", type: "text", required: true },
          { id: "field2", label: "Field to be Amended 2 (optional)", labelBn: "সংশোধনীয় ক্ষেত্র ২", type: "text", required: false },
          { id: "currentValue2", label: "Current Value (Field 2)", labelBn: "বর্তমান মান ২", type: "text", required: false },
          { id: "amendedValue2", label: "Proposed Amended Value (Field 2)", labelBn: "প্রস্তাবিত সংশোধিত মান ২", type: "text", required: false },
          { id: "field3", label: "Field to be Amended 3 (optional)", labelBn: "সংশোধনীয় ক্ষেত্র ৩", type: "text", required: false },
          { id: "currentValue3", label: "Current Value (Field 3)", labelBn: "বর্তমান মান ৩", type: "text", required: false },
          { id: "amendedValue3", label: "Proposed Amended Value (Field 3)", labelBn: "প্রস্তাবিত সংশোধিত মান ৩", type: "text", required: false },
          { id: "hearingDate", label: "Hearing Date (for objection)", labelBn: "শুনানির তারিখ", type: "date", required: true },
          { id: "hearingTime", label: "Hearing Time", labelBn: "শুনানির সময়", type: "text", required: false }
        ]
      },
      APPLICANT_GROUP,
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
