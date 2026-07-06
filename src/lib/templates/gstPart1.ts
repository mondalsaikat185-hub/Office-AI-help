import { Template } from '../../types';

export const gstTemplatesPart1: Template[] = [
  {
    id: "gst_1",
    category: "GST",
    name: "Reply to SCN under Section 73 CGST Act",
    subject: "Reply to Show Cause Notice No. [DIN/SCN No.] dated [Date] — GSTIN: [XXXX]",
    opening: "This reply is filed in response to the Show Cause Notice (SCN) No. [DIN: XXXXXXXX] dated [Date] issued under Section 73(1) of the Central Goods and Services Tax Act, 2017 by [Name of Proper Officer], [Designation], O/o [Office Name].\n\nPRELIMINARY SUBMISSIONS:\nThe assessee/noticee respectfully submits that the subject SCN is legally infirm and factually incorrect for the following reasons:\n1. The alleged demand of Rs. [X]/- is disputed on the following grounds:\n[State ground-1: legal/factual]\n[State ground-2: reconciliation of figures]\n[State ground-3: supporting case law if any]",
    closing: "In view of the above, it is most respectfully submitted that:\n(a) The SCN may kindly be dropped in its entirety;\n(b) No demand, interest or penalty may be confirmed;\n(c) A personal hearing may be granted before passing the adjudication order.\nAll documents in support of this reply are enclosed as Annexure-I to Annexure-[X]."
  },
  {
    id: "gst_2",
    category: "GST",
    name: "Reply to SCN under Section 74 CGST Act",
    subject: "Reply to SCN No. [DIN] dated [Date] issued under Section 74(1) of CGST Act, 2017 — GSTIN: [XXXX]",
    opening: "The above-named noticee/assessee respectfully submits this reply to the SCN issued under Section 74(1) of the CGST Act, 2017, alleging willful suppression / misstatement / fraud.\n\nWITHOUT PREJUDICE SUBMISSIONS:\n1. The allegation of fraud / willful suppression is categorically denied. The noticee acted in good faith and in accordance with its understanding of the law.\n2. All relevant transactions were duly reported in GSTR-1 and GSTR-3B. There was no intent to evade tax.\n3. The extended period of limitation under the proviso to Section 74(1) is not invocable in this case as the element of fraud/suppression is absent.",
    closing: "It is respectfully prayed that the SCN may be dropped and penalty not be imposed. In the alternative, without admitting liability, if any tax is held payable, the reduced penalty under Section 74(5) at 15% may be applied, and recovery may be computed only for the normal period of limitation under Section 73."
  },
  {
    id: "gst_3",
    category: "GST",
    name: "Reply to SCN under Section 74A CGST Act",
    subject: "Reply to SCN No. [DIN] dated [Date] under Section 74A of CGST Act — GSTIN: [XXXX]",
    opening: "This reply is filed in response to the SCN dated [Date] issued under Section 74A of the CGST Act, 2017 (as inserted by Finance Act 2024, w.e.f. 01.11.2024).\n\nThe noticee submits:\n1. The demand of Rs. [X]/- (tax) + Rs. [X]/- (interest) + Rs. [X]/- (penalty) as proposed is not sustainable.\n2. The time limits prescribed under Section 74A are [X] years from the due date of annual return for the relevant year, and the notice is [within/beyond] the prescribed limitation.\n3. Without prejudice, the noticee is willing to pay the undisputed amount of Rs. [X]/- along with interest to avail the benefit of reduced penalty at 15% within 60 days as provided under Section 74A.",
    closing: "The noticee prays for early adjudication and personal hearing before passing of the order."
  },
  {
    id: "gst_4",
    category: "GST",
    name: "Internal Note Sheet before issuing SCN — for CGST Officer",
    subject: "Proposed issuance of SCN under Section 73/74 of CGST Act, 2017 in the case of M/s [Trade Name], GSTIN [X]",
    opening: "**Submitted:-**\n**For kind perusal and orders, please:-**\nPlaced opposite may be seen.\n\nThe tax records of M/s [Trade Name] (GSTIN: [XXXX]), engaged in [nature of business], have been examined. The scrutiny/investigation reveals the following discrepancies:\n\n1. Short payment of output tax  : Rs. [X]/-\n2. Excess ITC claimed           : Rs. [X]/-\n3. GSTR-1 vs GSTR-3B mismatch  : Rs. [X]/-\nTotal proposed demand           : Rs. [X]/-\nInterest (approx.)              : Rs. [X]/-\nPenalty proposed               : Rs. [X]/-\n\nRelevant period: [Financial Year(s)]\nApplicable Section: 73/74 of CGST Act\nLimitation: [Within time/Extended period invocable as fraud/suppression is established as per records]",
    closing: "**Put up for approval to issue SCN as proposed, please.**"
  },
  {
    id: "gst_5",
    category: "GST",
    name: "Note Sheet for passing Adjudication/Demand Order",
    subject: "Adjudication Order in the case of M/s [Name], GSTIN [X] — SCN No. [DIN] dated [Date]",
    opening: "**Submitted:-**\nSCN No. [DIN] dated [Date] was issued to M/s [Name] (GSTIN: [XXXX]) under Section [73/74/74A] of CGST Act. The noticee has [filed a reply on [Date] / not filed any reply within the stipulated time].\nA personal hearing was granted on [Date] and the noticee [appeared / did not appear].\nSummary of Adjudication:\nTax demand confirmed    : Rs. [X]/-\nInterest confirmed      : Rs. [X]/-\nPenalty confirmed       : Rs. [X]/-\nTotal                  : Rs. [X]/-\nGrounds for confirmation: [briefly state]",
    closing: "**The draft adjudication order (Form GST DRC-07) is placed opposite. Approval to pass the order may kindly be granted, please.**"
  },
  {
    id: "gst_6",
    category: "GST",
    name: "Note Sheet before issuing GST ADT-01 Audit Notice",
    subject: "Proposed audit of M/s [Name], GSTIN [X] under Section 65 of CGST Act, 2017",
    opening: "**Submitted:-**\n**For kind perusal and orders, please:-**\nIt is submitted that M/s [Name] (GSTIN: [XXXX]) has been selected for audit for the period [FY XXXX-XX] on the following basis:\n[Risk parameter: e.g., mismatch between GSTR-1 and GSTR-3B / high ITC claims / low tax-to-turnover ratio / SCN history]\n\nProposed Audit Details:\nPeriod of Audit     : [FY XXXX-XX or XXXX-XX to XXXX-XX]\nPlace of Audit     : Premises of M/s [Name] / Office of [CGST Division]\nDate proposed      : [Date — at least 15 working days from date of notice as per Rule 101]\nAudit team         : [Names/Designations of officers]",
    closing: "**Issue of audit notice in Form GST ADT-01 may kindly be approved, please.**"
  },
  {
    id: "gst_7",
    category: "GST",
    name: "Note Sheet for Audit Findings — Post ADT-02",
    subject: "Audit Findings in the case of M/s [Name], GSTIN [X] — Audit for the period [FY XXXX-XX]",
    opening: "**Submitted:-**\nThe audit of M/s [Name] (GSTIN: [XXXX]) for the period [FY XXXX-XX] was conducted from [Date] to [Date]. The audit has been completed and the findings are summarised as under:\n\nPara 1: Short payment of GST on [supply type]\n        Demand: Rs. [X]/-\nPara 2: Excess ITC availed on [ineligible items]\n        Demand: Rs. [X]/-\nPara 3: Non-payment of RCM on [service]\n        Demand: Rs. [X]/-\n\nTotal proposed tax demand: Rs. [X]/-\nInterest (approx.)        : Rs. [X]/-\nProposed penalty          : Rs. [X]/-\n\nThe noticee was intimated about the findings. Their response/explanation is [awaited / received as on [Date]]. The explanation [is acceptable / is not acceptable] for the following reasons: [briefly state].",
    closing: "**Issue of Form GST ADT-02 and forwarding findings to the Divisional/Range office for initiating SCN proceedings may kindly be approved, please.**"
  },
  {
    id: "gst_8",
    category: "GST",
    name: "Para-wise Reply to GST Audit Objections",
    subject: "Para-wise Reply to Audit Findings communicated vide Form GST ADT-02 No. [X] dated [Date] — M/s [Name]",
    opening: "M/s [Name] (GSTIN: [XXXX]) submits this para-wise reply to the audit findings communicated in Form GST ADT-02 No. [X] dated [Date] in respect of audit for the period [FY XXXX-XX]:\n\nREPLY TO PARA 1: [State para heading]\nAudit Observation: [Reproduce the para briefly]\nOur Reply        : The observation is [accepted / not acceptable] for the following reasons:\n[Detailed factual and legal reply with documents]\n\nREPLY TO PARA 2: [State para heading]\nAudit Observation: [Reproduce the para briefly]\nOur Reply        : [Detailed reply]",
    closing: "We submit that the observations are either factually incorrect or legally untenable as explained above. The audit paras may kindly be dropped/settled. We are ready to provide any further documents or clarifications as required."
  },
  {
    id: "gst_9",
    category: "GST",
    name: "Note Sheet recommending Special Audit u/s 66",
    subject: "Recommendation for Special Audit of M/s [Name], GSTIN [X] under Section 66 of CGST Act",
    opening: "**Submitted:-**\nDuring audit/investigation of M/s [Name] (GSTIN: [X]) the accounts/records/transactions are found to be complex and the nature of the issues involved are of a technical character requiring special expertise. It is accordingly proposed to recommend a Special Audit under Section 66 of the CGST Act, 2017 to be conducted by a Chartered Accountant / Cost Accountant nominated by the Commissioner.\nNature of complexity: [explain briefly]\nEstimated additional demand: Rs. [X]/-",
    closing: "**Approval for recommending Special Audit under Section 66 may kindly be granted, please.**"
  },
  {
    id: "gst_10",
    category: "GST",
    name: "Note Sheet for Search and Seizure u/s 67",
    subject: "Proposed Search/Inspection at premises of M/s [Name] under Section 67 of CGST Act, 2017",
    opening: "**Submitted:-**\nIntelligence has been gathered/available on record that M/s [Name] (GSTIN: [XXXX] / Unregistered), located at [Address], has [suppressed transactions / availed excess ITC / is in possession of unaccounted goods]. The reasons to believe are as follows:\n[State specific intelligence/reasons — must be recorded in writing, not below rank of Joint Commissioner]\nProposed Action:\nType         : Inspection / Search and Seizure\nDate/Time   : [Date and Time]\nSearch Team  : [Names of authorized officers]",
    closing: "**Issue of authorisation in Form GST INS-01 for inspection/search of the premises may kindly be approved, please.**"
  },
  {
    id: "gst_11",
    category: "GST",
    name: "Note Sheet for issuing Summons u/s 70 CGST Act",
    subject: "Proposed issuance of Summons to Shri/Smt./M/s [Name] under Section 70 of CGST Act, 2017",
    opening: "**Submitted:-**\nDuring the course of investigation/proceedings in respect of M/s [Name] (GSTIN: [XXXX]), statements of / documents from the following person(s) are required for the purpose of enquiry:\nName of person to be summoned: [Name]\nDesignation/Status          : [Director/Partner/ Employee/Third Party]\nDocuments/Information required: [specify]\nReason for summoning         : [state briefly]\n\nNote: DIN (Document Identification Number) shall be generated on the CBIC-DIN portal and quoted on the summons as mandatory (CBIC Circular 122/41/2019-GST).",
    closing: "**Issue of summons in the prescribed format with DIN may kindly be approved, please.**"
  },
  {
    id: "gst_12",
    category: "GST",
    name: "Reply / Response to GST Summons",
    subject: "Response to Summons No. [DIN: XXXX] dated [Date] issued under Section 70 of CGST Act, 2017",
    opening: "This is in response to the summons bearing DIN [XXXX] dated [Date] issued to undersigned / our company M/s [Name] by [Officer Name], [Designation], CGST [Division/Commissionerate].\nWe/I shall [appear before your goodself on [Date/Time] at [Office Address] as directed / submit the following documents/statement as requested]:\nDocuments enclosed / to be submitted:\n1. [Document 1]\n2. [Document 2]",
    closing: "We/I assure full cooperation in the investigation proceedings and shall furnish any further documents or information as may be required by the department."
  },
  {
    id: "gst_13",
    category: "GST",
    name: "Reply to Refund Rejection Notice — Form RFD-09",
    subject: "Reply to Form RFD-08 (Notice for Rejection of Refund) ARN: [XXXX] — Application dated [Date]",
    opening: "This reply is filed under Rule 92(3) of the CGST Rules in response to the notice in Form GST RFD-08 dated [Date] proposing to reject the refund application (ARN: [XXXX]) of Rs. [X]/- filed under Section 54(3)/ 54(8) of the CGST Act, 2017, on the following stated grounds:\n\nGround stated in RFD-08: '[Reproduce the objection]'\n\nOur Reply:\nThe objection raised is not sustainable because:\n1. [Ground 1 — factual/legal reply]\n2. [Ground 2 — with supporting documents/evidence]\nThe application is in full compliance with Section 54 and Rule [89/90] of the CGST Rules.",
    closing: "In view of the foregoing, the refund of Rs. [X]/- may kindly be sanctioned in full within the prescribed time, failing which interest under Section 56 shall become payable. Relevant documents are attached."
  },
  {
    id: "gst_14",
    category: "GST",
    name: "Note Sheet for sanctioning GST Refund — for Officer",
    subject: "Sanction/Rejection of Refund claim of M/s [Name], GSTIN [X] — ARN [XXXX]",
    opening: "**Submitted:-**\nM/s [Name] (GSTIN: [XXXX]) has filed a refund application (ARN: [XXXX]) dated [Date] for Rs. [X]/- under Section 54([3/8]) of the CGST Act on account of [Export / ITC accumulation / any other ground].\nThe application has been examined. Documents verified:\n[List key documents checked]\nFindings:\nAmount claimed          : Rs. [X]/-\nAmount admissible      : Rs. [X]/-\nDiscrepancy (if any)   : Rs. [X]/- (reason: [X])\nRecommendation         : Sanction / Partial Sanction / Notice for rejection",
    closing: "**Sanction of refund of Rs. [X]/- in Form GST RFD-06 may kindly be approved, please.**"
  },
  {
    id: "gst_15",
    category: "GST",
    name: "Reply to Show Cause Notice for Cancellation of GST Registration",
    subject: "Reply to SCN No. [X] dated [Date] proposing cancellation of GST Registration — GSTIN: [XXXX]",
    opening: "This reply is filed in response to the Show Cause Notice dated [Date] proposing to cancel the GST Registration (GSTIN: [XXXX]) of [M/s Name / applicant] on the ground(s) of:\n[State ground(s) mentioned in notice: e.g., non-filing of returns / non-commencement of business / fraud in obtaining registration]\n\nWe submit that the registration ought not to be cancelled for the following reasons:\n1. [Reason 1 with documentary proof]\n2. [Reason 2]",
    closing: "In view of the above, the proposed cancellation of registration may kindly be dropped. All pending returns shall be filed immediately and compliance will be maintained henceforth."
  },
  {
    id: "gst_16",
    category: "GST",
    name: "Note Sheet for cancellation of GST Registration",
    subject: "Proposed Cancellation of GST Registration — GSTIN [X] M/s [Name] — Section 29(2), CGST Act",
    opening: "**Submitted:-**\nThe GST Registration of M/s [Name] (GSTIN: [XXXX]) is proposed to be cancelled under Section 29(2) of the CGST Act, 2017 for the following reasons:\n1. Returns not filed for [X] consecutive months\n2. Business apparently discontinued / non-existent\n3. [Other grounds]\nSCN in Form REG-17 was issued on [Date]. Reply [was received on [Date] and is not satisfactory / was not received within the stipulated period].",
    closing: "**Cancellation of GSTIN [XXXX] in Form REG-19 may kindly be approved, please.**"
  },
  {
    id: "gst_17",
    category: "GST",
    name: "Appeal to Commissioner (Appeals) u/s 107 CGST Act",
    subject: "Appeal against Adjudication Order No. [DIN/Order No.] dated [Date] passed by [Officer Name], [Designation] — GSTIN: [XXXX] — [M/s Name]",
    opening: "This appeal is filed under Section 107 of the Central Goods and Services Tax Act, 2017 against the Order-in-Original No. [DIN] dated [Date] passed by [Name], [Designation], confirming a demand of Rs. [X]/- (Tax: Rs. [X]/- + Interest: Rs. [X]/- + Penalty: Rs. [X]/-) in respect of GSTIN [XXXX] for the period [FY XXXX-XX].\n\nGROUNDS OF APPEAL:\nGround 1: The order is bad in law / unsustainable.\n[Detailed legal/factual argument]\nGround 2: Natural justice violated.\n[If personal hearing not granted properly]\nGround 3: [Other grounds — case law, circulars, etc.]",
    closing: "The appellant therefore prays that:\n(a) The impugned order may be set aside in its entirety;\n(b) No demand, interest or penalty may be confirmed;\n(c) An early date of hearing may be fixed.\nPre-deposit of 10% of the disputed amount (Rs. [X]/-) has been made vide Challan No. [X] dated [Date] [as mandated under Section 107(6)]."
  },
  {
    id: "gst_18",
    category: "GST",
    name: "Note Sheet for filing appeal before GST Appellate Tribunal",
    subject: "Proposed filing of appeal before GSTAT against Order-in-Appeal No. [X] dated [Date]",
    opening: "**Submitted:-**\nOrder-in-Appeal No. [X] dated [Date] passed by Commissioner (Appeals), [Zone], has confirmed demand of Rs. [X]/- against this office / the assessee M/s [Name]. The matter involves [legal question / substantial question of law]. It is proposed to file an appeal before the GST Appellate Tribunal (GSTAT) under Section 112 of the CGST Act.\nTime limit: Within 3 months of communication of order.",
    closing: "**Filing of appeal before GSTAT may kindly be approved, please.**"
  },
  {
    id: "gst_19",
    category: "GST",
    name: "Departmental Appeal Note Sheet u/s 107(2) by Revenue",
    subject: "Proposed filing of departmental appeal against Order-in-Original No. [X] dated [Date] (Revenue unfavorable)",
    opening: "**Submitted:-**\nOrder-in-Original No. [X] dated [Date] passed by [Officer Name], [Designation], has dropped the demand of Rs. [X]/- in the case of M/s [Name] (GSTIN: [XXXX]). The order is incorrect and the demand is sustainable for the following reasons:\n[State legal/factual grounds]\nIt is proposed to file a departmental appeal against the said order under Section 107(2) of the CGST Act.",
    closing: "**Approval to file departmental appeal may kindly be granted, please.**"
  },
  {
    id: "gst_20",
    category: "GST",
    name: "Reply to Scrutiny Notice u/s 61",
    subject: "Reply to Notice in Form GST ASMT-10 dated [Date] for scrutiny of returns — GSTIN: [XXXX]",
    opening: "This reply is filed in Form GST ASMT-11 in response to Form ASMT-10 dated [Date] for the period [XXXX] raising discrepancies in our GSTR-3B as compared to GSTR-1/GSTR-2A/GSTR-2B.\n\nDiscrepancy as per Notice: Rs. [X]/-\nOur Explanation:\n[Para 1 discrepancy]: [Explanation with figures]\n[Para 2 discrepancy]: [Explanation]",
    closing: "In view of the above, the discrepancies are fully explained and no further demand is sustainable. The ASMT-12 may kindly be issued accepting this reply."
  },
  {
    id: "gst_21",
    category: "GST",
    name: "Internal Monthly Revenue Collection Note",
    subject: "Monthly GST Revenue Collection Report — [Division/Range Name] — [Month, Year]",
    opening: "**Submitted:-**\nThe monthly GST revenue collection report for the month of [Month, Year] in respect of [Division/Range] is placed for kind perusal:\nCGST Collection          : Rs. [X] Cr.\nIGST Collection          : Rs. [X] Cr.\nCess Collection          : Rs. [X] Cr.\nTotal (Current Month)   : Rs. [X] Cr.\nTarget (Current Month)  : Rs. [X] Cr.\nAchievement             : [X]%\nGrowth over last year   : [+/-X]%",
    closing: "**The report is placed for kind perusal and onward submission to the Commissionerate, please.**"
  },
  {
    id: "gst_22",
    category: "GST",
    name: "Note for issuing notice to non-filers",
    subject: "Proposed action against non-filers of GST returns — [Division/Range] — [Month/Quarter]",
    opening: "**Submitted:-**\nThe following registered taxpayers in [Division/Range] have not filed [GSTR-1/GSTR-3B] for [X] consecutive months/quarters as of [Date]:\n[Table: GSTIN | Trade Name | No. of returns pending | Turnover last filed | Last filing date]\nTotal Defaulters: [X]\nIt is proposed to issue notices under Section 46 of the CGST Act, 2017 to all such defaulters.",
    closing: "**Approval to issue notices to the above defaulters and initiate recovery proceedings under Section 79 where applicable may kindly be granted, please.**"
  },
  {
    id: "gst_23",
    category: "GST",
    name: "Note Sheet on ITC mismatch — internal investigation",
    subject: "ITC Mismatch investigation — M/s [Name], GSTIN [X]",
    opening: "**Submitted:-**\nOn examination of the GSTR-2B and GSTR-3B of M/s [Name] (GSTIN: [XXXX]) for the period [FY XXXX-XX], the following mismatch has been observed:\nITC as per GSTR-2B    : Rs. [X]/-\nITC claimed in GSTR-3B: Rs. [X]/-\nExcess ITC claimed    : Rs. [X]/-\nThis may indicate availment of ITC from fake/ cancelled suppliers or availment in excess of entitlement under Section 16 of the CGST Act.",
    closing: "**Further examination and initiation of SCN proceedings under Section 73/74 may kindly be approved, please.**"
  },
  {
    id: "gst_24",
    category: "GST",
    name: "Note for recording detection of GST evasion",
    subject: "Detection of GST evasion — M/s [Name], GSTIN [X] — [Brief description of case]",
    opening: "**Submitted:-**\nIntelligence / enquiry has revealed that M/s [Name] (GSTIN: [XXXX] / Unregistered), engaged in [nature of trade] at [address], has been evading GST by [mode of evasion: e.g., suppression of turnover / issuance of fake invoices / undervaluation / non-payment of tax on advance received].\nQuantum of evasion (estimated): Rs. [X]/-\nPeriod involved             : [Dates]\nDocuments / evidence available: [list briefly]",
    closing: "**Initiating search and seizure / investigation proceedings may kindly be approved, please.**"
  },
  {
    id: "gst_25",
    category: "GST",
    name: "Note Sheet for compounding of GST offence u/s 138",
    subject: "Application for Compounding of Offence — M/s [Name], GSTIN [X]",
    opening: "**Submitted:-**\nM/s [Name] (GSTIN: [XXXX]) has submitted an application for compounding of the offence under Section 138 of the CGST Act, 2017 in connection with [nature of offence — false/fabricated accounts / evasion of tax, etc.]. The amount involved is Rs. [X]/-. The compounding amount as prescribed under the rules works out to Rs. [X]/-.\nThe applicant has agreed to pay the compounding amount and cooperate in the investigation.",
    closing: "**Acceptance of compounding application and issuance of compounding order may kindly be approved, please.**"
  },
  {
    id: "gst_26",
    category: "GST",
    name: "Note Sheet proposing Arrest u/s 69 CGST Act",
    subject: "Proposed Arrest of Shri/M/s [Name] under Section 69 of the CGST Act, 2017",
    opening: "**Submitted:-**\nInvestigation in the case of M/s [Name] / Shri [Name] has established that the person is involved in [issuance of fake invoices / evasion of tax exceeding Rs. 2 crores / fraudulent ITC availment], which constitutes a cognizable and non-bailable offence under Section 132([a/b/c/d/e/f/g]) of the CGST Act.\nThe evaded amount is Rs. [X]/- (cognizable threshold is Rs. 2 Cr. and above).\nCommissioner's approval is required for arrest under Section 69(1).",
    closing: "**Approval of the Commissioner for arrest under Section 69(1) may kindly be accorded, please.**"
  },
  {
    id: "gst_27",
    category: "GST",
    name: "Note for issuing Trade Notice / Internal Circular",
    subject: "Proposed issuance of Trade Notice / Internal Circular on [Subject]",
    opening: "**Submitted:-**\nA Trade Notice / Internal Circular on [subject] is proposed to be issued to bring to the attention of [taxpayers / field officers] the following:\n[Brief summary of the instruction/clarification]\nReference: CBIC Circular No. [X] / Notification No. [X] / Board Instruction No. [X] dated [Date].",
    closing: "**Approval to issue the Trade Notice / Circular as per draft placed opposite may kindly be accorded, please.**"
  },
  {
    id: "gst_28",
    category: "GST",
    name: "Note Sheet for recovery proceedings u/s 79 CGST Act",
    subject: "Initiation of recovery proceedings against M/s [Name], GSTIN [X] — Outstanding dues of Rs. [X]/-",
    opening: "**Submitted:-**\nDemand order in Form GST DRC-07 was issued to M/s [Name] (GSTIN: [XXXX]) confirming dues of Rs. [X]/- (Tax: Rs. [X]/- + Interest: Rs. [X]/- + Penalty: Rs. [X]/-). The demand has not been paid within the prescribed time. No stay/appeal has been filed.\nRecovery under Section 79 is proposed through:\n[  ] Attachment of bank account under Rule 159\n[  ] Recovery from debtors under Section 79(1)(c)\n[  ] Certificate proceedings under Section 90",
    closing: "**Initiating recovery proceedings under Section 79 may kindly be approved, please.**"
  },
  {
    id: "gst_29",
    category: "GST",
    name: "Note Sheet for monthly premises inspection",
    subject: "Report on inspection/visit to premises of M/s [Name], GSTIN [X], on [Date]",
    opening: "**Submitted:-**\nInspection / field visit to the business premises of M/s [Name] (GSTIN: [XXXX]) at [Address] was conducted on [Date] at [Time] by [Officers' names].\nObservations:\n1. Business found [operational / not operational]\n2. Stock/Goods found: [Yes/No — brief description]\n3. Books of accounts: [maintained properly / not maintained]\n4. Discrepancies noticed: [if any]\n5. Overall compliance status: [Satisfactory / Not Satisfactory]",
    closing: "**Report is submitted for information and any further action as deemed appropriate, please.**"
  },
  {
    id: "gst_30",
    category: "GST",
    name: "Internal Note — Case referred to AAAR/AAR",
    subject: "Application / Reference related to Advance Ruling in the case of M/s [Name], GSTIN [X]",
    opening: "**Submitted:-**\nM/s [Name] (GSTIN: [XXXX]) has applied for an Advance Ruling before the Authority for Advance Ruling (AAR) on the following question(s) of law:\n[State the question(s) precisely]\nImplications: The ruling will impact tax liability of Rs. [X]/- per annum approximately.\nThe case is / will be listed before AAR on [Date].",
    closing: "**The matter is placed for information and preparation of departmental representation before AAR, please.**"
  },
  {
    id: "gst_31",
    category: "GST",
    name: "Note for Zonal Review Meeting — [Month, Year]",
    subject: "Note for Zonal Review Meeting — [Month, Year]",
    opening: "**Submitted:-**\nThe Zonal Review Meeting for the month of [Month, Year] is proposed to be held on [Date] at [Venue] under the chairmanship of [Pr. Chief Commissioner / Chief Commissioner]. The agenda items proposed are:\n1. Revenue collection vs. target\n2. Audit paras and their disposal\n3. Appeal disposals\n4. Anti-evasion detections\n5. Litigation status\n6. Any other item with permission",
    closing: "**Approval for holding the zonal review meeting as proposed may kindly be accorded, please.**"
  },
  {
    id: "gst_32",
    category: "GST",
    name: "Forwarding of CBIC Circular/Notification",
    subject: "Forwarding of CBIC Circular/Notification No. [X] dated [Date] regarding [subject]",
    opening: "The CBIC Circular/Notification/Instruction No. [X] dated [Date] on the subject of [brief subject] is forwarded herewith for strict compliance by all concerned officers. The salient points of the circular are as follows:\n1. [Point 1]\n2. [Point 2]",
    closing: "It is requested that the contents of the above circular may be brought to the notice of all officers under your charge for strict compliance."
  },
  {
    id: "gst_33",
    category: "GST",
    name: "Disposal of grievance filed by Taxpayer",
    subject: "Disposal of grievance filed by M/s [Name] / Shri [Name] on [CPGRAMS / Portal / Direct Application]",
    opening: "**Submitted:-**\nA grievance has been received from M/s [Name] / Shri [Name] dated [Date] (Grievance ID: [X]) regarding [nature of grievance: e.g., incorrect demand / refund not processed / registration issue].\nThe matter has been examined. The facts are as follows:\n[State facts]\nProposed action: [Accept / Reject grievance with reasons]",
    closing: "**Disposal of the grievance as proposed may kindly be approved, please.**"
  },
  {
    id: "gst_34",
    category: "GST",
    name: "Report on GST Departmental Training",
    subject: "Report on GST Departmental Training / Workshop held at [Venue] on [Date]",
    opening: "**Submitted:-**\nA training programme / workshop on [GST law / Anti-evasion / Audit procedure] was held at [Venue] on [Date]. The following officers attended:\n[List of participants with designations]\nTopics covered: [List of topics]\nKey takeaways: [Briefly list]",
    closing: "**The report is placed for information and record, please.**"
  },
  {
    id: "gst_35",
    category: "GST",
    name: "Assignment / Re-assignment of Jurisdiction of taxpayers",
    subject: "Assignment / Re-assignment of Jurisdiction of taxpayers — [Division/Range] — [Reason]",
    opening: "**Submitted:-**\nIn view of [transfer of officer / creation of new range / reorganisation], the following taxpayers (GSTINs) are proposed to be re-assigned from [Range/Division A] to [Range/Division B]:\n[Table: GSTIN | Trade Name | Current Jurisdiction | Proposed]",
    closing: "**Re-assignment of jurisdiction as proposed may kindly be approved, please.**"
  },
  {
    id: "gst_36",
    category: "GST",
    name: "Compliance Report under QRMP Scheme",
    subject: "Compliance Report under QRMP Scheme — [Quarter ending Month, Year] — [Division/Range]",
    opening: "**Submitted:-**\nThe compliance report under the QRMP (Quarterly Return Monthly Payment) scheme for the quarter ending [Month, Year] in [Division/Range] is placed for information:\nTotal QRMP taxpayers      : [X]\nFiled QRMP (IFF + GSTR-3B): [X] ([X]%)\nDefaulters                : [X] ([X]%)\nTotal IFF PMT-06 payments  : Rs. [X] Cr.",
    closing: "**Appropriate action against QRMP defaulters may kindly be approved, please.**"
  }
];
