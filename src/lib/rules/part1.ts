import { TemplateRuleSet } from './baseRules';

// Rule sets: gst_44 … gst_55
export const RULES_PART1: TemplateRuleSet[] = [
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
  {
    templateId: "gst_47",
    rules: [
      { id: "cgst_s76_1", act: "CGST Act 2017", section: "Section 76(1)", title: "Tax Collected Must be Deposited", description: "Any amount collected as GST from any person must be deposited to Government regardless of taxability", defaultSelected: true, required: true },
      { id: "cgst_s76_2", act: "CGST Act 2017", section: "Section 76(2)", title: "Penalty = Tax Collected", description: "Penalty under Section 76 equals the amount of tax collected but not deposited", defaultSelected: true, required: false },
      { id: "cgst_s50_1_47", act: "CGST Act 2017", section: "Section 50(1)", title: "Interest @ 18%", description: "Interest from due date of deposit to actual date of deposit", defaultSelected: true, required: false }
    ]
  },
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
  {
    templateId: "gst_50",
    rules: [
      { id: "cgst_s73_3_50", act: "CGST Act 2017", section: "Section 73(3)", title: "Proceedings Dropped — Tax Paid Before SCN", description: "No SCN to be issued if tax, interest, penalty paid before issuance", defaultSelected: true, required: false },
      { id: "cgst_s73_8_50", act: "CGST Act 2017", section: "Section 73(8)", title: "Proceedings Closed — Paid within 30 Days of SCN", description: "Penalty = 25% if tax + interest paid within 30 days of SCN; proceedings closed", defaultSelected: true, required: false }
    ]
  },
  {
    templateId: "gst_51",
    rules: [
      { id: "cgst_s74_9_51", act: "CGST Act 2017", section: "Section 74(9)", title: "Order Confirming Demand — 100% Penalty Mandatory", description: "Fraud/suppression order — penalty = 100% of tax evaded, mandatory", defaultSelected: true, required: true },
      { id: "cgst_s74_8_51", act: "CGST Act 2017", section: "Section 74(8)", title: "Reduced Penalty 25% if Paid within 30 Days of Order", description: "Post-order voluntary payment within 30 days → penalty reduces to 25%", defaultSelected: true, required: false },
      { id: "cgst_s75_7_51", act: "CGST Act 2017", section: "Section 75(7)", title: "Speaking Order Mandatory", description: "Adjudication order must be a reasoned / speaking order", defaultSelected: true, required: false },
      { id: "cgst_s107_51", act: "CGST Act 2017", section: "Section 107", title: "Appeal Clause — 3 Months, 10% Pre-Deposit", description: "Right of appeal before Commissioner (Appeals) within 3 months", defaultSelected: true, required: false }
    ]
  },
  {
    templateId: "gst_52",
    rules: [
      { id: "cgst_s73_9_52", act: "CGST Act 2017", section: "Section 73(9) / 74(9)", title: "Ex-Parte Order", description: "Order passed on basis of available records when noticee fails to appear", defaultSelected: true, required: true },
      { id: "cgst_s75_4_52", act: "CGST Act 2017", section: "Section 75(4)", title: "Natural Justice — Opportunity Given", description: "Opportunity to be heard must be given — opportunity given by fixing hearing dates", defaultSelected: true, required: false },
      { id: "cgst_s107_52", act: "CGST Act 2017", section: "Section 107", title: "Appeal Clause", description: "Right to appeal within 3 months of order communication", defaultSelected: true, required: false }
    ]
  },
  {
    templateId: "gst_53",
    rules: [
      { id: "cgst_s75_4_53", act: "CGST Act 2017", section: "Section 75(4)", title: "Mandatory Opportunity of Being Heard", description: "An opportunity of being heard shall be granted before passing adverse order", defaultSelected: true, required: true },
      { id: "cgst_r142_3_53", act: "CGST Rules 2017", section: "Rule 142(3)", title: "Personal Hearing — Right of Representation", description: "Noticee may appear in person or through authorized Advocate / CA / Tax Practitioner", defaultSelected: true, required: false }
    ]
  },
  {
    templateId: "gst_54",
    rules: [
      { id: "cgst_s62_1_54", act: "CGST Act 2017", section: "Section 62(1)", title: "Best Judgement Assessment — Non-Filer", description: "Proper Officer may assess tax to best of his judgement if return not filed after Section 46 notice", defaultSelected: true, required: true },
      { id: "cgst_s62_2_54", act: "CGST Act 2017", section: "Section 62(2)", title: "Deemed Withdrawal on Filing Returns within 30 Days", description: "Section 62 order deemed withdrawn if taxable person files returns within 30 days of order service", defaultSelected: true, required: false },
      { id: "cgst_s46_54", act: "CGST Act 2017", section: "Section 46", title: "Section 46 Notice — Prerequisite", description: "Notice under Section 46 with 15-day window is mandatory before Section 62 assessment", defaultSelected: true, required: true },
      { id: "cgst_r100_54", act: "CGST Rules 2017", section: "Rule 100(2)", title: "ASMT-13 — Assessment Order Format", description: "Best judgement assessment order to be issued in Form GST ASMT-13", defaultSelected: true, required: false }
    ]
  },
  {
    templateId: "gst_55",
    rules: [
      { id: "cgst_s61_55", act: "CGST Act 2017", section: "Section 61(1)", title: "Scrutiny of Returns — Discrepancy Notice", description: "Proper Officer may scrutinise returns and seek explanation for discrepancies or anomalies", defaultSelected: true, required: true },
      { id: "cgst_r99_55", act: "CGST Rules 2017", section: "Rule 99", title: "ASMT-10 / ASMT-11 / ASMT-12 Format", description: "Notice in ASMT-10; reply in ASMT-11; closure or SCN reference in ASMT-12", defaultSelected: true, required: true },
      { id: "cgst_s61_3_55", act: "CGST Act 2017", section: "Section 61(3)", title: "Refer to Audit/Investigation if Explanation Not Satisfactory", description: "If discrepancy not explained satisfactorily — officer may refer for audit, inspection or initiate SCN", defaultSelected: false, required: false }
    ]
  }
];
