import { TemplateRuleSet } from './baseRules';

// Rule sets: gst_92 … gst_100
export const RULES_PART5: TemplateRuleSet[] = [
  {
    templateId: "gst_92",
    rules: [
      {
        id: "gst92_r1",
        act: "CGST Rules, 2017",
        section: "Rule 21A(2)",
        title: "Automatic Suspension — Operation of Law",
        description: "Rule 21A(2) provides that upon issuance of an SCN for cancellation under s.29(2)(b) or (c), the registration shall be DEEMED SUSPENDED from the date of the SCN. This is automatic — no separate suspension order is required. For s.29(2)(a) cases, the officer has discretion to suspend.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst92_r2",
        act: "CGST Rules, 2017",
        section: "Rule 21A(3)",
        title: "Restrictions During Suspension",
        description: "During suspension: (a) No taxable supply shall be made; (b) No tax invoice shall be issued; (c) No ITC shall be availed; (d) Outstanding returns must still be filed; (e) Tax dues remain payable. CBIC has clarified that violation of suspension restrictions attracts penalty under Section 122 and may be treated as supply by unregistered person attracting s.9(3)/s.9(4) RCM consequences on the recipient.",
        defaultSelected: true,
        required: false
      },
      {
        id: "gst92_r3",
        act: "CBIC Instruction",
        section: "Instruction No. 3/2023-GST",
        title: "System-Based Suspension for Non-Filers",
        description: "GSTN system now automatically suspends registrations where there is no return filing for 6+ months. The officer must issue a notice in FORM GSTR-3A and allow 15 days for compliance before initiating formal cancellation proceedings under s.29(2)(c). System-suspended registrations appear as 'SUSPENDED' on the portal.",
        defaultSelected: false,
        required: false
      }
    ]
  },
  {
    templateId: "gst_93",
    rules: [
      {
        id: "gst93_r1",
        act: "CGST Rules, 2017",
        section: "Rule 21A(4)",
        title: "Revocation of Suspension — Conditions",
        description: "Suspension can be revoked when: (a) the proper officer, after examining the reply to the SCN, drops the SCN; (b) the registration is restored via revocation under s.30; (c) a court/tribunal directs restoration. The revocation order must cite the specific ground, the original suspension notice number, and the effective date of restoration.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst93_r2",
        act: "Legal Principle",
        section: "Natural Justice — Timely Restoration",
        title: "Natural Justice — Timely Restoration",
        description: "Where the taxpayer has filed all returns, paid all dues, and presented a satisfactory reply, the suspension must be lifted promptly. Undue delay in revoking suspension after compliance causes serious economic harm (the business cannot issue invoices or collect GST). Courts have held that officers must revoke suspension within a reasonable time — typically 7–15 days of compliance.",
        defaultSelected: false,
        required: false
      }
    ]
  },
  {
    templateId: "gst_94",
    rules: [
      {
        id: "gst94_r1",
        act: "CGST Act, 2017",
        section: "Section 30(1)",
        title: "Revocation Application — Conditions and Time Limit",
        description: "Section 30(1): A registered person whose registration is cancelled by officer may apply for revocation within 30 days from the date of the cancellation order. The Commissioner may, for sufficient cause, extend the time for up to 60 days (extendable by Additional/Joint Commissioner for a further 30 days, and by Commissioner for additional 30 days). The application must be in FORM GST REG-21 with full compliance — all pending returns filed, all dues paid.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst94_r2",
        act: "CGST Act, 2017",
        section: "Section 30(1) Proviso",
        title: "Mandatory Pre-Condition: All Returns Filed + Dues Paid",
        description: "The proviso to Section 30(1) makes it MANDATORY that all pending returns (from the date of last return filed to the effective date of cancellation) are filed AND all dues (tax, interest, penalty, late fee) are paid BEFORE the revocation application is considered. Non-compliance of this condition is a complete bar to revocation — no discretion available.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst94_r3",
        act: "Legal Precedent",
        section: "High Court Decisions on Revocation",
        title: "High Court Decisions on Revocation",
        description: "Courts have held: (1) The officer must give an opportunity of hearing before rejecting a revocation application (natural justice). (2) Time limit for revocation can be condoned by High Court under Article 226 where delay is due to circumstances beyond control. (3) Where the underlying cancellation order itself is challenged in appeal, the revocation proceedings may be kept in abeyance. Officers must not reject on technical grounds if substantive compliance is shown.",
        defaultSelected: false,
        required: false
      }
    ]
  },
  {
    templateId: "gst_95",
    rules: [
      {
        id: "gst95_r1",
        act: "CGST Act, 2017",
        section: "Section 30(2)",
        title: "Officer's Power to Allow Revocation",
        description: "Section 30(2): The proper officer shall revoke cancellation if he is satisfied that the reasons for which the cancellation was ordered no longer exist AND all pending returns are filed and dues are paid. Revocation restores the registration from the date specified in the order — which may or may not be from the original cancellation date (this is a matter of officer's discretion).",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst95_r2",
        act: "CGST Rules, 2017",
        section: "Rule 23",
        title: "Revocation Order in FORM GST REG-22",
        description: "The revocation order must be in FORM GST REG-22, issued within 30 days of receipt of the application (or reply to SCN). The order should state: date of restoration, any conditions, and confirmation that all returns are filed and dues paid. The GSTN portal is updated to reflect ACTIVE status upon issuance of REG-22.",
        defaultSelected: true,
        required: false
      }
    ]
  },
  {
    templateId: "gst_96",
    rules: [
      {
        id: "gst96_r1",
        act: "CGST Act, 2017",
        section: "Section 30(2)",
        title: "Grounds for Rejecting Revocation",
        description: "Revocation may be rejected where: (a) all pending returns are not filed despite direction; (b) all tax dues not paid; (c) application is filed beyond the time limit without extension; (d) the ground that led to cancellation continues to exist; (e) the application is found to be supported by false documents. The rejection order must be a speaking order addressing each ground.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst96_r2",
        act: "CGST Rules, 2017",
        section: "Rule 23(2)",
        title: "Rejection Order in FORM GST REG-05",
        description: "The rejection of revocation must be communicated in FORM GST REG-05. The taxpayer can appeal this rejection before the Commissioner (Appeals) under Section 107 within 3 months. During appeal, the cancelled status continues — the court may grant interim relief of restoration pending appeal.",
        defaultSelected: true,
        required: false
      }
    ]
  },
  {
    templateId: "gst_97",
    rules: [
      {
        id: "gst97_r1",
        act: "CGST Rules, 2017",
        section: "Rule 25",
        title: "Physical Verification — When Mandatory",
        description: "Physical verification of business premises is MANDATORY in the following cases as per CBIC instructions: (a) where the applicant or its proprietor/partners/directors have defaulted on earlier registrations; (b) where the declared address is a residential/virtual office with no evidence of business; (c) where goods are manufactured at the said premises; (d) high-risk applications flagged by GSTN risk engine. The officer must record reasons for ordering verification.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst97_r2",
        act: "CGST Rules, 2017",
        section: "Rule 25 — FORM GST REG-30",
        title: "Verification Report in REG-30",
        description: "After physical verification, the officer MUST submit a report in FORM GST REG-30 within 15 working days of verification. The report must detail: (a) whether premises physically exists at declared address; (b) nature of business activity observed; (c) documents checked on-site; (d) any discrepancy between declared and actual particulars. This report is the basis for registration decision.",
        defaultSelected: true,
        required: false
      },
      {
        id: "gst97_r3",
        act: "CGST Rules, 2017",
        section: "Rule 9(2) and (3)",
        title: "Impact on Registration Timeline",
        description: "Where physical verification is ordered, the 7-day period for grant/rejection of registration is extended until the verification report is received. If the verification report shows adverse findings, an SCN must be issued under Rule 9(3) before rejection. The entire process (application → verification → SCN → registration decision) must be completed within the statutory period.",
        defaultSelected: false,
        required: false
      }
    ]
  },
  {
    templateId: "gst_98",
    rules: [
      {
        id: "gst98_r1",
        act: "CGST Rules, 2017",
        section: "Rule 9(3)",
        title: "SCN Before Rejection — Mandatory Natural Justice",
        description: "Rule 9(3): If the proper officer is NOT satisfied with the application or the documents furnished, he SHALL issue an SCN to the applicant in FORM GST REG-03 within 7 working days from the date of submission. The officer CANNOT reject the application without issuing an SCN and giving an opportunity to reply. Rejection without SCN is void.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst98_r2",
        act: "CGST Rules, 2017",
        section: "Rule 9(1) — 7-Day Deemed Approval",
        title: "Deemed Approval Risk — Officers Must Act Promptly",
        description: "CRITICAL: If the officer fails to ACT on the application (grant/SCN/reject) within 7 working days, the application is DEEMED approved and registration is granted automatically. Officers must therefore either grant registration OR issue SCN within 7 working days. After SCN, the applicant has 7 working days to reply, after which the officer has another 7 working days to decide.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst98_r3",
        act: "Legal Precedent",
        section: "Court Decisions on Registration Rejection",
        title: "Court Decisions on Registration Rejection",
        description: "Courts have held: (1) Rejection of registration cannot be based on suspicion alone — specific deficiency must be pointed out. (2) Where deemed approval has occurred, officer cannot subsequently cancel for the same grounds that existed at the time of deemed approval without fresh cause. (3) Rejection of application of a person mandatorily required to register (e.g., inter-state supplier) is not permissible.",
        defaultSelected: false,
        required: false
      }
    ]
  },
  {
    templateId: "gst_99",
    rules: [
      {
        id: "gst99_r1",
        act: "CGST Rules, 2017",
        section: "Rule 9(3) — FORM GST REG-05",
        title: "Rejection Order in FORM GST REG-05",
        description: "The rejection of a registration application must be in FORM GST REG-05 — a speaking order with specific reasons. The officer must consider: (a) each deficiency cited in the SCN; (b) the reply filed; (c) whether the applicant addressed the deficiency adequately. A blanket rejection without addressing the reply is vulnerable to appeal.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst99_r2",
        act: "CGST Act, 2017",
        section: "Section 107",
        title: "Appeal Against Rejection",
        description: "The applicant may appeal against the rejection order before the Commissioner (Appeals) within 3 months. Unlike tax demands, no pre-deposit is required for a registration rejection appeal. The applicant may also apply fresh if the deficiency is curable. Courts have in several cases directed grant of provisional registration pending appeal.",
        defaultSelected: false,
        required: false
      }
    ]
  },
  {
    templateId: "gst_100",
    rules: [
      {
        id: "gst100_r1",
        act: "CGST Act, 2017",
        section: "Section 28(2)",
        title: "Officer-Initiated Amendment — Scope",
        description: "Section 28(2): The proper officer may amend registration certificate on his own motion if he is satisfied that there is a change in particulars furnished by the registrant, OR the particulars are incorrect. This covers corrections to: address, nature of business, HSN of principal supply, contact details, principal officer details, etc. The officer must give a reasonable opportunity to the registered person before making any amendment.",
        defaultSelected: true,
        required: true
      },
      {
        id: "gst100_r2",
        act: "CGST Rules, 2017",
        section: "Rule 19",
        title: "Amendment Procedure — FORM GST REG-15/16",
        description: "For officer-initiated amendments, the officer should issue notice in FORM GST REG-03 seeking information/objection. After considering the response, the amendment (if warranted) is carried out in FORM GST REG-15 (for non-core fields) or requires fresh SCN (for core fields like PAN, constitution, etc.). Core field changes require the taxpayer's own application in FORM GST REG-14.",
        defaultSelected: true,
        required: false
      },
      {
        id: "gst100_r3",
        act: "Legal Principle",
        section: "Amendment vs. Cancellation",
        title: "When to Amend vs. Cancel",
        description: "Officers must distinguish: (a) If particulars are merely incorrect (wrong address, typo, etc.) — Amendment under s.28(2) is the appropriate remedy. (b) If the registration itself was obtained by fraud (false address, non-existent business) — Cancellation under s.29(2)(e) is appropriate. Misuse of amendment power to effectively cancel registration without following s.29 procedure is judicially frowned upon.",
        defaultSelected: false,
        required: false
      }
    ]
  }
];
