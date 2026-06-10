import { Template } from '../types';

export interface TemplateRule {
  id: string;
  act: string;           // e.g., "Customs Act, 1962"
  section: string;       // e.g., "Section 27"
  title: string;         // e.g., "Claim for Refund of Duty"
  description: string;   // Brief explanation
  defaultSelected: boolean;
  required: boolean;     // If true, cannot be unchecked
}

export interface TemplateRuleSet {
  templateId: string;
  rules: TemplateRule[];
}

const CUSTOMS_ACT = "Customs Act, 1962";
const CGST_ACT = "CGST Act, 2017";
const CGST_RULES = "CGST Rules, 2017";

const SPECIFIC_RULES: TemplateRuleSet[] = [
  {
    templateId: "cus_21",
    rules: [
      {
        id: "customs_s28",
        act: CUSTOMS_ACT,
        section: "Section 28",
        title: "Recovery of Duties",
        description: "Demand notice for short levy or non-levy of customs duty",
        defaultSelected: true,
        required: true
      },
      {
        id: "customs_s46_3",
        act: CUSTOMS_ACT,
        section: "Section 46(3)",
        title: "Late Presentation Charges",
        description: "Charges for delayed filing of Bill of Entry",
        defaultSelected: true,
        required: false
      },
      {
        id: "boe_reg_4_3",
        act: "BE Regulations, 2018",
        section: "Regulation 4(3)",
        title: "Rate of Late Presentation Charges",
        description: "Prescribed rate for late presentation levy",
        defaultSelected: true,
        required: false
      },
      {
        id: "customs_s124",
        act: CUSTOMS_ACT,
        section: "Section 124",
        title: "Issue of Show Cause Notice before Confiscation",
        description: "Mandatory SCN before order of confiscation/penalty",
        defaultSelected: true,
        required: true
      }
    ]
  },
  {
    templateId: "cus_22",
    rules: [
      {
        id: "customs_s27",
        act: CUSTOMS_ACT,
        section: "Section 27",
        title: "Claim for Refund of Duty",
        description: "Refund application for duty or interest paid in excess",
        defaultSelected: true,
        required: true
      },
      {
        id: "customs_s46_3",
        act: CUSTOMS_ACT,
        section: "Section 46(3)",
        title: "Late Presentation Charges",
        description: "Charges for delayed filing of Bill of Entry",
        defaultSelected: true,
        required: true
      },
      {
        id: "boe_reg_4_3",
        act: "BE Regulations, 2018",
        section: "Regulation 4(3)",
        title: "Rate of Late Presentation Charges",
        description: "Prescribed statutory rate for late presentation",
        defaultSelected: true,
        required: false
      },
      {
        id: "customs_s128",
        act: CUSTOMS_ACT,
        section: "Section 128",
        title: "Appeal to Commissioner (Appeals)",
        description: "Adds 60-day appeal clause in the order",
        defaultSelected: true,
        required: false
      },
      {
        id: "customs_s125",
        act: CUSTOMS_ACT,
        section: "Section 125",
        title: "Option to Pay Fine in Lieu of Confiscation",
        description: "Fine payment option — include only if confiscation involved",
        defaultSelected: false,
        required: false
      },
      {
        id: "cestat_kai",
        act: "Case Law",
        section: "2026 (3) TMI 1545 — CESTAT Kolkata",
        title: "M/s Kai International — Distinguishable on Facts",
        description: "CESTAT decision distinguishable — IGM/BoE amendment refusal",
        defaultSelected: false,
        required: false
      }
    ]
  },
  {
    templateId: "cus_23",
    rules: [
      {
        id: "customs_s124",
        act: CUSTOMS_ACT,
        section: "Section 124",
        title: "SCN Before Order",
        description: "Personal hearing mandatory before adjudication",
        defaultSelected: true,
        required: true
      },
      {
        id: "customs_rules_hearing",
        act: "Customs (Prevention of Smuggling)",
        section: "Principle of Natural Justice",
        title: "Right to be Heard — Audi Alteram Partem",
        description: "Right of noticee to be heard before adverse order",
        defaultSelected: true,
        required: true
      }
    ]
  },
  {
    templateId: "cus_24",
    rules: [
      {
        id: "customs_s27",
        act: CUSTOMS_ACT,
        section: "Section 27",
        title: "Claim for Refund of Duty",
        description: "Sanctioning refund under Section 27",
        defaultSelected: true,
        required: true
      },
      {
        id: "customs_s27_3",
        act: CUSTOMS_ACT,
        section: "Section 27(3)",
        title: "Unjust Enrichment Check",
        description: "Refund only if applicant has not passed on duty burden",
        defaultSelected: true,
        required: false
      },
      {
        id: "customs_cwf",
        act: CUSTOMS_ACT,
        section: "Section 27(2) — Consumer Welfare Fund",
        title: "Credit to Consumer Welfare Fund",
        description: "If unjust enrichment applies, amount credited to CWF",
        defaultSelected: false,
        required: false
      }
    ]
  },
  {
    templateId: "cus_25",
    rules: [
      {
        id: "sop_bulk",
        act: "Commissioner SOP",
        section: "Public Notice No. 05/2023",
        title: "SOP for Delivery of Excess Dry Bulk Cargo",
        description: "Joint survey SOP for excess bulk cargo — dated 19.05.2023",
        defaultSelected: true,
        required: true
      },
      {
        id: "customs_s46",
        act: CUSTOMS_ACT,
        section: "Section 46",
        title: "Entry of Goods by Importer",
        description: "Supplementary BoE for excess quantity cargo",
        defaultSelected: true,
        required: false
      }
    ]
  }
];

const GST_REFUND_RULES: TemplateRule[] = [
  {
    id: "gst_s54",
    act: CGST_ACT,
    section: "Section 54",
    title: "Refund of Tax",
    description: "Refund application for tax, interest or input tax credit",
    defaultSelected: true,
    required: true
  },
  {
    id: "gst_r89",
    act: CGST_RULES,
    section: "Rule 89",
    title: "Application for Refund",
    description: "Prescribed procedure and documents for claiming GST refund",
    defaultSelected: true,
    required: true
  },
  {
    id: "gst_s56",
    act: CGST_ACT,
    section: "Section 56",
    title: "Interest on Delayed Refund",
    description: "Interest payable if refund not processed within 60 days",
    defaultSelected: false,
    required: false
  },
  {
    id: "gst_cir125",
    act: "GST Circular",
    section: "Circular No. 125/44/2019-GST",
    title: "Refund Processing SOP",
    description: "Guidelines and instructions for electronic processing of refunds",
    defaultSelected: false,
    required: false
  }
];

const GST_DEMAND_RULES: TemplateRule[] = [
  {
    id: "gst_s73",
    act: CGST_ACT,
    section: "Section 73",
    title: "Determination of Tax (Normal Period)",
    description: "SCN and demand in non-fraud, non-suppression cases",
    defaultSelected: true,
    required: true
  },
  {
    id: "gst_s74",
    act: CGST_ACT,
    section: "Section 74",
    title: "Determination with Fraud/Suppression",
    description: "Extended period SCN and penalty in suppression/evasion cases",
    defaultSelected: false,
    required: false
  },
  {
    id: "gst_s75",
    act: CGST_ACT,
    section: "Section 75",
    title: "General Provisions for Adjudication",
    description: "Legal timeline limits, interest rates and hearing requirements",
    defaultSelected: true,
    required: false
  },
  {
    id: "gst_s50",
    act: CGST_ACT,
    section: "Section 50",
    title: "Interest on Delayed Payment",
    description: "Interest liability on delayed tax payments",
    defaultSelected: false,
    required: false
  },
  {
    id: "gst_s122",
    act: CGST_ACT,
    section: "Section 122",
    title: "Penalty for Certain Offences",
    description: "Standard statutory penalties for specified GST violations",
    defaultSelected: false,
    required: false
  }
];

// Helper to generate rules for other templates to avoid manual bloat
const generatedRules: TemplateRuleSet[] = [];

// Generate empty rules for other templates programmatically
// This ensures every default template id from defaultTemplates has a rule entry.
for (let i = 1; i <= 43; i++) {
  const tId = `gst_${i}`;
  // Map gst refund templates
  // gst_11 is Reply to Refund Rejection RFD-09
  // gst_12 is Note Sheet for sanctioning GST Refund
  // gst_13 is IGST Refund Sanction Order RFD-06
  if (i === 11 || i === 12 || i === 13) {
    generatedRules.push({
      templateId: tId,
      rules: GST_REFUND_RULES
    });
  } else if (
    i === 1 || i === 2 || i === 3 || i === 5 || i === 6
  ) {
    // SCN, OIO and Notices are demand-related
    generatedRules.push({
      templateId: tId,
      rules: GST_DEMAND_RULES
    });
  } else {
    generatedRules.push({
      templateId: tId,
      rules: []
    });
  }
}

// Generate empty rules for other Customs templates
for (let i = 1; i <= 20; i++) {
  generatedRules.push({
    templateId: `cus_${i}`,
    rules: []
  });
}

