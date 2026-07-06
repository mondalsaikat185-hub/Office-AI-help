import { Template } from '../../types';

export const customsTemplatesPart2: Template[] = [
  {
    id: "cus_18",
    category: "Customs",
    name: "Bill of Entry Assessment Order",
    subject: "Order-in-Original / Assessment of Bill of Entry No. [BE No.] dated [Date]",
    opening: "The importer, M/s [Importer Name] (IEC: [XXXX]), has filed the Bill of Entry No. [BE No.] dated [Date] for clearance of [Goods Description] and claimed benefit of Notification No. [No.] dated [Date].",
    closing: "On verification, the claimed exemption is found [admissible / not admissible]. The goods are ordered to be assessed [at the tariff rate / with the notification benefit] accordingly."
  },
  {
    id: "cus_19",
    category: "Customs",
    name: "Duty Drawback Sanction Order",
    subject: "Sanction of Duty Drawback under Section 74 / 75 of the Customs Act, 1962",
    opening: "With reference to the drawback claim filed by M/s [Exporter Name] (IEC: [XXXX]) under shipping bill No. [SB No.] dated [Date] for export of [Goods Description], the shipping and export records have been verified.",
    closing: "Accordingly, drawback amount of Rs. [Amount] is hereby sanctioned and ordered to be credited to the exporter's registered bank account."
  },
  {
    id: "cus_20",
    category: "Customs",
    name: "Customs Goods Detention/Seizure Memo",
    subject: "Detention / Seizure Memo under Section 110 of the Customs Act, 1962",
    opening: "Whereas there are reasonable grounds to believe that the goods [Description] imported/exported vide B/E or S/B No. [No.] are liable to confiscation under Section [111/113] of the Customs Act, 1962 for [misdeclaration of value / classification / prohibited goods].",
    closing: "Therefore, in exercise of powers under Section 110(1) of the Act, I hereby seize the said goods and place them under the custody of [Custodian] until further orders."
  },
  {
    id: "cus_21",
    category: "Customs",
    name: "Demand Cum SCN — Refund Rejection (Late Presentation Charges)",
    subject: "Demand Cum Show Cause Notice for Rejection of Refund Claim of Late Presentation Charges under Section 27 of the Customs Act, 1962 — M/s [Noticee Name]",
    opening: `DEMAND CUM SHOW CAUSE NOTICE

Whereas M/s [Noticee/Importer Name], [Full Address] (hereinafter referred to as 'the Noticee/Importer') has submitted a refund application vide letter/online portal dated [Application Date] amounting to Rs. [Amount]/- (Rupees [Amount in Words] only) as late presentation charges paid against Supplementary Bill of Entry No. [BoE No.] dated [BoE Date], filed for clearance of excess quantity of [Goods Description] from the port premises.

BRIEF FACTS:
1. The Importer had imported [Goods Description] through [Port Name] and filed the Parent Bill of Entry No. [Parent BoE No.] dated [Parent BoE Date] for a total quantity of [Quantity] MTS. On payment of applicable Customs duty, Out of Charge (OOC) was granted and the manifested quantity was cleared.

2. Subsequently, a request was received from the Importer for removal of excess/leftover cargo lying at the port above the manifested quantity. A joint survey was conducted as per Public Notice No. 05/2023 and SOP dated [SOP Date], resulting in quantification of excess quantity of [Excess Qty] MTS of [Goods Description].

3. On approval of the jurisdictional Commissioner, the Importer filed Supplementary Bill of Entry No. [Supp BoE No.] dated [Supp BoE Date] for [Excess Qty] MTS. Late presentation charges of Rs. [Late Fee Amount]/- were levied under Section 46(3) of the Customs Act, 1962 read with Regulation 4(3) of the Bill of Entry (Electronic Integrated Declaration and Paperless Processing) Regulations, 2018.

4. The Importer has filed a refund application vide ARN: [ARN No.] dated [ARN Date] through ICEGATE portal under Section 27 of the Customs Act, 1962 for refund of Rs. [Amount]/- being late presentation charges.

GROUNDS FOR SHOW CAUSE:
Now, therefore, the Noticee is hereby called upon to show cause, in writing, within [30] days of receipt of this notice, as to why:
(I) The late presentation charges of Rs. [Amount]/- should not be recovered and appropriated under the provisions of Section 46(3) of the Customs Act, 1962 read with Regulation 4(3) of the 2018 Regulations;
(II) The refund application vide ARN [ARN No.] should not be rejected, since late presentation charges are not 'duty or interest' refundable under Section 27 of the Customs Act, 1962;
(III) The decisions relied upon, if any, are applicable to the facts of the present case.

The Noticee may request a personal hearing. Failure to reply within the stipulated time shall result in ex-parte proceedings.`,
    closing: "The reply may be addressed to the undersigned at the above office address. Please quote the above file number in all correspondence.",
    copyTo: ["Guard File", "AC (Review), Customs Commissionerate"]
  },
  {
    id: "cus_22",
    name: "Rejection Order — Refund of Late Presentation Charges (Section 27)",
    subject: "Order for Rejection of Refund Claim of Late Presentation Charges paid under Section 27 of the Customs Act, 1962 against Supplementary Bill of Entry No. [BoE No.] dated [BoE Date]",
    opening: `ORDER FOR REJECTION OF REFUND CLAIM

PREAMBLE: This copy is granted free of charge for private use of the person(s) to whom it is issued. Any person deeming himself aggrieved by this order may appeal to the Commissioner (Appeals), GST, Central Excise & Customs within sixty (60) days from the date of its communication.

BRIEF FACTS OF THE CASE:
ARN and Date: [ARN No.] dated [ARN Date]
Importer / Noticee: M/s [Importer Name], [Address]. IEC No.: [IEC No.]
Claim Amount: Rs. [Amount]/- (Late Presentation Charges only)
Category: Refund of late presentation charges under Section 27 of the Customs Act, 1962

The Importer had filed an online refund application through ICEGATE for Rs. [Amount]/- being late presentation charges paid against Supplementary Bill of Entry No. [Supp BoE No.] dated [Supp BoE Date], filed for clearance of excess quantity of [Excess Qty] MTS of [Goods Description] over and above the manifested quantity of [Original Qty] MTS under Parent Bill of Entry No. [Parent BoE No.] dated [Parent BoE Date].

The late presentation charges were levied by the ICEGATE/EDI system strictly in accordance with Section 46(3) of the Customs Act, 1962 read with Regulation 4(3) of the Bill of Entry (Electronic Integrated Declaration and Paperless Processing) Regulations, 2018.

A Show Cause Notice (SCN) was issued vide C.No. [File No.] dated [SCN Date] calling upon the Importer to show cause as to why the refund claim should not be rejected. In reply, the Importer submitted a written reply dated [Reply Date].

DISCUSSION AND FINDINGS:

ISSUE NO. 1 — Whether late presentation charges are 'duty or interest' refundable under Section 27:
Section 27(1) of the Customs Act, 1962 provides that any person claiming refund of any 'duty or interest' paid may make an application. Late presentation charges levied under Section 46(3) read with Regulation 4(3) of the 2018 Regulations are not 'duty' or 'interest' but are statutory fees/charges for delayed filing of the Bill of Entry. These fall outside the ambit of Section 27, and the refund claim is not maintainable on this ground alone.

ISSUE NO. 2 — Whether the levy was erroneous or in excess:
The late presentation charges were computed by the EDI system at the prescribed statutory rate for the admitted number of days of delay. The assessment was made correctly in accordance with the law. There is no error, excess, or legal infirmity in the levy which would justify a refund.

ISSUE NO. 3 — Applicability of CESTAT decisions cited by the Importer:
The decisions cited by the Importer, if any, are distinguishable on facts. In M/s Kai International [2026 (3) TMI 1545 - CESTAT Kolkata], the delay was found to be directly caused by the department's own refusal to allow IGM/BoE amendment, which is not the factual matrix of the present case. Further, those decisions arose at the stage of levy/assessment and not from a refund claim under Section 27 after the assessment had attained finality.

GROUNDS FOR REJECTION:
5.1 Late Presentation Charges are outside the scope of Section 27 — not 'duty or interest'.
5.2 The levy was correct and in accordance with Section 46(3) and Regulation 4(3) — no erroneous or excess payment.
5.3 The assessment has attained finality — no appeal filed under Section 128.
5.4 No erroneous or excess payment — amount self-assessed and paid voluntarily.
5.5 CESTAT decisions are distinguishable on facts and on the nature of proceedings.

APPROPRIATION: The late presentation charges of Rs. [Amount]/- are squarely levied, recovered, and appropriated under Section 46(3) of the Customs Act, 1962 read with Regulation 4(3) of the 2018 Regulations.

ORDER:
The refund application filed by M/s [Importer Name] vide ARN: [ARN No.] dated [ARN Date] for refund of late presentation charges of Rs. [Amount]/- paid against Supplementary Bill of Entry No. [Supp BoE No.] dated [Supp BoE Date] under Section 27 of the Customs Act, 1962 is hereby REJECTED IN FULL.

This order is issued without prejudice to any other action that may be taken against the Noticee under the Customs Act, 1962 or any other law for the time being in force.`,
    closing: "",
    copyTo: ["AC (Review), Customs (Preventive) Commissionerate, Bhubaneswar", "Guard File"]
  },
  {
    id: "cus_23",
    name: "Personal Hearing Notice — Refund/SCN Cases",
    subject: "Personal Hearing Notice in the matter of Show Cause Notice No. [SCN No.] dated [SCN Date] — M/s [Noticee Name]",
    opening: "With reference to the Show Cause Notice No. [SCN No.] dated [SCN Date] issued to M/s [Noticee Name] (IEC: [XXXX]) in connection with [brief subject], you are hereby informed that a Personal Hearing in the above matter has been fixed on [Date] at [Time] at this office.",
    closing: "You are requested to attend the personal hearing on the said date along with your authorized representative, if any, and produce all relevant documents in support of your case. In the event of non-attendance without prior intimation, the matter will be decided ex-parte on the basis of records available.",
    copyTo: []
  },
  {
    id: "cus_24",
    name: "Refund Sanction Order (Customs Duty / Fine) — Section 27",
    subject: "Order Sanctioning Refund of Customs Duty / Fine under Section 27 of the Customs Act, 1962 — M/s [Noticee Name]",
    opening: "With reference to the refund application filed by M/s [Applicant Name] (IEC: [XXXX]) vide ARN: [ARN No.] dated [Date] for refund of Rs. [Amount]/- on account of [excess duty paid / fine paid under Section 125 / late fee] against Bill of Entry / Order No. [No.] dated [Date], the claim has been examined and verified.",
    closing: "After due examination of the refund application, relevant documents, and satisfaction of the unjust enrichment clause under Section 27(3) of the Customs Act, 1962, I hereby sanction a refund of Rs. [Amount]/- (Rupees [in words] only) to M/s [Applicant Name] and direct that the same be credited to the Consumer Welfare Fund / paid to the applicant as per verification."
  },
  {
    id: "cus_25",
    name: "Excess Bulk Cargo — Joint Survey Order/Note",
    subject: "Order/Note for Conduct of Joint Survey for Quantification of Excess Bulk Cargo — M/s [Importer Name]",
    opening: "This office has received a letter dated [Date] from M/s [Importer Name] (IEC: [XXXX]), the importer of [Goods Description] cleared vide Bill of Entry No. [BoE No.] dated [BoE Date] through [Port Name], requesting permission for removal of excess/leftover cargo of [Goods Description] lying at the port premises over and above the manifested quantity of [Qty] MTS.",
    closing: "In terms of Public Notice No. 05/2023 and Standard Operating Procedure (SOP) for Delivery of Excess Dry Bulk Cargo dated 19.05.2023 issued by the Commissioner of Customs (P), Bhubaneswar Commissionerate, a Joint Survey of the excess cargo is directed to be conducted by a team comprising representatives of the Port Trust/Custodian, Customs Division, an independent Surveyor, and the CHA/representative of the importer, on [Date] at [Time]. All concerned may take note and make arrangements accordingly."
  }
];
