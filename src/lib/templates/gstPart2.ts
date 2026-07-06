import { Template } from '../../types';

export const gstTemplatesPart2: Template[] = [
  {
    id: "gst_37",
    category: "GST",
    name: "Show Cause Notice (SCN) under Section 73",
    subject: "Show Cause Notice under Section 73 of the CGST Act, 2017 — M/s [Noticee Name]",
    opening: "Whereas it appears that you, M/s [Noticee Name] (GSTIN: [XXXX]), have short-paid tax / not paid tax / erroneously been refunded tax / input tax credit has been wrongly availed or utilized for the period [Period] as detailed in the attached statement of charges.",
    closing: "Therefore, you are hereby called upon to show cause as to why the tax amount of Rs. [Amount] along with applicable interest under Section 50 and penalty under Section 73(9) of the Act should not be demanded and recovered from you."
  },
  {
    id: "gst_38",
    category: "GST",
    name: "Show Cause Notice (SCN) under Section 74",
    subject: "Show Cause Notice under Section 74 of the CGST Act, 2017 — M/s [Noticee Name]",
    opening: "Whereas it appears that tax has not been paid / short paid / erroneously refunded / input tax credit has been wrongly availed or utilized by you, M/s [Noticee Name] (GSTIN: [XXXX]), for the period [Period] by reason of fraud or any willful-misstatement or suppression of facts to evade tax.",
    closing: "Now therefore, you are hereby directed to show cause as to why the tax amount of Rs. [Amount] along with interest under Section 50 and penalty under Section 74 of the Act should not be demanded and recovered from you."
  },
  {
    id: "gst_39",
    category: "GST",
    name: "Order-in-Original (OIO) under Section 73/74",
    subject: "Order-in-Original / Adjudication Order under Section [73/74] of the CGST Act, 2017",
    opening: "This order is passed in adjudication of the Show Cause Notice No. [Notice No.] dated [Date] issued to M/s [Noticee Name] (GSTIN: [XXXX]) regarding the short payment of GST/wrongful availing of ITC for the period [Period].",
    closing: "Therefore, I hereby confirm the demand of tax of Rs. [Amount] under Section [73/74] of the CGST Act, interest under Section 50, and impose a penalty of Rs. [Penalty] under the relevant provisions."
  },
  {
    id: "gst_40",
    category: "GST",
    name: "DRC-01 Summary of Show Cause Notice",
    subject: "Summary of Show Cause Notice in Form GST DRC-01 — M/s [Noticee Name]",
    opening: "A summary of the Show Cause Notice issued under Section [73/74/76] of the CGST Act, 2017 is hereby uploaded. The brief facts, grounds, and calculations of the tax, interest, and penalty proposed are detailed in the annexures.",
    closing: "You are required to submit your reply in Form GST DRC-06 within 30 days of service of this notice, failing which the case will be decided ex-parte."
  },
  {
    id: "gst_41",
    category: "GST",
    name: "DRC-07 Summary of Adjudication Order",
    subject: "Summary of Adjudication Order in Form GST DRC-07 — M/s [Noticee Name]",
    opening: "A summary of the Adjudication Order passed under Section [73/74/76] of the CGST Act, 2017 is hereby uploaded. The tax, interest, and penalty liabilities confirmed are specified in the table below.",
    closing: "You are hereby directed to deposit the confirmed dues of Rs. [Amount] within 3 months, failing which recovery action under Section 79 will be initiated."
  },
  {
    id: "gst_42",
    category: "GST",
    name: "IGST Refund Sanction Order (RFD-06)",
    subject: "Order Sanctioning Refund under Section 54 of the CGST Act, 2017 — M/s [Noticee Name]",
    opening: "With reference to your refund application in Form GST RFD-01 (ARN: [ARN]) dated [Date] for refund of Rs. [Amount] on account of [export of goods/services without payment of tax / accumulated ITC], the claim has been verified with shipping bills and customs data.",
    closing: "Now therefore, I hereby sanction a refund amount of Rs. [Amount] under Section 54 of the CGST Act, 2017 and direct that the same be credited to your bank account."
  },
  {
    id: "gst_43",
    category: "GST",
    name: "Anti-Evasion Inspection/Visit Report",
    subject: "Report on Anti-Evasion Inspection under Section 67(1) — M/s [Noticee Name]",
    opening: "Pursuant to the authorization in Form GST INS-01 No. [X] dated [Date] issued by the Joint Commissioner, an inspection of the principal place of business of M/s [Noticee Name] was conducted on [Date] by the anti-evasion team.",
    closing: "The physical stock was verified, records resumed under proper panchnama, and statements of the authorized signatory recorded. Further analysis is under process."
  },
  {
    id: "gst_44",
    category: "GST",
    name: "Show Cause Notice — Section 73 (GSTR-1 vs GSTR-3B Output Tax Mismatch)",
    subject: "Show Cause Notice under Section 73(1) of the CGST Act, 2017 — GSTIN: [GSTIN] — M/s [Taxpayer Name] — Period: [Tax Period]",
    opening: `FORM GST DRC-01\nShow Cause Notice under Section 73(1) of the Central Goods and Services Tax Act, 2017\n\nReference No: [DIN] / C.No. CGST/[Division]/SCN/[Year]/[No.]             Date: [Date of Notice]\n\nTo,\n[Taxpayer Name]\nGSTIN: [GSTIN]\n[Address Line 1], [Address Line 2]\n[City] — [PIN Code]\n\nSubject: Show Cause Notice under Section 73(1) of the CGST Act, 2017 read with Rule 142(1) of the CGST Rules, 2017 for recovery of CGST/IGST/SGST, interest and penalty in respect of GSTIN [GSTIN] for the period [Tax Period].\n\nSir/Madam,\n\nWhereas it appears from the records available with this office that you, M/s [Taxpayer Name] (GSTIN: [GSTIN]), have short-paid the Goods and Services Tax for the period [Tax Period] on account of mismatch between outward supplies declared in Form GSTR-1 and the taxable value reported in Form GSTR-3B, as detailed below:\n\nSTATEMENT OF DEMAND:\n┌──────────┬────────────┬────────────┬──────────┬───────┬───────────┬────────────┬────────────┬─────────────┐\n│  Period  │  CGST (Rs.)│ SGST (Rs.) │IGST (Rs.)│ Cess  │Total Tax  │Interest    │ Penalty    │   Total     │\n│          │            │            │          │ (Rs.) │  (Rs.)    │u/s 50 (Rs.)│u/s 73(9)  │    (Rs.)    │\n├──────────┼────────────┼────────────┼──────────┼───────┼───────────┼────────────┼────────────┼─────────────┤\n│[FY/Qtr]  │[Amount]    │[Amount]    │[Amount]  │  —    │[Total Tax]│[Interest]  │[Penalty]   │[Grand Total]│\n└──────────┴────────────┴────────────┴──────────┴───────┴───────────┴────────────┴────────────┴─────────────┘\n\nTotal Tax Proposed          : Rs. [Total Tax Amount]/-\nInterest u/s 50 (approx.)  : Rs. [Interest Amount]/-\nPenalty u/s 73(9) @ 10%    : Rs. [Penalty Amount]/-\nTotal Proposed Demand       : Rs. [Grand Total]/-\n\nGROUNDS FOR ISSUANCE OF NOTICE:\n\n1. Output Tax Mismatch: As per the details in Form GSTR-1 filed by you for the period [Tax Period], the aggregate value of taxable outward supplies declared is Rs. [GSTR-1 Taxable Value]/-. However, in Form GSTR-3B filed for the corresponding period, the taxable turnover reported under the relevant tax head is Rs. [GSTR-3B Taxable Value]/-, resulting in a suppression of taxable supplies of Rs. [Difference Amount]/- and consequent short-payment of GST of Rs. [Short Tax]/-\n\n2. The short-payment is in contravention of Section 9 of the CGST Act, 2017 read with Rules 85 to 88 of the CGST Rules, 2017.\n\n3. You are required to pay interest on the delayed/short-paid tax under Section 50(1) of the CGST Act, 2017 at the rate of 18% per annum calculated from the due date of payment.`,
    closing: `You are hereby called upon to show cause, within 30 (thirty) days from the date of service of this notice, as to why the demand of Rs. [Grand Total]/- (comprising Tax: Rs. [Total Tax]/-, Interest: Rs. [Interest Amount]/- and Penalty: Rs. [Penalty Amount]/-) should not be confirmed against you.\n\nA personal hearing has been fixed on [Hearing Date] at [Hearing Time] at this office. You may appear in person or through a duly authorized representative. Failure to appear without prior intimation shall result in the case being decided ex-parte on the basis of available records.\n\nYou are directed to produce all relevant books of accounts, invoices, returns, and other related documents in support of your reply.\n\n[Name of Proper Officer]\n[Designation]\nO/o the [Commissioner/AC/DC/Superintendent], CGST [Division/Commissionerate]\n[Office Address]\nDIN (Document Identification Number): [DIN]`
  },
  {
    id: "gst_45",
    category: "GST",
    name: "Show Cause Notice — Section 73 (Excess ITC Availed — GSTR-2B vs GSTR-3B Mismatch)",
    subject: "Show Cause Notice under Section 73(1) of CGST Act, 2017 — Excess Input Tax Credit — GSTIN: [GSTIN] — Period: [Tax Period]",
    opening: `FORM GST DRC-01\nShow Cause Notice under Section 73(1) of the Central Goods and Services Tax Act, 2017\n\nReference No: [DIN] / C.No. CGST/[Division]/SCN/[Year]/[No.]             Date: [Date of Notice]\n\nTo,\n[Taxpayer Name]\nGSTIN: [GSTIN]\n[Address]\n\nSubject: Show Cause Notice under Section 73(1) of the CGST Act, 2017 read with Section 16 and Rule 36 of the CGST Rules, 2017 for recovery of excess Input Tax Credit (ITC) availed — GSTIN [GSTIN] — Period: [Tax Period].\n\nSir/Madam,\n\nWhereas it appears from the records and data available with this office that you, M/s [Taxpayer Name] (GSTIN: [GSTIN]), have availed excess Input Tax Credit (ITC) in Form GSTR-3B beyond your entitlement as reflected in Form GSTR-2B, in contravention of Section 16(2)(aa) of the CGST Act, 2017, for the period [Tax Period], as detailed below:\n\nDETAILS OF EXCESS ITC AVAILED:\n┌──────────┬─────────────────────┬──────────────────────┬─────────────────────┐\n│  Period  │ ITC as per GSTR-2B  │ ITC Claimed in       │ Excess ITC Availed  │\n│          │ (Rs.)               │ GSTR-3B (Rs.)        │ (Rs.)               │\n├──────────┼─────────────────────┼──────────────────────┼─────────────────────┤\n│[Period]  │[GSTR-2B ITC]        │[GSTR-3B ITC]         │[Difference]         │\n└──────────┴─────────────────────┴──────────────────────┴─────────────────────┘\n\nExcess ITC (Tax)          : Rs. [Excess ITC]/-\nInterest u/s 50(3)        : Rs. [Interest]/-  (@ 24% per annum, from date of utilisation)\nPenalty u/s 73(9) @ 10%   : Rs. [Penalty]/-\nTotal Proposed Demand     : Rs. [Grand Total]/-\n\nGROUNDS:\n1. Section 16(2)(aa) of the CGST Act, 2017 (inserted w.e.f. 01.01.2022) mandates that ITC can be availed only to the extent the same has been reflected in Form GSTR-2B of the recipient.\n2. You have availed ITC of Rs. [Excess ITC]/- in excess of the amount appearing in your GSTR-2B for the period [Tax Period].\n3. The excess ITC availed is required to be reversed in terms of Section 41 read with Rule 42 of the CGST Rules.\n4. Interest under Section 50(3) at 24% per annum is payable from the date of utilisation of excess ITC.`,
    closing: `You are hereby called upon to show cause, within 30 (thirty) days from the date of service of this notice, as to why the excess ITC of Rs. [Excess ITC]/- availed by you, along with interest of Rs. [Interest]/- and penalty of Rs. [Penalty]/- (total: Rs. [Grand Total]/-) should not be recovered from you.\n\nA personal hearing has been fixed on [Hearing Date] at [Hearing Time]. You are requested to appear and produce all relevant documents, supplier invoices, GSTR-2B reconciliation workings, and any other document in support of your case.\n\n[Name of Proper Officer]\n[Designation]\nO/o the [Commissioner/AC/DC/Superintendent], CGST [Division/Commissionerate]\nDIN: [DIN]`
  },
  {
    id: "gst_46",
    category: "GST",
    name: "Show Cause Notice — Section 73 (Non-payment of Tax on Reverse Charge Mechanism)",
    subject: "Show Cause Notice under Section 73(1) of CGST Act, 2017 — Non-payment of RCM Tax — GSTIN: [GSTIN] — Period: [Tax Period]",
    opening: `FORM GST DRC-01\nShow Cause Notice under Section 73(1) of the Central Goods and Services Tax Act, 2017\n\nReference No: [DIN] / C.No. CGST/[Division]/SCN/[Year]/[No.]             Date: [Date of Notice]\n\nTo,\n[Taxpayer Name]\nGSTIN: [GSTIN]\n[Address]\n\nSubject: Show Cause Notice under Section 73(1) of the CGST Act, 2017 for non-payment of tax under Reverse Charge Mechanism (RCM) — GSTIN [GSTIN] — Period [Tax Period].\n\nSir/Madam,\n\nWhereas it appears from the records and information available with this office that you, M/s [Taxpayer Name] (GSTIN: [GSTIN]), have received taxable services / purchased goods from [unregistered supplier(s) / specified category of supplier] but have failed to discharge the applicable Goods and Services Tax liability under the Reverse Charge Mechanism (RCM) as required under Section 9(3) / 9(4) of the CGST Act, 2017, for the period [Tax Period]:\n\nNATURE OF SUPPLY ATTRACTING RCM:\nDescription of Service/Goods   : [e.g. Goods Transport Agency (GTA) services / Legal Services / Security Services / Import of Services]\nValue of Supply                : Rs. [Value]/-\nIGST/CGST+SGST applicable      : Rs. [Tax Amount]/-\nPeriod                         : [Period]\n\nTotal RCM Tax not paid         : Rs. [Tax]/-\nInterest u/s 50(1) @ 18%       : Rs. [Interest]/-\nPenalty u/s 73(9) @ 10%        : Rs. [Penalty]/-\nTotal Proposed Demand          : Rs. [Grand Total]/-\n\nGROUNDS:\n1. You are a registered supplier and have received [GTA/legal/other] services worth Rs. [Value]/- during [Period], which are liable to GST under RCM as per Section 9(3)/9(4) of the CGST Act read with relevant notification.\n2. You have neither declared the RCM liability in Table 3.1(d) of Form GSTR-3B nor paid the tax thereon.\n3. Non-payment of RCM tax amounts to short-payment under Section 73(1) of the CGST Act.`,
    closing: `You are hereby called upon to show cause, within 30 (thirty) days from the date of service of this notice, as to why the tax demand of Rs. [Tax]/- along with interest of Rs. [Interest]/- and penalty of Rs. [Penalty]/- (total: Rs. [Grand Total]/-) should not be confirmed against you.\n\nA personal hearing has been fixed on [Hearing Date] at [Hearing Time]. You may appear through an authorized representative.\n\n[Name of Proper Officer]\n[Designation]\nO/o the [Commissioner/AC/DC/Superintendent], CGST [Division/Commissionerate]\nDIN: [DIN]`
  },
  {
    id: "gst_47",
    category: "GST",
    name: "Show Cause Notice — Section 76 (Tax Collected but Not Deposited to Government)",
    subject: "Show Cause Notice under Section 76 of CGST Act, 2017 — Tax Collected but Not Deposited — GSTIN: [GSTIN]",
    opening: `FORM GST DRC-01\nShow Cause Notice under Section 76 of the Central Goods and Services Tax Act, 2017\n\nReference No: [DIN] / C.No. CGST/[Division]/SCN/[Year]/[No.]             Date: [Date of Notice]\n\nTo,\n[Taxpayer Name]\nGSTIN: [GSTIN]\n[Address]\n\nSubject: Show Cause Notice under Section 76 of the CGST Act, 2017 for recovery of tax amount collected from customers but not deposited to the Government — GSTIN [GSTIN] — Period [Tax Period].\n\nSir/Madam,\n\nWHEREAS it appears from the examination of your GSTR-1 returns, invoices and books of accounts that you, M/s [Taxpayer Name] (GSTIN: [GSTIN]), have collected Goods and Services Tax from your customers in respect of taxable supplies made during the period [Tax Period], but have failed to deposit the entire amount of tax so collected into the Government account through your GSTR-3B, as detailed below:\n\nDETAILS OF TAX COLLECTED BUT NOT DEPOSITED:\nTax collected as per GSTR-1/invoices : Rs. [Collected Amount]/-\nTax deposited in GSTR-3B             : Rs. [Deposited Amount]/-\nDifferential amount (not deposited)   : Rs. [Shortfall]/-\nPeriod of default                    : [Period]\nInterest u/s 50(1) @ 18% per annum  : Rs. [Interest]/-\nPenalty u/s 76(2)                    : Rs. [Penalty]/-  (equivalent to the tax collected)\nTotal Proposed Demand                : Rs. [Grand Total]/-\n\nNOTE: Section 76(1) of the CGST Act, 2017 specifically provides that if a person collects any amount as representing the tax under this Act from another person, whether correctly or otherwise, he shall forthwith pay the said amount to the Government, regardless of whether the supplies in respect of which such amount was collected are taxable or not.`,
    closing: `You are hereby called upon to show cause, within 30 (thirty) days from the date of service of this notice, as to why the tax amount of Rs. [Shortfall]/- collected by you from your customers but not deposited, along with interest of Rs. [Interest]/- and penalty of Rs. [Penalty]/- (total: Rs. [Grand Total]/-) should not be recovered from you under Section 76 of the CGST Act, 2017.\n\nA personal hearing has been fixed on [Hearing Date] at [Hearing Time]. Please attend or send a duly authorised representative with all relevant invoices, ledger copies and bank statements.\n\n[Name of Proper Officer]\n[Designation]\nO/o the [Commissioner/AC/DC/Superintendent], CGST [Division/Commissionerate]\nDIN: [DIN]`
  },
  {
    id: "gst_48",
    category: "GST",
    name: "Show Cause Notice — Section 74 (Fraud / Suppression of Turnover / Fake Invoices)",
    subject: "Show Cause Notice under Section 74(1) of CGST Act, 2017 — Fraud / Suppression / Wilful Misstatement — GSTIN: [GSTIN] — Period: [Tax Period]",
    opening: `FORM GST DRC-01\nShow Cause Notice under Section 74(1) of the Central Goods and Services Tax Act, 2017\n\nReference No: [DIN] / C.No. CGST/[Division]/SCN/[Year]/[No.]             Date: [Date of Notice]\n\nTo,\n[Taxpayer Name]\nGSTIN: [GSTIN]\n[Address]\n\nSubject: Show Cause Notice under Section 74(1) of the CGST Act, 2017 for recovery of tax, interest and penalty involving FRAUD / WILFUL MISSTATEMENT / SUPPRESSION of facts — GSTIN [GSTIN] — Period [Tax Period].\n\nSir/Madam,\n\nWHEREAS it appears from the investigation / enquiry / scrutiny of records that you, M/s [Taxpayer Name] (GSTIN: [GSTIN]), have committed the following acts involving fraud, wilful misstatement and suppression of facts with intent to evade payment of tax, in contravention of the provisions of the CGST Act, 2017:\n\nSTATEMENT OF FACTS AND GROUNDS:\n\n1. Nature of Evasion / Fraud:\n   [Clearly describe: e.g., \"M/s [Name] has been issuing invoices to various registered persons to pass on ITC of Rs. [X]/- without any actual supply of goods / services. The supplier's premises were found to be non-existent on physical verification conducted on [Date]. Statements of [persons] recorded on [Date] under Section 70 reveal that no actual business was conducted from the registered address.\"]\n\n2. Suppression of Outward Supplies: Taxpayer has suppressed their actual taxable value by not declaring supplies in their returns, leading to a tax evasion of Rs. [Tax Amount]/-. This suppression has been committed wilfully by hiding purchase invoices and bank transactions.\n\n3. Penalty u/s 74(1): Since the tax evasion involves fraud and suppression of facts, penalty equivalent to 100% of the tax evaded (Rs. [Tax Amount]/-) is proposed.`,
    closing: `You are hereby called upon to show cause, within 30 (thirty) days from the date of service of this notice, as to why:\n(a) The suppressed taxable turnover of Rs. [Suppressed Value]/- should not be determined.\n(b) The GST demand of Rs. [Tax Amount]/- should not be confirmed against you under Section 74(1) of the CGST Act, 2017.\n(c) Interest under Section 50(1) should not be recovered.\n(d) Penalty equivalent to 100% of the tax evaded should not be imposed under Section 74(1).\n\nA personal hearing has been fixed on [Hearing Date] at [Hearing Time]. Please submit a written reply and produce all documents, registers and books of accounts at the hearing.\n\n[Name of Proper Officer]\n[Designation]\nO/o the [Commissioner/AC/DC/Superintendent], CGST [Division/Commissionerate]\nDIN: [DIN]`
  },
  {
    id: "gst_49",
    category: "GST",
    name: "Order-in-Original — Full Confirmation of Demand (Section 73)",
    subject: "Order-in-Original under Section 73(9) of CGST Act, 2017 confirming demand — GSTIN: [GSTIN] — M/s [Taxpayer Name] — SCN No: [SCN Reference]",
    opening: `ORDER-IN-ORIGINAL
(Under Section 73(9) of the Central Goods and Services Tax Act, 2017)

Order No: [DIN] / CGST/[Division]/OIO/[Year]/[No.]                      Date: [Date of Order]

In the matter of:
M/s [Taxpayer Name]
GSTIN: [GSTIN]
[Address]

SUBJECT: Order under Section 73(9) of the CGST Act, 2017 in respect of SCN No. [DIN of SCN] dated [SCN Date] for the period [Tax Period].

─────────────────────────────────────────────────────────────────────
STATEMENT OF FACTS
─────────────────────────────────────────────────────────────────────

1. Show Cause Notice No. [DIN] dated [SCN Date] was issued to M/s [Taxpayer Name] (GSTIN: [GSTIN]) under Section 73(1) of the CGST Act, 2017 proposing a demand of Rs. [Proposed Tax]/- (Tax: Rs. [Tax]/- + Interest: Rs. [Interest]/- + Penalty: Rs. [Penalty]/-) for the period [Period] on account of [brief grounds from SCN].

2. The noticee was served the SCN on [Date of Service].

3. The noticee [filed a reply on [Date of Reply] / did not file any reply within the prescribed period of 30 days].

4. A personal hearing was granted on [Hearing Date] at [Time]. The noticee [appeared through Shri/Smt. [Representative Name], [Designation/Advocate] / did not appear for the personal hearing without any prior intimation].

─────────────────────────────────────────────────────────────────────
CONSIDERATION OF REPLY AND FINDINGS
─────────────────────────────────────────────────────────────────────

5. The reply filed by the noticee has been carefully examined. The submissions made are not found acceptable for the following reasons:

[Ground 1]: [State detailed finding — factual analysis]
[Ground 2]: [State legal analysis and applicable sections/rules]
[Ground 3]: [Distinguish case laws cited by noticee, if any]

6. The data from the GST portal, GSTR-1, GSTR-3B and GSTR-2B for the period [Period] has been examined. The short-payment of tax / excess ITC availed as proposed in the SCN stands fully established.

DEMAND CONFIRMED:
Tax confirmed          : Rs. [Tax Confirmed]/-
Interest u/s 50        : Rs. [Interest Confirmed]/- (calculated @ 18% per annum from [date] to [date])
Penalty u/s 73(9) @ 10%: Rs. [Penalty Confirmed]/-
Total Demand Confirmed : Rs. [Total Confirmed]/-`,
    closing: `─────────────────────────────────────────────────────────────────────
ORDER
─────────────────────────────────────────────────────────────────────

In view of the foregoing, I hereby confirm the demand of Rs. [Tax Confirmed]/- as tax, Rs. [Interest Confirmed]/- as interest under Section 50, and Rs. [Penalty Confirmed]/- as penalty under Section 73(9), aggregating to Rs. [Total Confirmed]/- (Rupees [Amount in words] only) against M/s [Taxpayer Name] (GSTIN: [GSTIN]) for the period [Period].

The noticee is directed to deposit the above amount within 3 months from the date of service of this order, failing which recovery proceedings shall be initiated under Section 79 of the CGST Act, 2017.

APPEAL CLAUSE: The noticee may prefer an appeal against this order before the Commissioner (Appeals), CGST & Central Excise, [Zone Name], under Section 107 of the CGST Act, 2017 within 3 months from the date of communication of this order. A pre-deposit of 10% of the disputed tax amount is required for filing the appeal under Section 107(6) of the Act.

[Name of Proper Officer]
[Designation]
O/o the [Commissioner/AC/DC/Superintendent], CGST [Division/Commissionerate]
DIN: [DIN]`
  },
  {
    id: "gst_50",
    category: "GST",
    name: "Order-in-Original — Dropping of Proceedings (Section 73 — Demand Not Sustainable)",
    subject: "Order under Section 73(3)/73(8) of CGST Act, 2017 — Dropping of Proceedings — GSTIN: [GSTIN] — SCN No: [SCN Reference]",
    opening: `ORDER-IN-ORIGINAL
Dropping of Proceedings under Section 73(3) / 73(8) of the CGST Act, 2017

Order No: [DIN] / CGST/[Division]/OIO/[Year]/[No.]                      Date: [Date of Order]

In the matter of:
M/s [Taxpayer Name]
GSTIN: [GSTIN]
[Address]

SUBJECT: Order dropping proceedings pursuant to SCN No. [DIN of SCN] dated [SCN Date] for the period [Tax Period].

STATEMENT OF FACTS:

1. Show Cause Notice No. [DIN] dated [SCN Date] was issued to M/s [Taxpayer Name] (GSTIN: [GSTIN]) under Section 73(1) of the CGST Act, 2017 proposing a demand of Rs. [Proposed Amount]/- for the period [Period].

2. The noticee filed a detailed reply dated [Date of Reply] and appeared for personal hearing on [Hearing Date].

CONSIDERATION AND FINDINGS:

3. The reply filed by the noticee has been examined carefully. The noticee has demonstrated that:
   [Ground 1 — e.g., the alleged mismatch between GSTR-1 and GSTR-3B is reconciled through amended returns / credit notes issued]
   [Ground 2 — e.g., the ITC availed is fully backed by valid invoices and appears in GSTR-2B]
   [Ground 3 — other factual/legal grounds accepted]

4. In view of the satisfactory explanation / payment of dues / successful reconciliation, the demand proposed in the SCN is not sustainable.`,
    closing: `ORDER:

In view of the above findings, I am satisfied that the demand proposed vide SCN No. [DIN] dated [SCN Date] is [not sustainable / has been settled by the noticee by payment of Rs. [Paid Amount]/- vide Challan No. [X] dated [Date]].

The proceedings initiated vide the aforesaid SCN are hereby DROPPED. This order is issued without prejudice to any right of the department to initiate fresh proceedings if any new evidence comes to light.

[Name of Proper Officer]
[Designation]
O/o the [Commissioner/AC/DC/Superintendent], CGST [Division/Commissionerate]
DIN: [DIN]`
  },
  {
    id: "gst_51",
    category: "GST",
    name: "Order-in-Original — Full Confirmation (Section 74 — Fraud/Suppression) with Mandatory 100% Penalty",
    subject: "Order-in-Original under Section 74(9) of CGST Act, 2017 — Fraud/Suppression — GSTIN: [GSTIN] — SCN No: [SCN Reference]",
    opening: `ORDER-IN-ORIGINAL
(Under Section 74(9) of the Central Goods and Services Tax Act, 2017)

Order No: [DIN] / CGST/[Division]/OIO/[Year]/[No.]                      Date: [Date of Order]

In the matter of:
M/s [Taxpayer Name]
GSTIN: [GSTIN]
[Address]

SUBJECT: Order under Section 74(9) of the CGST Act, 2017 (Fraud / Suppression / Wilful Misstatement) — SCN No. [DIN] dated [SCN Date] — Period [Tax Period].

─────────────────────────────────────────────────────────────────────
STATEMENT OF FACTS
─────────────────────────────────────────────────────────────────────

1. SCN No. [DIN] dated [SCN Date] was issued under Section 74(1) of the CGST Act, 2017 alleging fraud / wilful misstatement / suppression of facts with intent to evade tax of Rs. [Proposed Tax]/-.

2. The extended limitation period of 5 years was invoked as the evasion involved fraud/suppression.

3. The noticee [filed reply on [Date] / did not file any reply]. Personal hearing was conducted on [Date]. The noticee [appeared / did not appear].

─────────────────────────────────────────────────────────────────────
FINDINGS
─────────────────────────────────────────────────────────────────────

4. I have carefully examined the case records, investigation reports, statements recorded under Section 70, and the reply/submissions of the noticee, if any.

5. The fraud / suppression is established on the following grounds:
   [Para A]: [Describe evidence of fraud — e.g., suppliers found to be fake on verification]
   [Para B]: [Describe suppression — e.g., actual turnover from seized documents vs. declared turnover]
   [Para C]: [Describe false ITC claims — GSTR-2A confirmation of ineligibility]

6. The noticee's reply is rejected because:
   [Ground 1]: [Analysis]
   [Ground 2]: [Analysis]

DEMAND CONFIRMED (SECTION 74):
Tax confirmed                    : Rs. [Tax Confirmed]/-
Interest u/s 50 @ 18%           : Rs. [Interest Confirmed]/-
Penalty u/s 74(9) @ 100% of tax : Rs. [Penalty Confirmed]/-   [Mandatory penalty]
Total Demand                     : Rs. [Total Confirmed]/-`,
    closing: `ORDER:

In view of the foregoing findings establishing fraud/suppression, I hereby CONFIRM the demand of Rs. [Tax Confirmed]/- as tax + Rs. [Interest Confirmed]/- as interest + Rs. [Penalty Confirmed]/- as penalty (at 100% of tax under Section 74(9)) = Rs. [Total Confirmed]/- (Rupees [Amount in words] only) against M/s [Taxpayer Name] (GSTIN: [GSTIN]).

The noticee is directed to pay the confirmed amount within 3 months, failing which recovery will be effected under Section 79 of the CGST Act.

APPEAL CLAUSE: Appeal lies before the Commissioner (Appeals), CGST & Central Excise, [Zone], under Section 107 of the CGST Act, 2017 within 3 months of communication of this order. Pre-deposit of 10% of disputed tax is mandatory under Section 107(6).

[Name of Proper Officer]
[Designation]
O/o the [Commissioner/AC/DC/Superintendent], CGST [Division/Commissionerate]
DIN: [DIN]`
  },
  {
    id: "gst_52",
    category: "GST",
    name: "Order-in-Original — Ex-Parte (Noticee Did Not Appear or Reply)",
    subject: "Ex-Parte Order under Section 73(9)/74(9) of CGST Act, 2017 — GSTIN: [GSTIN] — SCN No: [SCN Reference]",
    opening: `ORDER-IN-ORIGINAL (EX-PARTE)
Under Section 73(9) / 74(9) of the Central Goods and Services Tax Act, 2017

Order No: [DIN] / CGST/[Division]/OIO/[Year]/[No.]                      Date: [Date of Order]

In the matter of:
M/s [Taxpayer Name]
GSTIN: [GSTIN]
[Address]

SUBJECT: Ex-parte Order under Section [73(9)/74(9)] — SCN No. [DIN] dated [SCN Date].

STATEMENT OF FACTS:

1. Show Cause Notice No. [DIN] dated [SCN Date] was duly served on M/s [Taxpayer Name] (GSTIN: [GSTIN]) on [Date of Service] proposing a demand of Rs. [Proposed Amount]/-.

2. The noticee was given 30 days to file a reply. No reply has been received till date.

3. Personal hearing was fixed on [Hearing Date-1] and reminded on [Hearing Date-2]. The noticee failed to appear on both occasions without any prior intimation or request for adjournment.

4. In view of the non-cooperation of the noticee, the matter is being decided ex-parte on the basis of records available with this office.

FINDINGS ON MERITS:

5. On examination of the records, returns, portal data, and investigation reports, the demand proposed in the SCN stands fully established:
   [State factual basis of the demand briefly]
   [Mention GSTR data, portal records, or investigation evidence used]

DEMAND CONFIRMED:
Tax            : Rs. [Tax]/-
Interest u/s 50: Rs. [Interest]/-
Penalty        : Rs. [Penalty]/-
Total          : Rs. [Total]/-`,
    closing: `ORDER:

In view of the non-response and non-appearance of the noticee, and on the basis of records available, I hereby confirm the demand of Rs. [Total]/- against M/s [Taxpayer Name] (GSTIN: [GSTIN]).

APPEAL CLAUSE: The noticee may prefer an appeal before the Commissioner (Appeals) within 3 months of communication of this order. Pre-deposit of 10% of the disputed tax amount is mandatory under Section 107(6).

[Name of Proper Officer]
[Designation]
O/o the [Commissioner/AC/DC/Superintendent], CGST [Division/Commissionerate]
DIN: [DIN]`
  },
  {
    id: "gst_53",
    category: "GST",
    name: "Personal Hearing Notice — GST Adjudication / SCN Proceedings",
    subject: "Personal Hearing Notice in the matter of SCN No. [SCN Reference] dated [SCN Date] — GSTIN: [GSTIN] — M/s [Taxpayer Name]",
    opening: `Personal Hearing Notice

Reference No: [DIN] / C.No. CGST/[Division]/PHN/[Year]/[No.]             Date: [Date]

To,
[Taxpayer Name / Authorized Representative]
GSTIN: [GSTIN]
[Address]

Subject: Personal Hearing in the matter of Show Cause Notice No. [DIN of SCN] dated [SCN Date] — GSTIN [GSTIN] — M/s [Taxpayer Name].

Sir/Madam,

With reference to the Show Cause Notice No. [DIN] dated [SCN Date] issued to you / your firm under Section [73/74/74A/76] of the CGST Act, 2017 for the period [Tax Period], you are hereby informed that a Personal Hearing in the above matter has been fixed as under:

Date of Hearing : [Hearing Date]
Time            : [Hearing Time]
Venue           : Office of the [Superintendent/AC/DC/Commissioner], CGST, [Division/Zone Address]

You are requested to attend the personal hearing on the scheduled date either in person or through a duly authorized representative (Chartered Accountant / Tax Practitioner / Advocate) with proper authorization letter.`,
    closing: `You are further requested to bring all relevant documents, books of accounts, invoices, returns, bank statements, and any other supporting material in support of your case at the time of hearing.

In case you are unable to attend on the scheduled date, please intimate this office in advance so that a fresh date may be fixed. Non-attendance without prior intimation shall result in the matter being decided ex-parte on the basis of records available.

[Name of Proper Officer]
[Designation]
O/o the [Commissioner/AC/DC/Superintendent], CGST [Division/Commissionerate]`
  },
  {
    id: "gst_54",
    category: "GST",
    name: "Best Judgement Assessment Order — Section 62 (Non-Filer of Returns)",
    subject: "Assessment Order under Section 62 of CGST Act, 2017 — GSTIN: [GSTIN] — M/s [Taxpayer Name] — Non-filing of Returns",
    opening: `ASSESSMENT ORDER UNDER SECTION 62
Central Goods and Services Tax Act, 2017

Order No: [DIN] / CGST/[Division]/ASMT/[Year]/[No.]                     Date: [Date of Order]

In the matter of:
M/s [Taxpayer Name]
GSTIN: [GSTIN]
[Address]

SUBJECT: Assessment under Section 62(1) of the CGST Act, 2017 for non-filing of returns for the period [Period(s)].

FACTS:

1. M/s [Taxpayer Name] (GSTIN: [GSTIN]) has failed to file the following return(s) despite being a registered taxable person:
   GSTR-3B for [Month/Quarter, Year]
   GSTR-3B for [Month/Quarter, Year]
   [List all pending return periods]

2. A notice was issued under Section 46 of the CGST Act on [Date of Section 46 Notice] calling upon the noticee to file the pending returns within 15 days.

3. The noticee has failed to file the return(s) even after service of the Section 46 notice.

4. In the absence of filed returns, this office has proceeded to assess the tax liability to the best of its judgement on the basis of the following information available:
   a. Last filed return (GSTR-3B for [Period])    : Declared turnover Rs. [X]/-, Tax Rs. [X]/-
   b. GSTR-1 data (if available)                  : Declared outward supplies Rs. [X]/-
   c. Third-party data / E-way bill data           : Estimated turnover Rs. [X]/-
   d. Previous years average monthly tax           : Rs. [X]/-

ASSESSMENT:
Estimated taxable turnover for [Period]   : Rs. [Assessed Turnover]/-
CGST @ [Rate]%                            : Rs. [CGST]/-
SGST @ [Rate]%                            : Rs. [SGST]/-
IGST @ [Rate]%                            : Rs. [IGST]/-
Total Tax assessed                        : Rs. [Total Tax]/-
Interest u/s 50 @ 18% per annum          : Rs. [Interest]/-
Penalty u/s 62(1)                         : Rs. [Penalty]/-
Total Demand                              : Rs. [Total]/-`,
    closing: `ORDER:

In exercise of powers under Section 62(1) of the CGST Act, 2017, the tax liability of M/s [Taxpayer Name] (GSTIN: [GSTIN]) for the period [Period] is hereby ASSESSED at Rs. [Total Tax]/- (CGST: Rs. [X]/-, SGST: Rs. [X]/-, IGST: Rs. [X]/-) along with interest of Rs. [Interest]/- and penalty of Rs. [Penalty]/-, totalling Rs. [Grand Total]/-.

NOTE ON WITHDRAWAL: This assessment order shall be deemed to have been withdrawn if the noticee files the outstanding returns within 30 days of service of this order and pays the tax, interest and late fee declared in such returns (Section 62(2) of the CGST Act, 2017).

The noticee is directed to file all pending returns and pay outstanding dues immediately.

[Name of Proper Officer]
[Designation]
O/o the [Commissioner/AC/DC/Superintendent], CGST [Division/Commissionerate]
DIN: [DIN]`
  },
  {
    id: "gst_55",
    category: "GST",
    name: "Scrutiny Notice — Form GST ASMT-10 (Return Discrepancy)",
    subject: "Notice for Scrutiny of Returns — Form GST ASMT-10 — GSTIN: [GSTIN] — M/s [Taxpayer Name] — Period: [Tax Period]",
    opening: `FORM GST ASMT-10
Notice for Seeking Clarification / Additional Information / Documents
(Under Section 61(1) of the CGST Act, 2017 read with Rule 99)

Reference No: [DIN] / C.No. CGST/[Division]/ASMT-10/[Year]/[No.]        Date: [Date]

To,
[Taxpayer Name]
GSTIN: [GSTIN]
[Address]

Subject: Notice for Scrutiny of Returns and seeking clarification — GSTIN [GSTIN] — Period [Tax Period].

Sir/Madam,

On scrutiny of your GST returns filed for the period [Tax Period], the following discrepancies / inconsistencies have been noticed which require clarification:

─────────────────────────────────────────────────────────────────────
DETAILS OF DISCREPANCIES OBSERVED
─────────────────────────────────────────────────────────────────────

Sr. | Nature of Discrepancy         | Amount (Rs.)  | Remarks
----|-------------------------------|---------------|---------------------------
 1  | GSTR-1 vs GSTR-3B             |               |
    | Taxable supplies in GSTR-1    | [Amount]      | As per portal data
    | Taxable supplies in GSTR-3B   | [Amount]      | As declared
    | Difference (short-reported)   | [Difference]  | Requires explanation
----|-------------------------------|---------------|---------------------------
 2  | ITC in GSTR-3B vs GSTR-2B     |               |
    | ITC as per GSTR-2B            | [Amount]      | Auto-populated
    | ITC claimed in GSTR-3B        | [Amount]      | As claimed
    | Excess ITC claimed            | [Excess]      | Requires reversal/explanation
----|-------------------------------|---------------|---------------------------
 3  | [Other discrepancy]           | [Amount]      | [Remarks]

Total discrepancy amount         : Rs. [Total]/-
Estimated short-payment of tax  : Rs. [Short Tax]/-`,
    closing: `You are requested to furnish your reply / clarification in Form GST ASMT-11 within 30 (thirty) days from the date of service of this notice, explaining the above discrepancies with supporting documents and evidence.

If the discrepancies are found to be acceptable on the basis of your explanation, the matter will be dropped. If no reply is received, or the explanation is not satisfactory, the matter shall be referred for appropriate action including issuance of Show Cause Notice under Section 73/74 of the CGST Act, 2017.

[Name of Proper Officer]
[Designation]
O/o the [Commissioner/AC/DC/Superintendent], CGST [Division/Commissionerate]
DIN: [DIN]`
  },
  {
    id: "gst_56",
    category: "GST",
    name: "Recovery Notice — Attachment of Bank Account (Section 79(1)(c))",
    subject: "Notice under Section 79(1)(c) of CGST Act, 2017 for Recovery of Outstanding GST Dues — GSTIN: [GSTIN] — M/s [Taxpayer Name]",
    opening: `NOTICE FOR RECOVERY (BANK ATTACHMENT)
Under Section 79(1)(c) of the Central Goods and Services Tax Act, 2017

Reference No: [DIN] / C.No. CGST/[Division]/REC/[Year]/[No.]            Date: [Date]

To,
The Branch Manager,
[Bank Name]
[Branch Name & Address]

ALSO TO:
[Taxpayer Name]
GSTIN: [GSTIN]
[Address]

Subject: Notice for Recovery of outstanding GST dues from M/s [Taxpayer Name] (GSTIN: [GSTIN]) from amount held in bank account — under Section 79(1)(c) of the CGST Act, 2017.

Sir,

WHEREAS M/s [Taxpayer Name] (GSTIN: [GSTIN]) is in arrears of Central/Integrated/State Goods and Services Tax, interest and penalty totalling Rs. [Total Outstanding]/- (Rupees [Amount in words] only) as per the adjudication order / summary in Form GST DRC-07 No. [DRC-07 Reference] dated [Date], details of which are as under:

Tax (CGST/IGST/SGST)              : Rs. [Tax]/-
Interest u/s 50                   : Rs. [Interest]/-
Penalty                           : Rs. [Penalty]/-
Total Outstanding Demand          : Rs. [Total Outstanding]/-
Amount already paid (if any)      : Rs. [Paid]/-
Balance outstanding               : Rs. [Balance]/-

The said dues have not been paid within the period of 3 months from the date of the order, nor has any stay been granted by any competent authority.

YOU, THE BRANCH MANAGER of [Bank Name], [Branch], are hereby directed under Section 79(1)(c) of the CGST Act, 2017 to:

(a) Hold and NOT release any amount standing to the credit of M/s [Taxpayer Name] in Account No. [Account Number] maintained with your branch, up to the extent of Rs. [Balance Outstanding]/-; and

(b) Pay the said amount of Rs. [Balance Outstanding]/- to the credit of the Government account through [NEFT/RTGS to Account No. [Govt Account Details] / Challan in FORM GST PMT-07] within [3] working days of receipt of this notice.`,
    closing: `In case you fail to comply with this notice without sufficient cause, you shall be deemed to be an assessee in default in respect of the above-mentioned amount under Section 79(1)(c) proviso, and shall be personally liable to pay the said amount.

M/s [Taxpayer Name] (GSTIN: [GSTIN]) is separately being informed of this recovery action. They are directed not to withdraw or transfer any funds from the said account.

Any compliance under this notice may be reported to this office immediately.

[Name of Proper Officer]
[Designation]
O/o the [Commissioner/AC/DC/Superintendent], CGST [Division/Commissionerate]
DIN: [DIN]`
  },
  {
    id: "gst_57",
    category: "GST",
    name: "Cancellation of GST Registration SCN — Form REG-17 (Section 29(2))",
    subject: "Show Cause Notice in Form REG-17 for Cancellation of GST Registration — GSTIN: [GSTIN] — M/s [Taxpayer Name]",
    opening: `FORM GST REG-17
Show Cause Notice for Cancellation of Registration
(Under Rule 22(1) of the CGST Rules, 2017 read with Section 29(2) of the CGST Act, 2017)

Reference No: [DIN] / C.No. CGST/[Division]/REG-17/[Year]/[No.]         Date: [Date]

To,
[Taxpayer Name]
GSTIN: [GSTIN]
[Registered Address]

Subject: Show Cause Notice for cancellation of Goods and Services Tax Registration (GSTIN: [GSTIN]) under Section 29(2) of the CGST Act, 2017.

Sir/Madam,

WHEREAS it has come to the notice of this office that your GST Registration (GSTIN: [GSTIN]) is liable to be cancelled under Section 29(2) of the CGST Act, 2017 on account of the following reason(s):

GROUNDS FOR PROPOSED CANCELLATION:
[Select applicable ground:]

☑  [Ground 1]: You have not filed returns for [X] consecutive tax periods as required under Section [39/44] of the CGST Act, 2017. Details of pending returns:
   Period             : [List periods]
   Returns pending    : GSTR-3B for [X] months / GSTR-1 for [X] months

   [OR]

☑  [Ground 2]: The registration has been obtained by means of fraud, wilful misstatement or suppression of facts. The business premises were found to be non-existent / not operational on physical verification conducted on [Date].

   [OR]

☑  [Ground 3]: You have voluntarily discontinued / wound up your business without applying for cancellation of registration.

You are hereby called upon to show cause, within 7 (seven) working days from the date of service of this notice, as to why your GST Registration (GSTIN: [GSTIN]) should not be cancelled on the above grounds.`,
    closing: `A personal hearing in this matter has been fixed on [Hearing Date] at [Hearing Time] at this office.

If no reply is received within the stipulated time or the explanation furnished is not found satisfactory, the registration shall be cancelled in Form GST REG-19 without further notice.

You are also directed to note that:
(a) The registration shall be suspended with effect from [Suspension Date] pending this proceeding under Rule 21A of the CGST Rules.
(b) You shall file all pending returns and pay all outstanding dues irrespective of the outcome of this proceeding.

[Name of Proper Officer]
[Designation]
O/o the [Superintendent/AC/DC], CGST [Division/Commissionerate]
DIN: [DIN]`
  },
  {
    id: "gst_58",
    category: "GST",
    name: "Refund Rejection Order — Export IGST (Time-Barred / Limitation Exceeded)",
    subject: "Order Rejecting Refund Application under Section 54 of CGST Act, 2017 — ARN: [ARN] — M/s [Applicant Name] — Ground: Time Bar / Limitation",
    opening: `FORM GST RFD-06
Order of Rejection of Application for Refund
(Under Rule 92(3) of the CGST Rules, 2017)

Reference No: [DIN] / C.No. CGST/[Division]/RFD-06/[Year]/[No.]         Date: [Date of Order]

To,
[Applicant Name]
GSTIN: [GSTIN]
[Address]

Subject: Order rejecting refund application (ARN: [ARN] dated [Application Date]) for Rs. [Claimed Amount]/- on account of export of goods with payment of IGST — GSTIN [GSTIN] — Period: [Period].

─────────────────────────────────────────────────────────────────────
STATEMENT OF FACTS
─────────────────────────────────────────────────────────────────────

1. M/s [Applicant Name] (GSTIN: [GSTIN]) filed a refund application in Form GST RFD-01 on [Application Date] (ARN: [ARN]) claiming refund of Rs. [Claimed Amount]/- on account of IGST paid on export of goods under Section 54(1) of the CGST Act, 2017 for the period [Period].

2. The Shipping Bill(s) involved: [Shipping Bill No(s).] dated [Date(s)].

3. On scrutiny of the application, it was found that the refund application has been filed after the expiry of the limitation period prescribed under Section 54(1) of the CGST Act, 2017.

─────────────────────────────────────────────────────────────────────
FINDINGS
─────────────────────────────────────────────────────────────────────

4. Section 54(1) of the CGST Act, 2017 provides that any person claiming refund of any tax and interest, if any, paid on such tax or any other amount paid by him, may make an application before the expiry of TWO YEARS from the relevant date.

5. The relevant date in case of export of goods by sea or air is the date on which the ship or the aircraft in which the goods are loaded, leaves India [Section 54(14)(b)(i) of the CGST Act, 2017].

6. Relevant date for the shipment in question: [Relevant Date (date of departure)]
   Date of filing of refund application: [Application Date]
   Period elapsed since relevant date:    [X years Y months — BEYOND 2 years]

7. The refund claim is therefore TIME-BARRED under Section 54(1) of the CGST Act. The Hon'ble Supreme Court in Union of India v. VKC Footsteps India Pvt Ltd has held that the time limit under Section 54 is a mandatory statutory limitation and cannot be condoned.

8. A Show Cause Notice in Form GST RFD-08 No. [DIN] dated [SCN Date] was issued on the above ground. [The applicant replied on [Date] but the reply does not address the limitation issue satisfactorily / No reply was received].`,
    closing: `ORDER:

In view of the above, the refund application (ARN: [ARN]) for Rs. [Claimed Amount]/- filed by M/s [Applicant Name] (GSTIN: [GSTIN]) is hereby REJECTED IN FULL on the ground that the application is time-barred under Section 54(1) of the CGST Act, 2017, having been filed beyond the prescribed period of two years from the relevant date.

APPEAL CLAUSE: The applicant may prefer an appeal against this order before the Commissioner (Appeals), CGST & Central Excise, [Zone Name], under Section 107 of the CGST Act, 2017 within 3 months from the date of communication of this order. A pre-deposit of 10% of the disputed tax amount is mandatory under Section 107(6).

[Name of Proper Officer]
[Designation]
O/o the [Commissioner/AC/DC/Superintendent], CGST [Division/Commissionerate]
DIN: [DIN]`
  },
  {
    id: "gst_59",
    category: "GST",
    name: "Refund Rejection Order — Unjust Enrichment (Duty Burden Passed to Buyer)",
    subject: "Order Rejecting Refund Application — Unjust Enrichment — ARN: [ARN] — M/s [Applicant Name]",
    opening: `FORM GST RFD-06
Order of Rejection of Application for Refund
(Under Rule 92(3) of the CGST Rules, 2017 — Unjust Enrichment)

Reference No: [DIN] / C.No. CGST/[Division]/RFD-06/[Year]/[No.]         Date: [Date of Order]

To,
[Applicant Name]
GSTIN: [GSTIN]
[Address]

Subject: Order rejecting refund application (ARN: [ARN]) for Rs. [Claimed Amount]/- — Unjust Enrichment — GSTIN [GSTIN] — Period: [Period].

STATEMENT OF FACTS:

1. M/s [Applicant Name] (GSTIN: [GSTIN]) filed refund application (ARN: [ARN]) dated [Date] for Rs. [Claimed Amount]/- on account of [excess tax paid / tax paid on cancelled supply / wrong head payment] for the period [Period].

2. An Undertaking / Certificate was submitted by the applicant along with the refund application claiming that the burden of tax has not been passed on to any other person (buyer / recipient).

FINDINGS:

3. On verification of the invoices, books of account and GSTR-1 data, it is found that:
   [State specific evidence of unjust enrichment — e.g.:
   (a) The goods/services in respect of which refund is claimed were supplied to registered buyers;
   (b) The tax amount of Rs. [X]/- was charged separately on the invoices raised on the buyers;
   (c) The buyers have availed Input Tax Credit (ITC) on the said invoices as evidenced by their GSTR-2A / GSTR-2B;
   (d) The applicant has thus passed on the incidence of tax to the buyers, constituting unjust enrichment.]

4. Section 54(8)(d) of the CGST Act, 2017 provides that where the person claiming refund has passed on the incidence of tax to another person, the amount shall be credited to the Consumer Welfare Fund under Section 57.

5. A Show Cause Notice in Form GST RFD-08 No. [DIN] dated [SCN Date] was issued. The reply dated [Reply Date] is not acceptable because: [reason — e.g., the applicant has not submitted any credit notes or documentary evidence to establish that the ITC availed by the buyers has been reversed].`,
    closing: `ORDER:

In view of the above, the refund application (ARN: [ARN]) for Rs. [Claimed Amount]/- filed by M/s [Applicant Name] (GSTIN: [GSTIN]) is hereby REJECTED on the ground of UNJUST ENRICHMENT under Section 54(8)(d) of the CGST Act, 2017, as the incidence of tax has been passed on to the buyers. The amount of Rs. [Claimed Amount]/- shall be credited to the Consumer Welfare Fund as per Section 57 of the CGST Act.

APPEAL CLAUSE: Appeal may be filed before Commissioner (Appeals) within 3 months with 10% pre-deposit under Section 107(6).

[Name of Proper Officer]
[Designation]
O/o the [Commissioner/AC/DC/Superintendent], CGST [Division/Commissionerate]
DIN: [DIN]`
  },
  {
    id: "gst_60",
    category: "GST",
    name: "Refund Rejection Order — Inverted Duty Structure (Incorrect ITC Calculation / Ineligible ITC)",
    subject: "Order Rejecting Refund Application — Accumulated ITC / Inverted Duty — ARN: [ARN] — M/s [Applicant Name]",
    opening: `FORM GST RFD-06
Order of Rejection of Application for Refund
(Under Rule 92(3) of the CGST Rules, 2017 — Inverted Duty Refund)

Reference No: [DIN] / C.No. CGST/[Division]/RFD-06/[Year]/[No.]         Date: [Date of Order]

To,
[Applicant Name]
GSTIN: [GSTIN]
[Address]

Subject: Order rejecting refund application (ARN: [ARN]) for Rs. [Claimed Amount]/- — Accumulated ITC under Inverted Duty Structure — Section 54(3)(ii) of CGST Act, 2017 — GSTIN [GSTIN] — Period: [Period].

STATEMENT OF FACTS:

1. M/s [Applicant Name] (GSTIN: [GSTIN]) filed refund application (ARN: [ARN]) dated [Date] for refund of Rs. [Claimed Amount]/- of accumulated ITC on account of inverted duty structure under Section 54(3)(ii) of the CGST Act, 2017 for the period [Period].

2. The applicant is engaged in [nature of business], purchasing inputs at [higher rate, e.g., 18% GST] and supplying the output at [lower rate, e.g., 5% / 12% GST], resulting in accumulation of ITC.

FINDINGS:

3. On verification of the refund computation under Rule 89(5) of the CGST Rules, 2017, the following discrepancies are found:

   (a) Incorrect formula application: The formula under Rule 89(5) is:
       Maximum Refund Amount = [(Turnover of inverted rated supply) × (Net ITC)] / (Adjusted Total Turnover)] — Tax payable on inverted rated supply

   (b) [State specific error — e.g.:
       "The applicant has included ITC on capital goods / ITC on inputs used for exempt supplies / ITC attributable to nil-rated supplies in the 'Net ITC' figure used in the formula, which is not permissible as per the Explanation to Rule 89(5)."]

   (c) Correct refund amount as per department calculation: Rs. [Correct Amount]/-
       Amount claimed by applicant                        : Rs. [Claimed Amount]/-
       Excess claimed                                     : Rs. [Excess]/-

4. [Additionally / Alternatively] The following ITC availed is ineligible:
   ITC on [blocked credits Section 17(5) — e.g., motor vehicles/food/catering]: Rs. [X]/-
   ITC on non-business use inputs                                               : Rs. [X]/-

5. Show Cause Notice in Form GST RFD-08 No. [DIN] dated [SCN Date] was issued. The reply is [not satisfactory / not received].`,
    closing: `ORDER:

In view of the above, the refund application (ARN: [ARN]) for Rs. [Claimed Amount]/- filed by M/s [Applicant Name] (GSTIN: [GSTIN]) is hereby:
[Select as applicable:]
  REJECTED IN FULL — as the computation under Rule 89(5) is entirely incorrect.
  [OR]
  PARTIALLY REJECTED — Refund sanctioned: Rs. [Sanctioned Amount]/-; Rejected: Rs. [Rejected Amount]/-.

APPEAL: Appeal may be filed before Commissioner (Appeals) within 3 months with 10% pre-deposit.

[Name of Proper Officer]
[Designation]
O/o the [Commissioner/AC/DC/Superintendent], CGST [Division/Commissionerate]
DIN: [DIN]`
  },
  {
    id: "gst_61",
    category: "GST",
    name: "Deficiency Memo — Form RFD-03 (Missing / Incomplete Documents)",
    subject: "Deficiency Memo in Form GST RFD-03 — ARN: [ARN] dated [Date] — M/s [Applicant Name] — GSTIN: [GSTIN]",
    opening: `FORM GST RFD-03
Deficiency Memo
(Under Rule 90(3) of the CGST Rules, 2017)

Reference No: [DIN] / C.No. CGST/[Division]/RFD-03/[Year]/[No.]         Date: [Date of Memo]

To,
[Applicant Name]
GSTIN: [GSTIN]
[Address]

Subject: Deficiency Memo — Refund Application ARN: [ARN] dated [Application Date] for Rs. [Claimed Amount]/- — GSTIN [GSTIN].

Sir/Madam,

With reference to your refund application filed in Form GST RFD-01 on [Application Date] (ARN: [ARN]) for refund of Rs. [Claimed Amount]/- on account of [Export of goods / Inverted duty / Excess tax paid / SEZ supply / Wrong head] for the period [Period], the application has been examined.

The following deficiencies / shortcomings have been noticed in your application / the documents submitted therewith:

Sr. | Deficiency Noticed                              | Required Action
----|-------------------------------------------------|----------------------------------
 1  | [e.g., Statement of invoices in Annexure-B      | Please furnish correct and
    | does not match with GSTR-1 — invoices for       | complete Annexure-B / Annexure-A
    | Rs. [X]/- missing from Annexure-B]              | with all invoice details
----|-------------------------------------------------|----------------------------------
 2  | [e.g., Shipping Bills No. [X] and [Y] not       | Furnish copy of all shipping
    | submitted — only copy without EGM filed]        | bills with Let Export Order
----|-------------------------------------------------|----------------------------------
 3  | [e.g., FIRC / BRC (Foreign Inward Remittance    | Submit FIRC or BRC for all
    | Certificate) not submitted for services export] | foreign remittances received
----|-------------------------------------------------|----------------------------------
 4  | [e.g., Undertaking / Declaration on Unjust      | Fresh undertaking on letterhead
    | Enrichment not signed / on plain paper]         | with date and authorized signatory
----|-------------------------------------------------|----------------------------------
 5  | [e.g., GSTR-2A / GSTR-2B reconciliation         | Submit ITC reconciliation
    | statement not attached for ITC refund]          | statement for the claim period

NOTE: As per Rule 90(3) of the CGST Rules, 2017, an application for refund shall be treated as complete only upon submission of the complete set of documents. A fresh application in Form RFD-01 shall be required to be filed after rectifying the above deficiencies.`,
    closing: `You are requested to re-file a fresh refund application after rectifying all the above deficiencies and furnishing the complete set of required documents as prescribed under Rule 89 of the CGST Rules, 2017 and the relevant CBIC Circular.

IMPORTANT: The time limit for filing a fresh application shall be reckoned from the relevant date as defined under Section 54(14) of the CGST Act, 2017. This memo does not extend the limitation period.

This memo is being issued without prejudice to the right of the department to raise any other objection at the time of processing the fresh application.

[Name of Proper Officer]
[Designation]
O/o the [Commissioner/AC/DC/Superintendent], CGST [Division/Commissionerate]
DIN: [DIN]`
  },
  {
    id: "gst_62",
    category: "GST",
    name: "Refund Sanction Order — Export IGST (Full Sanction — Form RFD-06)",
    subject: "Order Sanctioning Refund under Section 54(1) of CGST Act, 2017 — Export of Goods with Payment of IGST — ARN: [ARN] — M/s [Applicant Name]",
    opening: `FORM GST RFD-06
Order Sanctioning Refund
(Under Rule 92(1) of the CGST Rules, 2017)

Reference No: [DIN] / C.No. CGST/[Division]/RFD-06/[Year]/[No.]         Date: [Date of Order]

To,
[Applicant Name]
GSTIN: [GSTIN]
[Address]

Subject: Order sanctioning refund of IGST paid on export of goods — Section 54(1) of CGST Act, 2017 — ARN: [ARN] — GSTIN [GSTIN] — Period: [Period].

STATEMENT OF FACTS:

1. M/s [Applicant Name] (GSTIN: [GSTIN]) filed refund application (ARN: [ARN]) dated [Application Date] for refund of IGST of Rs. [Claimed Amount]/- paid on export of goods during the period [Period].

2. The Shipping Bills involved and corresponding IGST paid:

   Shipping Bill No.   | Date       | Port      | FOB Value (Rs.) | IGST Paid (Rs.)
   --------------------|------------|-----------|-----------------|----------------
   [SB No. 1]          | [Date]     | [Port]    | [FOB Value]     | [IGST Amount]
   [SB No. 2]          | [Date]     | [Port]    | [FOB Value]     | [IGST Amount]
   Total               |            |           |                 | Rs. [Total IGST]/-

3. The application has been acknowledged vide Form GST RFD-02. All required documents have been verified including:
   (a) Shipping Bills with Let Export Order (LEO) — Verified ✓
   (b) EGM (Export General Manifest) confirmation — Verified ✓
   (c) Foreign Inward Remittance Certificate (FIRC) / Bank Realisation Certificate — Verified ✓
   (d) GSTR-1 data — Cross-verified with ICEGATE ✓
   (e) IGST payment in GSTR-3B — Verified ✓
   (f) Unjust Enrichment — Not applicable for export refunds ✓

4. The refund claim of Rs. [Claimed Amount]/- stands fully verified and is admissible.
   Amount admitted for sanction : Rs. [Sanctioned Amount]/-
   [If partial: Amount disallowed : Rs. [Disallowed]/-  — Reason: [X]]`,
    closing: `ORDER:

In view of the above, I hereby sanction refund of Rs. [Sanctioned Amount]/- (Rupees [Amount in words] only) to M/s [Applicant Name] (GSTIN: [GSTIN]) in respect of IGST paid on export of goods during the period [Period], under Section 54(1) of the CGST Act, 2017.

Payment Details:
Bank Name    : [Bank Name as per RFD-01]
Account No.  : [Account Number]
IFSC Code    : [IFSC Code]

The sanctioned amount will be credited to the applicant's registered bank account electronically.

Interest under Section 56 of the CGST Act, 2017: Since the refund is being sanctioned within 60 days from the date of receipt of complete application, no interest is payable. [OR: Interest of Rs. [X]/- at 6% per annum is also sanctioned for the period from [Date] to [Date] as the refund was not processed within 60 days.]

APPEAL: Appeal may be filed before Commissioner (Appeals) within 3 months of this order under Section 107 of the CGST Act, 2017.

[Name of Proper Officer]
[Designation]
O/o the [Commissioner/AC/DC/Superintendent], CGST [Division/Commissionerate]
DIN: [DIN]`
  },
  {
    id: "gst_63",
    category: "GST",
    name: "Refund Sanction Order — Accumulated ITC (Inverted Duty Structure — Rule 89(5))",
    subject: "Order Sanctioning Refund of Accumulated ITC under Section 54(3)(ii) of CGST Act, 2017 — Inverted Duty — ARN: [ARN] — M/s [Applicant Name]",
    opening: `FORM GST RFD-06
Order Sanctioning Refund — Accumulated ITC (Inverted Duty Structure)
(Under Rule 92(1) read with Rule 89(5) of the CGST Rules, 2017)

Reference No: [DIN] / C.No. CGST/[Division]/RFD-06/[Year]/[No.]         Date: [Date of Order]

To,
[Applicant Name]
GSTIN: [GSTIN]
[Address]

Subject: Order sanctioning refund of accumulated ITC under Section 54(3)(ii) of CGST Act, 2017 (Inverted Duty Structure) — ARN: [ARN] — GSTIN [GSTIN] — Period: [Period].

STATEMENT OF FACTS:

1. M/s [Applicant Name] (GSTIN: [GSTIN]) filed refund application (ARN: [ARN]) dated [Application Date] claiming refund of accumulated ITC of Rs. [Claimed Amount]/- arising on account of inverted duty structure under Section 54(3)(ii) of the CGST Act, 2017 for the period [Period].

2. Business: The applicant is engaged in manufacture/supply of [goods description] classifiable under HSN [Code], attracting output GST @ [X]%, while the major inputs attract GST @ [Y]% (higher rate), resulting in ITC accumulation.

3. VERIFICATION OF REFUND FORMULA (Rule 89(5)):

   Refund Amount = (Turnover of Inverted Supply × Net ITC) / Adjusted Total Turnover — Tax Payable on Inverted Supply

   (a) Turnover of Inverted Rated Supply (A)     : Rs. [X]/-
   (b) Net ITC (B) — eligible ITC on inputs only : Rs. [X]/-
       [ITC on capital goods excluded as per Explanation (1) to Rule 89(5)]
   (c) Adjusted Total Turnover (C)               : Rs. [X]/-
   (d) Tax Payable on Inverted Supply (D)         : Rs. [X]/-
   (e) Maximum Refund = (A × B / C) − D          : Rs. [Calculated Maximum]/-

   Amount Claimed by Applicant                   : Rs. [Claimed Amount]/-
   Admissible Amount (lesser of claimed/formula) : Rs. [Admissible Amount]/-

4. ITC Verification:
   - All ITC claimed is reflected in GSTR-2B ✓
   - No blocked credits (Section 17(5)) included ✓
   - Unjust enrichment certificate submitted ✓ [For B2C supplies]`,
    closing: `ORDER:

I hereby sanction refund of Rs. [Sanctioned Amount]/- (Rupees [Amount in words] only) to M/s [Applicant Name] (GSTIN: [GSTIN]) as accumulated ITC under the inverted duty structure as per Section 54(3)(ii) of the CGST Act, 2017 read with Rule 89(5) of the CGST Rules, 2017 for the period [Period].

[If partial sanction: The balance claim of Rs. [Rejected Amount]/- is rejected on the ground that: [reason — excess over formula limit / ineligible ITC included].]

Payment shall be made to the applicant's registered bank account.

APPEAL: Appeal may be filed before Commissioner (Appeals) within 3 months under Section 107.

[Name of Proper Officer]
[Designation]
O/o the [Commissioner/AC/DC/Superintendent], CGST [Division/Commissionerate]
DIN: [DIN]`
  },
  {
    id: "gst_64",
    category: "GST",
    name: "Refund Sanction Order — Wrong Head Payment (IGST paid instead of CGST+SGST — Section 77)",
    subject: "Order Sanctioning Refund under Section 77 of CGST Act / Section 19 of IGST Act — Wrong Tax Head — ARN: [ARN] — M/s [Applicant Name]",
    opening: `FORM GST RFD-06
Order Sanctioning Refund — Wrong Head Payment
(Under Section 77(1) of the CGST Act, 2017 / Section 19(1) of the IGST Act, 2017)

Reference No: [DIN] / C.No. CGST/[Division]/RFD-06/[Year]/[No.]         Date: [Date of Order]

To,
[Applicant Name]
GSTIN: [GSTIN]
[Address]

Subject: Order sanctioning refund under Section 77 of CGST Act, 2017 / Section 19 of IGST Act, 2017 — Wrong head payment — ARN: [ARN] — GSTIN [GSTIN].

STATEMENT OF FACTS:

1. M/s [Applicant Name] (GSTIN: [GSTIN]) filed refund application (ARN: [ARN]) dated [Date] for refund of Rs. [Claimed Amount]/- on account of IGST paid on a supply that was subsequently determined to be an intra-state supply [OR CGST+SGST paid on a supply that was an inter-state supply], resulting in a wrong head payment for the period [Period].

2. Nature of wrong payment:
   [Select applicable:]
   CASE A — IGST paid on Intra-State Supply:
   Supply in question     : [Description of supply]
   IGST paid incorrectly  : Rs. [Amount]/-
   CGST + SGST payable    : Rs. [Amount]/-
   Correct tax paid after : Yes / No — Challan No. [X] dated [Date]

   CASE B — CGST/SGST paid on Inter-State Supply:
   Supply in question     : [Description of supply]
   CGST+SGST paid wrongly : Rs. [Amount]/-
   IGST payable           : Rs. [Amount]/-

3. The applicant has:
   (a) Paid the correct tax in the correct head subsequently;
   (b) Submitted reconciliation showing the wrong payment and correct payment;
   (c) The wrong tax amount has not been availed as ITC by any recipient.

VERIFICATION:
   Correct tax subsequently paid     : Rs. [Correct Tax]/-  ✓ verified via GSTR-3B
   ITC not availed by recipients on wrong head: Verified ✓
   Unjust enrichment: Not applicable (tax error — refund to original payer) ✓`,
    closing: `ORDER:

In view of the above, I hereby sanction refund of Rs. [Sanctioned Amount]/- (Rupees [Amount in words] only) to M/s [Applicant Name] (GSTIN: [GSTIN]) under Section 77(1) of the CGST Act, 2017 / Section 19(1) of the IGST Act, 2017, being the amount of [IGST / CGST+SGST] wrongly paid on a supply that was [intra-state / inter-state] in nature, for the period [Period].

Payment shall be credited to the applicant's registered bank account.

APPEAL: Appeal may be filed before Commissioner (Appeals) within 3 months under Section 107.

[Name of Proper Officer]
[Designation]
O/o the [Commissioner/AC/DC/Superintendent], CGST [Division/Commissionerate]
DIN: [DIN]`
  },
  {
    id: "gst_65",
    category: "GST",
    name: "Provisional Refund Order — Section 54(6) (90% of Admissible Claim)",
    subject: "Provisional Refund Order under Section 54(6) of CGST Act, 2017 — 90% of Admissible Amount — ARN: [ARN] — M/s [Applicant Name]",
    opening: `FORM GST RFD-04
Provisional Refund Order
(Under Section 54(6) and Rule 91 of the CGST Rules, 2017)

Reference No: [DIN] / C.No. CGST/[Division]/RFD-04/[Year]/[No.]         Date: [Date of Order]

To,
[Applicant Name]
GSTIN: [GSTIN]
[Address]

Subject: Provisional Refund Order for 90% of admissible claim under Section 54(6) of CGST Act, 2017 — ARN: [ARN] — GSTIN [GSTIN].

Sir/Madam,

With reference to your refund application in Form GST RFD-01 (ARN: [ARN]) dated [Application Date] for refund of Rs. [Claimed Amount]/- on account of [zero-rated supply / export of goods without payment of IGST under Bond / LUT] for the period [Period], a provisional refund order is being passed as under:

PROVISIONAL REFUND DETAILS:

Total Amount Claimed                    : Rs. [Claimed Amount]/-
Amount found prima facie admissible     : Rs. [Admissible Amount]/-
90% Provisional Refund (Section 54(6)) : Rs. [Provisional Amount]/-  (= 90% of Rs. [Admissible])
Balance 10% (to be released after final order): Rs. [Balance 10%]/-

BASIS OF PRIMA FACIE ADMISSIBILITY:
1. Zero-rated supplies verified from GSTR-1 / Shipping Bills / GSTIN of SEZ unit: ✓
2. Bond / Letter of Undertaking (LUT) No. [X] dated [Date] verified: ✓
3. No pending demand / audit / investigation against the applicant: ✓ [OR — Subject to final verification]
4. ITC ledger balance confirmed: ✓`,
    closing: `ORDER:

In exercise of powers under Section 54(6) of the CGST Act, 2017 read with Rule 91, I hereby grant a PROVISIONAL REFUND of Rs. [Provisional Amount]/- (being 90% of Rs. [Admissible Amount]/-) to M/s [Applicant Name] (GSTIN: [GSTIN]).

The balance 10% amount of Rs. [Balance 10%]/- shall be released upon final adjudication of the refund application after complete verification.

The applicant is directed to:
(a) Maintain all documents pertaining to this refund;
(b) Not reverse any ITC corresponding to this provisional refund without prior permission;
(c) Co-operate in the verification process for final sanction.

[Name of Proper Officer]
[Designation]
O/o the [Commissioner/AC/DC/Superintendent], CGST [Division/Commissionerate]
DIN: [DIN]`
  },
  {
    id: "gst_66",
    category: "GST",
    name: "Withholding of Refund Notice — Section 54(10) (Audit / Investigation Pending)",
    subject: "Notice of Withholding of Refund under Section 54(10) of CGST Act, 2017 — ARN: [ARN] — M/s [Applicant Name]",
    opening: `FORM GST RFD-07 (Part B)
Notice of Withholding of Refund
(Under Section 54(10) of the CGST Act, 2017 read with Rule 92(2))

Reference No: [DIN] / C.No. CGST/[Division]/RFD-07/[Year]/[No.]         Date: [Date of Notice]

To,
[Applicant Name]
GSTIN: [GSTIN]
[Address]

Subject: Withholding of refund amount — ARN: [ARN] for Rs. [Amount]/- — GSTIN [GSTIN] — Audit / Investigation pending.

Sir/Madam,

With reference to your refund application (ARN: [ARN]) dated [Date] for Rs. [Amount]/-, please take notice that the refund is being WITHHELD as per Section 54(10) of the CGST Act, 2017 for the following reason(s):

REASON FOR WITHHOLDING:

☑ [Select applicable ground:]

Ground 1 — Audit Pending (Section 65 / 66):
An audit under Section [65 / 66] of the CGST Act, 2017 is currently in progress for GSTIN [GSTIN] for the period [FY]. The refund is withheld pending completion of the said audit, as there is a likelihood that a demand may be raised as a result of audit findings.
Audit Proceedings Reference: ADT-01 No. [X] dated [Date].

[OR]

Ground 2 — Investigation Pending (Section 67):
An investigation / search under Section 67 of the CGST Act, 2017 is pending in your case. The refund amount may be required to be adjusted against any demand arising from the investigation.
Investigation Reference: INS-01 / INS-02 No. [X] dated [Date].

[OR]

Ground 3 — SCN / Demand Proceedings Pending:
A Show Cause Notice No. [DIN] dated [Date] is pending adjudication against you for a demand of Rs. [X]/-. The refund is withheld for possible adjustment.

Amount Withheld: Rs. [Amount]/-
Tentative period of withholding: Till completion of [audit / investigation / adjudication]`,
    closing: `The withheld amount will be released, adjusted against any confirmed demand, or credited to Consumer Welfare Fund as the case may be, upon conclusion of the pending proceedings.

Interest under Section 56 of the CGST Act, 2017 shall be payable at 6% per annum on the amount of refund so withheld if the same is eventually found admissible, for the period of delay beyond 60 days from complete application.

[Name of Proper Officer]
[Designation]
O/o the [Commissioner/AC/DC/Superintendent], CGST [Division/Commissionerate]
DIN: [DIN]`
  },
  {
    id: "gst_67",
    category: "GST",
    name: "Show Cause Notice for Refund Rejection — Form RFD-08 (Before Rejection Order)",
    subject: "Show Cause Notice in Form GST RFD-08 proposing Rejection of Refund Application — ARN: [ARN] — M/s [Applicant Name] — GSTIN: [GSTIN]",
    opening: `FORM GST RFD-08
Show Cause Notice for Rejection of Refund Application
(Under Rule 92(3) of the CGST Rules, 2017)

Reference No: [DIN] / C.No. CGST/[Division]/RFD-08/[Year]/[No.]         Date: [Date of Notice]

To,
[Applicant Name]
GSTIN: [GSTIN]
[Address]

Subject: Show Cause Notice proposing rejection of refund application (ARN: [ARN] dated [Application Date]) for Rs. [Claimed Amount]/- — GSTIN [GSTIN] — Period: [Period].

Sir/Madam,

With reference to your refund application filed in Form GST RFD-01 on [Application Date] (ARN: [ARN]) for refund of Rs. [Claimed Amount]/- on account of [nature of refund — export / inverted duty / wrong head / excess payment] for the period [Period], the same has been examined.

After examination of your application, documents and relevant records, it is proposed to REJECT your refund claim (fully / partially) for the following reason(s):

GROUNDS FOR PROPOSED REJECTION:

Ground 1: [State first ground clearly — e.g., "The application is time-barred under Section 54(1) as it was filed on [Date] which is beyond two years from the relevant date of [Relevant Date]..."]

Ground 2: [If applicable — e.g., "The invoices / Shipping Bills submitted do not match the GSTR-1 data — Invoices worth Rs. [X]/- in Annexure-B are not reflected in GSTR-1 filed for the period [Period]..."]

Ground 3: [If applicable — e.g., "The ITC claimed includes Rs. [X]/- attributable to blocked credits under Section 17(5)(b) which is ineligible..."]

Proposed rejection amount: Rs. [Rejection Amount]/- [Full / Partial]
Admissible amount (if partial): Rs. [Admissible Amount]/-`,
    closing: `You are hereby called upon to show cause, within 15 (fifteen) days from the date of service of this notice, as to why the refund application (ARN: [ARN]) should not be rejected [wholly / to the extent of Rs. [Rejection Amount]/-] on the grounds stated above.

You may submit your reply in Form GST RFD-09 along with supporting documents. A personal hearing in this matter is fixed on [Hearing Date] at [Hearing Time] at this office. You may attend in person or through an authorized representative.

Failure to reply within the stipulated period shall result in the application being decided on the basis of available records.

[Name of Proper Officer]
[Designation]
O/o the [Commissioner/AC/DC/Superintendent], CGST [Division/Commissionerate]
DIN: [DIN]`
  },
  {
    id: "gst_68",
    category: "GST",
    name: "Refund Sanction Order — SEZ Supply (Zero-Rated — Bond/LUT Route)",
    subject: "Order Sanctioning Refund of Accumulated ITC — Zero-Rated Supply to SEZ Unit/Developer — ARN: [ARN] — M/s [Applicant Name]",
    opening: `FORM GST RFD-06
Order Sanctioning Refund — Zero-Rated Supply to SEZ
(Under Section 54(3)(i) read with Section 16(3)(b) of IGST Act, 2017)

Reference No: [DIN] / C.No. CGST/[Division]/RFD-06/[Year]/[No.]         Date: [Date of Order]

To,
[Applicant Name]
GSTIN: [GSTIN]
[Address]

Subject: Order sanctioning refund of ITC on account of zero-rated supply to SEZ unit/developer under Bond/LUT — ARN: [ARN] — GSTIN [GSTIN] — Period: [Period].

STATEMENT OF FACTS:

1. M/s [Applicant Name] (GSTIN: [GSTIN]) filed refund application (ARN: [ARN]) dated [Application Date] for refund of Rs. [Claimed Amount]/- being accumulated ITC on supplies made to SEZ unit/developer under Bond/LUT (without payment of IGST) during the period [Period].

2. The SEZ unit / developer to whom supplies were made: M/s [SEZ Name] (GSTIN: [GSTIN of SEZ]).

3. Nature of supply: [Goods / Services description]

4. LUT / Bond Details:
   LUT/Bond No. : [Number]
   Valid from   : [Date] to [Date]
   Verified     : ✓

5. Endorsement by Specified Officer of SEZ: Obtained ✓ (as required by Rule 89(1)(b))

6. ITC Verification:
   - GSTR-2B ITC on inputs used for SEZ supply verified ✓
   - Statement of invoices in Annexure-A verified ✓
   - No tax payment made on these supplies (LUT route) ✓
   - Unjust enrichment not applicable (supply to registered SEZ entity) ✓

AMOUNT ADMITTED:
Refund claimed    : Rs. [Claimed Amount]/-
Refund admissible : Rs. [Admissible Amount]/-`,
    closing: `ORDER:

I hereby sanction refund of Rs. [Sanctioned Amount]/- (Rupees [Amount in words] only) to M/s [Applicant Name] (GSTIN: [GSTIN]) on account of zero-rated supply of [goods/services] to [SEZ Name] under the Bond/LUT route during the period [Period], under Section 54(3)(i) read with Section 16(3)(b) of the IGST Act, 2017.

[If partial: The balance claim of Rs. [Rejected Amount]/- is rejected — reason: [X].]

Payment shall be credited to the applicant's registered bank account.

APPEAL: Under Section 107 of the CGST Act, 2017 within 3 months.

[Name of Proper Officer]
[Designation]
O/o the [Commissioner/AC/DC/Superintendent], CGST [Division/Commissionerate]
DIN: [DIN]`
  },
  {
    id: "gst_69",
    category: "GST",
    name: "Interest on Delayed Refund — Section 56 Notice / Sanction",
    subject: "Sanction of Interest on Delayed Refund under Section 56 of CGST Act, 2017 — ARN: [ARN] — M/s [Applicant Name]",
    opening: `Interest on Delayed Refund — Section 56 of the CGST Act, 2017

Reference No: [DIN] / C.No. CGST/[Division]/INT-56/[Year]/[No.]          Date: [Date]

To,
[Applicant Name]
GSTIN: [GSTIN]
[Address]

Subject: Sanction of interest on delayed refund under Section 56 of CGST Act, 2017 — ARN: [ARN] — Refund Order No. [Order No.] dated [Order Date].

Sir/Madam,

With reference to the refund sanctioned to you vide Order No. [Order No.] dated [Order Date] (ARN: [ARN]) for Rs. [Refund Amount]/-, interest under Section 56 of the CGST Act, 2017 is being computed and sanctioned as under:

INTEREST CALCULATION:

Date of receipt of complete application          : [Complete Application Date]
Date by which refund should have been paid
(60 days from above)                             : [Due Date — 60 days]
Actual date of payment / credit of refund        : [Actual Payment Date]
Delay (days)                                     : [No. of days beyond 60-day limit]

Principal Refund Amount                          : Rs. [Refund Amount]/-
Rate of Interest (Section 56)                   : 6% per annum
Interest Amount = [Refund Amount × 6% × Days/365]: Rs. [Interest Amount]/-

NOTE: Section 56 provides that if any tax ordered to be refunded is not refunded within 60 days from the date of receipt of an application complete in all respects, interest at the rate of 6% per annum shall be payable on the amount of refund not so refunded from the date immediately after the expiry of 60 days.`,
    closing: `I hereby sanction interest of Rs. [Interest Amount]/- (Rupees [Amount in words] only) under Section 56 of the CGST Act, 2017 on the delayed refund of Rs. [Refund Amount]/- for the period of delay from [Start Date of Delay] to [End Date] ([X] days).

The interest amount of Rs. [Interest Amount]/- shall be credited to your registered bank account along with / separately from the principal refund.

[Name of Proper Officer]
[Designation]
O/o the [Commissioner/AC/DC/Superintendent], CGST [Division/Commissionerate]
DIN: [DIN]`
  },
  {
    id: "gst_70",
    category: "GST",
    name: "Refund Rejection — SEZ Supply Without Valid LUT/Bond",
    subject: "Order Rejecting Refund Application — Zero-Rated SEZ Supply — No Valid LUT/Bond — ARN: [ARN] — M/s [Applicant Name]",
    opening: `FORM GST RFD-06
Order Rejecting Refund — Zero-Rated Supply / SEZ — LUT/Bond Not Valid

Reference No: [DIN] / C.No. CGST/[Division]/RFD-06/[Year]/[No.]         Date: [Date of Order]

To,
[Applicant Name]
GSTIN: [GSTIN]
[Address]

Subject: Order rejecting refund application (ARN: [ARN]) — Zero-rated supply to SEZ — LUT/Bond not valid / not executed — GSTIN [GSTIN] — Period [Period].

STATEMENT OF FACTS:

1. M/s [Applicant Name] (GSTIN: [GSTIN]) filed refund application (ARN: [ARN]) dated [Application Date] for Rs. [Claimed Amount]/- being ITC on supplies made to SEZ under the bond/LUT route for the period [Period].

2. On verification of LUT/Bond:

   ISSUE FOUND — [Select applicable:]
   ☑ (a) No LUT/Bond was executed for the Financial Year [FY] prior to making the supplies;
   ☑ (b) LUT/Bond No. [X] submitted has expired — valid up to [Date], supplies made on [Date] (after expiry);
   ☑ (c) LUT/Bond executed by [Name] who was not an authorized signatory as per the GST portal for the relevant period;
   ☑ (d) LUT not filed online on GST portal — only a physical LUT was submitted which is not permissible.

3. As per Rule 96A of the CGST Rules, 2017, a zero-rated supply (export / SEZ) without payment of IGST is permissible only if a valid Bond or LUT has been executed before making the supply.

4. Since no valid LUT/Bond was in place at the time of making the supply, the supply cannot be treated as a supply under Bond/LUT route. The applicant ought to have paid IGST on the supply.

5. SCN in Form RFD-08 No. [DIN] dated [SCN Date] was issued. Reply [not received / received but not satisfactory — reason: [X]].`,
    closing: `ORDER:

In view of the above, the refund application (ARN: [ARN]) for Rs. [Claimed Amount]/- is hereby REJECTED IN FULL on the ground that no valid LUT/Bond was in existence at the time of making the zero-rated supplies to SEZ during the period [Period], as required under Rule 96A of the CGST Rules, 2017.

APPEAL: Appeal may be filed before Commissioner (Appeals) within 3 months with 10% pre-deposit.

[Name of Proper Officer]
[Designation]
O/o the [Commissioner/AC/DC/Superintendent], CGST [Division/Commissionerate]
DIN: [DIN]`
  },
  {
    id: "gst_71",
    category: "GST",
    name: "Refund Sanction Order — Excess Cash Balance in Electronic Cash Ledger",
    subject: "Order Sanctioning Refund of Excess Balance in Electronic Cash Ledger under Section 54(1) of CGST Act, 2017 — ARN: [ARN] — M/s [Applicant Name]",
    opening: `FORM GST RFD-06
Order Sanctioning Refund — Excess Cash Ledger Balance
(Under Section 54(1) of the CGST Act, 2017)

Reference No: [DIN] / C.No. CGST/[Division]/RFD-06/[Year]/[No.]         Date: [Date of Order]

To,
[Applicant Name]
GSTIN: [GSTIN]
[Address]

Subject: Order sanctioning refund of excess balance in Electronic Cash Ledger — ARN: [ARN] — GSTIN [GSTIN].

STATEMENT OF FACTS:

1. M/s [Applicant Name] (GSTIN: [GSTIN]) filed refund application (ARN: [ARN]) dated [Application Date] for refund of Rs. [Claimed Amount]/- being excess balance lying in the Electronic Cash Ledger under [CGST / IGST / SGST / Cess] head.

2. Reason for excess balance: [e.g., excess deposit made in anticipation of liability / payment made in wrong head / business closed / tax liability nil for the period].

3. VERIFICATION:
   Balance in Electronic Cash Ledger ([head]) as on [Date] : Rs. [Balance]/-
   Outstanding liability (if any)                          : Rs. [Outstanding]/-
   Refundable amount (Balance minus outstanding)           : Rs. [Refundable]/-
   Amount claimed                                          : Rs. [Claimed]/-
   Amount admissible                                       : Rs. [Admissible]/-

4. No pending demand, audit, or investigation against the applicant in respect of the relevant tax period. ✓

5. Unjust enrichment: Not applicable — cash ledger balance represents own funds of taxpayer. ✓`,
    closing: `ORDER:

I hereby sanction refund of Rs. [Sanctioned Amount]/- (Rupees [Amount in words] only) to M/s [Applicant Name] (GSTIN: [GSTIN]) being the excess balance in the Electronic Cash Ledger under [CGST/IGST/SGST] head, under Section 54(1) of the CGST Act, 2017.

The refund amount shall be credited electronically to the registered bank account of the applicant.

APPEAL: Under Section 107 of the CGST Act, 2017 within 3 months.

[Name of Proper Officer]
[Designation]
O/o the [Commissioner/AC/DC/Superintendent], CGST [Division/Commissionerate]
DIN: [DIN]`
  },
  {
    id: "gst_72",
    category: "GST",
    name: "Notice for Clarification / Additional Documents — Refund Application",
    subject: "Notice seeking Clarification / Additional Documents for processing Refund Application — ARN: [ARN] — M/s [Applicant Name] — GSTIN: [GSTIN]",
    opening: `Notice for Clarification / Additional Documents
(Refund Application Processing — under Rule 90(2) of the CGST Rules, 2017)

Reference No: [DIN] / C.No. CGST/[Division]/REF-CLR/[Year]/[No.]        Date: [Date]

To,
[Applicant Name]
GSTIN: [GSTIN]
[Address]

Subject: Request for clarification / additional documents for processing refund application (ARN: [ARN] dated [Date]) for Rs. [Amount]/- — GSTIN [GSTIN].

Sir/Madam,

Your refund application (ARN: [ARN] dated [Application Date]) for Rs. [Amount]/- on account of [nature of refund] for the period [Period] is under process. For expeditious processing, the following clarifications / additional documents are required:

Sr. | Clarification / Document Required             | Reason
----|------------------------------------------------|--------------------------------
 1  | [e.g., Invoice-wise reconciliation between     | [e.g., GSTR-1 data shows
    | GSTR-1 declared outward supplies and           | difference of Rs. [X]/-
    | Annexure-B of RFD-01 application]              | against application data]
----|------------------------------------------------|--------------------------------
 2  | [e.g., Copy of Bank Realisation Certificate    | [e.g., As per RBI guidelines,
    | (BRC/FIRC) for all export invoices]            | BRC is mandatory for services
    |                                                | export refund]
----|------------------------------------------------|--------------------------------
 3  | [e.g., CA Certificate in Form GST RFD-11       | [e.g., Required for ITC refund
    | certifying amount of ITC / unjust enrichment]  | above Rs. 2 Lakhs as per
    |                                                | CBIC Circular 125/44/2019-GST]
----|------------------------------------------------|--------------------------------
 4  | [Additional document as needed]                | [Reason]`,
    closing: `You are requested to furnish the above clarifications / documents within 15 (fifteen) days from the date of service of this notice. Kindly note that failure to furnish the requisite information within the stipulated time may result in rejection of the refund application on the basis of documents available.

This notice is issued without prejudice to the right of the department to raise any other issue at the time of final processing.

[Name of Proper Officer]
[Designation]
O/o the [Commissioner/AC/DC/Superintendent], CGST [Division/Commissionerate]
DIN: [DIN]`
  },
  {
    id: "gst_73",
    category: "GST",
    name: "ITC Blocking Order — Rule 86A (Reason to Believe Fraud/Ineligibility)",
    subject: "Order Blocking Input Tax Credit in Electronic Credit Ledger under Rule 86A of CGST Rules, 2017 — GSTIN: [GSTIN] — M/s [Taxpayer Name]",
    opening: `ORDER BLOCKING INPUT TAX CREDIT
(Under Rule 86A of the Central Goods and Services Tax Rules, 2017)

F. No.: [File Number]                                        Date: [Date]

To,
[Taxpayer Name]
GSTIN: [GSTIN]
[Registered Address]

Subject: Order for blocking of Input Tax Credit (ITC) amounting to Rs. [Amount]/- available in the Electronic Credit Ledger (ECL) under Rule 86A of the CGST Rules, 2017 — GSTIN [GSTIN].

FACTS OF THE CASE:

1. M/s [Taxpayer Name] (GSTIN: [GSTIN]) is a registered taxable person under the Central Goods and Services Tax Act, 2017, engaged in the business of [business description].

2. An examination of the GSTN database, GSTR-1/GSTR-3B returns, and available intelligence reveals that ITC amounting to Rs. [Amount]/- has been availed in the Electronic Credit Ledger (ECL) on the basis of the following invoices:

   Supplier GSTIN: [Supplier GSTIN] | Invoice No.: [Invoice No.] | Date: [Date] | ITC Amount: Rs. [Amt]/-
   TOTAL ITC BLOCKED: Rs. [Total]/-

3. Specific reasons for this order:

   REASON A - Supplier does not exist / fake registration:
   M/s [Supplier Name] (GSTIN: [Supplier GSTIN]) has been found to have obtained registration by means of fraud, wilful misstatement, or suppression of facts, and/or does not physically exist at the registered address, as verified on [verification date].

   REASON B - Non-reflection in GSTR-2B / Supplier non-filer:
   The supplier (GSTIN: [Supplier GSTIN]) has not filed GSTR-1 for the relevant period(s), and the said ITC does not reflect in GSTR-2B, raising a reasonable belief that the underlying supply did not actually take place.

   REASON C - Goods/Services not actually received:
   Intelligence/investigation reveals that the goods/services shown in the said invoices were not actually supplied/received, and the transactions are prima facie circular, paper, or accommodation entries.

   REASON D - Tax not paid to Government by supplier:
   The supplier (GSTIN: [Supplier GSTIN]) has collected tax on the said invoices but has not deposited the same to the Government account, as is evident from GSTR-3B filed/not filed for [period].

FINDINGS:

4. Based on the above specific reasons, I have reason to believe that the ITC of Rs. [Amount]/- availed by M/s [Taxpayer Name] is fraudulently availed and/or is ineligible under Section 16 of the CGST Act, 2017.

5. Rule 86A(1) empowers the Commissioner or an officer authorized by him, not below the rank of Assistant Commissioner, to block ITC if there is reason to believe that such ITC has been fraudulently availed or is ineligible.

6. I, [Designation], [Office], being authorized under Rule 86A(1), hereby record my satisfaction that the ITC is prima facie fraudulently availed/ineligible for the reasons stated above.`,
    closing: `ORDER:

In exercise of powers under Rule 86A(1) of the CGST Rules, 2017, I hereby ORDER the blocking of ITC amounting to Rs. [Amount]/- (Rupees [Amount in words] only) available in the Electronic Credit Ledger (ECL) of M/s [Taxpayer Name] (GSTIN: [GSTIN]).

The blocked ITC shall not be available for utilization against output tax liability until further orders.

TAXPAYER'S RIGHTS:
(a) You may, within seven days of receipt of this order, file an objection in writing before the undersigned showing cause why the blocking should not continue, along with documentary evidence.
(b) You shall be given an opportunity of being heard before any final decision is taken on your objection.
(c) This order shall cease to have effect after the expiry of ONE YEAR from the date of this order, as per Rule 86A(3), unless reviewed/extended before expiry.
(d) If proceedings result in a confirmed demand, the demand shall be recovered from the blocked ITC amount.

[Name of Proper Officer]
[Designation]
O/o [Commissioner/Additional Commissioner/Joint Commissioner/Deputy Commissioner/Assistant Commissioner], CGST [Division/Commissionerate]
F. No.: [File Number]`
  },
  {
    id: "gst_74",
    category: "GST",
    name: "ITC Unblocking Order — Rule 86A(2) (After Verification / Proceedings Closed)",
    subject: "Order for Restoration / Unblocking of Input Tax Credit under Rule 86A(2) of CGST Rules, 2017 — GSTIN: [GSTIN] — M/s [Taxpayer Name]",
    opening: `ORDER FOR RESTORATION OF BLOCKED INPUT TAX CREDIT
(Under Rule 86A(2) of the Central Goods and Services Tax Rules, 2017)

F. No.: [File Number]                                        Date: [Date]

To,
[Taxpayer Name]
GSTIN: [GSTIN]
[Registered Address]

Subject: Restoration/Unblocking of Input Tax Credit of Rs. [Amount]/- blocked vide Order F. No. [Previous Order No.] dated [Blocking Date] under Rule 86A of the CGST Rules, 2017 — GSTIN [GSTIN].

BACKGROUND:

1. Vide Order F. No. [Previous Order No.] dated [Blocking Date], ITC of Rs. [Amount]/- was blocked in the ECL of M/s [Taxpayer Name] (GSTIN: [GSTIN]) under Rule 86A(1) for the reasons stated therein.

2. Reason for unblocking [SELECT ONE]:

   (A) Verification completed - ITC found eligible: After thorough verification of records, invoices, e-way bills, and cross-verification with the supplier (GSTIN: [Supplier GSTIN]), the ITC of Rs. [Amount]/- is genuine and eligible. Tax has been paid to the Government by the supplier.

   (B) Objection accepted: The taxpayer filed an objection dated [Date] with documentary evidence. On examination, I am satisfied that the ITC is eligible and the blocking was not warranted.

   (C) Demand paid / proceedings closed: The demand proceedings have concluded and the taxpayer has paid the confirmed demand of Rs. [Demand Amount]/- with interest and penalty. The remaining blocked ITC of Rs. [Remaining Amount]/- is now to be restored.

   (D) One-year limitation expired: The blocking order dated [Blocking Date] has completed one year under Rule 86A(3). No proceedings have been concluded requiring continuation of the block.`,
    closing: `ORDER:

In exercise of powers under Rule 86A(2) of the CGST Rules, 2017, I hereby ORDER the restoration/unblocking of ITC amounting to Rs. [Amount]/- (Rupees [Amount in words] only) in the Electronic Credit Ledger (ECL) of M/s [Taxpayer Name] (GSTIN: [GSTIN]).

The said ITC is hereby restored with effect from the date of this order and shall be available for utilization against output tax liability.

[Name of Proper Officer]
[Designation]
O/o [Commissioner/Additional Commissioner/Joint Commissioner/Deputy Commissioner/Assistant Commissioner], CGST [Division/Commissionerate]
F. No.: [File Number]`
  },
  {
    id: "gst_75",
    category: "GST",
    name: "SCN: ITC Reversal — Non-Payment to Supplier within 180 Days (Section 16(2)(b))",
    subject: "Show Cause Notice for Reversal of Input Tax Credit under Section 16(2)(b) of CGST Act, 2017 — Non-Payment to Supplier within 180 Days — GSTIN: [GSTIN] — M/s [Taxpayer Name]",
    opening: `OFFICE OF THE [DESIGNATION]
CENTRAL GOODS AND SERVICES TAX [DIVISION/COMMISSIONERATE]
[ADDRESS]

C.No. [File Number]                                           Date: [Date]

SHOW CAUSE NOTICE
(Under Section 73 / 74 read with Section 16(2)(b) of the CGST Act, 2017 and Rule 37 of the CGST Rules, 2017)

To,
[Taxpayer Name]
GSTIN: [GSTIN]
[Registered Address]

Subject: Show Cause Notice for reversal of ITC of Rs. [Amount]/- availed on invoices where payment to supplier not made within 180 days — GSTIN [GSTIN] — Period: [Period].

FACTS:

1. M/s [Taxpayer Name] (GSTIN: [GSTIN]) availed ITC of Rs. [ITC Amount]/- in GSTR-3B for [Period] on invoices from registered suppliers where payment has not been made within 180 days.

   Supplier GSTIN: [GSTIN] | Invoice No.: [No.] | Invoice Date: [Date] | Invoice Value: Rs. [Amt]/- | ITC Availed: Rs. [ITC]/-
   TOTAL ITC AVAILED: Rs. [Total ITC]/-

2. Section 16(2)(b) of the CGST Act, 2017 mandates that a registered person shall not be entitled to ITC unless the recipient has paid to the supplier the value of the supply along with tax payable thereon.

3. The proviso to Section 16(2) provides that where a recipient fails to pay the supplier within ONE HUNDRED AND EIGHTY DAYS from the date of issuance of the invoice, an amount equal to the ITC availed shall be ADDED TO THE OUTPUT TAX LIABILITY, along with interest under Section 50 from the date of availing credit till the date of reversal.

4. On examination of records, it is found that payment has not been made to the supplier(s) within 180 days from the invoice date(s).

   Invoice Date(s)                 : [Date(s)]
   180-Day Deadline(s)             : [Date(s)]
   Outstanding payment to supplier : Rs. [Outstanding]/-
   ITC required to be reversed     : Rs. [ITC Reversal Amount]/-

DEMAND:

   ITC reversal required (Rule 37)     : Rs. [ITC Amount]/-
   Interest u/s 50 from [Date]         : Rs. [Interest Amount]/-
   Penalty u/s 73(9) (10% of tax)      : Rs. [Penalty Amount]/-
   TOTAL DEMAND                         : Rs. [Total]/-`,
    closing: `YOU ARE HEREBY REQUIRED to show cause, in writing, within 30 days from the date of receipt of this notice, as to why:
(i)  ITC of Rs. [ITC Amount]/- should not be added to output tax liability under Section 16(2)(b) read with Rule 37;
(ii) Interest under Section 50 should not be levied;
(iii) Penalty under Section 73(9) should not be imposed.

NOTE: If payment to the supplier is made subsequently, ITC may be re-availed in the tax period in which such payment is made, as per Rule 37(2).

[Name of Proper Officer]
[Designation]
O/o [Commissioner/AC/DC/Superintendent], CGST [Division/Commissionerate]
DIN: [DIN]`
  },
  {
    id: "gst_76",
    category: "GST",
    name: "Order: ITC Reversal Confirmed — 180-Day Non-Payment + Interest (Section 16(2)(b))",
    subject: "Order Confirming Reversal of Input Tax Credit under Section 16(2)(b) of CGST Act, 2017 — Non-Payment to Supplier within 180 Days — GSTIN: [GSTIN] — M/s [Taxpayer Name]",
    opening: `OFFICE OF THE [DESIGNATION]
CENTRAL GOODS AND SERVICES TAX [DIVISION/COMMISSIONERATE]
[ADDRESS]

ORDER-IN-ORIGINAL
(Under Section 73 / 74 read with Section 16(2)(b) and Rule 37 of the CGST Act/Rules, 2017)

C.No. [File Number]                                         Date: [Date]
DIN: [DIN]

To,
[Taxpayer Name]
GSTIN: [GSTIN]
[Registered Address]

Subject: Order confirming reversal of ITC of Rs. [ITC Amount]/- — non-payment to supplier within 180 days — Section 16(2)(b) — GSTIN [GSTIN] — Period: [Period].

BACKGROUND:

1. Show Cause Notice vide C.No. [SCN Number] dated [SCN Date] was issued proposing reversal of ITC of Rs. [ITC Amount]/- on account of non-payment to supplier within 180 days under Section 16(2)(b) of the CGST Act, 2017.

2. [The taxpayer replied on [Reply Date] / No reply was received to the SCN within the stipulated period.]

3. Personal hearing [was conducted on [Date] / was not availed].

FINDINGS:

4. Section 16(2)(b) is clear and unambiguous — ITC is conditional upon payment to the supplier within 180 days of the invoice date.

5. The taxpayer [has not produced any evidence of payment to the supplier within 180 days / has paid only Rs. [Amount Paid]/-, and the balance Rs. [Balance]/- is still unpaid].

6. [Address taxpayer's main contention if any and give specific reasons for rejection].

COMPUTATION:

   ITC required to be reversed        : Rs. [ITC Amount]/-
   Interest u/s 50 @ [Rate]% per annum
   from [Date] to [Date]              : Rs. [Interest Amount]/-
   Penalty u/s 73(9) (10%)            : Rs. [Penalty Amount]/-
   TOTAL DEMAND                        : Rs. [Total]/-`,
    closing: `ORDER:

I hereby CONFIRM the demand of Rs. [Total Amount]/-, comprising:

   ITC reversal (added to output tax)  : Rs. [ITC Amount]/-
   Interest u/s 50                     : Rs. [Interest Amount]/-
   Penalty u/s 73(9)                   : Rs. [Penalty Amount]/-

The above amount is to be paid by M/s [Taxpayer Name] within 3 (three) months from the date of this order.

NOTE: If payment to the supplier is made subsequently, the taxpayer shall be entitled to re-avail the ITC in the tax period in which such payment is made, as per Rule 37(2) of the CGST Rules, 2017.

APPEAL CLAUSE: An appeal may be filed before the Commissioner (Appeals), CGST [Zone], within 3 months under Section 107 of the CGST Act, 2017, with mandatory pre-deposit of 10% of the disputed tax under Section 107(6).

[Name of Proper Officer]
[Designation]
O/o [Commissioner/AC/DC/Superintendent], CGST [Division/Commissionerate]
DIN: [DIN]`
  },
  {
    id: "gst_77",
    category: "GST",
    name: "SCN: ITC Reversal — Goods/Services Not Received / Fake Invoice (Section 16(2)(a))",
    subject: "Show Cause Notice for Reversal of Fraudulently Availed ITC — Goods/Services Not Received / Fake Invoice — Section 74 / Section 16(2)(a) of CGST Act — GSTIN: [GSTIN] — M/s [Taxpayer Name]",
    opening: `OFFICE OF THE [DESIGNATION]
CENTRAL GOODS AND SERVICES TAX [DIVISION/COMMISSIONERATE]
[ADDRESS]

C.No. [File Number]                                           Date: [Date]

SHOW CAUSE NOTICE
(Under Section 74 read with Section 16(2)(a) of the CGST Act, 2017)

To,
[Taxpayer Name]
GSTIN: [GSTIN]
[Registered Address]

Subject: Show Cause Notice for reversal of fraudulently availed ITC of Rs. [ITC Amount]/- — goods/services not actually received / fake invoices — GSTIN [GSTIN].

FACTS:

1. M/s [Taxpayer Name] (GSTIN: [GSTIN]) availed ITC of Rs. [ITC Amount]/- on invoices purportedly issued by Supplier: [Supplier Name] (GSTIN: [Supplier GSTIN]).

   Invoice No.: [No.] | Invoice Date: [Date] | Taxable Value: Rs. [Amt]/- | ITC Availed: Rs. [ITC]/-
   TOTAL ITC: Rs. [Total ITC]/-

2. Section 16(2)(a) of the CGST Act mandates that ITC is available only when the registered person is in possession of a tax invoice AND the goods or services have been actually received.

3. Investigation/intelligence/scrutiny reveals:

   [SELECT APPLICABLE]:
   (a) The supplier (GSTIN: [Supplier GSTIN]) is a non-existent/fictitious entity. Physical verification at the registered address on [Date] found no business activity/no trace of the entity.
   (b) The supplier did not have the capacity to supply the goods/services (no employees, no infrastructure, no purchase evidence in their GSTR-2B).
   (c) Verification of transport documents, e-way bills, and inward supply records reveals no evidence of actual physical receipt of goods.
   (d) The supplier's GSTR-1 does not reflect the said invoices / the supplier filed nil returns during the relevant period.
   (e) Financial transactions were routed back to the taxpayer through circular transactions via [intermediary parties], indicating accommodation entries.

4. The ITC of Rs. [ITC Amount]/- has been fraudulently availed by means of suppression of facts/fraud/wilful misstatement, attracting Section 74 of the CGST Act, 2017.

DEMAND:

   ITC wrongly availed (fraud)         : Rs. [ITC Amount]/-
   Interest u/s 50 from [Date]         : Rs. [Interest Amount]/-
   Penalty u/s 74(9) (100% of tax)     : Rs. [Penalty Amount]/-
   TOTAL DEMAND                         : Rs. [Total]/-`,
    closing: `YOU ARE HEREBY REQUIRED to show cause within 30 days as to why:
(i)  ITC of Rs. [ITC Amount]/- should not be reversed/recovered under Section 74 read with Section 16(2)(a);
(ii) Interest under Section 50 should not be levied;
(iii) Penalty under Section 74(9) equal to the amount of tax should not be imposed.

Voluntary payment benefit: If full tax + interest paid before replying to this SCN, penalty shall be 15%. If paid within 30 days of this SCN, penalty shall be 25%.

NOTE: This notice has been issued with prior approval of [Commissioner / Additional/Joint Commissioner] as required under Section 74(10).

[Name of Proper Officer]
[Designation]
O/o [Commissioner/AC/DC/Superintendent], CGST [Division/Commissionerate]
DIN: [DIN]`
  },
  {
    id: "gst_78",
    category: "GST",
    name: "SCN: ITC Reversal — Blocked Credits under Section 17(5) (Ineligible Category)",
    subject: "Show Cause Notice for Reversal of Ineligible Input Tax Credit under Section 17(5) of CGST Act, 2017 — Blocked Credits — GSTIN: [GSTIN] — M/s [Taxpayer Name]",
    opening: `OFFICE OF THE [DESIGNATION]
CENTRAL GOODS AND SERVICES TAX [DIVISION/COMMISSIONERATE]
[ADDRESS]

C.No. [File Number]                                           Date: [Date]

SHOW CAUSE NOTICE
(Under Section 73 read with Section 17(5) of the CGST Act, 2017)

To,
[Taxpayer Name]
GSTIN: [GSTIN]
[Registered Address]

Subject: Show Cause Notice for reversal of ITC of Rs. [Amount]/- availed on ineligible goods/services under Section 17(5) of the CGST Act, 2017 — GSTIN [GSTIN] — Period: [Period].

FACTS:

1. M/s [Taxpayer Name] (GSTIN: [GSTIN]) has availed ITC of Rs. [Amount]/- during [Period] on categories specifically barred under Section 17(5) of the CGST Act, 2017.

2. Section 17(5) blocks ITC on the following categories (applicable category identified):

   (a) Motor Vehicles [s.17(5)(a)]: ITC of Rs. [Amount]/- on vehicle No. [Vehicle No.] is blocked. Motor vehicles are ineligible unless used for further supply of vehicles, transportation of passengers/goods, or driving training.

   (b) Food and Beverages / Outdoor Catering [s.17(5)(b)(i)]: ITC of Rs. [Amount]/- on [catering/food invoice details] is blocked.

   (c) Club / Health / Fitness Membership [s.17(5)(b)(iii)]: ITC of Rs. [Amount]/- on [club/gym membership] is blocked.

   (d) Travel Benefits / LTC [s.17(5)(b)(iv)]: ITC of Rs. [Amount]/- on travel benefits extended to employees on vacation is blocked.

   (e) Works Contract for Immovable Property [s.17(5)(c)]: ITC of Rs. [Amount]/- on [contractor invoice] for construction of immovable property is blocked, other than plant and machinery.

   (f) Construction of Immovable Property [s.17(5)(d)]: ITC of Rs. [Amount]/- on goods/services for construction of immovable property on own account is blocked.

3. The ineligible ITC is required to be reversed along with interest under Section 50.

DEMAND:

   Ineligible ITC (s.17(5))            : Rs. [Amount]/-
   Interest u/s 50 from [Date]         : Rs. [Interest Amount]/-
   Penalty u/s 73(9) (10%)             : Rs. [Penalty Amount]/-
   TOTAL DEMAND                         : Rs. [Total]/-`,
    closing: `YOU ARE HEREBY REQUIRED to show cause within 30 days as to why:
(i)  ITC of Rs. [Amount]/- availed on the above ineligible categories should not be reversed/recovered under Section 73 read with Section 17(5) of the CGST Act, 2017;
(ii) Interest under Section 50 should not be levied;
(iii) Penalty under Section 73(9) should not be imposed.

If you have already reversed the said ITC and paid interest, furnish evidence of the same with your reply.

[Name of Proper Officer]
[Designation]
O/o [Commissioner/AC/DC/Superintendent], CGST [Division/Commissionerate]
DIN: [DIN]`
  },
  {
    id: "gst_79",
    category: "GST",
    name: "SCN: ITC Reversal — GSTR-2B Mismatch (Supplier Non-Filer / Nil Return)",
    subject: "Show Cause Notice for Reversal of ITC not reflected in GSTR-2B — Section 16(2)(aa) of CGST Act — Supplier Non-Filing / Mismatch — GSTIN: [GSTIN] — M/s [Taxpayer Name]",
    opening: `OFFICE OF THE [DESIGNATION]
CENTRAL GOODS AND SERVICES TAX [DIVISION/COMMISSIONERATE]
[ADDRESS]

C.No. [File Number]                                           Date: [Date]

SHOW CAUSE NOTICE
(Under Section 73 read with Section 16(2)(aa) of the CGST Act, 2017)

To,
[Taxpayer Name]
GSTIN: [GSTIN]
[Registered Address]

Subject: Show Cause Notice for reversal of ITC of Rs. [Amount]/- availed in GSTR-3B but not reflected in GSTR-2B — Supplier non-filing / mismatch — Section 16(2)(aa) — GSTIN [GSTIN] — Period: [Period].

FACTS:

1. M/s [Taxpayer Name] (GSTIN: [GSTIN]) availed ITC of Rs. [ITC Amount]/- in GSTR-3B for [Period].

   Supplier GSTIN: [Supplier GSTIN] | Supplier Name: [Name] | Period: [Period] | ITC in GSTR-3B: Rs. [Amt]/- | ITC in GSTR-2B: Rs. [Amt]/- | Excess: Rs. [Excess]/-
   TOTAL EXCESS ITC (not in GSTR-2B): Rs. [Total]/-

2. Section 16(2)(aa) of the CGST Act, 2017 (inserted by Finance Act 2021, effective 01.01.2022) provides that ITC is available only if the details of the invoice appear in the GSTR-2B of the recipient.

3. The ITC of Rs. [ITC Amount]/- does NOT appear in GSTR-2B because:
   [SELECT APPLICABLE]:
   (a) Supplier (GSTIN: [Supplier GSTIN]) did NOT file GSTR-1/IFF for [Period].
   (b) Supplier filed GSTR-1 but did NOT upload/declare the said invoices.
   (c) Supplier filed nil GSTR-1 for [Period] despite issuing the said tax invoices.

DEMAND:

   Ineligible ITC (not in GSTR-2B)     : Rs. [ITC Amount]/-
   Interest u/s 50 from [Date]         : Rs. [Interest Amount]/-
   Penalty u/s 73(9)                   : Rs. [Penalty Amount]/-
   TOTAL DEMAND                         : Rs. [Total]/-`,
    closing: `YOU ARE HEREBY REQUIRED to show cause within 30 days as to why ITC of Rs. [ITC Amount]/- should not be reversed under Section 73 read with Section 16(2)(aa) of the CGST Act, 2017, along with interest and penalty.

If the supplier has subsequently filed GSTR-1 and the ITC now reflects in your GSTR-2B, furnish a copy of the updated GSTR-2B with your reply.

NOTE: If the supplier subsequently files GSTR-1 and the ITC appears in GSTR-2B, you may re-avail the ITC in that tax period, subject to the time limit under Section 16(4).

[Name of Proper Officer]
[Designation]
O/o [Commissioner/AC/DC/Superintendent], CGST [Division/Commissionerate]
DIN: [DIN]`
  },
  {
    id: "gst_80",
    category: "GST",
    name: "Order: ITC Reversal Confirmed — GSTR-2B Mismatch + Interest (Section 16(2)(aa))",
    subject: "Order Confirming Reversal of ITC Not Reflected in GSTR-2B — Section 16(2)(aa) of CGST Act, 2017 — GSTIN: [GSTIN] — M/s [Taxpayer Name]",
    opening: `OFFICE OF THE [DESIGNATION]
CENTRAL GOODS AND SERVICES TAX [DIVISION/COMMISSIONERATE]
[ADDRESS]

ORDER-IN-ORIGINAL
(Under Section 73 read with Section 16(2)(aa) of the CGST Act, 2017)

C.No. [File Number]                                          Date: [Date]
DIN: [DIN]

To,
[Taxpayer Name]
GSTIN: [GSTIN]
[Registered Address]

Subject: Order confirming reversal of ITC of Rs. [ITC Amount]/- not reflected in GSTR-2B — Section 73 read with Section 16(2)(aa) — GSTIN [GSTIN] — Period: [Period].

BACKGROUND:

1. Show Cause Notice vide C.No. [SCN No.] dated [SCN Date] was issued proposing reversal of ITC of Rs. [ITC Amount]/- for non-reflection in GSTR-2B under Section 16(2)(aa) of the CGST Act, 2017.

2. [The taxpayer replied on [Date] / No reply was received.]

3. Personal hearing [was conducted on [Date] / was not availed.]

FINDINGS:

4. Section 16(2)(aa) unambiguously provides that ITC is conditional upon reflection of invoices in GSTR-2B. The ITC of Rs. [ITC Amount]/- on invoices from supplier GSTIN [Supplier GSTIN] does not appear in the GSTR-2B for [Period].

5. [Address taxpayer's contention if any]. The bar under Section 16(2)(aa) is a mandatory compliance requirement.

COMPUTATION:

   ITC reversed (GSTR-2B mismatch)    : Rs. [ITC Amount]/-
   Interest u/s 50 @ [Rate]%
   from [Date] to [Date]               : Rs. [Interest]/-
   Penalty u/s 73(9) (10%)             : Rs. [Penalty]/-
   TOTAL                               : Rs. [Total]/-`,
    closing: `ORDER:

I hereby CONFIRM the demand for reversal of ITC of Rs. [ITC Amount]/- along with interest and penalty, totalling Rs. [Total Amount]/-, under Section 73 read with Section 16(2)(aa) of the CGST Act, 2017.

M/s [Taxpayer Name] is directed to pay Rs. [Total Amount]/- within 3 months from the date of this order.

NOTE: If the supplier subsequently files GSTR-1 for the relevant period and the ITC appears in GSTR-2B, the taxpayer may re-avail the ITC in the subsequent period, subject to the annual time limit under Section 16(4).

APPEAL CLAUSE: An appeal may be filed before the Commissioner (Appeals), CGST [Zone], within 3 months under Section 107, with mandatory pre-deposit of 10% of disputed tax under Section 107(6).

[Name of Proper Officer]
[Designation]
O/o [Commissioner/AC/DC/Superintendent], CGST [Division/Commissionerate]
DIN: [DIN]`
  },
  {
    id: "gst_81",
    category: "GST",
    name: "SCN: ITC Reversal — Exempt/Non-Business Use Proportional Reversal (Rule 42/43)",
    subject: "Show Cause Notice for Proportional Reversal of ITC under Rule 42/43 of CGST Rules, 2017 — Exempt Supply / Non-Business Use — GSTIN: [GSTIN] — M/s [Taxpayer Name]",
    opening: `OFFICE OF THE [DESIGNATION]
CENTRAL GOODS AND SERVICES TAX [DIVISION/COMMISSIONERATE]
[ADDRESS]

C.No. [File Number]                                           Date: [Date]

SHOW CAUSE NOTICE
(Under Section 73 read with Section 17(1), 17(2) and Rules 42 and 43 of the CGST Act/Rules, 2017)

To,
[Taxpayer Name]
GSTIN: [GSTIN]
[Registered Address]

Subject: Show Cause Notice for reversal of proportional ITC of Rs. [Amount]/- availed on inputs/capital goods used for exempt supplies and/or non-business purposes under Rule 42/43 — GSTIN [GSTIN] — Period: [Period].

FACTS:

1. M/s [Taxpayer Name] (GSTIN: [GSTIN]) is engaged in making BOTH taxable and exempt supplies [and/or uses inputs partly for non-business purposes].

2. Section 17(1) restricts ITC to so much of the input tax as is attributable to business purposes. Section 17(2) restricts ITC to so much as is attributable to taxable supplies.

3. Rule 42 prescribes the method for reversal of ITC on inputs and input services used for exempt supplies / non-business use. Rule 43 prescribes the method for capital goods.

4. From examination of the taxpayer's returns and financials for [Period]:

   Total ITC availed                   : Rs. [Total ITC]/-
   Taxable turnover                    : Rs. [Taxable TO]/-
   Exempt turnover                     : Rs. [Exempt TO]/-
   Total turnover                      : Rs. [Total TO]/-
   Exempt supply ratio                 : [%]
   ITC required to be reversed (Rule 42): Rs. [Reversal Amount]/-
   ITC actually reversed by taxpayer   : Rs. [Reversed by TP]/-
   SHORTFALL in reversal               : Rs. [Shortfall]/-

DEMAND:

   ITC short reversed (Rule 42/43)     : Rs. [Shortfall]/-
   Interest u/s 50 from [Date]         : Rs. [Interest]/-
   Penalty u/s 73(9) (10%)             : Rs. [Penalty]/-
   TOTAL DEMAND                         : Rs. [Total]/-`,
    closing: `YOU ARE HEREBY REQUIRED to show cause within 30 days as to why ITC of Rs. [Shortfall]/- should not be recovered along with interest and penalty for short reversal under Rule 42/43 read with Section 17 of the CGST Act.

If the reversal has already been made and interest paid, furnish evidence with your reply.

[Name of Proper Officer]
[Designation]
O/o [Commissioner/AC/DC/Superintendent], CGST [Division/Commissionerate]
DIN: [DIN]`
  },
  {
    id: "gst_82",
    category: "GST",
    name: "SCN: Wrongly Availed Transitional ITC — TRAN-1 / TRAN-2 (Section 140)",
    subject: "Show Cause Notice for Recovery of Wrongly Availed Transitional Credit — TRAN-1 / TRAN-2 — Section 140 of CGST Act / Section 74 — GSTIN: [GSTIN] — M/s [Taxpayer Name]",
    opening: `OFFICE OF THE [DESIGNATION]
CENTRAL GOODS AND SERVICES TAX [DIVISION/COMMISSIONERATE]
[ADDRESS]

C.No. [File Number]                                           Date: [Date]

SHOW CAUSE NOTICE
(Under Section 74 read with Section 140 of the CGST Act, 2017 and Rules 117/118 of the CGST Rules, 2017)

To,
[Taxpayer Name]
GSTIN: [GSTIN]
[Registered Address]

Subject: Show Cause Notice for recovery of transitional ITC of Rs. [Amount]/- fraudulently/wrongly availed through TRAN-1/TRAN-2 — Section 140 — GSTIN [GSTIN].

FACTS:

1. M/s [Taxpayer Name] (GSTIN: [GSTIN]) filed FORM GST TRAN-1 on [Date] [and/or FORM GST TRAN-2 on [Date]] claiming transitional ITC of Rs. [Claimed ITC]/- on closing stock/credit held as on 30.06.2017.

   Transitional ITC claimed:
   Closing stock (pre-GST): Rs. [Amt]/- | Unavailed CENVAT credit: Rs. [Amt]/- | VAT credit on stock: Rs. [Amt]/-
   TOTAL: Rs. [Total]/-

2. Section 140 allows transitional credit only where:
   (a) Such credit was admissible under the pre-GST law;
   (b) The credit is reflected in the last returns filed under pre-GST law;
   (c) The eligible credit is supported by documentary evidence as per Rule 117/118.

3. On verification/investigation, the following discrepancies are found:
   [SELECT APPLICABLE]:
   (a) The claimed CENVAT credit is not reflected in the ER-1/ST-3 return for the period ending 30.06.2017.
   (b) Closing stock claimed was found to be inflated/fictitious — no corresponding purchase invoices found.
   (c) The TRAN-1 credit relates to ineligible categories of inputs under the pre-GST law as well.
   (d) Supporting documents produced do not match the claim made in TRAN-1.

4. The wrongly availed transitional ITC of Rs. [Amount]/- is recoverable under Section 74 as the claim was made through wilful misstatement / suppression / fraud.

DEMAND:

   Wrongly availed TRAN credit         : Rs. [Amount]/-
   Interest u/s 50 from [Date]         : Rs. [Interest]/-
   Penalty u/s 74(9) (100%)            : Rs. [Penalty]/-
   TOTAL                                : Rs. [Total]/-`,
    closing: `YOU ARE HEREBY REQUIRED to show cause within 30 days as to why the transitional ITC of Rs. [Amount]/- should not be recovered along with 100% penalty and interest under Section 74 read with Section 140 of the CGST Act, 2017.

Produce original pre-GST duty paying documents, stock records, and pre-GST returns in support of your TRAN-1/TRAN-2 claim.

Prior approval for issuance of this notice has been obtained from [Commissioner/Joint Commissioner/Additional Commissioner] as required under Section 74(10) of the CGST Act.

[Name of Proper Officer]
[Designation]
O/o [Commissioner/AC/DC/Superintendent], CGST [Division/Commissionerate]
DIN: [DIN]`
  },
  {
    id: "gst_83",
    category: "GST",
    name: "SCN: ITC Reversal on Cancellation of GST Registration (Rule 44 / Section 29(5))",
    subject: "Show Cause Notice for Reversal of ITC on Closing Stock/Capital Goods upon Cancellation of Registration — Rule 44 / Section 29(5) — GSTIN: [GSTIN]",
    opening: `OFFICE OF THE [DESIGNATION]
CENTRAL GOODS AND SERVICES TAX [DIVISION/COMMISSIONERATE]
[ADDRESS]

C.No. [File Number]                                           Date: [Date]

SHOW CAUSE NOTICE
(Under Section 73 read with Section 29(5) and Rule 44 of the CGST Act/Rules, 2017)

To,
[Taxpayer Name]
GSTIN: [GSTIN]
[Last Known Address]

Subject: Show Cause Notice for payment of ITC reversal amount on closing stock and capital goods as on date of cancellation of GST registration — Rule 44 — GSTIN [GSTIN] — Effective Cancellation Date: [Date].

FACTS:

1. The GST registration of M/s [Taxpayer Name] (GSTIN: [GSTIN]) was cancelled with effect from [Cancellation Date] under Section 29 of the CGST Act, 2017.

2. Section 29(5) provides that every registered taxable person whose registration is cancelled shall pay an amount equivalent to the credit of input tax in respect of inputs held in stock, capital goods, and plant and machinery on the day immediately preceding the date of effectiveness of cancellation, in FORM GST ITC-03.

3. Rule 44 prescribes the manner of reversal:
   - For inputs: the credit attributable to inputs in stock shall be reversed.
   - For capital goods: ITC on capital goods reduced by 5% per quarter/part thereof from the date of invoice shall be reversed.

4. As on [Cancellation Date - 1]:
   Estimated closing stock value          : Rs. [Stock Value]/-
   ITC attributable to closing stock      : Rs. [ITC on Stock]/-
   Capital goods ITC (reduced by usage)   : Rs. [Capital Goods ITC]/-
   Total ITC reversal required (Rule 44)  : Rs. [Total Reversal]/-

5. The taxpayer has NOT filed FORM GST ITC-03 and has NOT reversed the said ITC of Rs. [Total Reversal]/-.

DEMAND:

   ITC reversal required (Rule 44)      : Rs. [Total Reversal]/-
   Interest u/s 50 from [Date]          : Rs. [Interest]/-
   Penalty u/s 73(9)                    : Rs. [Penalty]/-
   TOTAL DEMAND                          : Rs. [Total]/-`,
    closing: `YOU ARE HEREBY REQUIRED to show cause within 30 days as to why the ITC reversal amount of Rs. [Total Reversal]/- should not be recovered under Rule 44 read with Section 29(5) of the CGST Act, 2017, along with interest and penalty.

If FORM GST ITC-03 has been filed and ITC reversed, produce documentary evidence with your reply.

[Name of Proper Officer]
[Designation]
O/o [Commissioner/AC/DC/Superintendent], CGST [Division/Commissionerate]
DIN: [DIN]`
  },
  {
    id: "gst_84",
    category: "GST",
    name: "DRC-07: Summary of ITC Demand Order (Post OIO for ITC Cases)",
    subject: "Summary of Order — Form GST DRC-07 — ITC Demand — Section 73/74 — GSTIN: [GSTIN] — M/s [Taxpayer Name] — Order No: [Order No.]",
    opening: `FORM GST DRC - 07
SUMMARY OF THE ORDER
(Rule 142(5) of the Central Goods and Services Tax Rules, 2017)

GSTIN of Taxable Person     : [GSTIN]
Name of Taxable Person      : [Taxpayer Name]
Address                     : [Registered Address]
Order No.                   : [Order Number]
Date of Order               : [Order Date]
DIN of Order                : [DIN]
Issuing Authority           : [Name and Designation]
Period                      : [Tax Period]
Section under which order passed: Section [73/74] read with Section 16([section]) of the CGST Act, 2017

DETAILS OF DEMAND CONFIRMED:

Nature of ITC Issue: [ITC reversal type]
Description: [Brief description]

Tax Type  | Tax Amount    | Interest Amount | Penalty Amount | Total Amount
CGST      | Rs. [CGST]/-  | Rs. [Int]/-     | Rs. [Pen]/-    | Rs. [Total]/-
SGST/UTGST| Rs. [SGST]/-  | Rs. [Int]/-     | Rs. [Pen]/-    | Rs. [Total]/-
IGST      | Rs. [IGST]/-  | Rs. [Int]/-     | Rs. [Pen]/-    | Rs. [Total]/-
CESS      | Rs. [CESS]/-  | Rs. [Int]/-     | Rs. [Pen]/-    | Rs. [Total]/-
TOTAL     | Rs. [Tax]/-   | Rs. [Interest]/-| Rs. [Penalty]/-| Rs. [Grand Total]/-

Amount already paid (if any): Rs. [Paid]/-
Net amount payable          : Rs. [Net Due]/-
Payment Due Date            : [Date — 3 months from order date]`,
    closing: `PAYMENT INSTRUCTION:

The above amount of Rs. [Net Due]/- is required to be paid by M/s [Taxpayer Name] (GSTIN: [GSTIN]) on or before [Due Date].

Payment to be made through CGST Minor Head 300 (Tax) / 400 (Interest) / 500 (Penalty) via GSTR-3B or DRC-03 on the GST portal.

APPEAL NOTICE: If you wish to appeal against Order No. [Order No.] dated [Date], file Form GST APL-01 before the Commissioner (Appeals), CGST [Zone], within 3 months, with mandatory pre-deposit of 10% of the disputed tax under Section 107(6) of the CGST Act, 2017.

If the amount is not paid within the stipulated period, recovery proceedings under Section 79 of the CGST Act, 2017 shall be initiated.

[Name of Proper Officer]
[Designation]
O/o [Commissioner/AC/DC/Superintendent], CGST [Division/Commissionerate]`
  },
  {
    id: "gst_85",
    category: "GST",
    name: "Note Sheet: ITC Reconciliation — Internal Officer Working Note",
    subject: "Note Sheet for ITC Reconciliation and Determination of Ineligible/Wrongly Availed ITC — Internal — GSTIN: [GSTIN] — M/s [Taxpayer Name] — Period: [Period]",
    opening: `INTERNAL NOTE SHEET — ITC RECONCILIATION

F. No.: [File Number]                                  Date: [Date]
OFFICE OF THE [DESIGNATION], CGST [DIVISION/COMMISSIONERATE]

Subject: ITC Reconciliation — GSTIN [GSTIN] — M/s [Taxpayer Name] — Period: [Period].

1. INTRODUCTION:
   This note examines the ITC availed by M/s [Taxpayer Name] (GSTIN: [GSTIN]) for the period [Period] vis-a-vis GSTR-2B data, GSTR-3B data, purchase registers, and applicable restrictions under Sections 16, 17 and related rules of the CGST Act, 2017.

2. COMPARISON OF ITC DATA:
   Total ITC availed in GSTR-3B               : Rs. [Total ITC]/-
   Total ITC available in GSTR-2B             : Rs. [GSTR-2B ITC]/-
   Excess ITC availed (GSTR-3B over GSTR-2B)  : Rs. [Excess]/-

3. CATEGORY-WISE ANALYSIS:

   A. ITC on s.17(5) blocked categories        : Rs. [Amount]/-
   B. ITC on 180-day non-payment (s.16(2)(b))  : Rs. [Amount]/-
   C. GSTR-2B mismatch (s.16(2)(aa))           : Rs. [Amount]/-
   D. Rule 42 short reversal (exempt supply):
      Exempt turnover ratio: [%]
      ITC to be reversed (Rule 42)             : Rs. [Amount]/-
      ITC actually reversed                    : Rs. [Amount]/-
      Short reversal                           : Rs. [Amount]/-
   E. Any other ineligible ITC                 : Rs. [Amount]/-

4. SUMMARY OF DEMAND PROPOSED:
   s.17(5) blocked credit                      : Rs. [Amt]/-
   s.16(2)(b) 180-day                          : Rs. [Amt]/-
   s.16(2)(aa) GSTR-2B                         : Rs. [Amt]/-
   Rule 42 short reversal                      : Rs. [Amt]/-
   Other                                       : Rs. [Amt]/-
   TOTAL ITC DEMAND                            : Rs. [Total]/-
   Add: Interest u/s 50                        : Rs. [Interest]/-
   Add: Penalty (10%)                          : Rs. [Penalty]/-
   GRAND TOTAL DEMAND                          : Rs. [Grand Total]/-

5. RECOMMENDATION:
   It is recommended that a Show Cause Notice be issued to M/s [Taxpayer Name] (GSTIN: [GSTIN]) for recovery of ITC of Rs. [Total]/- as computed above, along with interest and penalty.
   Section: [73 — no fraud / 74 — fraud/suppression — prior approval of [JC/Addl. Commr.] required under s.74(10)]

Submitted for kind approval to [Designation]:
Prepared by: [Name, Designation]  |  Date: [Date]`,
    closing: `APPROVAL / NOTING:

Reviewed by [Superintendent / Inspector]: [Signature, Name, Date]

Approved by [Assistant Commissioner / Deputy Commissioner / Joint Commissioner]: [Signature, Name, Date]

Decision: Issue SCN under Section [73/74] as per above analysis.
SCN to be issued by: [Name, Designation]
Target date for SCN issuance: [Date]

File No.: [File No.]`
  },
  {
    id: "gst_86",
    category: "GST",
    name: "SCN: ITC Availed by Ineligible Person — Composition Dealer / Exempt Supplier",
    subject: "Show Cause Notice for Recovery of ITC Wrongly Availed by Ineligible Person — Composition Dealer / Person Making Only Exempt Supplies — Section 10(4) / Section 17(2) — GSTIN: [GSTIN]",
    opening: `OFFICE OF THE [DESIGNATION]
CENTRAL GOODS AND SERVICES TAX [DIVISION/COMMISSIONERATE]
[ADDRESS]

C.No. [File Number]                                           Date: [Date]

SHOW CAUSE NOTICE
(Under Section 73 read with Section 10(4) / Section 17(2) of the CGST Act, 2017)

To,
[Taxpayer Name]
GSTIN: [GSTIN]
[Registered Address]

Subject: Show Cause Notice for recovery of ITC of Rs. [Amount]/- wrongly availed by ineligible person — [Composition Dealer / Exempt Supplier] — GSTIN [GSTIN] — Period: [Period].

FACTS:

1. M/s [Taxpayer Name] (GSTIN: [GSTIN]) is registered under [Composition Scheme under Section 10 / making only exempt supplies].

2. [SELECT APPLICABLE]:

   CASE A — Composition Dealer:
   Section 10(4) explicitly provides that a person opting for Composition Scheme SHALL NOT be entitled to any credit of input tax. Despite this clear bar, the taxpayer has availed ITC of Rs. [Amount]/- in their Electronic Credit Ledger.

   CASE B — Exempt Supply Only:
   As M/s [Taxpayer Name] makes ONLY exempt supplies, ITC of Rs. [Amount]/- availed is wholly ineligible under Section 17(2) read with Rule 42 of the CGST Rules, 2017.

DEMAND:

   Ineligible ITC (wrong availing)     : Rs. [Amount]/-
   Interest u/s 50 from [Date]         : Rs. [Interest]/-
   Penalty u/s 73(9) (10%)             : Rs. [Penalty]/-
   TOTAL DEMAND                         : Rs. [Total]/-`,
    closing: `YOU ARE HEREBY REQUIRED to show cause within 30 days as to why ITC of Rs. [Amount]/- should not be recovered as you are not entitled to ITC under Section 10(4) / Section 17(2) of the CGST Act, 2017.

If ITC has been voluntarily reversed, produce evidence with your reply.

[Name of Proper Officer]
[Designation]
O/o [Commissioner/AC/DC/Superintendent], CGST [Division/Commissionerate]
DIN: [DIN]`
  },
  {
    id: "gst_87",
    category: "GST",
    name: "SCN: Section 74A — Unified Demand Notice (FY 2024-25 Onwards)",
    subject: "Show Cause Notice under Section 74A of CGST Act, 2017 — [Nature of Demand] — GSTIN: [GSTIN] — M/s [Taxpayer Name] — Period: [FY 2024-25 or later]",
    opening: `OFFICE OF THE [DESIGNATION]
CENTRAL GOODS AND SERVICES TAX [DIVISION/COMMISSIONERATE]
[ADDRESS]

C.No. [File Number]                                           Date: [Date]

SHOW CAUSE NOTICE
(Under Section 74A of the Central Goods and Services Tax Act, 2017)

[NOTE: Section 74A applies ONLY for FY 2024-25 and subsequent years. For prior periods, use Section 73 or Section 74.]

To,
[Taxpayer Name]
GSTIN: [GSTIN]
[Registered Address]

Subject: Show Cause Notice under Section 74A of the CGST Act, 2017 for recovery of tax of Rs. [Tax Amount]/- — [Short description of demand] — GSTIN [GSTIN] — Period: [FY 2024-25 / 2025-26].

BACKGROUND — SECTION 74A:

Section 74A was inserted by the Finance (No. 2) Act, 2024 and is applicable for FY 2024-25 and subsequent years. It provides a UNIFIED framework replacing the erstwhile separate provisions of Section 73 (no fraud) and Section 74 (fraud), with a single time limit of 42 months from the due date of filing the annual return.

Time limit for SCN: 42 months from due date of annual return.
Penalty (fraud/wilful misstatement): 100% of tax.
Penalty (no fraud): 10% of tax.
Reduced penalty available under Section 74A(6) for early payment.

FACTS OF THE CASE:

1. M/s [Taxpayer Name] (GSTIN: [GSTIN]) is registered under the CGST Act, 2017.

2. The following discrepancy has been identified for [Period — FY 2024-25 / 2025-26]:

   [SELECT APPLICABLE]:
   (a) Output tax mismatch: Declared in GSTR-1: Rs. [Amt]/- | Paid in GSTR-3B: Rs. [Amt]/- | Short payment: Rs. [Amt]/-
   (b) ITC wrongly availed [specify category]: ITC availed: Rs. [Amt]/- | ITC eligible: Rs. [Amt]/- | Ineligible ITC: Rs. [Amt]/-
   (c) RCM non-payment: [Specify supply details and RCM liability]
   (d) Any other: [Describe]

3. [WHERE FRAUD IS ALLEGED]: The above is attributable to fraud/wilful misstatement/suppression of facts, as evidenced by [specific reasons].
   [WHERE NO FRAUD]: The discrepancy appears to be on account of inadvertence/error/miscalculation, without any fraud or wilful misstatement.

LIMITATION:

4. Annual return for FY [2024-25] was due on [30.12.2025 / actual date]. Time limit for SCN under Section 74A: 42 months from [due date] = [Date]. This notice is within the limitation period.

DEMAND:

   Tax short-paid / ITC wrongly availed    : Rs. [Tax Amount]/-
   Interest u/s 50 from [Date] to [Date]   : Rs. [Interest]/-
   Penalty under Section 74A               : Rs. [Penalty]/-
   [If fraud: 100% | If no fraud: 10%]
   TOTAL DEMAND                             : Rs. [Total]/-`,
    closing: `YOU ARE HEREBY REQUIRED to show cause within 30 days as to why:
(i)  Tax of Rs. [Tax Amount]/- should not be recovered under Section 74A of the CGST Act, 2017;
(ii) Interest under Section 50 should not be levied;
(iii) Penalty under Section 74A should not be imposed.

REDUCED PENALTY BENEFIT (Section 74A(6)):
   Paid before replying to this SCN        : Penalty NIL
   Paid within 30 days of this SCN         : Penalty 25% of tax
   Paid before Order-in-Original           : Penalty 50% of tax
[These reduced penalties apply where no fraud is alleged. For fraud cases, penalty up to 100% under Section 74A(9).]

[IF FRAUD ALLEGED]: This notice has been issued with prior approval of [Commissioner / Additional/Joint Commissioner] as required.

NOTE: This notice pertains to FY [2024-25 / 2025-26] and is issued under Section 74A as applicable for FY 2024-25 onwards. Demands pertaining to prior periods are governed by Section 73 or Section 74, as applicable.

[Name of Proper Officer]
[Designation]
O/o [Commissioner/AC/DC/Superintendent], CGST [Division/Commissionerate]
DIN: [DIN]`
  },
  {
    id: "gst_88",
    category: "GST",
    name: "SCN — Cancellation for Non-Filing of Returns [Section 29(2)(c)]",
    subject: "Show Cause Notice for Cancellation of GST Registration — Failure to File Returns u/s 29(2)(c) CGST Act, 2017",
    opening: `OFFICE OF THE \${officerDesignation}
\${officerOffice}

SCN No. \${scnNumber}                                    Date: \${scnDate}

To,
\${taxpayerName}
GSTIN: \${gstin}
\${address}

Sub: Show Cause Notice for Cancellation of GST Registration u/s 29(2)(c) of the Central Goods and Services Tax Act, 2017 — Reg.

Sir/Madam,

WHEREAS, you are registered under the Goods and Services Tax Act, 2017 bearing GSTIN \${gstin}, and your principal place of business is located at the address mentioned above.

WHEREAS, it has been brought to the notice of this office that you have failed to furnish returns for \${numberOfMonths} consecutive tax period(s), namely \${periodsNotFiled}, in contravention of the mandatory return-filing obligations under the CGST Act, 2017.

As per Section 29(2)(c) of the CGST Act, 2017, the proper officer may cancel the registration of a person who has not furnished returns for such continuous tax period as may be prescribed. As per Rule 21(e) of the CGST Rules, 2017, a registered person who has not filed returns for a continuous period of six months (for monthly filers) or two quarters (for quarterly filers) is liable for cancellation.

You have accordingly not filed the following returns:
Period(s): \${periodsNotFiled}
Type of Return: \${returnType}
Number of Periods Defaulted: \${numberOfMonths}`,
    closing: `In view of the foregoing, you are hereby called upon to SHOW CAUSE as to why your GST Registration bearing GSTIN \${gstin} should not be cancelled under Section 29(2)(c) of the CGST Act, 2017 read with Rule 21(e) of the CGST Rules, 2017.

You are directed to:
1. File all pending returns immediately.
2. Submit a written reply to this notice within 7 (seven) working days from the date of receipt hereof.
3. Appear for a personal hearing on \${hearingDate} at \${hearingTime} before the undersigned, either in person or through an authorized representative.

Please note:
(a) Failure to reply within the stipulated period shall be deemed as having nothing to say in the matter and the registration shall be cancelled ex-parte without further notice.
(b) Your registration stands SUSPENDED with effect from the date of this notice as per Rule 21A(2) of the CGST Rules, 2017. During suspension, you shall not make any taxable supply.
(c) If all pending returns are filed and tax dues are paid before the reply date, you may request withdrawal of this notice.

\${officerName}
\${officerDesignation}
\${officerOffice}
Date: \${scnDate}`
  },
  {
    id: "gst_89",
    category: "GST",
    name: "SCN — Cancellation for Fraudulent Registration [Section 29(2)(e)]",
    subject: "Show Cause Notice for Cancellation of GST Registration — Fraud/Wilful Misstatement/Suppression of Facts u/s 29(2)(e) CGST Act, 2017",
    opening: `OFFICE OF THE \${officerDesignation}
\${officerOffice}

SCN No. \${scnNumber}                                    Date: \${scnDate}

To,
\${taxpayerName}
GSTIN: \${gstin}
\${address}

Sub: Show Cause Notice for Cancellation of GST Registration u/s 29(2)(e) of the CGST Act, 2017 — obtained by fraud/wilful misstatement/suppression of facts — Reg.

Sir/Madam,

WHEREAS, you obtained GST Registration bearing GSTIN \${gstin} on \${registrationDate} with the declaration that your principal place of business is at \${declaredAddress}.

WHEREAS, an enquiry/inspection conducted on \${inspectionDate} by this office has revealed the following discrepancies/fraudulent acts:

\${fraudDetails}

The above discrepancies indicate that the registration was obtained by means of fraud, wilful misstatement, or suppression of material facts, in violation of Section 29(2)(e) of the CGST Act, 2017 read with Rule 21(d) of the CGST Rules, 2017.

Specific findings:
1. \${finding1}
2. \${finding2}
3. \${finding3}`,
    closing: `In view of the above, you are hereby called upon to SHOW CAUSE as to why your GST Registration bearing GSTIN \${gstin} should not be cancelled with retrospective effect from \${retrospectiveDate} under Section 29(2)(e) of the CGST Act, 2017.

You are directed to submit your reply to this notice within 7 (seven) working days from the date of receipt to the undersigned. You may appear for a personal hearing on \${hearingDate} at \${hearingTime}.

Please note:
(a) If registration is cancelled retrospectively, all supplies made from \${retrospectiveDate} will be treated as supplies made by an unregistered person and tax, interest, and penalty shall be demanded accordingly.
(b) Your registration is SUSPENDED with immediate effect under Rule 21A(2) of the CGST Rules, 2017.
(c) Any ITC availed by recipients from your supplies may also be reversed by the respective jurisdictional officers.
(d) This notice is without prejudice to any criminal proceedings under Section 132 of the CGST Act, 2017.

\${officerName}
\${officerDesignation}
\${officerOffice}
Date: \${scnDate}`
  },
  {
    id: "gst_90",
    category: "GST",
    name: "SCN — Cancellation for Business Not Commenced/Discontinued [Section 29(2)(a)/(b)]",
    subject: "Show Cause Notice for Cancellation of GST Registration — Business Not Commenced/Discontinued u/s 29(2) CGST Act, 2017",
    opening: `OFFICE OF THE \${officerDesignation}
\${officerOffice}

SCN No. \${scnNumber}                                    Date: \${scnDate}

To,
\${taxpayerName}
GSTIN: \${gstin}
\${address}

Sub: Show Cause Notice for Cancellation of GST Registration u/s 29(2)(a)/(b) of the CGST Act, 2017 — Reg.

Sir/Madam,

WHEREAS, you are registered under the CGST Act, 2017 bearing GSTIN \${gstin} with registration date \${registrationDate}.

WHEREAS, it has been observed by this office based on the following grounds that you have \${cancellationGround}:

Ground(s) for proposed cancellation:
\${groundDetails}

Basis for the above finding:
1. \${basis1}
2. \${basis2}
3. \${basis3}

As per Section 29(2)(a) of the CGST Act, 2017, the proper officer may cancel the registration of a person who has not commenced business within six months of the date of registration.
As per Section 29(2)(b), the proper officer may cancel registration where a person has obtained registration by fraud, or where registration is no longer warranted.
As per Rule 21 of the CGST Rules, 2017, the Proper Officer may cancel registration in the circumstances specified therein.`,
    closing: `You are hereby called upon to SHOW CAUSE as to why your registration bearing GSTIN \${gstin} should not be cancelled under Section 29(2) of the CGST Act, 2017.

You are required to:
1. Submit a written reply within 7 (seven) working days from the date of receipt of this notice.
2. Produce documentary evidence of active business operations, if any.
3. Appear for a personal hearing on \${hearingDate} at \${hearingTime}.

Note: Failure to reply shall result in ex-parte cancellation. Your registration stands suspended under Rule 21A(2) from the date of this notice.

\${officerName}
\${officerDesignation}
\${officerOffice}
Date: \${scnDate}`
  },
  {
    id: "gst_91",
    category: "GST",
    name: "Order — Cancellation of Registration Confirmed [Section 29(2)]",
    subject: "Order for Cancellation of GST Registration u/s 29(2) of CGST Act, 2017 — GSTIN: \${gstin}",
    opening: `OFFICE OF THE \${officerDesignation}
\${officerOffice}

Order No. \${orderNumber}                                Date: \${orderDate}

To,
\${taxpayerName}
GSTIN: \${gstin}
\${address}

Sub: Order for Cancellation of GST Registration u/s 29(2) of the CGST Act, 2017 — Reg.

Ref: SCN No. \${scnNumber} dated \${scnDate}

ORDER

1. BACKGROUND:
   A Show Cause Notice bearing No. \${scnNumber} dated \${scnDate} was issued to you proposing cancellation of your GST Registration bearing GSTIN \${gstin} on the ground(s) that \${groundSummary}.

2. REPLY / PERSONAL HEARING:
   \${replyStatus}
   \${hearingStatus}

3. FINDINGS:
   \${findingDetails}

4. CONSIDERATION OF REPLY:
   \${replyConsideration}

5. CONCLUSION:
   After careful examination of the available records, statements, and the reply submitted (if any), the undersigned is satisfied that the grounds for cancellation have been established for the following reasons:
   \${conclusionReasons}`,
    closing: `ORDER:

In exercise of the powers conferred under Section 29(2) of the CGST Act, 2017 read with Rule 22 of the CGST Rules, 2017, the registration of \${taxpayerName} bearing GSTIN \${gstin} is hereby CANCELLED with effect from \${cancellationDate}.

The cancellation is ordered on the following ground(s): \${groundSummary}.

CONSEQUENTIAL DIRECTIONS:
1. The cancelled taxpayer shall file a FINAL RETURN in FORM GSTR-10 within three months from the date of cancellation order or the date of order of cancellation, whichever is later.
2. Any ITC remaining in the Electronic Credit Ledger shall be reversed under Section 29(5) read with Rule 44.
3. Any tax liability outstanding shall be paid forthwith.
4. The cancellation of registration shall be notified on the GSTN portal.

APPEAL:
This order may be appealed before the Commissioner (Appeals) under Section 107 of the CGST Act, 2017 within three months of receipt of this order, with mandatory pre-deposit of 10% of the tax dues, if any.

\${officerName}
\${officerDesignation}
\${officerOffice}
Date: \${orderDate}`
  },
  {
    id: "gst_92",
    category: "GST",
    name: "Notice — Suspension of Registration [Rule 21A(2)]",
    subject: "Intimation of Suspension of GST Registration under Rule 21A(2) of CGST Rules, 2017 — GSTIN: \${gstin}",
    opening: `OFFICE OF THE \${officerDesignation}
\${officerOffice}

Notice No. \${noticeNumber}                              Date: \${noticeDate}

To,
\${taxpayerName}
GSTIN: \${gstin}
\${address}

Sub: Intimation of SUSPENSION of GST Registration under Rule 21A(2) of the CGST Rules, 2017 — Reg.

Ref: SCN No. \${scnNumber} dated \${scnDate}

Sir/Madam,

This is to inform you that a Show Cause Notice bearing No. \${scnNumber} dated \${scnDate} has been issued to you proposing cancellation of your GST registration bearing GSTIN \${gstin} on the ground(s) of \${groundSummary}.

In accordance with Rule 21A(2) of the CGST Rules, 2017, upon issue of the said Show Cause Notice, your GST registration stands SUSPENDED with immediate effect from \${suspensionDate}.

EFFECT OF SUSPENSION:
During the period of suspension, you shall be bound by the following restrictions as per Rule 21A(3) of the CGST Rules, 2017:`,
    closing: `RESTRICTIONS DURING SUSPENSION PERIOD:
1. You SHALL NOT make any taxable supply.
2. You SHALL NOT issue tax invoices to buyers for any supply during this period.
3. You SHALL NOT collect GST from any recipient.
4. You SHALL file all pending returns that were due before the date of suspension.
5. You MUST NOT avail any Input Tax Credit during the suspension period.

HOWEVER, you are NOT relieved from:
(a) Filing pending returns for the period prior to suspension.
(b) Payment of any tax, interest, or penalty lawfully due.
(c) Responding to the Show Cause Notice and appearing for personal hearing.

The suspension shall be deemed to be revoked upon revocation of the cancellation under Section 30, or upon withdrawal of the SCN, or upon passing of final order.

You are advised to file your reply to the SCN and comply with the directions therein to enable early resolution.

\${officerName}
\${officerDesignation}
\${officerOffice}
Date: \${noticeDate}`
  },
  {
    id: "gst_93",
    category: "GST",
    name: "Order — Revocation of Suspension [Rule 21A(4)]",
    subject: "Order for Revocation of Suspension of GST Registration u/r 21A(4) of CGST Rules, 2017 — GSTIN: \${gstin}",
    opening: `OFFICE OF THE \${officerDesignation}
\${officerOffice}

Order No. \${orderNumber}                                Date: \${orderDate}

To,
\${taxpayerName}
GSTIN: \${gstin}
\${address}

Sub: Order for REVOCATION of Suspension of GST Registration u/r 21A(4) of the CGST Rules, 2017 — Reg.

Ref: 1. SCN No. \${scnNumber} dated \${scnDate}
     2. Suspension Notice No. \${suspensionNoticeNumber} dated \${suspensionDate}
     3. Reply filed by taxpayer on \${replyDate}

ORDER

1. BACKGROUND:
   The registration of \${taxpayerName} (GSTIN: \${gstin}) was suspended vide Notice No. \${suspensionNoticeNumber} dated \${suspensionDate} upon issue of SCN No. \${scnNumber} dated \${scnDate}.

2. GROUNDS FOR REVOCATION OF SUSPENSION:
   The suspension is being revoked on the following ground(s):
   \${revocationGround}

3. COMPLIANCE STATUS:
   \${complianceStatus}`,
    closing: `ORDER:

In exercise of the powers under Rule 21A(4) of the CGST Rules, 2017, the SUSPENSION of registration of \${taxpayerName} bearing GSTIN \${gstin} imposed vide Notice No. \${suspensionNoticeNumber} dated \${suspensionDate} is hereby REVOKED with effect from \${revocationDate}.

The taxpayer's registration status is restored to ACTIVE on the GSTN portal from the date of this order.

The SCN No. \${scnNumber} dated \${scnDate} stands \${scnStatus}.

Note: Revocation of suspension does not automatically restore any ITC reversed or tax paid during the suspension period. For any refund claims arising therefrom, a separate application may be filed.

\${officerName}
\${officerDesignation}
\${officerOffice}
Date: \${orderDate}`
  },
  {
    id: "gst_94",
    category: "GST",
    name: "SCN — Rejection of Revocation Application [Section 30(1)]",
    subject: "Show Cause Notice — Proposed Rejection of Application for Revocation of Cancellation u/s 30(1) CGST Act, 2017 — GSTIN: \${gstin}",
    opening: `OFFICE OF THE \${officerDesignation}
\${officerOffice}

SCN No. \${scnNumber}                                    Date: \${scnDate}

To,
\${taxpayerName}
(Previously registered with GSTIN: \${gstin})
\${address}

Sub: Show Cause Notice for Rejection of Application for Revocation of Cancellation of Registration u/s 30(1) of the CGST Act, 2017 — Reg.

Ref: 1. Cancellation Order No. \${cancellationOrderNumber} dated \${cancellationDate}
     2. Application for Revocation filed in FORM GST REG-21 dated \${revocationApplicationDate}
     3. Application Reference No. (ARN): \${arn}

Sir/Madam,

Your GST registration bearing GSTIN \${gstin} was cancelled vide Order No. \${cancellationOrderNumber} dated \${cancellationDate} on the ground(s) of \${cancellationGround}.

Subsequently, you filed an application for Revocation of Cancellation in FORM GST REG-21 on \${revocationApplicationDate} (ARN: \${arn}).

The application has been examined and the following deficiencies/objections have been noted which prima facie render your application liable to rejection:

\${deficiencyDetails}`,
    closing: `You are hereby called upon to SHOW CAUSE as to why your application for revocation of cancellation should not be REJECTED on the grounds stated above.

You are directed to:
1. Submit a written reply addressing each objection point-wise within 7 (seven) working days.
2. File all pending returns (if not already done) and submit proof of payment of all dues.
3. Appear for personal hearing on \${hearingDate} at \${hearingTime}.

Please note:
(a) The time limit for filing a revocation application is 30 days from the date of the cancellation order (extendable by the Commissioner).
(b) As per Section 30(1), the applicant must ensure that all pending returns are filed and dues paid before revocation can be allowed.
(c) If the reply is satisfactory and dues are cleared, the application may be allowed. Otherwise, a formal rejection order shall be passed.

\${officerName}
\${officerDesignation}
\${officerOffice}
Date: \${scnDate}`
  },
  {
    id: "gst_95",
    category: "GST",
    name: "Order — Revocation of Cancellation Allowed [Section 30(2)]",
    subject: "Order Allowing Revocation of Cancellation of GST Registration u/s 30(2) of CGST Act, 2017 — GSTIN: \${gstin}",
    opening: `OFFICE OF THE \${officerDesignation}
\${officerOffice}

Order No. \${orderNumber}                                Date: \${orderDate}

To,
\${taxpayerName}
(Cancelled GSTIN: \${gstin})
\${address}

Sub: Order Allowing Revocation of Cancellation of GST Registration u/s 30(2) of the CGST Act, 2017 — Reg.

Ref: 1. Cancellation Order No. \${cancellationOrderNumber} dated \${cancellationDate}
     2. Application for Revocation in FORM GST REG-21 dated \${revocationApplicationDate} (ARN: \${arn})
     3. SCN No. \${scnNumber} dated \${scnDate} (if applicable): \${scnReference}
     4. Reply dated \${replyDate} (if filed)

ORDER

1. BACKGROUND:
   The registration of \${taxpayerName} bearing GSTIN \${gstin} was cancelled vide Order No. \${cancellationOrderNumber} dated \${cancellationDate}.

2. APPLICATION FOR REVOCATION:
   You filed an application in FORM GST REG-21 on \${revocationApplicationDate} (ARN: \${arn}) for revocation of the said cancellation.

3. EXAMINATION OF APPLICATION:
   The application has been examined along with the documents submitted. The following is noted:
   \${examinationDetails}

4. COMPLIANCE VERIFIED:
   It is verified that:
   (a) All pending returns up to the effective date of cancellation have been filed.
   (b) All outstanding tax, interest, and penalty have been paid.
   (c) No further proceedings are pending which would preclude revocation.`,
    closing: `ORDER:

In exercise of the powers conferred under Section 30(2) of the CGST Act, 2017 read with Rule 23 of the CGST Rules, 2017, the application for revocation of cancellation of registration of \${taxpayerName} bearing GSTIN \${gstin} is hereby ALLOWED.

The cancellation order dated \${cancellationDate} is hereby revoked, and the registration of the applicant stands RESTORED with effect from \${restorationDate}.

The GSTN portal shall be updated to reflect ACTIVE status for GSTIN \${gstin}.

The applicant is advised to:
1. Ensure timely filing of all future returns.
2. Comply with all provisions of the CGST Act, 2017 and rules thereunder.
3. Note that any recurrence of the grounds that led to cancellation may result in fresh cancellation proceedings without the benefit of revocation.

\${officerName}
\${officerDesignation}
\${officerOffice}
Date: \${orderDate}`
  },
  {
    id: "gst_96",
    category: "GST",
    name: "Order — Revocation of Cancellation Rejected [Section 30(2)]",
    subject: "Order Rejecting Application for Revocation of Cancellation of GST Registration u/s 30(2) CGST Act, 2017 — GSTIN: \${gstin}",
    opening: `OFFICE OF THE \${officerDesignation}
\${officerOffice}

Order No. \${orderNumber}                                Date: \${orderDate}

To,
\${taxpayerName}
(Cancelled GSTIN: \${gstin})
\${address}

Sub: Order Rejecting Application for Revocation of Cancellation of Registration u/s 30(2) of the CGST Act, 2017 — Reg.

Ref: 1. Cancellation Order No. \${cancellationOrderNumber} dated \${cancellationDate}
     2. Application for Revocation in FORM GST REG-21 dated \${revocationApplicationDate} (ARN: \${arn})
     3. SCN No. \${scnNumber} dated \${scnDate}
     4. Reply dated \${replyDate} / No reply received

ORDER

1. BRIEF FACTS:
   The registration of \${taxpayerName} (GSTIN: \${gstin}) was cancelled vide Order dated \${cancellationDate}. The applicant filed an application for revocation on \${revocationApplicationDate}.

2. SCN ISSUED:
   A Show Cause Notice was issued on \${scnDate} specifying the deficiencies in the application. \${replyStatus}

3. FINDINGS:
   \${findingDetails}

4. CONSIDERATION:
   The reply, if any, has been duly considered. The following reasons establish that the application for revocation cannot be allowed:
   \${rejectionReasons}`,
    closing: `ORDER:

In exercise of the powers under Section 30(2) of the CGST Act, 2017 read with Rule 23 of the CGST Rules, 2017, the application for revocation of cancellation filed by \${taxpayerName} bearing cancelled GSTIN \${gstin} is hereby REJECTED for the following reasons:
\${rejectionReasons}

The cancellation of registration dated \${cancellationDate} shall therefore remain in force.

APPEAL:
This order may be appealed before the Commissioner (Appeals) under Section 107 of the CGST Act, 2017 within three months of receipt of this order.

Consequential Action:
The applicant may apply for a fresh registration under Section 22/24 of the CGST Act, 2017, if eligible, after meeting all statutory requirements.

\${officerName}
\${officerDesignation}
\${officerOffice}
Date: \${orderDate}`
  },
  {
    id: "gst_97",
    category: "GST",
    name: "Notice — Physical Verification of Business Premises [Rule 25]",
    subject: "Notice for Physical Verification of Business Premises under Rule 25 of CGST Rules, 2017 — GSTIN: \${gstin}",
    opening: `OFFICE OF THE \${officerDesignation}
\${officerOffice}

Notice No. \${noticeNumber}                              Date: \${noticeDate}

To,
\${taxpayerName}
GSTIN: \${gstin} / ARN: \${arn}
\${address}

Sub: Notice for Physical Verification of your Principal Place of Business / Additional Place of Business under Rule 25 of the CGST Rules, 2017 — Reg.

Sir/Madam,

Your GST Registration application / existing registration record has been selected for physical verification of the principal place of business / additional place of business as detailed below:

Purpose of Verification: \${verificationPurpose}
Address to be Verified: \${addressToVerify}
Reason for Verification: \${verificationReason}

As per Rule 25 of the CGST Rules, 2017, the proper officer may conduct physical verification of the place of business of the applicant/registered person before granting registration, or at any time during the period of registration, if deemed necessary.`,
    closing: `You are hereby informed that a physical verification of the above-mentioned premises will be conducted on:

Date of Verification: \${verificationDate}
Time: \${verificationTime}
Verification Officer: \${verifyingOfficerName}, \${verifyingOfficerDesignation}

You are requested to:
1. Ensure your presence (in person or through an authorized representative) at the said address at the above-mentioned time.
2. Keep the following documents ready for inspection:
   (a) Proof of ownership/lease/rent agreement of the premises
   (b) Latest electricity/water bill for the premises
   (c) Details of stock/goods if any, stored at the premises
   (d) Any other relevant business documents
3. Grant free access to the premises to the verification officer.

Please note that non-availability at the premises during verification without prior intimation will be recorded as an adverse finding and may result in rejection/cancellation of registration.

The verification officer will submit a report in FORM GST REG-30. Appropriate action will be taken on the basis of the verification report.

\${officerName}
\${officerDesignation}
\${officerOffice}
Date: \${noticeDate}`
  },
  {
    id: "gst_98",
    category: "GST",
    name: "SCN — Rejection of New Registration Application [Rule 9(3)]",
    subject: "Show Cause Notice for Rejection of GST Registration Application under Rule 9(3) of CGST Rules, 2017 — ARN: \${arn}",
    opening: `OFFICE OF THE \${officerDesignation}
\${officerOffice}

SCN No. \${scnNumber}                                    Date: \${scnDate}

To,
\${applicantName}
ARN: \${arn}  (Date of Application: \${applicationDate})
\${address}

Sub: Show Cause Notice for Rejection of Application for GST Registration under Rule 9(3) of the CGST Rules, 2017 — Reg.

Sir/Madam,

You have filed an application for registration under the CGST Act, 2017 on \${applicationDate} bearing ARN: \${arn}. The application was submitted for the following category: \${registrationCategory}.

On examination of the application and the documents submitted therewith (including the verification report in FORM GST REG-30 dated \${verificationDate}, if applicable), the following deficiencies / objections have been found:

DEFICIENCIES NOTED:
\${deficiencyDetails}

SPECIFIC OBSERVATIONS:
1. \${observation1}
2. \${observation2}
3. \${observation3}

The above deficiencies render the application prima facie liable for REJECTION under Rule 9(3) of the CGST Rules, 2017.`,
    closing: `You are hereby called upon to SHOW CAUSE as to why your application for registration bearing ARN: \${arn} should not be rejected on the grounds stated above.

You are directed to:
1. Submit a written reply with supporting documents addressing each deficiency, within 7 (seven) working days from the date of receipt of this notice.
2. Appear for a personal hearing on \${hearingDate} at \${hearingTime}, if you so wish.

Please note:
(a) Failure to reply shall result in the application being rejected ex-parte under Rule 9(3).
(b) If the deficiencies are corrected and reply is satisfactory, the registration may be granted without further proceedings.
(c) Where physical verification reveals the premises do not exist or are unsuitable, additional documentation of business activity will be required.
(d) Providing false information or documents is a punishable offence under Section 122(1)(xiv) of the CGST Act, 2017.

\${officerName}
\${officerDesignation}
\${officerOffice}
Date: \${scnDate}`
  },
  {
    id: "gst_99",
    category: "GST",
    name: "Order — Registration Application Rejected [Rule 9(3)]",
    subject: "Order Rejecting GST Registration Application under Rule 9(3) of CGST Rules, 2017 — ARN: \${arn}",
    opening: `OFFICE OF THE \${officerDesignation}
\${officerOffice}

Order No. \${orderNumber}                                Date: \${orderDate}

To,
\${applicantName}
ARN: \${arn}
\${address}

Sub: Order Rejecting Application for GST Registration under Rule 9(3) of the CGST Rules, 2017 — Reg.

Ref: 1. Registration Application dated \${applicationDate} (ARN: \${arn})
     2. SCN No. \${scnNumber} dated \${scnDate}
     3. Reply filed on \${replyDate} / No reply received
     4. Physical Verification Report (FORM GST REG-30) dated \${verificationDate} (if applicable)

ORDER

1. APPLICATION DETAILS:
   The applicant \${applicantName} filed an application for registration under the CGST Act, 2017 on \${applicationDate}.

2. SCN AND REPLY:
   A Show Cause Notice was issued on \${scnDate} citing the following deficiencies: \${deficiencySummary}. \${replyStatus}

3. EXAMINATION OF REPLY:
   \${replyExamination}

4. FINDINGS:
   \${findingDetails}`,
    closing: `ORDER:

In exercise of the powers under Rule 9(3) of the CGST Rules, 2017 read with Section 25 of the CGST Act, 2017, the application for GST Registration bearing ARN \${arn} filed by \${applicantName} is hereby REJECTED for the following reasons:
\${rejectionReasons}

APPEAL:
The applicant may appeal this order before the Commissioner (Appeals) under Section 107 of the CGST Act, 2017 within three months of receipt of this order.

FRESH APPLICATION:
The applicant may file a fresh application for registration after rectifying the above deficiencies, if otherwise eligible for registration under the CGST Act, 2017.

\${officerName}
\${officerDesignation}
\${officerOffice}
Date: \${orderDate}`
  },
  {
    id: "gst_100",
    category: "GST",
    name: "Notice — Officer-Initiated Amendment to Registration [Section 28(2)]",
    subject: "Notice for Amendment to GST Registration Details u/s 28(2) of CGST Act, 2017 — GSTIN: \${gstin}",
    opening: `OFFICE OF THE \${officerDesignation}
\${officerOffice}

Notice No. \${noticeNumber}                              Date: \${noticeDate}

To,
\${taxpayerName}
GSTIN: \${gstin}
\${address}

Sub: Notice for Amendment to your GST Registration Certificate u/s 28(2) of the CGST Act, 2017 — Reg.

Sir/Madam,

It has come to the notice of this office that the following particulars in your GST Registration Certificate (issued for GSTIN: \${gstin}) require amendment/correction on the basis of \${basisForAmendment}.

Proposed Amendment Details:
┌─────────────────────────────┬──────────────────────┬──────────────────────┐
│ Particulars                 │ Current Details      │ Proposed Amendment   │
├─────────────────────────────┼──────────────────────┼──────────────────────┤
│ \${field1}                   │ \${currentValue1}     │ \${amendedValue1}     │
│ \${field2}                   │ \${currentValue2}     │ \${amendedValue2}     │
│ \${field3}                   │ \${currentValue3}     │ \${amendedValue3}     │
└─────────────────────────────┴──────────────────────┴──────────────────────┘

Grounds for officer-initiated amendment:
\${amendmentGrounds}

As per Section 28(2) of the CGST Act, 2017, the proper officer may, on the basis of information available with him, amend the registration certificate if he is satisfied that there is a change in the particulars furnished at the time of or after registration, or where the particulars are incorrect.`,
    closing: `You are hereby requested to:
1. Review the proposed amendment details above.
2. Submit your acceptance OR objection in writing within 7 (seven) working days from receipt of this notice.
3. If you have objections, state your reasons with supporting documentary evidence.
4. Appear for a personal hearing on \${hearingDate} at \${hearingTime} if required.

If no objection is received within the stipulated period, the amendment shall be carried out suo-motu on the GSTN portal under Section 28(2) of the CGST Act, 2017.

If objections are raised, a speaking order shall be passed after considering your response.

Please note: This amendment does not affect your GST registration number (GSTIN). Only the specified field(s) in the registration certificate will be updated.

\${officerName}
\${officerDesignation}
\${officerOffice}
Date: \${noticeDate}`
  }
];
