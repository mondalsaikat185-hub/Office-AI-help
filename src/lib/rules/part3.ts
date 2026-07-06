import { TemplateRuleSet } from './baseRules';

// Rule sets: gst_68 … gst_79
export const RULES_PART3: TemplateRuleSet[] = [
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
  }
];
