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
  }
];
