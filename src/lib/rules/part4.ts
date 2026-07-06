import { TemplateRuleSet } from './baseRules';

// Rule sets: gst_80 … gst_91
export const RULES_PART4: TemplateRuleSet[] = [
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
  },
  {
    templateId: "gst_88",
    rules: [
      {
        id: "gst88_r1",
        act: "CGST Act, 2017",
        section: "Section 29(2)(c)",
        title: "Cancellation for Non-Filing — Statutory Trigger",
        description: "The proper officer may cancel registration of a person who has not furnished returns for a CONTINUOUS period as prescribed. As per Rule 21(e): 6 consecutive months for monthly filers, or 2 consecutive tax periods for quarterly filers (QRMP). The officer must verify: (a) actual non-filing on GSTN portal; (b) no pending appeal/stay; (c) no genuine technical reason for non-filing.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst88_r2",
        act: "CGST Rules, 2017",
        section: "Rule 21A(2)",
        title: "Automatic Suspension on Issue of SCN",
        description: "Upon issuance of the SCN for cancellation, the registration is AUTOMATICALLY SUSPENDED. The suspended person cannot issue tax invoices or make taxable supplies during suspension. The officer must note the suspension date in the SCN. Suspension is a preventive action — it does not require a separate order.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst88_r3",
        act: "CBIC Circular",
        section: "Circular No. 149/5/2021-GST",
        title: "SOP for Cancellation of Registration",
        description: "CBIC's SOP prescribes that before issuing SCN for non-filing, the officer must: (a) send a notice through the portal to the registered mobile/email; (b) verify whether returns have since been filed; (c) allow 15 days for reply. Where taxpayer files all returns and pays dues, the SCN may be dropped without passing a formal order.",
        defaultSelected: false,
        required: false
      },
      {
        id: "gst88_r4",
        act: "Legal Precedent",
        section: "Advocate Defense",
        title: "Taxpayer Defenses Against Non-Filing Cancellation",
        description: "Defense: 'No business activity during period.' Counter: Even NIL returns must be filed — non-filing is a procedural default regardless of turnover. Defense: 'Portal issues prevented filing.' Counter: Technical glitches must be reported contemporaneously to helpdesk; belated claims are not tenable. Defense: 'I was unaware of the notice.' Counter: Notices served on registered email/mobile are deemed served; taxpayer responsible for updating contact details. Defense: 'I have now filed all returns.' Counter: If filed before reply date with proof, SCN may be dropped — officer should verify compliance.",
        defaultSelected: false,
        required: false
      }
    ]
  },
  {
    templateId: "gst_89",
    rules: [
      {
        id: "gst89_r1",
        act: "CGST Act, 2017",
        section: "Section 29(2)(e)",
        title: "Cancellation for Fraud — Core Provision",
        description: "Registration obtained by fraud, wilful misstatement, or suppression of facts is liable for cancellation under s.29(2)(e) with RETROSPECTIVE effect from the date of registration. This is a penal provision — the officer must establish: (a) specific fraudulent act at the time of registration; (b) incorrect/false information submitted; (c) the registration would not have been granted but for the fraud.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst89_r2",
        act: "CGST Act, 2017",
        section: "Section 29(2) Proviso",
        title: "Retrospective Cancellation — Impact on Recipients",
        description: "When registration is cancelled retrospectively, all ITC availed by RECIPIENTS based on invoices issued by the fraudulently-registered person becomes ineligible. The officer must issue separate proceedings against such recipients. The retrospective date should be the earliest date of fraudulent activity, not necessarily the registration date.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst89_r3",
        act: "CGST Act, 2017",
        section: "Section 122(1)(xiv) / Section 132",
        title: "Criminal Proceedings Alongside Cancellation",
        description: "Where fraud in registration is established, the matter should also be examined for prosecution under: (a) Section 122(1)(xiv) — penalty for obtaining registration by fraud; (b) Section 132 — criminal prosecution where tax evaded exceeds threshold. Cancellation proceedings are civil/administrative; criminal proceedings are separate and parallel.",
        defaultSelected: false,
        required: false
      },
      {
        id: "gst89_r4",
        act: "Legal Precedent",
        section: "High Court Decisions on Retrospective Cancellation",
        title: "High Court Decisions on Retrospective Cancellation",
        description: "Courts have held: (1) Retrospective cancellation must be done with specific reasons and evidence — not on mere suspicion (Radha Krishan Industries v. State of HP, SC 2021). (2) Natural justice requires the registered person be heard before retrospective effect is given. (3) The officer cannot use retrospective cancellation as a tool to harass genuine taxpayers whose supplier was fraudulent — only direct fraud by the registrant warrants s.29(2)(e).",
        defaultSelected: false,
        required: false
      }
    ]
  },
  {
    templateId: "gst_90",
    rules: [
      {
        id: "gst90_r1",
        act: "CGST Act, 2017",
        section: "Section 29(2)(a) and (b)",
        title: "Business Not Commenced / Discontinued",
        description: "Section 29(2)(a): Cancellation where the person has not commenced business within the time prescribed after registration. Section 29(2)(b): Cancellation where business has been discontinued or transferred in its entirety. Officer must gather positive evidence — physical verification report, nil turnover for extended periods, property vacated, and non-responsive to notices.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst90_r2",
        act: "CGST Rules, 2017",
        section: "Rule 21",
        title: "Additional Grounds Under Rule 21",
        description: "Rule 21 specifies additional circumstances warranting officer-initiated cancellation: (a) issuing invoices without actual supply; (b) availing ITC on invoices for goods/services not received; (c) non-commencement/discontinuation of business; (d) not filing annual return for 2 consecutive years. Officer should cite the specific Rule 21 clause applicable in the SCN.",
        defaultSelected: true,
        required: false
      },
      {
        id: "gst90_r3",
        act: "Legal Precedent",
        section: "Interpretation of 'Discontinuation'",
        title: "Interpretation of 'Discontinuation'",
        description: "Courts have held that 'discontinuation of business' must be total cessation — temporary suspension, seasonal business, or businesses undergoing restructuring do not qualify. Officers must distinguish between: (a) temporary business closure (no cancellation warranted) and (b) permanent cessation with no intent to resume. Evidence required: vacated premises, no transactions, no employees, assets sold.",
        defaultSelected: false,
        required: false
      }
    ]
  },
  {
    templateId: "gst_91",
    rules: [
      {
        id: "gst91_r1",
        act: "CGST Act, 2017",
        section: "Section 29(2) read with Rule 22(3)",
        title: "Cancellation Order — Mandatory Contents",
        description: "The cancellation order under Section 29(2) must contain: (a) grounds for cancellation with specific facts; (b) consideration of taxpayer's reply; (c) date from which cancellation is effective; (d) direction to file GSTR-10 final return within 3 months; (e) directions for ITC reversal under s.29(5); (f) amount of tax/interest/penalty payable. The order must be in FORM GST REG-19.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst91_r2",
        act: "CGST Act, 2017",
        section: "Section 29(5) read with Rule 44",
        title: "Mandatory ITC Reversal on Cancellation",
        description: "The cancelled person MUST pay the equivalent of ITC on closing stock (inputs, semi-finished, finished goods) and capital goods (reduced by 5% per quarter), whichever is higher — the ITC amount or the output tax on such goods. Failure to pay attracts demand + interest under Section 73/74. The cancellation order must explicitly direct filing of FORM GST ITC-03.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst91_r3",
        act: "CGST Act, 2017",
        section: "Section 45",
        title: "GSTR-10 Final Return Obligation",
        description: "After cancellation, the taxpayer MUST file GSTR-10 (Final Return) within 3 months of the date of cancellation order. This return discloses: closing stock, ITC to be reversed, and final tax liability. Non-filing of GSTR-10 attracts a notice in FORM GSTR-3A and may result in best-judgment assessment under s.62.",
        defaultSelected: false,
        required: false
      }
    ]
  }
];
