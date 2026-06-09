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
for (let i = 1; i <= 53; i++) {
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
    i === 1 || i === 2 || i === 3 || i === 5 || i === 6 ||
    (i >= 44 && i <= 53)
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
  ...generatedRules
];
