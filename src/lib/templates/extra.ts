import { Template } from '../../types';

export const extraTemplates: Template[] = [
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
];
