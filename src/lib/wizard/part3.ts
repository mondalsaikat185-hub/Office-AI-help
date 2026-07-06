import { WizardConfig, APPLICANT_GROUP, AI_INSTRUCTIONS_GROUP } from './wizardTypes';

// Wizard configs: gst_71 … gst_86
export const WIZARD_PART3: WizardConfig[] = [
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
  }
];
