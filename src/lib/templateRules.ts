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
      { id: "gst73_r1", act: "CGST Rules, 2017", section: "Rule 86A(1)", title: "Conditions for Blocking ITC", description: "Commissioner or authorised officer may block ITC if there are reasons to believe it is fraudulently availed or ineligible (e.g., supplier non-existent, fake invoices, goods not received).", defaultSelected: true, required: true },
      { id: "gst73_r2", act: "CGST Rules, 2017", section: "Rule 86A(1) Proviso", title: "Reasons to be Recorded in Writing", description: "The officer must record specific factual reasons in writing before restricting the use of ITC in the electronic credit ledger.", defaultSelected: true, required: true },
      { id: "gst73_r3", act: "Legal Precedent", section: "High Court Guidelines", title: "Specific Reasons Mandatory", description: "Courts have held that blocking orders cannot be passed without specific reasons. Noticee must be informed of the exact grounds.", defaultSelected: false, required: false }
    ]
  },
  {
    templateId: "gst_74",
    rules: [
      { id: "gst74_r1", act: "CGST Rules, 2017", section: "Rule 86A(2)", title: "Unblocking of ITC upon Verification", description: "The officer may unblock the restricted ITC upon verification if satisfied that the conditions for disallowance no longer exist.", defaultSelected: true, required: true },
      { id: "gst74_r2", act: "CGST Rules, 2017", section: "Rule 86A(3)", title: "One-Year Limitation for Blocking", description: "Any restriction imposed under Rule 86A shall cease to have effect after the expiry of one year from the date of imposing such restriction.", defaultSelected: true, required: false }
    ]
  },
  {
    templateId: "gst_75",
    rules: [
      { id: "gst75_r1", act: "CGST Act, 2017", section: "Section 16(2)(b) Proviso", title: "180-Day Rule for Payment", description: "If recipient fails to pay the supplier the value of supply along with tax within 180 days from the invoice date, availed ITC must be reversed with interest.", defaultSelected: true, required: true },
      { id: "gst75_r2", act: "CGST Rules, 2017", section: "Rule 37", title: "Reversal of ITC in case of Non-Payment", description: "Specifies the mechanics of reversing ITC when payment is not made within 180 days, including addition to output tax liability.", defaultSelected: true, required: true },
      { id: "gst75_r3", act: "CGST Act, 2017", section: "Section 50(1)", title: "Interest @ 18% on Reversal", description: "Interest is payable on the reversed ITC from the date of availment till the date of reversal/payment.", defaultSelected: true, required: false }
    ]
  },
  {
    templateId: "gst_76",
    rules: [
      { id: "gst76_r1", act: "CGST Act, 2017", section: "Section 73(9)", title: "Confirmation of ITC Reversal Demand", description: "Order confirming the demand for ITC reversal due to non-payment within 180 days.", defaultSelected: true, required: true },
      { id: "gst76_r2", act: "CGST Act, 2017", section: "Section 16(2) Second Proviso", title: "Re-availment upon Subsequent Payment", description: "The recipient shall be entitled to re-avail the credit upon subsequent payment made to the supplier.", defaultSelected: true, required: false }
    ]
  },
  {
    templateId: "gst_77",
    rules: [
      { id: "gst77_r1", act: "CGST Act, 2017", section: "Section 16(2)(a) & (b)", title: "ITC Admissibility — Fake Invoice", description: "ITC is inadmissible if goods or services are not actually received, or if the claim is based on fictitious/fake invoices.", defaultSelected: true, required: true },
      { id: "gst77_r2", act: "CGST Act, 2017", section: "Section 74", title: "Fraud and Suppression", description: "Extended period of limitation and 100% penalty applies due to fraudulent availment of ITC without underlying supply.", defaultSelected: true, required: true },
      { id: "gst77_r3", act: "CGST Act, 2017", section: "Section 122(1)(vii)", title: "Penalty for Fake Invoice", description: "Taking or utilizing input tax credit without actual receipt of goods or services attracts specific penalty.", defaultSelected: false, required: false }
    ]
  },
  {
    templateId: "gst_78",
    rules: [
      { id: "gst78_r1", act: "CGST Act, 2017", section: "Section 17(5)", title: "Blocked Credits", description: "ITC is expressly blocked on specified categories (e.g., motor vehicles, food & beverages, construction of immovable property).", defaultSelected: true, required: true },
      { id: "gst78_r2", act: "CGST Act, 2017", section: "Section 73", title: "Demand for Ineligible ITC", description: "Recovery of blocked credit wrongly availed, subject to normal period of limitation if no fraud is involved.", defaultSelected: true, required: true },
      { id: "gst78_r3", act: "CGST Act, 2017", section: "Section 50(3)", title: "Interest on Wrongly Availed ITC", description: "Interest is payable only if the blocked credit was availed and utilized.", defaultSelected: true, required: false }
    ]
  },
  {
    templateId: "gst_79",
    rules: [
      { id: "gst79_r1", act: "CGST Act, 2017", section: "Section 16(2)(aa)", title: "ITC Restricted to GSTR-2B", description: "ITC cannot exceed the amount reflecting in GSTR-2B based on the supplier's GSTR-1/IFF filings.", defaultSelected: true, required: true },
      { id: "gst79_r2", act: "CGST Rules, 2017", section: "Rule 36(4)", title: "Condition for Availing ITC", description: "Credit shall not be availed unless the details of invoices have been communicated to the registered person in Form GSTR-2B.", defaultSelected: true, required: true },
      { id: "gst79_r3", act: "CBIC Circular", section: "Circular No. 183/15/2022-GST", title: "SOP for Mismatches", description: "Provides procedure for dealing with mismatches and seeking CA certificates for discrepancies for specific older periods.", defaultSelected: false, required: false }
    ]
  },
  {
    templateId: "gst_80",
    rules: [
      { id: "gst80_r1", act: "CGST Act, 2017", section: "Section 73(9)", title: "Order Confirming GSTR-2B Mismatch Demand", description: "Confirmation of demand for excess ITC claimed over and above GSTR-2B.", defaultSelected: true, required: true },
      { id: "gst80_r2", act: "CGST Act, 2017", section: "Section 50(3)", title: "Interest @ 24% / 18%", description: "Interest on wrongly availed and utilized ITC. (Note: Retrospective amendment reduced rate to 18%).", defaultSelected: true, required: false }
    ]
  },
  {
    templateId: "gst_81",
    rules: [
      { id: "gst81_r1", act: "CGST Rules, 2017", section: "Rule 42", title: "Apportionment of ITC on Inputs/Services", description: "Mandatory reversal formula for ITC on inputs and input services used partly for taxable and partly for exempt/non-business purposes.", defaultSelected: true, required: true },
      { id: "gst81_r2", act: "CGST Rules, 2017", section: "Rule 43", title: "Apportionment of ITC on Capital Goods", description: "Specific procedure for reversal of ITC on capital goods used for both taxable and exempt supplies.", defaultSelected: true, required: false },
      { id: "gst81_r3", act: "CGST Act, 2017", section: "Section 17(1) & (2)", title: "Restriction on Exempt Supply ITC", description: "ITC is restricted to the extent attributable to taxable supplies including zero-rated supplies.", defaultSelected: true, required: true }
    ]
  },
  {
    templateId: "gst_82",
    rules: [
      { id: "gst82_r1", act: "CGST Act, 2017", section: "Section 140", title: "Transitional Arrangements", description: "Conditions for availing CENVAT credit and VAT credit as transitional ITC in TRAN-1/TRAN-2.", defaultSelected: true, required: true },
      { id: "gst82_r2", act: "CGST Act, 2017", section: "Section 74", title: "Recovery of Wrongful TRAN Credit (Fraud)", description: "Invocation of extended period for recovery of fraudulent or ineligible transitional credit claims.", defaultSelected: true, required: true }
    ]
  },
  {
    templateId: "gst_83",
    rules: [
      { id: "gst83_r1", act: "CGST Act, 2017", section: "Section 29(5)", title: "Reversal on Cancellation of Registration", description: "Every person whose registration is cancelled shall pay an amount equivalent to the credit of input tax in respect of inputs held in stock.", defaultSelected: true, required: true },
      { id: "gst83_r2", act: "CGST Rules, 2017", section: "Rule 44", title: "Manner of Reversal (ITC-03)", description: "Formula to calculate the ITC to be reversed on closing stock and capital goods upon cancellation of registration.", defaultSelected: true, required: true }
    ]
  },
  {
    templateId: "gst_84",
    rules: [
      { id: "gst84_r1", act: "CGST Rules, 2017", section: "Rule 142(5)", title: "Issuance of DRC-07 Summary Order", description: "A summary of the order issued under section 73 or section 74 or section 76 shall be uploaded electronically in FORM GST DRC-07.", defaultSelected: true, required: true },
      { id: "gst84_r2", act: "CGST Act, 2017", section: "Section 78", title: "Recovery Proceedings Initiation", description: "Any amount payable in pursuance of an order shall be paid within 3 months, failing which recovery proceedings shall be initiated.", defaultSelected: true, required: false }
    ]
  },
  {
    templateId: "gst_85",
    rules: [
      { id: "gst85_r1", act: "Internal Guidelines", section: "Audit/Scrutiny Manual", title: "Reconciliation of ITC", description: "Internal working sheet mapping ITC availed in GSTR-3B against GSTR-2B, blocked credits, and Rule 42 reversals.", defaultSelected: true, required: false }
    ]
  },
  {
    templateId: "gst_86",
    rules: [
      { id: "gst86_r1", act: "CGST Act, 2017", section: "Section 10(4)", title: "Composition Dealer Not Eligible for ITC", description: "A taxable person opting to pay tax under the composition scheme shall not take any input tax credit.", defaultSelected: true, required: true },
      { id: "gst86_r2", act: "CGST Act, 2017", section: "Section 17(2)", title: "Exempt Supplier Not Eligible", description: "A person making wholly exempt supplies is not eligible to take input tax credit.", defaultSelected: true, required: true }
    ]
  },
  {
    templateId: "gst_87",
    rules: [
      { id: "gst87_r1", act: "CGST Act, 2017", section: "Section 74A", title: "Unified Demand Provision (FY 2024-25 Onwards)", description: "Consolidated provision replacing Sections 73 and 74 for periods from FY 2024-25, establishing a common time limit of 42 months for SCN.", defaultSelected: true, required: true },
      { id: "gst87_r2", act: "CGST Act, 2017", section: "Section 74A Penalties", title: "Penalty Structure under s.74A", description: "Distinguishes penalty amounts internally based on whether the evasion involves fraud/suppression (higher penalty) or not.", defaultSelected: true, required: true },
      { id: "gst87_r3", act: "Finance Act, 2024", section: "Amendment Notification", title: "Applicability of Section 74A", description: "Applicable only for tax periods from FY 2024-25 onwards. Previous periods continue under old Section 73/74 limits.", defaultSelected: true, required: true }
    ]
  }

];