// Combine all rules
export const TEMPLATE_RULES: TemplateRuleSet[] = [
  ...SPECIFIC_RULES,
  ...generatedRules,

  // ── Phase 1: GST Official Notices — Rules ──────────────────────

  // gst_44: SCN Section 73 — GSTR-1 vs GSTR-3B Mismatch
  {
    templateId: "gst_44",
    rules: [
      { id: "cgst_s73_1", act: "CGST Act 2017", section: "Section 73(1)", title: "SCN — Normal Period (3 Years)", description: "SCN for short-payment not involving fraud/suppression — limitation 3 years from due date of annual return", defaultSelected: true, required: true },
      { id: "cgst_s50_1_44", act: "CGST Act 2017", section: "Section 50(1)", title: "Interest @ 18% on Short-Payment", description: "18% per annum interest from due date of payment to actual payment date", defaultSelected: true, required: false },
      { id: "cgst_s73_9_44", act: "CGST Act 2017", section: "Section 73(9)", title: "Penalty @ 10% of Tax (Normal Period)", description: "Where tax not paid, penalty = 10% of tax, minimum Rs.10,000", defaultSelected: true, required: false },
      { id: "cgst_r142_1_44", act: "CGST Rules 2017", section: "Rule 142(1)", title: "DRC-01 — SCN Format", description: "Notice must be issued in Form GST DRC-01 with DIN", defaultSelected: true, required: true },
      { id: "cbic_din_44", act: "CBIC Circular", section: "Circular No. 122/41/2019-GST", title: "DIN Mandatory on All Notices", description: "Every communication must have DIN generated on CBIC-DIN portal", defaultSelected: true, required: true }
    ]
  },

  // gst_45: SCN Section 73 — Excess ITC (GSTR-2B vs GSTR-3B)
  {
    templateId: "gst_45",
    rules: [
      { id: "cgst_s73_1_45", act: "CGST Act 2017", section: "Section 73(1)", title: "SCN — Excess ITC (Normal Period)", description: "SCN for excess ITC availed not involving fraud — 3-year limitation", defaultSelected: true, required: true },
      { id: "cgst_s16_2aa", act: "CGST Act 2017", section: "Section 16(2)(aa)", title: "ITC Restricted to GSTR-2B Amount", description: "ITC available only to extent reflected in GSTR-2B (inserted w.e.f. 01.01.2022)", defaultSelected: true, required: true },
      { id: "cgst_s50_3", act: "CGST Act 2017", section: "Section 50(3)", title: "Interest @ 24% on Wrongly Availed ITC", description: "24% per annum on ITC wrongly availed and utilised — from date of utilisation", defaultSelected: true, required: false },
      { id: "cgst_r142_1_45", act: "CGST Rules 2017", section: "Rule 142(1)", title: "DRC-01 Format", description: "SCN in Form GST DRC-01", defaultSelected: true, required: true },
      { id: "cgst_circ_183", act: "CBIC Circular", section: "Circular No. 183/15/2022-GST", title: "ITC Mismatch — GSTR-2B Basis", description: "Clarification on availment of ITC on basis of GSTR-2B", defaultSelected: false, required: false }
    ]
  },

  // gst_46: SCN Section 73 — RCM Non-Payment
  {
    templateId: "gst_46",
    rules: [
      { id: "cgst_s9_3_46", act: "CGST Act 2017", section: "Section 9(3)", title: "Reverse Charge — Notified Services", description: "GST payable by recipient under RCM on services notified under Section 9(3)", defaultSelected: true, required: true },
      { id: "cgst_s9_4_46", act: "CGST Act 2017", section: "Section 9(4)", title: "Reverse Charge — Unregistered Supplier", description: "RCM on specified inward supplies from unregistered persons", defaultSelected: false, required: false },
      { id: "notif_13_2017_ct", act: "Notification", section: "No. 13/2017-CT(Rate) dated 28.06.2017", title: "Services Notified under RCM Section 9(3)", description: "Legal services, GTA, director remuneration, security services, etc.", defaultSelected: true, required: false },
      { id: "cgst_s73_1_46", act: "CGST Act 2017", section: "Section 73(1)", title: "SCN for RCM Non-Payment (Normal Period)", description: "Normal period SCN — RCM tax not paid", defaultSelected: true, required: true },
      { id: "cgst_s50_1_46", act: "CGST Act 2017", section: "Section 50(1)", title: "Interest @ 18% on RCM Default", description: "Interest on RCM tax paid late / not paid", defaultSelected: true, required: false }
    ]
  },

  // gst_47: SCN Section 76 — Tax Collected Not Deposited
  {
    templateId: "gst_47",
    rules: [
      { id: "cgst_s76_1", act: "CGST Act 2017", section: "Section 76(1)", title: "Tax Collected Must be Deposited", description: "Any amount collected as GST from any person must be deposited to Government regardless of taxability", defaultSelected: true, required: true },
      { id: "cgst_s76_2", act: "CGST Act 2017", section: "Section 76(2)", title: "Penalty = Tax Collected", description: "Penalty under Section 76 equals the amount of tax collected but not deposited", defaultSelected: true, required: false },
      { id: "cgst_s50_1_47", act: "CGST Act 2017", section: "Section 50(1)", title: "Interest @ 18%", description: "Interest from due date of deposit to actual date of deposit", defaultSelected: true, required: false }
    ]
  },

  // gst_48: SCN Section 74 — Fraud/Suppression (5 Years)
  {
    templateId: "gst_48",
    rules: [
      { id: "cgst_s74_1_48", act: "CGST Act 2017", section: "Section 74(1)", title: "SCN — Fraud/Suppression (Extended 5 Years)", description: "SCN where tax has been evaded by fraud / wilful misstatement / suppression of facts — limitation 5 years", defaultSelected: true, required: true },
      { id: "cgst_s74_9_48", act: "CGST Act 2017", section: "Section 74(9)", title: "Mandatory Penalty @ 100% of Tax", description: "Penalty equal to the tax evaded — mandatory, not discretionary, under Section 74", defaultSelected: true, required: true },
      { id: "cgst_s74_5_48", act: "CGST Act 2017", section: "Section 74(5)", title: "Reduced Penalty 15% — Voluntary Payment within 30 days of SCN", description: "If tax + interest paid within 30 days of SCN — penalty reduced to 15%", defaultSelected: true, required: false },
      { id: "cgst_s74_8_48", act: "CGST Act 2017", section: "Section 74(8)", title: "Reduced Penalty 25% — Paid within 30 days of Order", description: "If paid within 30 days of adjudication order — penalty 25%", defaultSelected: true, required: false },
      { id: "cgst_s50_1_48", act: "CGST Act 2017", section: "Section 50(1)", title: "Interest @ 18% per annum", description: "From due date of tax payment to actual date of payment", defaultSelected: true, required: false },
      { id: "cgst_s132_48", act: "CGST Act 2017", section: "Section 132", title: "Prosecution — Applicable if Evasion > Rs. 2 Crore", description: "Where tax evaded exceeds Rs. 2 Crore — prosecution provisions of Section 132 may apply", defaultSelected: false, required: false }
    ]
  },

  // gst_49: Order-in-Original — Full Confirmation Section 73
  {
    templateId: "gst_49",
    rules: [
      { id: "cgst_s73_9_49", act: "CGST Act 2017", section: "Section 73(9)", title: "Order Confirming Demand — Normal Period", description: "Adjudication order confirming tax + interest + 10% penalty under Section 73", defaultSelected: true, required: true },
      { id: "cgst_s50_1_49", act: "CGST Act 2017", section: "Section 50(1)", title: "Interest @ 18% Confirmed", description: "Interest from due date to date of actual payment", defaultSelected: true, required: false },
      { id: "cgst_s75_49", act: "CGST Act 2017", section: "Section 75(7)", title: "Order to be Speaking Order", description: "Adjudication order must be a reasoned / speaking order", defaultSelected: true, required: false },
      { id: "cgst_s107_49", act: "CGST Act 2017", section: "Section 107", title: "Appeal to Commissioner (Appeals) — 3 Months", description: "Aggrieved party may appeal within 3 months; 10% pre-deposit mandatory under Section 107(6)", defaultSelected: true, required: false },
      { id: "cgst_r142_5_49", act: "CGST Rules 2017", section: "Rule 142(5)", title: "DRC-07 — Summary of Demand", description: "Summary of demand order to be uploaded in Form GST DRC-07", defaultSelected: true, required: false }
    ]
  },

  // gst_50: Order-in-Original — Dropping of Proceedings
  {
    templateId: "gst_50",
    rules: [
      { id: "cgst_s73_3_50", act: "CGST Act 2017", section: "Section 73(3)", title: "Proceedings Dropped — Tax Paid Before SCN", description: "No SCN to be issued if tax, interest, penalty paid before issuance", defaultSelected: true, required: false },
      { id: "cgst_s73_8_50", act: "CGST Act 2017", section: "Section 73(8)", title: "Proceedings Closed — Paid within 30 Days of SCN", description: "Penalty = 25% if tax + interest paid within 30 days of SCN; proceedings closed", defaultSelected: true, required: false }
    ]
  },

  // gst_51: Order-in-Original — Full Confirmation Section 74 (Fraud)
  {
    templateId: "gst_51",
    rules: [
      { id: "cgst_s74_9_51", act: "CGST Act 2017", section: "Section 74(9)", title: "Order Confirming Demand — 100% Penalty Mandatory", description: "Fraud/suppression order — penalty = 100% of tax evaded, mandatory", defaultSelected: true, required: true },
      { id: "cgst_s74_8_51", act: "CGST Act 2017", section: "Section 74(8)", title: "Reduced Penalty 25% if Paid within 30 Days of Order", description: "Post-order voluntary payment within 30 days → penalty reduces to 25%", defaultSelected: true, required: false },
      { id: "cgst_s75_7_51", act: "CGST Act 2017", section: "Section 75(7)", title: "Speaking Order Mandatory", description: "Adjudication order must be a reasoned / speaking order", defaultSelected: true, required: false },
      { id: "cgst_s107_51", act: "CGST Act 2017", section: "Section 107", title: "Appeal Clause — 3 Months, 10% Pre-Deposit", description: "Right of appeal before Commissioner (Appeals) within 3 months", defaultSelected: true, required: false }
    ]
  },

  // gst_52: Order-in-Original — Ex-Parte
  {
    templateId: "gst_52",
    rules: [
      { id: "cgst_s73_9_52", act: "CGST Act 2017", section: "Section 73(9) / 74(9)", title: "Ex-Parte Order", description: "Order passed on basis of available records when noticee fails to appear", defaultSelected: true, required: true },
      { id: "cgst_s75_4_52", act: "CGST Act 2017", section: "Section 75(4)", title: "Natural Justice — Opportunity Given", description: "Opportunity to be heard must be given — opportunity given by fixing hearing dates", defaultSelected: true, required: false },
      { id: "cgst_s107_52", act: "CGST Act 2017", section: "Section 107", title: "Appeal Clause", description: "Right to appeal within 3 months of order communication", defaultSelected: true, required: false }
    ]
  },

  // gst_53: Personal Hearing Notice
  {
    templateId: "gst_53",
    rules: [
      { id: "cgst_s75_4_53", act: "CGST Act 2017", section: "Section 75(4)", title: "Mandatory Opportunity of Being Heard", description: "An opportunity of being heard shall be granted before passing adverse order", defaultSelected: true, required: true },
      { id: "cgst_r142_3_53", act: "CGST Rules 2017", section: "Rule 142(3)", title: "Personal Hearing — Right of Representation", description: "Noticee may appear in person or through authorized Advocate / CA / Tax Practitioner", defaultSelected: true, required: false }
    ]
  },

  // gst_54: Best Judgement Assessment — Section 62
  {
    templateId: "gst_54",
    rules: [
      { id: "cgst_s62_1_54", act: "CGST Act 2017", section: "Section 62(1)", title: "Best Judgement Assessment — Non-Filer", description: "Proper Officer may assess tax to best of his judgement if return not filed after Section 46 notice", defaultSelected: true, required: true },
      { id: "cgst_s62_2_54", act: "CGST Act 2017", section: "Section 62(2)", title: "Deemed Withdrawal on Filing Returns within 30 Days", description: "Section 62 order deemed withdrawn if taxable person files returns within 30 days of order service", defaultSelected: true, required: false },
      { id: "cgst_s46_54", act: "CGST Act 2017", section: "Section 46", title: "Section 46 Notice — Prerequisite", description: "Notice under Section 46 with 15-day window is mandatory before Section 62 assessment", defaultSelected: true, required: true },
      { id: "cgst_r100_54", act: "CGST Rules 2017", section: "Rule 100(2)", title: "ASMT-13 — Assessment Order Format", description: "Best judgement assessment order to be issued in Form GST ASMT-13", defaultSelected: true, required: false }
    ]
  },

  // gst_55: Scrutiny Notice ASMT-10 — Section 61
  {
    templateId: "gst_55",
    rules: [
      { id: "cgst_s61_55", act: "CGST Act 2017", section: "Section 61(1)", title: "Scrutiny of Returns — Discrepancy Notice", description: "Proper Officer may scrutinise returns and seek explanation for discrepancies or anomalies", defaultSelected: true, required: true },
      { id: "cgst_r99_55", act: "CGST Rules 2017", section: "Rule 99", title: "ASMT-10 / ASMT-11 / ASMT-12 Format", description: "Notice in ASMT-10; reply in ASMT-11; closure or SCN reference in ASMT-12", defaultSelected: true, required: true },
      { id: "cgst_s61_3_55", act: "CGST Act 2017", section: "Section 61(3)", title: "Refer to Audit/Investigation if Explanation Not Satisfactory", description: "If discrepancy not explained satisfactorily — officer may refer for audit, inspection or initiate SCN", defaultSelected: false, required: false }
    ]
  },

  // gst_56: Recovery Notice — Bank Attachment Section 79(1)(c)
  {
    templateId: "gst_56",
    rules: [
      { id: "cgst_s79_56", act: "CGST Act 2017", section: "Section 79", title: "Recovery Proceedings — General", description: "Recovery can be initiated if dues not paid within 3 months of demand order and no stay granted", defaultSelected: true, required: true },
      { id: "cgst_s79_1c_56", act: "CGST Act 2017", section: "Section 79(1)(c)", title: "Recovery — Directing Bank to Pay", description: "Proper Officer may direct any person holding money of the defaulter to pay it to the Government", defaultSelected: true, required: true },
      { id: "cgst_r159_56", act: "CGST Rules 2017", section: "Rule 159", title: "Provisional Attachment and Recovery Procedure", description: "Procedure for provisionally attaching property / bank account during investigation or recovery", defaultSelected: false, required: false }
    ]
  },

  // gst_57: Registration Cancellation SCN — REG-17
  {
    templateId: "gst_57",
    rules: [
      { id: "cgst_s29_2_57", act: "CGST Act 2017", section: "Section 29(2)", title: "Cancellation by Proper Officer — Grounds", description: "Officer may cancel registration on grounds: non-filing 6 months / fraud / business discontinued / violation of Act", defaultSelected: true, required: true },
      { id: "cgst_r22_57", act: "CGST Rules 2017", section: "Rule 22(1)", title: "REG-17 — SCN for Cancellation Format", description: "SCN for cancellation to be issued in Form GST REG-17; 7 working days for reply", defaultSelected: true, required: true },
      { id: "cgst_r21a_57", act: "CGST Rules 2017", section: "Rule 21A", title: "Suspension of Registration During Proceedings", description: "Registration may be suspended (REG-31) during cancellation proceedings — taxpayer cannot file returns during suspension", defaultSelected: true, required: false },
      { id: "cgst_s29_3_57", act: "CGST Act 2017", section: "Section 29(3)", title: "All Dues Must Be Paid Before Cancellation", description: "Person whose registration is cancelled must pay all outstanding dues, ITC reversal on stock etc.", defaultSelected: false, required: false }
    ]
  },

  // ── Phase 2: GST Refund Template Rules (gst_58 to gst_72) ──────

  {
    templateId: "gst_58",
    rules: [
      {
        id: "gst58_r1",
        act: "CGST Act, 2017",
        section: "Section 54(1)",
        title: "Two-Year Time Limit for Refund",
        description: "Refund application must be filed within 2 years from the relevant date (date of ship's departure for export refund). Application filed after this limit is time-barred.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst58_r2",
        act: "CGST Act, 2017",
        section: "Section 54(3)",
        title: "Refund of Unutilised ITC — Export",
        description: "Registered person engaged in zero-rated supply (exports) is entitled to claim refund of unutilised input tax credit accumulated on account of such zero-rated supply.",
        defaultSelected: true,
        required: false
      },
      {
        id: "gst58_r3",
        act: "CGST Rules, 2017",
        section: "Rule 96 / Rule 89",
        title: "Procedure for Export Refund",
        description: "Rule 96 governs refund of IGST paid on export of goods (shipping bill route). Rule 89 governs refund of ITC on exports under LUT/Bond (statement-based).",
        defaultSelected: true,
        required: false
      },
      {
        id: "gst58_r4",
        act: "CGST Act, 2017",
        section: "Section 2(119) read with Rule 89(1)",
        title: "Definition of Relevant Date",
        description: "For export of goods, 'relevant date' is the date on which the ship or aircraft in which goods are loaded leaves India. The 2-year limitation runs from this date.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst58_r5",
        act: "CGST Rules, 2017",
        section: "Rule 92",
        title: "Order for Sanctioning / Rejecting Refund",
        description: "Where the refund claimed is found inadmissible or partially admissible, proper officer shall issue order in Form RFD-06 after issue of SCN in Form RFD-08.",
        defaultSelected: false,
        required: false
      }
    ]
  },
  {
    templateId: "gst_59",
    rules: [
      {
        id: "gst59_r1",
        act: "CGST Act, 2017",
        section: "Section 54(8)(d)",
        title: "Bar on Refund — Unjust Enrichment",
        description: "No refund shall be paid if the incidence of tax has been passed on to any other person. Where applicant has collected and charged tax on invoices to customers, refund is barred on grounds of unjust enrichment.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst59_r2",
        act: "CGST Act, 2017",
        section: "Section 54(9)",
        title: "Credit to Consumer Welfare Fund",
        description: "Where refund is barred by unjust enrichment, the amount shall be credited to the Consumer Welfare Fund (CWF) established under Section 57, instead of being refunded to the applicant.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst59_r3",
        act: "CGST Rules, 2017",
        section: "Rule 89(2)(l) read with Rule 92",
        title: "Declaration of Non-Unjust-Enrichment",
        description: "Applicant must furnish a declaration in FORM GST RFD-01 that incidence of tax has not been passed on. Where declaration is found false based on evidence (buyers availed ITC in GSTR-2A), rejection on unjust enrichment grounds is valid.",
        defaultSelected: true,
        required: false
      },
      {
        id: "gst59_r4",
        act: "CGST Act, 2017",
        section: "Section 54(10) proviso",
        title: "Exception — Inputs/Capital Goods Exported",
        description: "The bar of unjust enrichment does NOT apply when: (a) tax charged relates to goods/services exported; (b) tax is on inputs/capital goods used in manufacture of exported goods. In all other cases of domestic supply with tax charged to buyers, the bar applies.",
        defaultSelected: false,
        required: false
      }
    ]
  },
  {
    templateId: "gst_60",
    rules: [
      {
        id: "gst60_r1",
        act: "CGST Act, 2017",
        section: "Section 54(3)(ii)",
        title: "Refund of ITC — Inverted Duty Structure",
        description: "A registered person may claim refund of accumulated ITC where the credit has accumulated on account of rate of tax on inputs being higher than rate of tax on output supplies (inverted duty structure), other than nil-rated or fully exempt supplies.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst60_r2",
        act: "CGST Rules, 2017",
        section: "Rule 89(5)",
        title: "Maximum Refund Formula — Inverted Duty",
        description: "Maximum Refund Amount = {(Turnover of inverted rated supply × Net ITC) ÷ Adjusted Total Turnover} − Tax payable on inverted rated supply. 'Net ITC' means ITC on inputs only (NOT input services or capital goods).",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst60_r3",
        act: "CGST Rules, 2017",
        section: "Rule 89(5) Explanation — Supreme Court verdict",
        title: "Exclusion of Input Services from Net ITC",
        description: "Following the Hon'ble Supreme Court decision in Union of India v. VKC Footsteps (2021), 'Net ITC' for Rule 89(5) means ITC on inputs only, expressly excluding ITC on input services. Claims including ITC on input services in the formula are liable to rejection/reduction.",
        defaultSelected: true,
        required: false
      },
      {
        id: "gst60_r4",
        act: "CGST Act, 2017",
        section: "Section 54(3) Notification 5/2017-Central Tax (Rate)",
        title: "Goods Notified as Ineligible for Inverted Duty Refund",
        description: "Notification No. 5/2017-CT(Rate) bars refund of accumulated ITC under inverted duty structure for specified goods. Where supplies fall under this notification, refund is categorically inadmissible.",
        defaultSelected: false,
        required: false
      }
    ]
  },
  {
    templateId: "gst_61",
    rules: [
      {
        id: "gst61_r1",
        act: "CGST Rules, 2017",
        section: "Rule 90(3)",
        title: "Deficiency Memo — Form RFD-03",
        description: "Where the refund application filed in RFD-01 is found to have deficiency (incomplete documentation, incorrect statements, missing declarations), the proper officer shall issue a Deficiency Memo in Form GST RFD-03 within 15 days of filing.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst61_r2",
        act: "CGST Rules, 2017",
        section: "Rule 90(2) & 90(3)",
        title: "Effect of Deficiency Memo on ARN",
        description: "Once a Deficiency Memo is issued, the original ARN is treated as invalid. The applicant must file a fresh refund application after rectifying the deficiency. The fresh application shall be treated as a new application with a new ARN.",
        defaultSelected: true,
        required: false
      },
      {
        id: "gst61_r3",
        act: "CGST Rules, 2017",
        section: "Rule 89(2)",
        title: "Documents Required for Refund Application",
        description: "Documents prescribed under Rule 89(2) must accompany refund application: shipping bills, export manifests, FIRC/BRC for forex receipts (exports), tax invoices, GSTR-2A matching, LUT/Bond, statement of invoices, chartered accountant certificate (above Rs. 2 lakh), etc.",
        defaultSelected: false,
        required: false
      }
    ]
  },
  {
    templateId: "gst_62",
    rules: [
      {
        id: "gst62_r1",
        act: "CGST Rules, 2017",
        section: "Rule 92(1)",
        title: "Refund Sanction Order — Form RFD-06",
        description: "Where on examination of the refund application and documents, the proper officer is satisfied that the refund claimed is admissible, he shall make an order for payment of refund in Form GST RFD-06.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst62_r2",
        act: "CGST Act, 2017",
        section: "Section 54(1) read with Section 16(3)(b)",
        title: "Zero-Rated Supply — Export IGST Route",
        description: "A person making zero-rated supply may pay IGST on the export and claim refund of IGST paid, as per Section 16(3)(b) of IGST Act, 2017. Refund is processed on matching of GSTR-1 / GSTR-3B with shipping bill data from ICEGATE.",
        defaultSelected: true,
        required: false
      },
      {
        id: "gst62_r3",
        act: "CGST Rules, 2017",
        section: "Rule 96",
        title: "Customs-GST Data Linkage for Export Refund",
        description: "Refund of IGST paid on exports is processed by Customs based on shipping bill and EGM data matched against GSTR-1/GSTR-3B filed by exporter. Officer must verify shipping bill nos., port codes, and IGST payment details before sanctioning.",
        defaultSelected: true,
        required: false
      },
      {
        id: "gst62_r4",
        act: "CGST Act, 2017",
        section: "Section 56",
        title: "Interest on Delayed Refund",
        description: "If refund is not paid within 60 days from the date of receipt of complete application, interest @ 6% per annum is payable from the date immediately after expiry of 60 days till the date of actual payment.",
        defaultSelected: false,
        required: false
      }
    ]
  },
  {
    templateId: "gst_63",
    rules: [
      {
        id: "gst63_r1",
        act: "CGST Act, 2017",
        section: "Section 54(3)(ii)",
        title: "Admissibility — Inverted Duty ITC Refund",
        description: "Refund of accumulated ITC is admissible where rate of tax on inputs is higher than rate of tax on output supplies. Only ITC pertaining to inputs (not input services or capital goods) is included in the formula.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst63_r2",
        act: "CGST Rules, 2017",
        section: "Rule 89(5)",
        title: "Maximum Refund Formula Applied",
        description: "Formula: Max Refund = {(A × B) ÷ C} − D. Where A = Turnover of inverted rated supply, B = Net ITC (inputs only), C = Adjusted Total Turnover, D = Tax payable on inverted rated supply. Amount exceeding this formula is inadmissible.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst63_r3",
        act: "CGST Rules, 2017",
        section: "Rule 89(4) Explanation",
        title: "Adjusted Total Turnover — Definition",
        description: "Adjusted Total Turnover means total turnover of the State/UT in a period, excluding the value of exempt supplies other than zero-rated supplies and turnover of services on which ITC is not available under Section 17(5).",
        defaultSelected: false,
        required: false
      },
      {
        id: "gst63_r4",
        act: "CGST Rules, 2017",
        section: "Rule 92(1)",
        title: "Sanction in RFD-06",
        description: "Upon verification of Rule 89(5) calculation and satisfaction that refund is admissible, sanction is made by issuance of Form GST RFD-06.",
        defaultSelected: true,
        required: false
      }
    ]
  },
  {
    templateId: "gst_64",
    rules: [
      {
        id: "gst64_r1",
        act: "CGST Act, 2017",
        section: "Section 77(1)",
        title: "Refund of Tax Paid on Wrong Head — IGST/CGST",
        description: "Where a person has paid tax as IGST on a transaction treated as inter-State supply which is subsequently held to be an intra-State supply (CGST+SGST), the registered person is entitled to refund of IGST so paid, provided the correct CGST+SGST has been duly paid.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst64_r2",
        act: "IGST Act, 2017",
        section: "Section 19(1)",
        title: "Refund of Tax Paid on Wrong Head — CGST/IGST",
        description: "Where a registered person has paid CGST+SGST on a transaction treated as intra-State supply which is subsequently held to be an inter-State supply, such person is entitled to refund of CGST+SGST paid, after paying the correct IGST.",
        defaultSelected: true,
        required: false
      },
      {
        id: "gst64_r3",
        act: "CGST Rules, 2017",
        section: "Rule 89(1)(c)",
        title: "Refund Application for Wrong Head Payment",
        description: "Application for refund under Section 77/19 (wrong head) shall be filed in Form GST RFD-01 along with proof of payment of correct tax on the right head, and statement of invoices for which wrong tax was paid.",
        defaultSelected: false,
        required: false
      }
    ]
  },
  {
    templateId: "gst_65",
    rules: [
      {
        id: "gst65_r1",
        act: "CGST Act, 2017",
        section: "Section 54(6)",
        title: "Provisional Refund — 90% of Claimed Amount",
        description: "Where the application for refund relates to zero-rated supplies (exports), the proper officer shall provisionally refund 90% of the total claimed amount within 7 days of acknowledgment, pending final processing, subject to furnishing a security/bond.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst65_r2",
        act: "CGST Rules, 2017",
        section: "Rule 91(1) & (2)",
        title: "Procedure for Provisional Refund — RFD-04",
        description: "Proper officer shall make the provisional refund order in Form GST RFD-04 within 7 days of date of acknowledgment in Form RFD-02. Provisional sanction is based on prima facie satisfaction of admissibility.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst65_r3",
        act: "CGST Act, 2017",
        section: "Section 54(6) proviso — Rule 91(3)",
        title: "Recovery of Wrongly Granted Provisional Refund",
        description: "If upon final processing the claim is found partially or wholly inadmissible, the excess provisional refund amount shall be recovered under Section 73 (or Section 74 in case of fraud) as a demand, along with applicable interest.",
        defaultSelected: false,
        required: false
      }
    ]
  },
  {
    templateId: "gst_66",
    rules: [
      {
        id: "gst66_r1",
        act: "CGST Act, 2017",
        section: "Section 54(10)",
        title: "Withholding of Refund — Pending Audit/Investigation",
        description: "Notwithstanding anything in Section 54, the proper officer may withhold the refund, if an appeal or further proceeding or any other proceeding under this Act is pending or where any demand has been confirmed, with prior approval of the Commissioner.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst66_r2",
        act: "CGST Rules, 2017",
        section: "Rule 92(3)",
        title: "Withholding Notice — Form RFD-07",
        description: "Where refund is withheld under Section 54(10), the proper officer shall issue a notice in Form GST RFD-07 (Part B) to the applicant, stating the reason for withholding and intimating the amount withheld.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst66_r3",
        act: "CGST Act, 2017",
        section: "Section 56 — Second Proviso",
        title: "Interest Liability on Withheld Refund",
        description: "Where refund is withheld and later ordered to be paid, the person shall be entitled to interest at 9% per annum (not 6%) from the date of order in Form RFD-07 till the date of actual payment, as the withholding is attributed to the Department.",
        defaultSelected: false,
        required: false
      }
    ]
  },
  {
    templateId: "gst_67",
    rules: [
      {
        id: "gst67_r1",
        act: "CGST Rules, 2017",
        section: "Rule 92(3) read with Rule 96(10)",
        title: "Mandatory SCN Before Refund Rejection — Form RFD-08",
        description: "No refund application shall be rejected without giving the applicant an opportunity of being heard. The proper officer shall issue a show cause notice in Form GST RFD-08, specifying the grounds on which rejection is proposed, and the applicant shall reply in Form RFD-09.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst67_r2",
        act: "CGST Act, 2017",
        section: "Section 54(12) read with Section 75(4)",
        title: "Personal Hearing Right",
        description: "Applicant has a right to be heard before an adverse order (rejection) is passed. If the applicant requests for personal hearing, the same must be provided. Order of rejection without hearing, despite request, is liable to be set aside.",
        defaultSelected: true,
        required: false
      },
      {
        id: "gst67_r3",
        act: "CGST Rules, 2017",
        section: "Rule 92(3)",
        title: "Reply Period — 15 Days",
        description: "Applicant shall file reply to Form RFD-08 SCN within 15 days of receipt or such further period as may be allowed. After considering the reply and hearing, final order in Form RFD-06 (rejection) shall be passed.",
        defaultSelected: true,
        required: false
      }
    ]
  },
  {
    templateId: "gst_68",
    rules: [
      {
        id: "gst68_r1",
        act: "IGST Act, 2017",
        section: "Section 16(1)(b) & 16(3)",
        title: "SEZ Supply as Zero-Rated — LUT/Bond Route",
        description: "Supply of goods or services to a SEZ developer or SEZ unit is a 'zero-rated supply' under Section 16(1)(b) of IGST Act, 2017. Under Section 16(3)(a), the supplier may make such supply under LUT/Bond without payment of IGST and claim refund of accumulated ITC.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst68_r2",
        act: "CGST Rules, 2017",
        section: "Rule 89(1)(b)",
        title: "Refund Application for SEZ Supply",
        description: "For supplies to SEZ under LUT/Bond, refund application in RFD-01 shall be accompanied by: statement of invoices (Annexure B of Form RFD-01), copy of endorsed LUT/Bond, and evidence of receipt of goods/services by SEZ (endorsement on tax invoice by authorised SEZ officer).",
        defaultSelected: true,
        required: false
      },
      {
        id: "gst68_r3",
        act: "CGST Rules, 2017",
        section: "Rule 91 / Rule 92",
        title: "Provisional then Final Sanction",
        description: "For SEZ supply refunds, provisional sanction of 90% may be given in RFD-04 within 7 days, and final sanction in RFD-06 upon satisfactory verification of all documents including SEZ endorsement and LUT validity.",
        defaultSelected: false,
        required: false
      }
    ]
  },
  {
    templateId: "gst_69",
    rules: [
      {
        id: "gst69_r1",
        act: "CGST Act, 2017",
        section: "Section 56",
        title: "Interest on Delayed Refund — 6% Per Annum",
        description: "Where refund is not paid within 60 days from the date of receipt of application complete in all respects, the Department shall pay interest @ 6% per annum from the date immediately after expiry of 60 days till the date of actual refund payment.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst69_r2",
        act: "CGST Act, 2017",
        section: "Section 56 — Second Proviso",
        title: "Enhanced Interest @ 9% — Withheld Refunds",
        description: "Where the refund was withheld under Section 54(10) or (11) and later ordered to be released, interest shall be payable @ 9% per annum (not 6%) from the date of order to the date of actual payment.",
        defaultSelected: false,
        required: false
      },
      {
        id: "gst69_r3",
        act: "CGST Rules, 2017",
        section: "Rule 94",
        title: "Interest Payment Along with Refund",
        description: "Interest under Section 56 shall be paid along with the refund amount. The officer must calculate and include interest in the refund order (RFD-06) where payment is beyond 60 days from acknowledgment.",
        defaultSelected: true,
        required: false
      }
    ]
  },
  {
    templateId: "gst_70",
    rules: [
      {
        id: "gst70_r1",
        act: "IGST Act, 2017",
        section: "Section 16(3)(a) read with Rule 96A",
        title: "LUT/Bond — Mandatory Requirement for Zero-Rated Supply Without IGST",
        description: "To make zero-rated supply to SEZ under LUT/Bond route (without paying IGST), the supplier MUST have a valid LUT or Bond executed before the date of supply. Supply made without prior execution of LUT/Bond renders the supply non-zero-rated for refund purposes.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst70_r2",
        act: "CGST Rules, 2017",
        section: "Rule 96A",
        title: "Validity of LUT — Financial Year",
        description: "A Letter of Undertaking (LUT) is valid for the financial year in which it is executed. LUT expires at the end of the financial year. Supplies made in the next financial year without a fresh LUT are not covered and IGST becomes payable on such supplies.",
        defaultSelected: true,
        required: false
      },
      {
        id: "gst70_r3",
        act: "CGST Rules, 2017",
        section: "Rule 89(4) proviso",
        title: "Rejection of ITC Refund — No Valid LUT",
        description: "Where supply to SEZ was made without a valid LUT/Bond, the supply cannot be treated as zero-rated for the purpose of ITC refund under Rule 89(1)(b). Refund of ITC accumulated on account of such supply is inadmissible.",
        defaultSelected: true,
        required: false
      }
    ]
  },
  {
    templateId: "gst_71",
    rules: [
      {
        id: "gst71_r1",
        act: "CGST Act, 2017",
        section: "Section 54(1)",
        title: "Refund of Excess Amount in Cash Ledger",
        description: "Any unutilised balance in the electronic cash ledger may be refunded to the registered person in accordance with the provisions of Section 54. Application must be filed within 2 years from the date of payment credited to the cash ledger.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst71_r2",
        act: "CGST Rules, 2017",
        section: "Rule 89(1)",
        title: "Refund Application for Cash Ledger",
        description: "Application for refund of balance in electronic cash ledger is filed in Form GST RFD-01 along with electronic cash ledger statement showing the excess balance, bank account details (for credit of refund), and reason for excess balance.",
        defaultSelected: true,
        required: false
      },
      {
        id: "gst71_r3",
        act: "CGST Act, 2017",
        section: "Section 49(6)",
        title: "Excess Balance — Not Adjustable Against Dues",
        description: "Where the taxpayer has pending demands/tax dues, the refund of cash ledger balance may be adjusted against those dues before payment to the applicant. The order should clearly show any such adjustment.",
        defaultSelected: false,
        required: false
      }
    ]
  },
  {
    templateId: "gst_72",
    rules: [
      {
        id: "gst72_r1",
        act: "CGST Rules, 2017",
        section: "Rule 90(2)",
        title: "Seeking Clarification or Additional Documents",
        description: "Where the proper officer requires any clarification or additional documents to process the refund application, he may request the same from the applicant in writing. The applicant must provide the requested information within the stipulated time.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst72_r2",
        act: "CGST Rules, 2017",
        section: "Rule 92(1)",
        title: "Processing After Clarification",
        description: "After receipt of clarification or additional documents, the officer shall process the application and pass the final order (sanction in RFD-06 or rejection after RFD-08 SCN) within the prescribed time limit. The time taken by the applicant to furnish clarification is excluded from the processing period.",
        defaultSelected: true,
        required: false
      },
      {
        id: "gst72_r3",
        act: "CGST Rules, 2017",
        section: "Rule 90(3)",
        title: "Clarification vs Deficiency Memo — Distinction",
        description: "A clarification notice (Rule 90(2)) is issued when the application is otherwise complete but certain information needs verification. A Deficiency Memo (RFD-03, Rule 90(3)) is issued when the application itself is incomplete or deficient. The legal consequences differ — a deficiency memo invalidates the original ARN; a clarification notice does not.",
        defaultSelected: false,
        required: false
      }
    ]
  },
    // ── Phase 3: ITC Proceedings Template Rules (gst_73 to gst_87) ──────

  {
    templateId: "gst_73",
    rules: [
      {
        id: "gst73_r1",
        act: "CGST Rules, 2017",
        section: "Rule 86A(1)",
        title: "Power to Block ITC — Conditions",
        description: "An officer not below the rank of Assistant Commissioner may block the ITC in the electronic credit ledger of a registered person if he has 'reasons to believe' that the credit has been fraudulently availed or the person is not eligible for such credit. The reasons must be recorded in writing. Blocking can cover credit availed from: (a) a non-existent or cancelled supplier; (b) a supplier who has not actually supplied goods/services; (c) where ITC is ineligible under Chapter V.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst73_r2",
        act: "CGST Rules, 2017",
        section: "Rule 86A(1) Proviso",
        title: "Written Reasons Mandatory Before Blocking",
        description: "The proper officer MUST record specific factual reasons in writing before blocking ITC. Courts (Punjab & Haryana HC in Shri Nath Ji Agro Products; Delhi HC in various orders) have consistently held that a vague or mechanical blocking order without specific reasons violates natural justice and is liable to be quashed. The blocking order must identify: the specific supplier, invoice numbers, amount, and the specific ground for blocking.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst73_r3",
        act: "CGST Rules, 2017",
        section: "Rule 86A(3)",
        title: "One-Year Automatic Expiry of Block",
        description: "The ITC block shall automatically cease to have effect after ONE YEAR from the date of the order, unless the proper officer extends/reviews it before expiry. Officers must track expiry dates and either confirm the block before expiry (if demand proceedings are pending) or allow it to lapse.",
        defaultSelected: true,
        required: false
      },
      {
        id: "gst73_r4",
        act: "Legal Precedent",
        section: "Multiple High Court Orders",
        title: "Right to Hear Before Blocking (Judicial View)",
        description: "Several High Courts have held: (1) While Rule 86A does not mandate a prior hearing, post-blocking objection must be given a fair hearing. (2) Blocking must not be used as a substitute for adjudication under Section 73/74. (3) If the underlying supplier dispute is resolved, the block must be lifted. Key cases: Sapna Enterprises (P&H HC), Samay Alloys (Guj HC), Easy Trip Planners (Del HC).",
        defaultSelected: false,
        required: false
      },
      {
        id: "gst73_r5",
        act: "CGST Act, 2017",
        section: "Section 16(2) read with Rule 86A",
        title: "Block vs. Demand — Distinct Proceedings",
        description: "A blocking order under Rule 86A is a PREVENTIVE measure — it does not by itself confirm that ITC is ineligible. Formal recovery must be made through an SCN and OIO under Section 73 or 74. The blocking order protects revenue pending adjudication; it does not decide the merits.",
        defaultSelected: false,
        required: false
      }
    ]
  },
  {
    templateId: "gst_74",
    rules: [
      {
        id: "gst74_r1",
        act: "CGST Rules, 2017",
        section: "Rule 86A(2)",
        title: "Power to Unblock — Officer Satisfaction Required",
        description: "The proper officer may lift the ITC restriction if he is satisfied that the conditions for blocking no longer exist — i.e., the supplier is verified as genuine, tax has been paid to the government, and goods/services were actually supplied. Unblocking must be recorded with specific reasons in writing.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst74_r2",
        act: "CGST Rules, 2017",
        section: "Rule 86A(3)",
        title: "Automatic Lapse After One Year",
        description: "If the blocking order has been in force for one year without being extended, reviewed, or linked to a confirmed demand, it automatically ceases to have effect. The officer issuing the unblocking order on this ground must cite the original blocking order date and verify that one year has elapsed.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst74_r3",
        act: "Principle of Natural Justice",
        section: "Audi Alteram Partem",
        title: "Taxpayer Objection Must Be Heard",
        description: "When the taxpayer files a written objection with documentary evidence against the blocking order, the proper officer is bound to consider the same and pass a reasoned order — either confirming the block (with reasons) or lifting it. Failure to consider the objection within a reasonable time makes the block vulnerable to High Court writ.",
        defaultSelected: false,
        required: false
      }
    ]
  },
  {
    templateId: "gst_75",
    rules: [
      {
        id: "gst75_r1",
        act: "CGST Act, 2017",
        section: "Section 16(2)(b) — Proviso",
        title: "180-Day Payment Condition for ITC",
        description: "ITC availed on any inward supply is subject to the condition that the recipient must pay the supplier the FULL VALUE of supply (including tax) within 180 days of the invoice date. Failure to pay within this period requires REVERSAL of the ITC availed, by adding it back to output tax liability in GSTR-3B.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst75_r2",
        act: "CGST Rules, 2017",
        section: "Rule 37(1)",
        title: "Reversal Procedure in GSTR-3B",
        description: "The registered person shall add the ITC amount to the output tax liability in the return for the month immediately following the expiry of 180 days from the invoice date. The reversal is reported in Table 4B(2) of GSTR-3B. This is self-regulatory compliance; non-compliance attracts Section 73/74 action.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst75_r3",
        act: "CGST Act, 2017",
        section: "Section 50(1)",
        title: "Interest @ 18% from Date of Availing ITC",
        description: "Interest is payable on the reversed amount at 18% per annum from the DATE OF AVAILING the ITC (not the date of reversal). This is a strict provision — the interest runs from when the credit was wrongly availed, not when it was supposed to be reversed.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst75_r4",
        act: "CGST Act, 2017",
        section: "Section 16(2) Second Proviso",
        title: "Re-availment on Subsequent Payment",
        description: "When the recipient subsequently pays the supplier (after the 180-day period), the ITC earlier reversed becomes re-available. Re-availment is done in the tax period in which the payment is actually made, after furnishing full details in GSTR-3B. Interest already paid is NOT refundable.",
        defaultSelected: true,
        required: false
      },
      {
        id: "gst75_r5",
        act: "Legal Precedent",
        section: "Advocate Defense & Counter-Argument",
        title: "Common Taxpayer Defense — Partial/Book Payment",
        description: "Taxpayers often argue: (a) 'Books show payment' — Counter: CGST demands cash payment, not mere accounting entry. (b) 'Amount adjusted against advance/mutual debt' — Counter: Unless formally invoiced and settled, 180-day condition is not met. (c) 'Supplier is insolvent/defaulted' — Counter: Not a valid excuse; condition is on recipient. (d) 'Dispute pending between parties' — Counter: ITC reversal is mandatory regardless of disputes.",
        defaultSelected: false,
        required: false
      }
    ]
  },
  {
    templateId: "gst_76",
    rules: [
      {
        id: "gst76_r1",
        act: "CGST Act, 2017",
        section: "Section 73(9) / Section 74(9)",
        title: "Confirming Demand for ITC Reversal",
        description: "Order confirming the demand for ITC reversal due to non-payment within 180 days. If no fraud/suppression — Section 73(9); if fraud — Section 74(9). The Order must record: (a) facts, (b) SCN number/date, (c) reply/hearing details, (d) taxpayer's contention, (e) finding on each contention, (f) computed demand with interest and penalty.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst76_r2",
        act: "CGST Act, 2017",
        section: "Section 16(2) Second Proviso",
        title: "Re-availment Note in Order",
        description: "The Order must include a note that if the recipient subsequently pays the supplier, the ITC stands re-available in the period of such payment. This is a statutory entitlement and must be mentioned in the order to avoid further disputes.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst76_r3",
        act: "CGST Act, 2017",
        section: "Section 107(6)",
        title: "Mandatory Pre-Deposit for Appeal",
        description: "For appeal against this order before Commissioner (Appeals), the taxpayer must make a mandatory pre-deposit of 10% of the disputed tax amount under Section 107(6). The appeal must be filed within 3 months of receipt of order. GSTAT appeal (Section 112) requires 20% pre-deposit of remaining disputed amount.",
        defaultSelected: true,
        required: false
      }
    ]
  },
  {
    templateId: "gst_77",
    rules: [
      {
        id: "gst77_r1",
        act: "CGST Act, 2017",
        section: "Section 16(2)(a)",
        title: "ITC Condition — Actual Receipt of Goods/Services",
        description: "Section 16(2)(a) makes actual receipt of goods or services a MANDATORY condition for availing ITC. A tax invoice alone is not sufficient. The burden of proof of actual receipt is on the recipient. Where goods/services are shown as received but evidence of physical delivery, transport, payment flows, and usage is absent, ITC is inadmissible.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst77_r2",
        act: "CGST Act, 2017",
        section: "Section 74",
        title: "Extended Period — Fraud/Suppression",
        description: "Section 74 applies where ITC is wrongly availed by reason of fraud, wilful misstatement, or suppression of facts. Key indicators: supplier is a shell/paper company, no tax paid to government, GSTR-2B does not reflect invoices, circular transactions, inflated HSN values, absence of e-way bill for goods above threshold. Extended time limit: 5 years from due date of annual return.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst77_r3",
        act: "CGST Act, 2017",
        section: "Section 74(9)",
        title: "100% Penalty for Fraudulent ITC",
        description: "Where fraud is established, penalty equal to the TAX AMOUNT (100%) is mandatory under Section 74(9). The officer cannot reduce this on equity grounds. However, reduced penalty is available if taxpayer pays voluntarily: 15% if paid before SCN reply, 25% if paid within 30 days of SCN, 50% if paid before OIO.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst77_r4",
        act: "CGST Act, 2017",
        section: "Section 122(1)(vii)",
        title: "Additional Penalty for Fake Invoice",
        description: "Any person who issues, receives, or deals in a fake invoice (invoice without actual supply) is liable to penalty of Rs. 10,000/- or tax amount, whichever is higher, under Section 122(1)(vii). In egregious cases, prosecution under Section 132 may also be considered.",
        defaultSelected: false,
        required: false
      },
      {
        id: "gst77_r5",
        act: "Legal Precedent",
        section: "Advocate Defense & Counter-Argument",
        title: "Common Taxpayer Defenses in Fake Invoice Cases",
        description: "Defense: 'I relied on GSTIN being valid on portal.' Counter: GSTIN validity does not guarantee genuine supply; due diligence requires physical verification. Defense: 'Supplier filed GSTR-1 so ITC is valid.' Counter: GSTR-1 filing by fraudulent entity does not legitimize underlying non-existent supply. Defense: 'No mens rea.' Counter: Objective evidence of non-supply is sufficient; individual knowledge of fraud not required for ITC reversal under s.16(2)(a). Defense: 'I paid by cheque/NEFT.' Counter: Financial flow alone does not prove actual supply; round-tripping through bank is a common modus operandi.",
        defaultSelected: false,
        required: false
      }
    ]
  },
  {
    templateId: "gst_78",
    rules: [
      {
        id: "gst78_r1",
        act: "CGST Act, 2017",
        section: "Section 17(5)",
        title: "Blocked Credits — Statutory List",
        description: "Section 17(5) is an overriding provision that blocks ITC on specific categories regardless of their use in the course of business. Key categories: (a) Motor vehicles for personal transport (with exceptions); (b) Food and beverages, outdoor catering, beauty treatment, health services, cosmetic surgery; (c) Club memberships, health and fitness centre; (d) Rent-a-cab, life insurance, health insurance (with exceptions); (e) Travel benefits to employees on vacation; (f) Works contract for immovable property (with exceptions for plant/machinery); (g) Construction of immovable property on own account.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst78_r2",
        act: "CGST Act, 2017",
        section: "Section 17(5)(a) Proviso",
        title: "Motor Vehicle Exceptions",
        description: "ITC on motor vehicles IS available for: (a) further supply of vehicles (dealers); (b) transportation of passengers (cab aggregators with RCM); (c) imparting driving training; (d) transportation of goods. Officers must verify whether the vehicle qualifies for any exception before proposing demand.",
        defaultSelected: true,
        required: false
      },
      {
        id: "gst78_r3",
        act: "CGST Act, 2017",
        section: "Section 50(3)",
        title: "Interest on Wrongly Availed and Utilized ITC",
        description: "Interest under Section 50(3) is payable at 18% per annum only on ITC that was BOTH wrongly availed AND UTILIZED. If ITC is availed but unused (lying in credit ledger), interest is NOT payable as per the retrospective amendment effective 01.07.2017 (Finance Act 2021). Officers must verify utilization status before computing interest.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst78_r4",
        act: "Legal Precedent",
        section: "Advocate Defense",
        title: "Common Defenses for Blocked Credit Claims",
        description: "Defense: 'Motor vehicle used for business transport of goods.' Counter: s.17(5)(a) exception for goods transport applies only to motor vehicles designed for goods carriage, not standard passenger cars. Defense: 'Canteen/food is mandatory under Factories Act — hence for business.' Counter: Sec 17(5)(b)(i) provides an exception if the supply is mandated by any law — check if applicable. Defense: 'Works contract is for plant and machinery, not immovable structure.' Counter: Section 17(5)(c) exception covers plant and machinery; officer must examine whether structure qualifies.",
        defaultSelected: false,
        required: false
      }
    ]
  },
  {
    templateId: "gst_79",
    rules: [
      {
        id: "gst79_r1",
        act: "CGST Act, 2017",
        section: "Section 16(2)(aa)",
        title: "GSTR-2B Condition for ITC — Effective 01.01.2022",
        description: "Inserted by Finance Act 2021 w.e.f. 01.01.2022: ITC shall be available only if the details of invoice/debit note have been furnished by the supplier in GSTR-1/IFF and communicated to the recipient in GSTR-2B. This is a HARD LOCK — ITC cannot be claimed merely because the invoice is in possession and payment is made, if the invoice is not in GSTR-2B.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst79_r2",
        act: "CGST Rules, 2017",
        section: "Rule 36(4)",
        title: "Maximum ITC Linked to GSTR-2B",
        description: "ITC availed in GSTR-3B shall not exceed the amount of ITC available in GSTR-2B. Any excess must be reversed. The 10% provisional ITC provision (old Rule 36(4)) has been superseded by Section 16(2)(aa) which provides no buffer — the limit is EXACT GSTR-2B amount.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst79_r3",
        act: "CBIC Circular",
        section: "Circular No. 183/15/2022-GST dated 27.12.2022",
        title: "SOP for Mismatch — Verification Before SCN",
        description: "Before issuing SCN for GSTR-2B mismatch, officer should: (a) check if supplier subsequently filed GSTR-1 and ITC now reflects in 2B; (b) issue notice to taxpayer to explain mismatch; (c) obtain CA certificate for mismatches in pre-2022 periods. For FY 2022-23 onwards, GSTR-2B is the definitive reference.",
        defaultSelected: false,
        required: false
      },
      {
        id: "gst79_r4",
        act: "Legal Precedent",
        section: "Advocate Defense",
        title: "Common Defenses for GSTR-2B Mismatch",
        description: "Defense: 'I paid the supplier and have invoice.' Counter: Section 16(2)(aa) specifically requires GSTR-2B reflection — possession of invoice and payment are additional conditions, not substitutes. Defense: 'Mismatch is due to supplier's default, not mine.' Counter: ITC is conditional; if supplier hasn't filed, you cannot avail ITC — you must recover from supplier. Defense: 'Circular allows 10% buffer.' Counter: The 10% provision under old Rule 36(4) was phased out; s.16(2)(aa) is absolute. Defense: 'Supplier filed belatedly, ITC now in 2B.' Counter: ITC may be re-availed in the period when it appears in GSTR-2B, subject to annual time limit under s.16(4).",
        defaultSelected: false,
        required: false
      }
    ]
  },
  {
    templateId: "gst_80",
    rules: [
      {
        id: "gst80_r1",
        act: "CGST Act, 2017",
        section: "Section 73(9)",
        title: "Confirmation of Demand — GSTR-2B Mismatch",
        description: "Order confirming demand for excess ITC claimed over and above GSTR-2B. The order must: identify the specific invoices not in GSTR-2B, note the supplier GSTIN, state the mismatch amount, and address any reply filed by taxpayer. The demand is under Section 73 (no fraud) unless evidence of connivance with supplier exists.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst80_r2",
        act: "CGST Act, 2017",
        section: "Section 50(3) / Section 50(1)",
        title: "Interest — 18% on Wrongly Availed + Utilized ITC",
        description: "Interest under s.50(3) at 18% applies on ITC wrongly availed AND utilized. If the ITC is in ECL but not used, interest does not apply (retrospective amendment via Finance Act 2021). Officers must verify the utilization pattern before computing interest.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst80_r3",
        act: "CGST Act, 2017",
        section: "Section 16(2)(aa) Proviso",
        title: "Re-availment When Supplier Files Subsequently",
        description: "If the supplier subsequently files GSTR-1 for the relevant period and the invoice reflects in GSTR-2B, the taxpayer may re-avail the ITC in the period in which it appears in GSTR-2B, subject to the annual time limit under Section 16(4). The demand order should mention this right.",
        defaultSelected: false,
        required: false
      }
    ]
  },
  {
    templateId: "gst_81",
    rules: [
      {
        id: "gst81_r1",
        act: "CGST Rules, 2017",
        section: "Rule 42",
        title: "Reversal Formula for Inputs and Input Services",
        description: "Rule 42 provides the formula for reversal of ITC on inputs and input services used COMMONLY for taxable and exempt/non-business supplies. Formula: D1 = T1+T2+T3; D2 = T4 x (E/F); where T1 = ITC solely for non-business use, T2 = ITC solely for exempt supply, T3 = blocked credits (s.17(5)), T4 = common ITC, E = exempt turnover, F = total turnover. Annual reversal must be done in September return/annual return with final computation.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst81_r2",
        act: "CGST Rules, 2017",
        section: "Rule 43",
        title: "Reversal Formula for Capital Goods",
        description: "Rule 43 applies to ITC on capital goods used for both taxable and exempt supplies. The ITC on such capital goods is spread over a 60-month life, and the monthly apportionment is: Tc/60 x (E/F). The reversal is an ongoing monthly obligation for 5 years from the date of invoice. Officers should verify this in GSTR-9 annual return workings.",
        defaultSelected: true,
        required: false
      },
      {
        id: "gst81_r3",
        act: "CGST Act, 2017",
        section: "Section 17(1) and 17(2)",
        title: "Legal Basis for Apportionment",
        description: "Section 17(1) restricts ITC attributable to non-business use; Section 17(2) restricts ITC attributable to exempt supplies. Rule 42/43 operationalizes these restrictions. Short reversal under Rule 42/43 is a routine demand (no fraud) attracting Section 73 with 10% penalty.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst81_r4",
        act: "Legal Precedent",
        section: "Common Audit Finding",
        title: "Taxpayer Defense Against Rule 42 Reversal",
        description: "Defense: 'I have been computing reversal correctly.' Counter: Officer should demand working sheet, compare with GSTR-9 Schedule C, and verify against revenue figures in ITR/balance sheet. Defense: 'Exempt supply is NIL this year.' Counter: If any supply in schedule III (land sale) or exempted services (healthcare), must include in exempt turnover. Defense: 'Interest income is not supply, need not include.' Counter: As per Apex Court decisions, interest on loans is exempt supply and must be included in exempt turnover for Rule 42 computation.",
        defaultSelected: false,
        required: false
      }
    ]
  },
  {
    templateId: "gst_82",
    rules: [
      {
        id: "gst82_r1",
        act: "CGST Act, 2017",
        section: "Section 140(1) to 140(8)",
        title: "Transitional Credit — Conditions under Section 140",
        description: "Section 140 allows carry-forward of CENVAT credit/VAT credit as transitional ITC under specific conditions: (a) the credit must have been admissible under pre-GST law; (b) must be reflected in the last return filed; (c) must be supported by documentary evidence (ER-1, ST-3, VAT returns). The Supreme Court (Union of India v. Filco Trade Centre) upheld the time limit for filing TRAN-1, but directed extension to courts that challenged it.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst82_r2",
        act: "CGST Act, 2017",
        section: "Section 74",
        title: "Fraud in TRAN-1 — Extended Period and 100% Penalty",
        description: "Where TRAN-1/TRAN-2 credit is availed by fraud, suppression, or wilful misstatement (e.g., inflated closing stock, fictitious CENVAT credit, stock not actually held on 30.06.2017), demand is under Section 74 with 5-year time limit and 100% penalty. Officer should support demand with: pre-GST ER-1/ST-3 records, physical stock verification reports, and statement of supplier.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst82_r3",
        act: "CGST Rules, 2017",
        section: "Rules 117, 118, 120",
        title: "Documentary Requirements for TRAN Credit",
        description: "Rules 117/118/120 specify documents needed to support TRAN-1/TRAN-2 claims: (a) for CENVAT — ER-1/ER-3/ER-6 and ST-3 showing balance as on 30.06.2017; (b) for stock without duty-paid documents — invoices and CA certificate; (c) capital goods — reduced by 5% per quarter of use. Non-production of these documents is grounds for disallowance.",
        defaultSelected: true,
        required: false
      },
      {
        id: "gst82_r4",
        act: "Legal Precedent",
        section: "Advocate Defense in TRAN Cases",
        title: "Common Defenses in TRAN-1 Disputes",
        description: "Defense: 'Credit was correctly reflected in ER-1.' Counter: Cross-verify ER-1 with Central Excise records; demand production of original ER-1 with acknowledgment. Defense: 'I was unable to file TRAN-1 due to portal glitch.' Counter: Supreme Court directed GSTN to allow revision for portal-affected parties — but this relates to filing, not inflated claims. Defense: 'Stock was correctly valued and held.' Counter: Physical verification as on 30.06.2017 report, if available, is primary evidence; demand P&L and balance sheet.",
        defaultSelected: false,
        required: false
      }
    ]
  },
  {
    templateId: "gst_83",
    rules: [
      {
        id: "gst83_r1",
        act: "CGST Act, 2017",
        section: "Section 29(5)",
        title: "Mandatory ITC Reversal on Cancellation",
        description: "Section 29(5) is a MANDATORY provision. Every person whose registration is cancelled shall pay an amount equivalent to the ITC in respect of: (a) inputs held in stock; (b) inputs contained in semi-finished goods; (c) inputs contained in finished goods; (d) capital goods (as reduced). This applies whether cancellation is voluntary (s.29(1)) or by officer (s.29(2)). Non-compliance attracts demand under Section 73/74.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst83_r2",
        act: "CGST Rules, 2017",
        section: "Rule 44",
        title: "Calculation Method — ITC-03 Not Filed",
        description: "Under Rule 44: For inputs/semi-finished/finished goods: reverse the ITC attributable to the stock. For capital goods: compute ITC as original ITC reduced by 5% per quarter (or part thereof) from date of invoice. The taxpayer should file FORM GST ITC-03 to report this. If ITC-03 is not filed by the cancellation date, officer estimates the reversal amount based on last GSTR-3B filed and demands the same.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst83_r3",
        act: "Legal Precedent",
        section: "Post-Cancellation Demands",
        title: "Demanding ITC Reversal from Cancelled Dealer",
        description: "Common issues: (a) Cancelled dealer does not respond to SCN — proceed ex-parte after proper service by substituted service; (b) Dealer claims 'no stock at time of cancellation' — demand inventory certificate/balance sheet for the period; (c) Capital goods fully depreciated — Rule 44 reversal applies even on fully depreciated goods as the reversal is of ITC, not asset value. Officers must compute based on original invoice ITC and time elapsed.",
        defaultSelected: false,
        required: false
      }
    ]
  },
  {
    templateId: "gst_84",
    rules: [
      {
        id: "gst84_r1",
        act: "CGST Rules, 2017",
        section: "Rule 142(5)",
        title: "DRC-07 — Mandatory Upload After OIO",
        description: "After passing any order under Section 73, 74, or 76, the proper officer MUST upload FORM GST DRC-07 on the GSTN portal within 7 days. DRC-07 is the electronic equivalent of the demand order — it triggers the demand in the taxpayer's portal account. Non-upload of DRC-07 prevents recovery proceedings.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst84_r2",
        act: "CGST Act, 2017",
        section: "Section 78",
        title: "Three-Month Payment Period Before Recovery",
        description: "The taxpayer has THREE MONTHS from the date of the order to pay the confirmed demand. Recovery proceedings (attachment/sale under Section 79) can be initiated ONLY after expiry of 3 months without payment, or within 3 months if a direction is received from the Commissioner for reasons to be recorded.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst84_r3",
        act: "CGST Act, 2017",
        section: "Section 107(6)",
        title: "Appeal with Pre-Deposit",
        description: "Taxpayer may appeal against the underlying OIO before Commissioner (Appeals) under Section 107, within 3 months of the order. Mandatory pre-deposit of 10% of the disputed tax amount is required. During pendency of appeal, recovery proceedings on the balance 90% are stayed. If appeal is rejected, the pre-deposit is adjusted against the demand.",
        defaultSelected: false,
        required: false
      }
    ]
  },
  {
    templateId: "gst_85",
    rules: [
      {
        id: "gst85_r1",
        act: "Internal Guidelines",
        section: "Audit / Scrutiny Manual",
        title: "Purpose of Internal Note Sheet",
        description: "The ITC reconciliation note sheet is a pre-SCN internal document. Its purpose is to: (a) systematically identify all categories of ITC irregularity; (b) quantify the demand under each head; (c) obtain proper officer's/supervisory approval before issue of SCN; (d) ensure no categories are missed. The note sheet forms part of the internal file/dak and is not served on the taxpayer.",
        defaultSelected: true,
        required: false
      },
      {
        id: "gst85_r2",
        act: "CGST Act, 2017",
        section: "Section 73(10) / Section 74(10)",
        title: "Prior Approval for Section 74 (Fraud) Cases",
        description: "Before issuing any SCN under Section 74 (fraud/suppression cases), prior approval of the Commissioner (for cases above Rs. 5 crore) or Additional/Joint Commissioner (as applicable) is MANDATORY under Section 74(10). This approval must be noted on the file and cited in the SCN. For Section 73 cases, no such prior approval is required. The note sheet should clearly state which section applies and obtain the appropriate approval.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst85_r3",
        act: "CBIC Guidelines",
        section: "Master Circular on GST Scrutiny",
        title: "Scrutiny Process — Order of Analysis",
        description: "During ITC scrutiny, officers should follow this sequence: (1) GSTR-2B vs GSTR-3B mismatch (mechanical check); (2) Section 17(5) blocked credits (check invoice category); (3) 180-day non-payment (check payment records); (4) Rule 42/43 reversal (check turnover ratio); (5) Section 16(2)(a) actual receipt (for large/suspect suppliers). This prioritization ensures systematic coverage.",
        defaultSelected: false,
        required: false
      }
    ]
  },
  {
    templateId: "gst_86",
    rules: [
      {
        id: "gst86_r1",
        act: "CGST Act, 2017",
        section: "Section 10(4)",
        title: "Composition Dealer — Absolute Bar on ITC",
        description: "Section 10(4) provides an ABSOLUTE bar on ITC for composition taxpayers. A person opting for composition scheme shall not collect tax from recipients AND shall not be entitled to any input tax credit. Any ITC availed in the electronic credit ledger during the composition period is wholly ineligible and recoverable with interest.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst86_r2",
        act: "CGST Act, 2017",
        section: "Section 17(2)",
        title: "Exempt Supply — No ITC Available",
        description: "Section 17(2) bars ITC to the extent it relates to exempt supplies. A person making ONLY exempt supplies (e.g., healthcare, education, unprocessed food) cannot avail any ITC. If a person switches from taxable to exempt supplies, ITC must be reversed on the date of switch under Rule 44A.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst86_r3",
        act: "CGST Act, 2017",
        section: "Section 18(4) / Rule 44A",
        title: "ITC Reversal on Switching to Exempt / Composition",
        description: "When a registered person switches to composition scheme or begins making only exempt supplies, they must reverse ITC on closing stock, capital goods, and input services as on the date of switch in FORM GST ITC-03. Non-compliance attracts Section 73/74 demand. Officers should check ITC-03 filing for the relevant date.",
        defaultSelected: false,
        required: false
      }
    ]
  },
  {
    templateId: "gst_87",
    rules: [
      {
        id: "gst87_r1",
        act: "CGST Act, 2017",
        section: "Section 74A(1)",
        title: "Unified Demand Framework — FY 2024-25 Onwards",
        description: "Section 74A, inserted by Finance (No.2) Act 2024, applies for tax periods from FY 2024-25. It replaces the dual-track approach of Section 73 (no fraud) and Section 74 (fraud) with a SINGLE provision. Key features: (a) Time limit: 42 months from due date of annual return for all cases (no distinction for fraud); (b) SCN to be issued before expiry of 42 months; (c) OIO to be passed within 12 months of SCN; (d) No separate extended period for fraud — the 42-month period applies uniformly.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst87_r2",
        act: "CGST Act, 2017",
        section: "Section 74A(6) to 74A(9)",
        title: "Reduced Penalty for Early Payment under s.74A",
        description: "Penalty structure under Section 74A is tiered based on voluntary compliance: (a) If full tax + interest paid BEFORE filing reply to SCN: Penalty = NIL; (b) If paid within 30 days of SCN: Penalty = 25% of tax; (c) If paid before issuance of OIO: Penalty = 50% of tax; (d) If fraud/wilful misstatement/suppression: Penalty up to 100% of tax under s.74A(9). Officers must note the applicable tier when the taxpayer claims reduced penalty.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst87_r3",
        act: "Finance (No.2) Act, 2024",
        section: "Section 74A — Applicability",
        title: "Section 74A Applies ONLY from FY 2024-25",
        description: "CRITICAL NOTE: Section 74A applies exclusively for financial years 2024-25 and onwards. For any demand pertaining to FY 2017-18 to FY 2023-24, the old Sections 73 and 74 continue to apply with their respective time limits (3 years / 5 years). Officers must correctly identify the financial year of demand to apply the correct section.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst87_r4",
        act: "CGST Act, 2017",
        section: "Section 74A — Time Limit Computation",
        title: "42-Month Time Limit Calculation",
        description: "Time limit under Section 74A: 42 months from the DUE DATE (not actual date) of filing the annual return. Annual return (GSTR-9) due date is 31 December following the financial year. Example: For FY 2024-25, due date of GSTR-9 is 31.12.2025. Last date for SCN = 31.12.2025 + 42 months = 30.06.2029. OIO must follow within 12 months of SCN.",
        defaultSelected: true,
        required: false
      },
      {
        id: "gst87_r5",
        act: "Legal Analysis",
        section: "Advocate Defense Under s.74A",
        title: "Emerging Taxpayer Arguments Under Section 74A",
        description: "Since s.74A is new (FY 2024-25), litigation will focus on: (1) 'No distinction between fraud and no-fraud in time limit is unconstitutional.' Counter: Legislature's prerogative; the Apex Court has upheld similar provisions. (2) 'Retroactive application of reduced penalty terms.' Counter: s.74A applies only to its own periods; no retroactivity. (3) 'Demand under s.74A but earlier period involved.' Counter: Multi-year demand must be split — old periods under s.73/74, FY 2024-25 onwards under s.74A.",
        defaultSelected: false,
        required: false
      }
    ]
  }

];
