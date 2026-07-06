import { TemplateRuleSet } from './baseRules';

// Rule sets: gst_56 … gst_67
export const RULES_PART2: TemplateRuleSet[] = [
  {
    templateId: "gst_56",
    rules: [
      { id: "cgst_s79_56", act: "CGST Act 2017", section: "Section 79", title: "Recovery Proceedings — General", description: "Recovery can be initiated if dues not paid within 3 months of demand order and no stay granted", defaultSelected: true, required: true },
      { id: "cgst_s79_1c_56", act: "CGST Act 2017", section: "Section 79(1)(c)", title: "Recovery — Directing Bank to Pay", description: "Proper Officer may direct any person holding money of the defaulter to pay it to the Government", defaultSelected: true, required: true },
      { id: "cgst_r159_56", act: "CGST Rules 2017", section: "Rule 159", title: "Provisional Attachment and Recovery Procedure", description: "Procedure for provisionally attaching property / bank account during investigation or recovery", defaultSelected: false, required: false }
    ]
  },
  {
    templateId: "gst_57",
    rules: [
      { id: "cgst_s29_2_57", act: "CGST Act 2017", section: "Section 29(2)", title: "Cancellation by Proper Officer — Grounds", description: "Officer may cancel registration on grounds: non-filing 6 months / fraud / business discontinued / violation of Act", defaultSelected: true, required: true },
      { id: "cgst_r22_57", act: "CGST Rules 2017", section: "Rule 22(1)", title: "REG-17 — SCN for Cancellation Format", description: "SCN for cancellation to be issued in Form GST REG-17; 7 working days for reply", defaultSelected: true, required: true },
      { id: "cgst_r21a_57", act: "CGST Rules 2017", section: "Rule 21A", title: "Suspension of Registration During Proceedings", description: "Registration may be suspended (REG-31) during cancellation proceedings — taxpayer cannot file returns during suspension", defaultSelected: true, required: false },
      { id: "cgst_s29_3_57", act: "CGST Act 2017", section: "Section 29(3)", title: "All Dues Must Be Paid Before Cancellation", description: "Person whose registration is cancelled must pay all outstanding dues, ITC reversal on stock etc.", defaultSelected: false, required: false }
    ]
  },
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
  }
];
