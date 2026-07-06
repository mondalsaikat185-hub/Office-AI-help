import { Template } from '../../types';

export const customsTemplatesPart1: Template[] = [
  {
    id: "cus_1",
    category: "Customs",
    name: "Reply to Customs Demand Notice u/s 28",
    subject: "Reply to Show Cause Notice No. [X] dated [Date] issued under Section 28 of the Customs Act, 1962, Bill of Entry/Shipping Bill No. [X] dated [Date]",
    opening: "This reply is filed in response to the SCN No. [X] dated [Date] issued by [Officer Name], [Designation], proposing to demand Rs. [X]/- as customs duty (including BCD/IGST/Cess) allegedly short-levied/ not-levied in respect of:\nImporter/Exporter: M/s [Name]\nIEC Code          : [XXXX]\nPort of Import/Export: [Port Name]\nBill of Entry No. : [X] dated [Date]\nGoods Description : [Description]\n\nGROUNDS OF REPLY:\n1. Classification: The goods are correctly classifiable under CTH [XXXX] — [Reason for classification]\n2. Valuation: The transaction value is correct as per Rule 3 of the Customs Valuation Rules, 2007 — [Reason]\n3. Exemption: The goods are exempt under Notification No. [X] dated [Date] — [Reason]",
    closing: "In view of the above submissions, the SCN may kindly be dropped. A personal hearing is requested before passing the adjudication order."
  },
  {
    id: "cus_2",
    category: "Customs",
    name: "Reply to SCN u/s 124 for seized goods",
    subject: "Reply to SCN No. [X] dated [Date] proposing confiscation of goods and imposition of penalty — Seized Goods [Description], Seizure Memo No. [X] dated [Date]",
    opening: "This reply is filed under Section 124 of the Customs Act, 1962 in respect of the seizure of [goods description] vide Panchnama/Seizure Memo No. [X] dated [Date] at [Location].\nWithout prejudice, the following submissions are made:\n1. The goods are not liable to confiscation because [state grounds — e.g., goods are covered by valid documents / origin is genuine / misdeclaration was unintentional / value is as declared]\n2. The penalty under Section 112 / 114 is not sustainable because [reasons]",
    closing: "It is prayed that the seized goods may kindly be released on bond/fine-in-lieu, confiscation may be dropped, and no penalty may be imposed. An early personal hearing is requested."
  },
  {
    id: "cus_3",
    category: "Customs",
    name: "Note Sheet for passing Customs Adjudication Order",
    subject: "Passing of Order-in-Original in the case of M/s [Name] / Shri [Name] — SCN No. [X] dated [Date]",
    opening: "**Submitted:-**\nSCN No. [X] dated [Date] was issued to [M/s Name / Shri Name] proposing demand of duty of Rs. [X]/- and/or confiscation of goods worth Rs. [X]/- and/or penalty under Section 112/114/114A.\nReply was received on [Date] / Reply not received.\nPersonal hearing granted on [Date] — attended / not attended. After considering the reply and submissions, the proposed adjudication is:\nDuty demand confirmed    : Rs. [X]/-\nFine-in-lieu of confiscation: Rs. [X]/-\nPenalty under Sec [X]   : Rs. [X]/-",
    closing: "**Order-in-Original may kindly be approved/signed, please.**"
  },
  {
    id: "cus_4",
    category: "Customs",
    name: "Appeal to Commissioner (Appeals) u/s 128 — Form CA-1",
    subject: "Appeal against Order-in-Original No. [X] dated [Date] passed by [Officer], [Designation] — [M/s Name / Shri Name] — IEC: [XXXX]",
    opening: "APPEAL UNDER SECTION 128 OF THE CUSTOMS ACT, 1962 [IN FORM NO. CA-1]\n\nThis appeal is filed under Section 128(1) of the Customs Act, 1962 against Order-in-Original No. [X] dated [Date] passed by [Name], [Designation].\n\nPARTICULARS OF APPELLANT:\nName    : M/s [Name] / Shri [Name]\nAddress : [Full Address]\nIEC Code: [XXXX]\nGSTIN   : [XXXX]\n\nPARTICULARS OF ORDER APPEALED AGAINST:\nOrder No. : [X]       Date: [Date]\nPassed by : [Name, Designation, Office]\nSubject   : [Brief subject]\n\nDUTY / PENALTY INVOLVED:\nDuty    : Rs. [X]/-\nPenalty : Rs. [X]/-\nTotal   : Rs. [X]/-\n\nGROUNDS OF APPEAL:\nGround 1: The order is factually incorrect.\n[Detailed factual submissions]\nGround 2: Misclassification / Wrong valuation.\n[Legal/technical arguments]\nGround 3: Violation of natural justice.\n[If applicable]\nGround 4: Limitation / Time bar.\n[If demand is time-barred]",
    closing: "The appellant prays that:\n(a) The impugned Order-in-Original may be set aside;\n(b) No duty, fine or penalty may be confirmed;\n(c) Seized goods, if any, may be released.\nThis appeal is filed within the prescribed time of 60 days from the date of communication of the order.\n[If delayed: Condonation of delay is prayed as the delay was caused by [reasons]]."
  },
  {
    id: "cus_5",
    category: "Customs",
    name: "Appeal to CESTAT — Form CA-3",
    subject: "Appeal against Order-in-Appeal No. [X] dated [Date] passed by Commissioner (Appeals) — Before CESTAT",
    opening: "MEMORANDUM OF APPEAL — FORM CA-3\n\nTO,\nTHE REGISTRAR,\nCUSTOMS, EXCISE AND SERVICE TAX APPELLATE TRIBUNAL\n[Bench: Delhi / Mumbai / Chennai / Kolkata etc.]\n\nAPPEAL under Section 129A / 129D of the Customs Act, 1962 against Order-in-Appeal No. [X] dated [Date] passed by the Commissioner (Appeals), [City].\n\nAppellant    : M/s [Name], [Address]\nIEC          : [XXXX]\nRespondent  : Commissioner of Customs, [Port]\n\nORDER APPEALED AGAINST:\nOrder-in-Appeal No.: [X]\nDate              : [Date]\nCommissioner (A)  : [Name, Office]\nDemand confirmed  : Rs. [X]/-\n\nGROUNDS OF APPEAL:\n1. The learned Commissioner (Appeals) erred in [X].\n   [Detailed legal submissions, case law, circulars]\n2. The issue of classification is covered in favour of the appellant by the Hon'ble Tribunal's decision in [Case Name, Year] — [cite ratio]\n3. Valuation: [Arguments on valuation if applicable]\n4. [Any other ground]\n\nSTATEMENT OF FACTS:\n[Detailed chronological facts of the case]",
    closing: "The appellant prays that:\n(a) The impugned Order-in-Appeal may be set aside;\n(b) The demand/penalty may be dropped;\n(c) Seized goods may be ordered to be released.\nPre-deposit of 7.5% of the disputed amount (Rs. [X]/-) has been made vide Challan No. [X] dated [Date] as required under Section 129E of the Customs Act.\n\nPlace: [City]\nDate : [Date]\nSignature of Appellant / Authorised Representative"
  },
  {
    id: "cus_6",
    category: "Customs",
    name: "Note for filing Revenue appeal against favorable order",
    subject: "Proposed filing of Departmental Appeal against Order-in-Appeal No. [X] dated [Date]",
    opening: "**Submitted:-**\nOrder-in-Appeal No. [X] dated [Date] has set aside / partially set aside the duty demand of Rs. [X]/- originally confirmed in O-I-O No. [X] dated [Date]. The order-in-appeal is revenue-unfavorable. The grounds for filing departmental appeal are:\n[State legal/factual errors in OIA]\nCommittee of Commissioners (Review Committee) has reviewed the matter and recommends filing appeal.",
    closing: "**Approval to file departmental appeal before CESTAT may kindly be accorded, please.**"
  },
  {
    id: "cus_7",
    category: "Customs",
    name: "Official para-wise reply to CAG/Internal Audit objection",
    subject: "Para-wise reply to Audit Report / Audit Objection No. [X] raised by [AG/CAG/Internal Audit] regarding [Subject]",
    opening: "With reference to the audit para/objection No. [X] issued by the office of the [Accountant General / Director General of Audit (Customs and Indirect Taxes)] regarding [subject], the following para-wise reply is submitted:\n\nAUDIT PARA [X]: [Heading of para]\nAudit Observation: '[Reproduce briefly]'\nAmount of Audit Objection: Rs. [X]/-\nPeriod: [FY XXXX-XX]\n\nREPLY:\n1. The audit observation is factually/legally incorrect because: [State reasons — include rule citations, notifications, Board circulars, tribunal decisions]\n2. The classification/valuation/exemption adopted is correct as per [cite rule / notification / order].",
    closing: "In view of the above, it is respectfully submitted that the audit objection is not maintainable and may kindly be dropped. Documents in support are enclosed."
  },
  {
    id: "cus_8",
    category: "Customs",
    name: "Internal Note Sheet on Customs Audit Para",
    subject: "Internal noting on Customs Audit Para No. [X] — [Subject]",
    opening: "**Submitted:-**\nCustoms Audit Para No. [X] has been raised by [CAG / Internal Audit] for the period [FY XXXX-XX] pointing out [nature of objection: e.g., incorrect classification / non-recovery of short-levied duty / wrong exemption availed].\nAmount involved   : Rs. [X]/-\nBills of Entry    : [X] nos.\nOur examination   : [State our view — whether objection is acceptable or not, with reasons]\nProposed action   : [Accept and issue SCN / Drop with reply]",
    closing: "**Appropriate action as proposed may kindly be approved, please.**"
  },
  {
    id: "cus_9",
    category: "Customs",
    name: "Note for Post-Clearance Audit — PCA",
    subject: "Post-Clearance Audit (PCA) of M/s [Name], IEC [X] for the period [FY XXXX-XX]",
    opening: "**Submitted:-**\nPost-Clearance Audit of M/s [Name] (IEC: [XXXX]), an importer/exporter at [Port], has been conducted for the period [FY XXXX-XX] by [Officers' names].\nThe PCA revealed the following discrepancies:\n1. [Para 1: Nature of discrepancy and amount]\n2. [Para 2: Nature of discrepancy and amount]\nTotal proposed demand: Rs. [X]/- (customs duty)\nThe importer/exporter has been intimated about the findings.",
    closing: "**Issue of SCN/DRI reference based on PCA findings may kindly be approved, please.**"
  },
  {
    id: "cus_10",
    category: "Customs",
    name: "Note for Release of Customs Bond / Bank Guarantee",
    subject: "Release of Bond / Bank Guarantee furnished by M/s [Name] in connection with [provisional assessment / duty exemption]",
    opening: "**Submitted:-**\nM/s [Name] (IEC: [XXXX]) had furnished a Bond of Rs. [X]/- and/or Bank Guarantee of Rs. [X]/- in connection with [provisional assessment / EPCG / Advance Authorisation / Customs duty exemption] under [relevant notification/provision].\nThe conditions of the bond/BG have been fulfilled:\n[State reasons: export obligation fulfilled / duty paid / final assessment done]\nThe bond/BG is due for release.",
    closing: "**Release of Bond/Bank Guarantee of M/s [Name] as detailed above may kindly be approved, please.**"
  },
  {
    id: "cus_11",
    category: "Customs",
    name: "Note for Finalization of Provisional Assessment",
    subject: "Finalization of Provisional Assessment — B/E No. [X] dated [Date] — M/s [Name]",
    opening: "**Submitted:-**\nBill of Entry No. [X] dated [Date] of M/s [Name] (IEC: [XXXX]) was provisionally assessed under Section 18 of the Customs Act, 1962 due to [reason: e.g., pending test report / valuation pending / classification dispute].\nThe provisional assessment is now due for finalization as [test report received / valuation resolved].\nFinal Duty Payable    : Rs. [X]/-\nProvisionally Paid    : Rs. [X]/-\nDifferential duty     : Rs. [X]/- [payable/refundable]",
    closing: "**Finalization of provisional assessment and issuance of demand/refund order may kindly be approved, please.**"
  },
  {
    id: "cus_12",
    category: "Customs",
    name: "Note for processing Customs Refund Claim",
    subject: "Refund claim of M/s [Name] — Customs Duty of Rs. [X]/- paid on B/E No. [X] dated [Date]",
    opening: "**Submitted:-**\nM/s [Name] (IEC: [XXXX]) has filed a refund claim under Section 27 of the Customs Act, 1962 for Rs. [X]/- paid as customs duty on B/E No. [X] dated [Date] on grounds of [over-valuation / wrong classification / duty paid in excess / re-export / finalization of provisional assessment].\nLimitation: Claim filed within 1 year — Yes / No.\nUnjust enrichment: [Applicable / Not applicable — reason]",
    closing: "**Sanction / Rejection of refund claim as proposed may kindly be approved, please.**"
  },
  {
    id: "cus_13",
    category: "Customs",
    name: "Note for referring case to DRI / forwarding intelligence",
    subject: "Reference to DRI / Forwarding intelligence regarding M/s [Name] / [Case description]",
    opening: "**Submitted:-**\nIntelligence has been received/developed indicating large-scale evasion of customs duty / smuggling / violation of FTDR Act by M/s [Name] (IEC: [XXXX]) in relation to [imports/exports of goods description].\nThe matter requires specialized investigation by the Directorate of Revenue Intelligence (DRI).\nKey intelligence points: [briefly state]\nEstimated evasion: Rs. [X]/-",
    closing: "**Reference to DRI, [City Regional Unit] along with relevant intelligence inputs may kindly be approved, please.**"
  },
  {
    id: "cus_14",
    category: "Customs",
    name: "Note for examination of imported goods",
    subject: "Note for examination of imported goods — B/E No. [X] M/s [Name] — [Description of goods]",
    opening: "**Submitted:-**\nBill of Entry No. [X] dated [Date] filed by M/s [Name] (IEC: [XXXX]) for import of [goods description] valued at Rs. [X]/- (CIF) has been assessed under CTH [XXXX] at a duty of Rs. [X]/-.\nThe goods are proposed for [First check examination / Second check examination] as per Risk Management System (RMS) / on specific intelligence.\nExamination order may be issued to the examining officer.",
    closing: "**Issue of examination order may kindly be approved, please.**"
  },
  {
    id: "cus_15",
    category: "Customs",
    name: "Note for Compounding of Customs offence",
    subject: "Compounding of Customs offence — M/s [Name] / Shri [Name]",
    opening: "**Submitted:-**\nM/s [Name] / Shri [Name] has filed an application for compounding of the customs offence under Section 137(3) of the Customs Act, 1962. The offence relates to [nature of offence] involving goods valued at Rs. [X]/- and customs duty of Rs. [X]/-.\nCompounding amount as per Board's guidelines works out to Rs. [X]/-. The applicant agrees to pay the same.",
    closing: "**Acceptance of compounding application may kindly be approved, please.**"
  },
  {
    id: "cus_16",
    category: "Customs",
    name: "Note for Customs Advance Ruling Application",
    subject: "Application for Advance Ruling — M/s [Name] — [Classification / Valuation question]",
    opening: "**Submitted:-**\nM/s [Name] (IEC: [XXXX]) has filed an application for Advance Ruling before the Authority for Advance Ruling (Customs) on the following question:\n[State precise question — e.g., 'Whether goods described as [X] are classifiable under CTH [X] or [Y]?']\nThe matter has implications of duty of Rs. [X]/- per annum approximately.\nDepartmental representation before AAR is required on [hearing date: [Date]].",
    closing: "**Preparation of departmental representation before AAR (Customs) may kindly be approved, please.**"
  },
  {
    id: "cus_17",
    category: "Customs",
    name: "Customs Examination Order",
    subject: "100% Examination Order of Bill of Entry No. [B/E No.] dated [Date]",
    opening: "Please examine the goods covered under the subject Bill of Entry No. [B/E No.] 100% in the presence of the importer or his authorized Customs Broker. Verify description, quantity, weight, value, origin, and classification of the goods with the invoice and packing list.",
    closing: "Draw representative samples and forward to [Lab/Authority] for testing. Submit the examination report for further action."
  },
  {
    id: "gst_ins01",
    category: "GST",
    name: "INS-01 Search/Seizure Authorization",
    subject: "Authorization for Search under Section 67(2) of CGST Act, 2017",
    opening: "Whereas, I have reasons to believe that [Taxpayer Name], [GSTIN] has secreted goods liable to confiscation or any documents or books or things which in my opinion shall be useful for or relevant to any proceedings under this Act, are secreted in the place [Premises Address].",
    closing: "Therefore, in exercise of the powers conferred upon me under subsection (2) of section 67 of the Act, I authorize and require you to search the above premises and to seize/produce the same forthwith before me."
  },
  {
    id: "cx_demand_01",
    category: "General",
    name: "Central Excise Demand/SCN (Pre-GST)",
    subject: "Show Cause Notice under Section 11A of Central Excise Act, 1944 / CENVAT Credit Rules",
    opening: "During the course of audit/investigation, it was observed that M/s [Noticee Name] has irregularly availed CENVAT credit / short paid Central Excise duty amounting to Rs. [Amount] during the period [Period] in contravention of Rule [Rule No.] of CENVAT Credit Rules, 2004 / Section [Sec No.] of Central Excise Act, 1944.",
    closing: "Therefore, M/s [Noticee Name] are hereby called upon to show cause as to why the amount should not be demanded and recovered along with interest under Section 11AA and penalty under Section 11AC / Rule 15."
  }
];
