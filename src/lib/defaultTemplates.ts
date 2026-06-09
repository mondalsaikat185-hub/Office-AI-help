import { Template } from '../types';

export const defaultTemplates: Template[] = [
  {
    id: "tpl_1",
    category: "Leave & Service",
    name: "Earned Leave (EL) Sanction Note",
    subject: "Grant of Earned Leave to Shri/Smt. [Name], [Designation]",
    opening: "It is submitted that Shri/Smt. [Name], [Designation], has applied for Earned Leave for [X] days from [Date] to [Date] on [grounds]. His/Her EL balance as on date is [X] days.",
    closing: "In view of the above, grant of Earned Leave as applied may kindly be approved, please."
  },
  {
    id: "tpl_2",
    category: "Leave & Service",
    name: "Casual Leave (CL) Sanction Note",
    subject: "Grant of Casual Leave to Shri/Smt. [Name], [Designation]",
    opening: "It is submitted that Shri/Smt. [Name], [Designation], has applied for Casual Leave for [X] days from [Date] to [Date].",
    closing: "Grant of Casual Leave as applied may kindly be approved, please."
  },
  {
    id: "tpl_3",
    category: "Leave & Service",
    name: "10 Days Leave Encashment Note",
    subject: "Encashment of 10 days Earned Leave in lieu of LTC/Leave account - Shri [Name]",
    opening: "It is submitted that Shri/Smt. [Name], [Designation], has applied for encashment of 10 days Earned Leave. He/She is entitled to the same as per Rule [X] of CCS (Leave) Rules, 1972. His/Her EL balance is [X] days.",
    closing: "Sanction of encashment of 10 days EL may kindly be approved, please."
  },
  {
    id: "tpl_4",
    category: "Leave & Service",
    name: "Leave Encashment Sanction Order",
    subject: "Sanction of Encashment of Earned Leave - Shri/Smt. [Name]",
    opening: "I am directed to convey the sanction of the competent authority for encashment of [X] days of Earned Leave of Shri/Smt. [Name], [Designation], in terms of CCS (Leave) Rules.",
    closing: "The amount of leave salary admissible may be drawn and paid accordingly."
  },
  {
    id: "tpl_5",
    category: "Leave & Service",
    name: "Leave Order (Formal Sanction)",
    subject: "Leave Order - Grant of Earned Leave to [Name]",
    opening: "Earned Leave for [X] days from [Date] to [Date] is hereby sanctioned to Shri/Smt. [Name], [Designation].",
    closing: ""
  },
  {
    id: "tpl_6",
    category: "GPF",
    name: "GPF Advance Note Sheet",
    subject: "Grant of Non-refundable/Refundable Advance from GPF account of Shri [Name]",
    opening: "It is submitted that Shri [Name], [Designation], GPF A/C No. [XXXX], has applied for an advance of Rs. [Amount]/- from his GPF account for [purpose]. His current GPF balance is approximately Rs. [Amount]/-.",
    closing: "Sanction of GPF advance of Rs. [Amount]/- may kindly be approved, please."
  },
  {
    id: "tpl_7",
    category: "GPF",
    name: "GPF Advance Sanction Order",
    subject: "Sanction of GPF Advance - Shri [Name], GPF A/C No. [XXXX]",
    opening: "Sanction of the competent authority is hereby conveyed for grant of an advance of Rs. [Amount]/- (Rupees [in words] only) from the GPF Account No. [XXXX] of Shri [Name], [Designation].",
    closing: "The advance may be drawn and paid to the subscriber accordingly."
  },
  {
    id: "tpl_8",
    category: "GPF",
    name: "GPF Part Final Withdrawal Note Sheet",
    subject: "Part Final Withdrawal from GPF account of Shri [Name] for [purpose]",
    opening: "It is submitted that Shri [Name], [Designation], GPF A/C No. [XXXX], has applied for part final withdrawal of Rs. [Amount]/- from his GPF account for [purpose: house construction/illness/marriage etc.] under Rule [X] of GPF Rules.",
    closing: "Part final withdrawal of Rs. [Amount]/- from the GPF account may kindly be approved, please."
  },
  {
    id: "tpl_9",
    category: "GPF",
    name: "GPF Part Final Withdrawal Sanction Order",
    subject: "Sanction of Part Final Withdrawal from GPF - Shri [Name]",
    opening: "Sanction is hereby accorded for part final withdrawal of Rs. [Amount]/- from the GPF Account No. [XXXX] of Shri [Name], [Designation] for [purpose] under Rule [X] of GPF (CS) Rules, 1960.",
    closing: ""
  },
  {
    id: "tpl_10",
    category: "GPF",
    name: "GPF Misc Forwarding Note Sheet",
    subject: "Forwarding of GPF related documents of Shri [Name]",
    opening: "It is submitted that the documents related to GPF of Shri [Name] are placed opposite for kind perusal.",
    closing: ""
  },
  {
    id: "tpl_11",
    category: "Leave & Service",
    name: "Service Book Forwarding Letter",
    subject: "Forwarding of Service Book of Shri/Smt. [Name] on transfer/posting",
    opening: "I am directed to forward herewith the Service Book of Shri/Smt. [Name], [Designation], who has been transferred/posted to [Office Name], for further necessary action.",
    closing: "Acknowledgement of receipt may kindly be sent at the earliest."
  },
  {
    id: "tpl_12",
    category: "Leave & Service",
    name: "Service Book Requesting Letter",
    subject: "Request for forwarding of Service Book of Shri/Smt. [Name]",
    opening: "It is requested that the Service Book of Shri/Smt. [Name], [Designation], who has been transferred/posted to this office, may kindly be forwarded at the earliest to enable maintenance of service records.",
    closing: ""
  },
  {
    id: "tpl_13",
    category: "Leave & Service",
    name: "Service Book Receiving Note Sheet",
    subject: "Receipt of Service Book of Shri/Smt. [Name] from [Office]",
    opening: "It is submitted that the Service Book of Shri/Smt. [Name], [Designation] has been received from [Office Name] vide their letter No. [X] dated [Date].",
    closing: ""
  },
  {
    id: "tpl_14",
    category: "Leave & Service",
    name: "Family Declaration Note Sheet",
    subject: "Recording of Family Declaration in Service Book of Shri/Smt. [Name]",
    opening: "It is submitted that Shri/Smt. [Name], [Designation], has submitted a Family Declaration Form [Form 3/Form 4] as required under [relevant rules]. The same is placed opposite for recording in the Service Book.",
    closing: "Recording of Family Declaration in the Service Book may kindly be approved, please."
  },
  {
    id: "tpl_16",
    category: "Leave & Service",
    name: "Laptop Declaration Note Sheet",
    subject: "Recording of Laptop Declaration entry in Service Book of Shri/Smt. [Name]",
    opening: "It is submitted that Shri/Smt. [Name], [Designation] has submitted a declaration regarding possession of laptop as required. The same may be recorded in the Service Book.",
    closing: ""
  },
  {
    id: "tpl_18",
    category: "Leave & Service",
    name: "Provisional Pension Note Sheet",
    subject: "Payment of Provisional Pension for the month of [Month, Year] - Shri [Name]",
    opening: "It is submitted that Shri [Name], [Designation], retired on [Date]. As his/her pension case is under process, provisional pension at the rate of [X]/- per month is being paid.",
    closing: "Payment of provisional pension for [Month] may kindly be approved, please."
  },
  {
    id: "tpl_19",
    category: "Leave & Service",
    name: "Pension Forwarding Letter",
    subject: "Forwarding of pension papers of Shri/Smt. [Name]",
    opening: "The pension papers of Shri/Smt. [Name], [Designation], who retired on [Date] are forwarded herewith for further necessary action.",
    closing: ""
  },
  {
    id: "tpl_21",
    category: "Leave & Service",
    name: "Switch Over to OPS Note Sheet",
    subject: "Application for Switch Over from NPS to OPS - Shri/Smt. [Name]",
    opening: "It is submitted that Shri/Smt. [Name], [Designation] has applied for switchover from New Pension Scheme (NPS) to Old Pension Scheme (OPS) as per Government orders dated [Date].",
    closing: ""
  },
  {
    id: "tpl_23",
    category: "General",
    name: "RTI Response Letter",
    subject: "Reply to RTI Application dated [Date] filed by [Applicant Name]",
    opening: "With reference to RTI Application dated [Date] filed by Shri/Smt. [Name] under Section 6(1) of the Right to Information Act, 2005, the following information is furnished:",
    closing: "If not satisfied with the reply, the applicant may prefer a First Appeal to the First Appellate Authority within 30 days."
  },
  {
    id: "tpl_24",
    category: "General",
    name: "RTI Transfer Letter",
    subject: "Transfer of RTI Application of [Applicant] u/s 6(3) of RTI Act, 2005",
    opening: "The RTI application dated [Date] of Shri/Smt. [Name] is transferred under Section 6(3) of the RTI Act, 2005 to [Other Department] as the information sought pertains to that office.",
    closing: ""
  },
  {
    id: "tpl_25",
    category: "General",
    name: "AG Objection Reply",
    subject: "Reply to Audit Objection No. [X] raised by AG/CGDA regarding [Subject]",
    opening: "With reference to the audit objection No. [X] raised by the office of the Accountant General / Principal Director of Audit regarding [subject], it is submitted that:",
    closing: "In view of the above explanation, it is requested that the audit objection may kindly be dropped."
  },
  {
    id: "tpl_27",
    category: "General",
    name: "96 Case Note Sheet",
    subject: "Noting on 96 Case - [Subject]",
    opening: "It is submitted that the above-mentioned case has been referred to this office. The relevant facts are placed opposite for kind perusal.",
    closing: ""
  },
  {
    id: "tpl_28",
    category: "General",
    name: "Reply to PAO (96 Case)",
    subject: "Reply to PAO letter No. [X] dated [Date] regarding [subject]",
    opening: "With reference to the letter No. [X] dated [Date] from the office of the Pay and Accounts Officer, the reply is furnished as under:",
    closing: ""
  },
  {
    id: "tpl_29",
    category: "General",
    name: "IPR Forwarding Letter",
    subject: "Forwarding of Immovable Property Return (IPR) of Shri/Smt. [Name]",
    opening: "The Immovable Property Return (IPR) of Shri/Smt. [Name], [Designation], for the year [Year] is forwarded herewith as per prescribed format.",
    closing: ""
  },
  {
    id: "tpl_30",
    category: "General",
    name: "Miscellaneous Forwarding Letter",
    subject: "Forwarding of [Document Name]",
    opening: "The [Document Name] is forwarded herewith for information and necessary action.",
    closing: ""
  },
  {
    id: "tpl_33",
    category: "General",
    name: "CGHS Application Forwarding",
    subject: "Application for CGHS Card / Forwarding of CGHS documents",
    opening: "I am directed to forward herewith the CGHS application of Shri/Smt. [Name] for necessary action.",
    closing: ""
  },
  {
    id: "tpl_34",
    category: "General",
    name: "Exam Intimation Letter",
    subject: "Intimation regarding Departmental Examination / LDCE",
    opening: "It is hereby intimated that the [Examination Name] is scheduled to be held on [Date] at [Venue]. All eligible officers are directed to appear.",
    closing: ""
  },
  {
    id: "tpl_35",
    category: "General",
    name: "Reward Note Sheet",
    subject: "Recommendation for Cash Award / Reward to Shri/Smt. [Name]",
    opening: "It is submitted that Shri/Smt. [Name], [Designation], has performed exceptionally well in [task/duty]. It is proposed to recommend him/her for a cash award/reward as per Department guidelines.",
    closing: "Recommendation for reward may kindly be approved, please."
  },
  {
    id: "ext_1",
    category: "Leave & Service",
    name: "Explanation Letter for Unauthorized Absence",
    subject: "Explanation for unauthorized absence from [Date] to [Date] — Shri/Smt. [Name], [Designation]",
    opening: "I am directed to refer to the unauthorized absence of Shri/Smt. [Name], [Designation], from [Date] to [Date] ([X] days) without prior sanction of leave, and to call upon him/her to furnish a written explanation within [7/10] days of receipt of this letter as to why appropriate action under the service rules should not be initiated against him/her.",
    closing: "In the absence of a satisfactory explanation, it shall be presumed that he/she has no explanation to offer and action will be taken accordingly."
  },
  {
    id: "ext_2",
    category: "Leave & Service",
    name: "Office Order for Grant of Leave",
    subject: "Office Order — Grant of Leave to Shri/Smt. [Name]",
    opening: "In pursuance of the powers conferred under Rule [X] of CCS (Leave) Rules, 1972, the competent authority hereby sanctions [Earned/Medical/Commuted/Half Pay] Leave for [X] days from [Date] to [Date] to the following officers/ officials, as detailed below:",
    closing: "The leave period shall be treated as leave on full pay (or as applicable). The leave account may be debited accordingly."
  },
  {
    id: "ext_3",
    category: "Leave & Service",
    name: "Leave Sanction Order — Detailed Format",
    subject: "Sanction of [Type] Leave — Shri/Smt. [Name], [Designation]",
    opening: "Earned Leave for [X] days from [Date] to [Date] is hereby sanctioned to Shri/Smt. [Name], [Designation] (Employee No. [X]) in terms of Rule [X] of the CCS (Leave) Rules, 1972.\nLeave Balance before sanction : [X] days (EL)\nLeave Balance after sanction  : [X] days (EL)",
    closing: "The concerned official shall remain available on recall if required in the exigency of service."
  },
  {
    id: "ext_4",
    category: "Leave & Service",
    name: "Retirement/Superannuation Order",
    subject: "Retirement Order — Shri/Smt. [Name], [Designation]",
    opening: "It is hereby notified for general information that Shri/Smt. [Name], [Designation], [Pay Level X], is due to retire from Government service on [Date] on attaining the age of superannuation (60 years).\nHe/She will be relieved from duty at the close of office hours on [Date] (i.e., [last working day before date of retirement]).",
    closing: "All dues payable to and recoverable from the retiring officer shall be settled before the date of retirement. The pension and gratuity papers are being processed separately."
  },
  {
    id: "ext_5",
    category: "Leave & Service",
    name: "First Letter to Retiring Employee initiating Pension",
    subject: "Initiation of Pension/Retirement Benefits — Shri/Smt. [Name]",
    opening: "This is to inform you that you are due to retire from Government service on [Date] on attaining the age of superannuation. You are requested to submit the following duly filled forms/documents to this office at the earliest to facilitate timely processing of your pension and retirement benefits:\n1. Form 5 (Application for pension — in duplicate)\n2. Form 5A (Nomination for family pension — in duplicate)\n3. Four passport-size photographs\n4. Bank account details (with cancelled cheque)\n5. Service Book (if in your possession)\n6. GPF Nomination Form\n7. CGEGIS details",
    closing: "You are requested to submit the above documents at least [6/3] months before your date of retirement to avoid any delay in payment of retirement benefits."
  },
  {
    id: "ext_6",
    category: "Leave & Service",
    name: "Vigilance Clearance Request Letter",
    subject: "Request for Vigilance Clearance Certificate in respect of Shri/Smt. [Name], [Designation], retiring on [Date]",
    opening: "Shri/Smt. [Name], [Designation] (Employee No. [X]) is due to retire from service on [Date] on superannuation/ voluntarily/ has been recommended for reward. His/Her case is under process. It is requested that a Vigilance Clearance Certificate in respect of the above-named official may kindly be issued, confirming that no disciplinary/vigilance case is pending or contemplated against him/her.",
    closing: "The Vigilance Clearance Certificate may kindly be furnished at the earliest to enable timely finalization of the case. An early response will be highly appreciated."
  },
  {
    id: "ext_7",
    category: "Leave & Service",
    name: "No Dues Certificate Request — for Pension",
    subject: "Request for No Dues Certificate — Shri/Smt. [Name], [Designation], retiring on [Date]",
    opening: "Shri/Smt. [Name], [Designation], is due to retire from Government service on [Date]. For the purpose of finalizing his/her retirement dues, it is requested that a 'No Dues Certificate' confirming that nothing is outstanding/recoverable against the official may kindly be issued from your end.",
    closing: "The certificate may kindly be provided within [7] days to avoid delay in the settlement of retirement benefits."
  },
  {
    id: "ext_8",
    category: "Leave & Service",
    name: "Licence Fee & Electricity Dues Recovery Note Sheet",
    subject: "Recovery of outstanding Licence Fee and Electricity dues from pension/gratuity of Shri/Smt. [Name]",
    opening: "It is submitted that as per the No Demand Certificate received from the Directorate of Estates / [Estate Office], an amount of Rs. [X]/- is outstanding as licence fee and Rs. [X]/- as electricity dues against Shri/Smt. [Name], [Designation], who is retiring on [Date]. The total outstanding dues amount to Rs. [X]/-.",
    closing: "Recovery of the outstanding amount of Rs. [X]/- from the Death-cum-Retirement Gratuity/pension arrears of Shri/Smt. [Name] may kindly be approved, please."
  },
  {
    id: "ext_9",
    category: "Leave & Service",
    name: "CGEGIS Calculation Note Sheet",
    subject: "Calculation of CGEGIS (Central Government Employees Group Insurance Scheme) benefits of Shri/Smt. [Name]",
    opening: "It is submitted that Shri/Smt. [Name], [Designation] (Group [B/C]), is due to retire on [Date]. He/She has been subscribing to the Central Government Employees Group Insurance Scheme (CGEGIS) since [Date of Joining or Date of Enrollment].\nCGEGIS Subscription Details:\n- Monthly Subscription : Rs. [X]/-\n- Group: [A/B/C/D]\n- Period of subscription: [X] years [X] months\nThe CGEGIS Savings Fund amount as per the table applicable from [Date] to [Date] works out to Rs. [X]/- (as per CGEGIS Table for the relevant year). The Insurance Fund amount is Rs. [X]/-.\nTotal CGEGIS benefit payable = Rs. [X]/-.",
    closing: "Payment of CGEGIS benefit of Rs. [X]/- to Shri/Smt. [Name] may kindly be approved, please."
  },
  {
    id: "ext_10",
    category: "Leave & Service",
    name: "CGEGIS Details Forwarding Letter to PAO",
    subject: "Forwarding of CGEGIS details of Shri/Smt. [Name], [Designation], for payment of CGEGIS benefits",
    opening: "I am directed to forward herewith the CGEGIS details of Shri/Smt. [Name], [Designation] (Group [B/C]), who is retiring on [Date], for necessary processing and payment of the CGEGIS Savings Fund amount of Rs. [X]/- as calculated. The calculation sheet is enclosed herewith.",
    closing: "It is requested that the CGEGIS benefit may kindly be processed and paid to the retiring official at the earliest."
  },
  {
    id: "ext_11",
    category: "Leave & Service",
    name: "Service Verification Note Sheet for Pension",
    subject: "Service Verification for pension of Shri/Smt. [Name]",
    opening: "It is submitted that Shri/Smt. [Name], [Designation] is due to retire on [Date]. His/Her service details for the purpose of pension calculation are as follows:\n- Date of appointment : [Date]\n- Date of retirement  : [Date]\n- Total qualifying service: [X] years [X] months\nThe service details have been verified from the Service Book. The following periods are excluded from qualifying service: [if any, list them].",
    closing: "Service verification details may kindly be checked and forwarded to PAO for finalization of pension case, please."
  },
  {
    id: "ext_12",
    category: "Leave & Service",
    name: "Submission of ID Card at Retirement",
    subject: "Submission of official ID Card by Shri/Smt. [Name] on retirement",
    opening: "Shri/Smt. [Name], [Designation], has retired from Government service on [Date] on attaining the age of superannuation. He/She has duly submitted his/her official Identity Card (Card No. [X]) to this office on [Date].",
    closing: "The acknowledgment of receipt of Identity Card may be noted and filed in the service record."
  },
  {
    id: "ext_13",
    category: "Leave & Service",
    name: "Forwarding Pension Papers to Superintendent/GL",
    subject: "Forwarding of pension papers of Shri/Smt. [Name] for completion of entries in Gazetted Ledger (GL)",
    opening: "The pension case papers of Shri/Smt. [Name], [Designation] (Gazetted/Non-Gazetted), who retired on [Date], are forwarded herewith for completion of GL entries / verification of pay and allowances paid to the official during the last [X] years.",
    closing: "It is requested that the GL details may be furnished at the earliest to enable submission of pension papers to PAO without delay."
  },
  {
    id: "ext_14",
    category: "Leave & Service",
    name: "Forwarding Pension Papers to CCO",
    subject: "Forwarding of pension papers of Shri/Smt. [Name], [Designation] to the Office of the Chief Commissioner",
    opening: "The pension papers / retirement documents of Shri/Smt. [Name], [Designation], who is due to retire on [Date] / has retired on [Date], are forwarded herewith to the Office of the Chief Commissioner for [CGST/Customs], [Zone], for further necessary action / counter-signature / forwarding to PAO.",
    closing: "Acknowledgement of receipt may kindly be sent to this office at the earliest."
  },
  {
    id: "ext_15",
    category: "Leave & Service",
    name: "Letter to Joint Commissioner for Pension Matter",
    subject: "Request for orders/approval regarding pension case of Shri/Smt. [Name] — [specific issue]",
    opening: "The pension case of Shri/Smt. [Name], [Designation], is submitted for kind perusal of the Joint Commissioner. The specific issue requiring orders/approval is:\n[describe the specific issue requiring JC's decision].",
    closing: "Orders of the Joint Commissioner are solicited on the matter to enable further action."
  },
  {
    id: "ext_16",
    category: "Leave & Service",
    name: "Application/Note for Waiver of Recovery",
    subject: "Request for waiver of recovery of Rs. [X]/- from [pension/gratuity/salary] of Shri/Smt. [Name]",
    opening: "It is submitted that an amount of Rs. [X]/- is outstanding/recoverable from Shri/Smt. [Name], [Designation], on account of [reason — e.g., excess pay drawn, incorrect TA claim, etc.]. Shri/Smt. [Name] has submitted an application requesting waiver of the said recovery, citing [his/her financial hardship / bona fide mistake / circumstances beyond control].",
    closing: "In view of the circumstances, waiver/reduction of recovery may kindly be considered and approved, please."
  },
  {
    id: "ext_17",
    category: "Leave & Service",
    name: "300 Days Leave Salary Order at Retirement",
    subject: "Sanction of Cash Equivalent of Leave Salary (CELS) for [X] days of Earned Leave / Half Pay Leave at credit of Shri/Smt. [Name] on superannuation",
    opening: "In exercise of the powers conferred under Rule 39 of the CCS (Leave) Rules, 1972, the competent authority hereby sanctions the payment of Cash Equivalent of Leave Salary (CELS) to Shri/Smt. [Name], [Designation], who retired on [Date] on superannuation:\na) Earned Leave at credit on date of retirement : [X] days\nb) Half Pay Leave at credit (converted) : [X] days (EL equivalent: [X] days)\nc) Total days for which CELS is sanctioned: [X] days\n(Maximum permissible: 300 days as per extant rules)\nCELS amount payable: Rs. [X]/- (Rupees [in words] only)\n[Calculated at: (Basic Pay + DA) / 30 x [X] days]",
    closing: "The payment may be made through the Pay and Accounts Officer concerned. The amount may be drawn as per rules."
  },
  {
    id: "ext_18",
    category: "Leave & Service",
    name: "300 Days Leave Salary Calculation Note Sheet",
    subject: "Calculation of Cash Equivalent of Leave Salary (CELS) for [X] days — Shri/Smt. [Name], [Designation]",
    opening: "It is submitted that Shri/Smt. [Name], [Designation], retired on [Date] with the following leave at credit:\nEarned Leave (EL) balance   : [X] days\nHalf Pay Leave (HPL) balance: [X] days\nAs per Rule 39 of CCS (Leave) Rules, 1972, CELS is admissible for a maximum of 300 days.\nCalculation:\nBasic Pay as on date of retirement: Rs. [X]/-\nDA as on date of retirement        : [X]% = Rs. [X]/-\nTotal for calculation              : Rs. [X]/-\nEL CELS  = ([X]+[X])/30 x [X] days = Rs. [X]/-\nHPL CELS = ([X]/2+[X])/30 x [X] days = Rs. [X]/-\nTotal CELS payable                 = Rs. [X]/-",
    closing: "Sanction of CELS of Rs. [X]/- for [X] days as calculated above may kindly be approved, please."
  },
  {
    id: "ext_19",
    category: "Leave & Service",
    name: "Note Sheet for Increment Case — for Pension Fixation",
    subject: "Fixation of pay for the purpose of pension in the case of Shri/Smt. [Name] — Increment due but not drawn",
    opening: "It is submitted that Shri/Smt. [Name], [Designation], retired on [Date]. As per CCS (Pension) Rules / 7th CPC pay matrix, he/she was due for an annual increment on [Date — i.e., 1st July/January preceding retirement], which was not drawn/notionally due. For the purpose of pension calculation, the increment may be allowed notionally as per the provisions of FR 26 / DOPT orders dated [Date].",
    closing: "Notional fixation of pay by allowing increment for the purpose of pension calculation may kindly be approved, please."
  },
  {
    id: "ext_20",
    category: "Leave & Service",
    name: "Increment Order for Pension Fixation",
    subject: "Order for notional increment in pay for the purpose of pension in the case of Shri/Smt. [Name]",
    opening: "In pursuance of the orders issued by the Government of India, Ministry of Finance / DOPT vide OM No. [X] dated [Date], and in terms of the provisions of [relevant rule], it is ordered that Shri/Smt. [Name], [Designation], who retired on [Date] shall be granted one increment in the pay level [X] notionally w.e.f. [Date] for the purpose of calculation of pension and other retiral benefits.",
    closing: "The pension fixation may be revised accordingly and arrears of differential pension, if any, may be worked out and paid."
  },
  {
    id: "ext_21",
    category: "Leave & Service",
    name: "DA Arrear Provisional Pension Note Sheet",
    subject: "Payment of DA Arrear on Provisional Pension for the period [Date] to [Date] — Shri/Smt. [Name]",
    opening: "It is submitted that Shri/Smt. [Name], [Designation], retired on [Date] and is currently drawing provisional pension of Rs. [X]/-p.m. In view of revision of DA from [X]% to [X]% w.e.f. [Date] as per Government orders, the arrear of DA on provisional pension for the period [Date] to [Date] works out to Rs. [X]/-.\nCalculation:\nProvisional Pension                : Rs. [X]/-\nDA @ [New %] - DA @ [Old %]        : Rs. [X]/-\nMonths (arrear period)             : [X] months\nTotal DA Arrear                    : Rs. [X]/-",
    closing: "Payment of DA arrear of Rs. [X]/- on provisional pension may kindly be approved, please."
  },
  {
    id: "ext_22",
    category: "GPF",
    name: "Final Withdrawal from GPF account at Retirement Note",
    subject: "Final Withdrawal from GPF account of Shri/Smt. [Name] on superannuation/retirement",
    opening: "It is submitted that Shri/Smt. [Name], [Designation], GPF Account No. [XXXX], is due to retire on [Date] / has retired on [Date]. As per Rule 34 of GPF (CS) Rules, 1960, the entire GPF balance is payable on retirement. The approximate GPF balance as per the last available statement is Rs. [X]/-.\nThe subscriber has submitted duly filled Form (Final Withdrawal) along with the required documents.",
    closing: "Final withdrawal of entire GPF balance from the account of Shri/Smt. [Name] on retirement may kindly be approved and forwarded to PAO for payment, please."
  },
  {
    id: "ext_23",
    category: "Leave & Service",
    name: "Initial Forwarding Letter to PAO for Pension",
    subject: "Forwarding of pension papers of Shri/Smt. [Name], [Designation], due to retire on [Date]",
    opening: "I am directed to forward herewith the pension papers of Shri/Smt. [Name], [Designation] (GPF A/C No. [X]), who is due to retire on [Date] on superannuation, for necessary processing. The following documents are enclosed:\n1. Form 5 (in duplicate)\n2. Form 5A (Nomination for family pension)\n3. Service Book\n4. Last Pay Certificate\n5. Service verification details\n6. No Dues Certificates (from all sections)\n7. Vigilance Clearance\n8. CGEGIS details",
    closing: "Provisional pension may kindly be authorized from the date of retirement i.e. [Date] and formal pension orders issued at the earliest."
  },
  {
    id: "ext_24",
    category: "Leave & Service",
    name: "Reply to PAO on Pension-related Objection",
    subject: "Reply to PAO objection No. [X] dated [Date] regarding pension case of Shri/Smt. [Name]",
    opening: "With reference to the objection/query No. [X] dated [Date] raised by your office regarding the pension case of Shri/Smt. [Name], [Designation], who retired on [Date], the following clarification is furnished:\nObjection: [State PAO's objection]\nReply: [Provide detailed reply with references to rules/documents]",
    closing: "In view of the above, it is requested that the pension case may kindly be processed and provisional/regular pension authorized at the earliest."
  },
  {
    id: "ext_25",
    category: "Leave & Service",
    name: "Pending Pension Cases Report/Note Sheet",
    subject: "Status Report on Pending Pension Cases as on [Date]",
    opening: "It is submitted that the following pension cases are pending as on [Date]. The details are as given below:\n[Table: Sl.No. | Name | Designation | Date of Retirement | Reason for Pendency | Expected Clearance Date]",
    closing: "It is requested that suitable directions may be issued to expedite the pending pension cases so that the retiring officials do not face hardship."
  },
  {
    id: "ext_26",
    category: "Leave & Service",
    name: "50% Interim Pension Note Sheet",
    subject: "Authorization of 50% Provisional Pension for Shri/Smt. [Name], [Designation], for the month of [Month]",
    opening: "It is submitted that Shri/Smt. [Name] is drawing provisional pension at 50% of the last drawn pay as the pension case is under process with PAO. The pension for the month of [Month] at 50% of last basic pay = Rs. [X]/- + DA @ [X]% = Rs. [X]/-\nTotal provisional pension for [Month] = Rs. [X]/-.",
    closing: "Payment of 50% provisional pension as calculated above may kindly be approved, please."
  },
  {
    id: "ext_27",
    category: "Leave & Service",
    name: "Excess Payment Recovery Note Sheet",
    subject: "Recovery of excess payment made to Shri/Smt. [Name] on account of [reason]",
    opening: "It is submitted that an excess amount of Rs. [X]/- has been inadvertently paid to Shri/Smt. [Name], [Designation] / Pensioner, on account of [reason — e.g., wrong DA fixation / continuation of pay after retirement / incorrect pension calculation].\nRecovery Details:\nExcess amount paid   : Rs. [X]/-\nPeriod of excess     : [Date] to [Date]\nProposed recovery    : Rs. [X]/- per month from [pension/salary] or lump sum deduction",
    closing: "Recovery of excess payment of Rs. [X]/- may kindly be approved as proposed, please."
  },
  {
    id: "ext_28",
    category: "Leave & Service",
    name: "Pension Mitra Portal Note Sheet & Forwarding",
    subject: "Submission of pension data on Pension Mitra portal for Shri/Smt. [Name]",
    opening: "It is submitted that the pension case of Shri/Smt. [Name], [Designation], who retired on [Date], is required to be uploaded on the Pension Mitra portal as per CGA/CPAO instructions. The requisite data has been compiled and the same is placed for approval before uploading.",
    closing: "Approval to upload the pension data on the Pension Mitra portal may kindly be accorded, please."
  },
  {
    id: "ext_29",
    category: "Leave & Service",
    name: "Upcoming Retirement Report",
    subject: "Report on officials due to retire during [Month/Quarter/Year]",
    opening: "This report contains details of officials due to retire from the office of [Office Name] during [period]:\n[Table: Sl.No. | Name | Designation | Date of Retirement | Pay Level | GPF A/C No. | Remarks]",
    closing: "It is requested that pension processing may be initiated at least 12 months in advance for all the above officials to ensure timely payment of retirement benefits."
  },
  {
    id: "ext_30",
    category: "Leave & Service",
    name: "Monthly Pension Report Submission Note Sheet",
    subject: "Submission of Monthly Pension Report for [Month, Year]",
    opening: "It is submitted that the monthly pension report for the month of [Month, Year] has been prepared and is placed opposite for kind perusal.\nReport Summary:\n- Total pensioners under this office : [X]\n- Regular pension authorized         : [X] cases\n- Provisional pension cases         : [X] cases\n- Pending cases with PAO            : [X] cases\n- Cases disposed in this month      : [X] cases",
    closing: "The monthly pension report may kindly be perused and forwarded to the higher authority / CCO, please."
  },
  {
    id: "ext_31",
    category: "Leave & Service",
    name: "Switch Over to OPS — Formal Order",
    subject: "Order for Switch Over from NPS to OPS — Shri/Smt. [Name]",
    opening: "In pursuance of the Government of India instructions vide Department of Pension & Pensioners' Welfare OM No. [X] dated [Date], and in compliance with the directions of the Hon'ble [Court/Tribunal], the competent authority hereby orders that Shri/Smt. [Name], [Designation] (NPS PRAN No. [XXXX]) shall be brought under the ambit of the Old Pension Scheme (Central Civil Services Pension Rules, 1972) with effect from [Date] (date of appointment).",
    closing: "The Pay and Accounts Officer is directed to take necessary action for transfer of NPS accumulation to the Government account and fix the pension of the official under OPS accordingly."
  },
  {
    id: "ext_32",
    category: "GPF",
    name: "GPF Account Opening/Transfer for OPS Switch",
    subject: "Opening/Transfer of GPF Account for Shri/Smt. [Name] pursuant to Switch Over from NPS to OPS",
    opening: "With reference to the order for Switch Over from NPS to OPS of Shri/Smt. [Name], [Designation], it is requested that a new GPF Account may kindly be opened in the name of Shri/Smt. [Name] with the Pay and Accounts Officer concerned. The NPS PRAN No. of the official is [XXXX]. The accumulated corpus under NPS may be transferred to the Government account as per DOPT/NPS guidelines.",
    closing: "Necessary action for opening of GPF account and transfer of NPS funds may kindly be taken at the earliest."
  },
  {
    id: "ext_33",
    category: "Leave & Service",
    name: "RTI Internal Note Sheet before Reply",
    subject: "RTI Application No. [X] dated [Date] filed by [Applicant Name] — noting and reply",
    opening: "**Submitted:-**\nAn RTI application dated [Date] has been received from Shri/Smt. [Name], [Address], seeking information under Section 6(1) of the RTI Act, 2005 on the following:\nInformation sought: '[Details of information sought]'\nThe application has been examined. The information sought is held by this office / partly held by this office and partly by [other office].\nThe reply proposed is placed opposite for approval.",
    closing: "The proposed reply may kindly be approved for issuance to the applicant within the stipulated period of 30 working days from the date of receipt (due date: [Date]), please."
  },
  {
    id: "ext_34",
    category: "Leave & Service",
    name: "Reward Recommendation Forwarding to CCO",
    subject: "Forwarding of reward recommendation for officers/ officials of [Office Name]",
    opening: "I am directed to forward herewith the list of officers/officials of [Office Name] recommended for reward/cash award for [Year/Quarter] for consideration and approval of the competent authority. The details of the recommended officials are as given in the enclosed Annexure.\nThe officers/officials have been recommended on account of their [excellent performance / special contribution / integrity and devotion to duty].",
    closing: "It is requested that the recommendations may kindly be considered and approved for issuance of reward orders at the earliest."
  },
  {
    id: "ext_35",
    category: "Leave & Service",
    name: "Reward Recommendation Forwarding to Field Office",
    subject: "Forwarding of reward/cash award for officers of [Office]",
    opening: "I am directed to convey the approval of the Principal Chief Commissioner / Commissioner for grant of reward/ cash award to the following officers/officials of [Office Name] for their meritorious performance:\n[List: Sl.No. | Name | Designation | Amount of Award]",
    closing: "The reward orders may please be issued and the acceptance/joining reports forwarded to this office."
  },
  {
    id: "ext_36",
    category: "Leave & Service",
    name: "Vigilance Clearance for Reward Recommendation",
    subject: "Request for Vigilance Clearance for officials recommended for reward — [List of names]",
    opening: "The following officials of [Office Name] have been recommended for grant of cash reward for [Year]:\n[List of names & designations]\nBefore finalizing the reward list, it is requested that vigilance clearance may kindly be issued for the above officials, confirming that no departmental/disciplinary proceedings are pending or contemplated against them.",
    closing: "Vigilance clearance may kindly be issued at the earliest to enable processing of reward orders."
  },
  {
    id: "ext_37",
    category: "Leave & Service",
    name: "Annual Development Conference (ADC) Report",
    subject: "Report on Annual Development Conference (ADC) — [Office Name] — [Year]",
    opening: "The Annual Development Conference (ADC) of the [Office Name] was held on [Date] at [Venue] under the chairmanship of [Name, Designation]. The following officers/officials attended:\n[List of participants]\nThe following issues were discussed and decisions taken:",
    closing: "The action taken report on the decisions of the ADC may be submitted to this office by [Date]."
  },
  {
    id: "ext_38",
    category: "Leave & Service",
    name: "Laptop Allotment Details Report Note Sheet",
    subject: "Report on laptop allotment details — [Office Name] as on [Date]",
    opening: "It is submitted that the details of laptops allotted to the officers/officials of [Office Name] are as under:\n[Table: Sl.No. | Name | Designation | Laptop Make/Model | Asset No. | Date of Allotment | Remarks]",
    closing: "The report is placed for kind perusal and onward submission to the competent authority."
  },
  {
    id: "ext_39",
    category: "Leave & Service",
    name: "Forwarding Case Papers to Employee — 96 Case",
    subject: "Forwarding of case papers in reference to Rule 96 Case of Shri/Smt. [Name]",
    opening: "Please find enclosed herewith the copies of documents in your Rule 96 matter as referred by the Pay and Accounts Officer vide their letter No. [X] dated [Date]. You are requested to examine the same and submit your reply/response/clarification within [X] days.",
    closing: "Your early response will facilitate expeditious resolution of the matter."
  },
  {
    id: "ext_40",
    category: "Leave & Service",
    name: "Letter to PAO — Misc/96 Case",
    subject: "In the matter of Rule 96 objection No. [X] regarding Shri/Smt. [Name], [Designation]",
    opening: "With reference to your office letter No. [X] dated [Date] regarding Rule 96 objection in the case of Shri/Smt. [Name], [Designation], the following reply is submitted for reconsideration of the objection:\n[Present facts and counter-arguments clearly]",
    closing: "In view of the above, it is requested that the Rule 96 objection may kindly be dropped/reconsidered."
  },
  {
    id: "ext_41",
    category: "Leave & Service",
    name: "Transfer/Posting Order",
    subject: "Transfer/Posting Order — Shri/Smt. [Name], [Designation]",
    opening: "In the interest of public service, the following transfer/posting is ordered with immediate effect / with effect from [Date]:\nShri/Smt. [Name], [Designation] (Pay Level [X]), presently posted at [Current Office], is hereby transferred and posted to [New Office] as [New Designation, if any].\nHe/She is directed to report to [New Office] on or before [Date].",
    closing: "The official may be relieved immediately / after completion of handover formalities. Charge certificate may be forwarded to this office. TA/DA is admissible as per rules."
  },
  {
    id: "ext_42",
    category: "Leave & Service",
    name: "Charge Handover Note Sheet",
    subject: "Noting regarding handover/takeover of charge of [Post/Section/Division] between [Outgoing] and [Incoming]",
    opening: "It is submitted that consequent upon the transfer of Shri/Smt. [Name], [Designation], from [Section/Office] and joining of Shri/Smt. [Name], [Designation], the charge of [Section/Division/Post] has been handed over by the former to the latter on [Date/Time].\nStatus of Important Files/Matters:\n[List major ongoing matters, pending files, etc.]",
    closing: "The charge handover may kindly be noted and approved, please."
  },
  {
    id: "ext_43",
    category: "Leave & Service",
    name: "Show Cause Notice",
    subject: "Show Cause Notice for [unauthorized absence / insubordination / gross negligence] — Shri/Smt. [Name]",
    opening: "It has come to the notice of the competent authority that Shri/Smt. [Name], [Designation], remained absent from duty from [Date] to [Date] without proper sanction of leave / committed [specific misconduct] on [Date], which constitutes a violation of the CCS (Conduct) Rules, 1964 / Central Civil Services (Classification, Control & Appeal) Rules, 1965.\nYou are hereby called upon to show cause, within [7/15] days of receipt of this notice, as to why disciplinary action should not be initiated against you for the above-mentioned lapse.",
    closing: "Failure to submit a satisfactory explanation within the stipulated time will result in ex-parte proceedings."
  },
  {
    id: "ext_44",
    category: "Leave & Service",
    name: "Joining Report",
    subject: "Joining Report of Shri/Smt. [Name], [Designation]",
    opening: "I am directed to inform that Shri/Smt. [Name], [Designation] (Pay Level [X]), transferred from [Previous Office] has joined duty at [This Office] on [Date] at [Time] and has taken charge of [Post/Section].",
    closing: "This may be noted and the service particulars updated accordingly. His/Her salary may be drawn from [Date] from [This Office]."
  },
  {
    id: "ext_45",
    category: "Leave & Service",
    name: "No Objection Certificate",
    subject: "No Objection Certificate — Shri/Smt. [Name], [Designation] for [purpose: passport/foreign travel/ property transaction/higher education]",
    opening: "This is to certify that Shri/Smt. [Name], [Designation] (Employee No. [X]), is a permanent Government servant employed in this office since [Date].\nThere is no objection from this office for issue of [passport / renewal of passport / undertaking foreign travel / purchase/sale of property / pursuing higher education] by the above-named official, subject to the condition that he/she will comply with all applicable service rules and obtain prior permission for foreign travel as required.",
    closing: "This NOC is issued without prejudice to any departmental proceedings, if initiated in future."
  },
  {
    id: "ext_46",
    category: "Leave & Service",
    name: "LTC Advance Note Sheet",
    subject: "Sanction of LTC Advance to Shri/Smt. [Name], [Designation] for [Home Town / All India] LTC — Block [Year]",
    opening: "It is submitted that Shri/Smt. [Name], [Designation], has applied for Leave Travel Concession (LTC) for the block year [XXXX-XX] for [Home Town / All India] LTC and has requested an advance of Rs. [X]/-. He/She is entitled to LTC as per CCS (LTC) Rules, 1988. The estimated amount of LTC is Rs. [X]/- (for [X] persons: self + [family members]).\nAdvance requested = 90% of estimated LTC = Rs. [X]/-.",
    closing: "Sanction of LTC advance of Rs. [X]/- may kindly be approved, please."
  },
  {
    id: "ext_47",
    category: "Leave & Service",
    name: "LTC Advance Sanction Order",
    subject: "Sanction of LTC Advance — Shri/Smt. [Name], [Designation]",
    opening: "Sanction of the competent authority is hereby conveyed for payment of LTC advance of Rs. [X]/- (Rupees [in words] only) to Shri/Smt. [Name], [Designation], for undertaking [Home Town / All India] LTC journey during the block year [XXXX-XX] as per CCS (LTC) Rules, 1988.",
    closing: "The advance is to be adjusted within one month of completion of journey by submission of claims with tickets and travel details."
  },
  {
    id: "ext_48",
    category: "Leave & Service",
    name: "Medical Reimbursement Forwarding Note Sheet",
    subject: "Medical Reimbursement Claim of Shri/Smt. [Name], [Designation], for treatment at [Hospital Name]",
    opening: "It is submitted that Shri/Smt. [Name], [Designation], has submitted a medical reimbursement claim amounting to Rs. [X]/- for treatment undergone at [Hospital Name] for [ailment] during [Date] to [Date].\nHe/She [is / is not] a CGHS beneficiary.\nThe documents submitted are:\n1. Hospital bills (Original) amounting to Rs. [X]/-\n2. Discharge summary / Doctor's prescription\n3. Investigation reports\n4. CGHS/AMA referral slip (if applicable)",
    closing: "Forwarding of the medical reimbursement claim to the Medical Superintendent / PAO for sanctioning may kindly be approved, please."
  },
  {
    id: "ext_49",
    category: "Leave & Service",
    name: "House Building Advance Note Sheet",
    subject: "Grant of House Building Advance (HBA) to Shri/Smt. [Name], [Designation], for [construction / purchase]",
    opening: "It is submitted that Shri/Smt. [Name], [Designation], has applied for House Building Advance (HBA) for [construction of new house / purchase of flat] at [Location]. He/She is eligible for HBA as per the HBA Rules, 2017 as:\n- Permanent Government servant with [X] years of service\n- No previous HBA availed / previous HBA fully repaid\nAmount requested : Rs. [X]/-\nMaximum admissible: 34 months' basic pay = Rs. [X]/-\n(subject to ceiling of Rs. 25 lakhs for construction)",
    closing: "Sanction of HBA of Rs. [X]/- to Shri/Smt. [Name] may kindly be approved, please."
  },
  {
    id: "ext_50",
    category: "Leave & Service",
    name: "Children Education Allowance Claim Note Sheet",
    subject: "Children Education Allowance (CEA) claim of Shri/Smt. [Name], [Designation], for academic year [Year]",
    opening: "It is submitted that Shri/Smt. [Name], [Designation], has submitted a claim for Children Education Allowance (CEA) for the academic year [XXXX-XX] for his/her [child's name, Class] studying in [School Name].\nAmount claimed: Rs. [X]/- (@ Rs. 2,250/- per month maximum as per 7th CPC rates).\nDocuments submitted:\n1. Certificate from school confirming enrollment\n2. Fee receipt\n3. Self-declaration",
    closing: "CEA claim of Rs. [X]/- for academic year [XXXX-XX] may kindly be approved and forwarded to PAO for payment, please."
  },
  {
    id: "ext_51",
    category: "Leave & Service",
    name: "APAR / ACR Forwarding Letter",
    subject: "Forwarding of APAR (Annual Performance Appraisal Report) of Shri/Smt. [Name] for the year [XXXX-XX]",
    opening: "The Annual Performance Appraisal Report (APAR) of Shri/Smt. [Name], [Designation], for the year [XXXX-XX] is forwarded herewith for necessary action. The APAR has been duly completed by the Reporting Officer and countersigned by the Reviewing Officer and is being forwarded within the stipulated time as per DOPT instructions.",
    closing: "It is requested that the APAR may be placed in the service record/dossier of the official."
  },
  {
    id: "ext_52",
    category: "Leave & Service",
    name: "Identification Mark Forwarding Letter — for Pension",
    subject: "Submission of Identification Mark details of Shri/Smt. [Name] for pension processing",
    opening: "For the purpose of pension processing, the identification marks of Shri/Smt. [Name], [Designation], retiring on [Date] are submitted herewith as follows:\nIdentification Mark 1: [e.g., Mole on right cheek]\nIdentification Mark 2: [e.g., Scar on left hand]\nHeight               : [X] cm\nComplexion          : [Fair/Wheatish/Dark]",
    closing: "These identification details may kindly be incorporated in the pension payment order (PPO) for identification of the pensioner."
  },
  {
    id: "ext_53",
    category: "Leave & Service",
    name: "Letter to Subordinate Customs Office for Pension Coordination",
    subject: "Information/documents sought regarding pension case of Shri/Smt. [Name] — previously posted at your office",
    opening: "Shri/Smt. [Name], [Designation], who is now posted at [This Office] and is due to retire on [Date], was previously posted at your office from [Date] to [Date]. For the purpose of processing his/her pension case, the following information/documents are required:\n1. Service verification for the period [Date] to [Date]\n2. Copies of all pay fixation orders during the above period\n3. Vigilance clearance for the period\n4. No dues certificate",
    closing: "The required documents may kindly be furnished at the earliest to avoid delay in pension processing."
  }
,
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
  },
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
  },
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
