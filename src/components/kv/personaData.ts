export interface CaseStudy {
  tag: string;
  title: string;
  desc: string;
  metric: string;
  metricLabel: string;
}

export interface PersonaContent {
  kicker: string;
  faqHint: string;
  h1: string;
  desc: string;
  btnPrimary: string;
  btnGhost: string;
  cases: CaseStudy[];
}

export const personaData: Record<string, PersonaContent> = {
  default: {
    kicker: "Marketing · Operations · AI Strategy",
    faqHint: "",
    h1: "Your business<br/>shouldn't run<br/><em>on manual.</em>",
    desc: "Most businesses run on a mix of good intentions and manual work. The follow-up that gets missed. The report nobody has time to build. The onboarding that still takes three people. I'm <strong>Shelbie Knight</strong> and I build the <strong>systems that replace all of it</strong>, so the business can grow without the workload growing with it.",
    btnPrimary: "See the Results",
    btnGhost: "Find Out What I'd Automate First →",
    cases: [
      {
        tag: "AI Marketing Automation · B2B SaaS",
        title: "Behavioral Email System Cut Churn by 40% in 90 Days",
        desc: "Customers were going quiet after the trial and nobody was following up consistently. Built a behavioral system that tracked what users actually did and sent the right message based on that. Churn dropped 40% in 90 days.",
        metric: "40%",
        metricLabel: "Churn Reduced",
      },
      {
        tag: "Reporting Automation · Marketing Team",
        title: "Automated Reporting Gave a Marketing Director 8 Hours Back Every Week",
        desc: "Every Monday, the same report. Pull numbers from five platforms, paste into a spreadsheet, format it, write the summary, send it. Built an automated pipeline that handles all of it with zero manual work.",
        metric: "8h",
        metricLabel: "Saved Every Week",
      },
      {
        tag: "AI Lead Generation · B2B Startup",
        title: "Automated Outreach System Grew Pipeline 5× in One Quarter",
        desc: "The team was doing prospecting by hand. Some leads got follow-up, most didn't. Built a connected pipeline: targeted outreach, lead scoring, and nurture. Pipeline grew 5× in the first quarter. No new headcount.",
        metric: "5×",
        metricLabel: "Pipeline Growth",
      },
    ],
  },
  startup: {
    kicker: "For Startup Founders · Scale Without Headcount",
    faqHint: "Most asked by founders: How quickly will I get time back?",
    h1: "You're the one<br/>doing it all.<br/><em>That's the problem.</em>",
    desc: "You didn't start a company to spend your evenings doing follow-up. And you can't hire your way out of it yet. I'm <strong>Shelbie Knight</strong>. I build the <strong>automation that gets founders out of the operations grind</strong>, so you grow the company without growing the team before you're ready.",
    btnPrimary: "See What I've Built for Founders",
    btnGhost: "Find Out What I'd Automate First →",
    cases: [
      {
        tag: "AI Marketing Automation · SaaS Startup",
        title: "Founder Replaced 20 Hours of Manual Marketing With One Automated Funnel",
        desc: "The founder was personally managing email follow-up, lead scoring, and nurture. All manually. Built a fully automated marketing funnel. 20 hours a week back in the first month.",
        metric: "20h",
        metricLabel: "Back Per Week",
      },
      {
        tag: "Operations Automation · Early-Stage Startup",
        title: "Founder Eliminated 15 Hours of Weekly Admin With One Workflow Build",
        desc: "The founder was spending 15 hours a week on work that had nothing to do with growing the company. Mapped the exact steps, automated the repetitive ones. Within two weeks, 15 hours a week was back on the table.",
        metric: "15h",
        metricLabel: "Back Per Week",
      },
      {
        tag: "AI Lead Generation · B2B Startup",
        title: "Automated Outreach System Built 5× Pipeline Without a Sales Hire",
        desc: "Needed pipeline growth but couldn't justify a sales hire yet. Built an automated outreach and nurture system. Pipeline grew 5× in 90 days. Zero additional headcount.",
        metric: "5×",
        metricLabel: "Pipeline Growth",
      },
    ],
  },
  smbs: {
    kicker: "For SMB Owners · Operations That Run Themselves",
    faqHint: "Most asked by SMB owners: Can you actually connect all our tools?",
    h1: "Your business runs<br/>on your team's<br/><em>manual effort.</em>",
    desc: "Your team is capable. They're just spending too much time on work that systems should be handling. Reports pulled manually every week, tools that don't connect, onboarding that takes three people every time. I'm <strong>Shelbie Knight</strong> and I build the <strong>infrastructure that fixes that</strong>, so your team can do more without needing more people to do it.",
    btnPrimary: "See How It Works for SMBs",
    btnGhost: "Find Out What I'd Automate First →",
    cases: [
      {
        tag: "Operations Automation · SMB (45 employees)",
        title: "Disconnected Tool Stack Unified: 22 Hours of Weekly Manual Work Eliminated",
        desc: "The ops team had a CRM, project tool, invoicing system, and reporting dashboard that had never been connected. Connected the full stack and automated the data flows. 22 hours of manual work per week eliminated.",
        metric: "22h",
        metricLabel: "Saved Per Week",
      },
      {
        tag: "Marketing Automation · SMB Retail (52 employees)",
        title: "Abandoned Cart Recovery System Added $94K in Annual Revenue",
        desc: "The marketing team had no automated recovery for cart abandons or inactive customers. Built a behavioral email system with three-stage sequences and dynamic product logic. Recovered revenue that was previously walking out the door.",
        metric: "$94K",
        metricLabel: "Revenue Recovered",
      },
      {
        tag: "Operations Audit · SMB Service Business",
        title: "Full Ops Audit Found $180K in Recoverable Capacity Annually",
        desc: "The audit mapped 31 hours a week of manual work across the team. Rebuilt the highest-impact workflows as automated systems. Freed capacity equivalent to $180K in annual labor cost.",
        metric: "$180K",
        metricLabel: "Capacity Recovered",
      },
    ],
  },
  marketing: {
    kicker: "For Marketing Teams · Strategy + Automation · Prove Your ROI",
    faqHint: "Most asked by marketing managers: How fast can we automate reporting?",
    h1: "Your team is doing<br/>execution work.<br/><em>Strategy is suffering.</em>",
    desc: "Your team is doing the work. The problem is you can't prove it because reporting is manual, attribution is broken, and half the week goes to execution that should run itself. I'm <strong>Shelbie Knight</strong>. I build the <strong>systems that free your team and give you the data to defend your budget</strong>, so you can deliver more without the ask for more headcount.",
    btnPrimary: "See What I've Built for Marketing Teams",
    btnGhost: "Find Out What I'd Automate First →",
    cases: [
      {
        tag: "Marketing Strategy · B2B SaaS",
        title: "Full-Funnel GTM Strategy Drove 4× Revenue Growth Over 3 Years",
        desc: "The company had a product but no coherent go-to-market strategy. Built the full marketing function: brand positioning, ICP definition, channel strategy, and a multi-channel acquisition engine. Revenue grew 4× over three years.",
        metric: "4×",
        metricLabel: "Revenue Growth",
      },
      {
        tag: "Reporting Automation · Marketing Team",
        title: "Automated Reporting Gave a Marketing Director 8 Hours Back Every Week",
        desc: "Every Monday, the same report. Eight hours, every single week. Built an automated pipeline that pulls, formats, and distributes the weekly performance report with zero manual work.",
        metric: "8h",
        metricLabel: "Saved Every Week",
      },
      {
        tag: "Marketing Automation · B2B",
        title: "Automated Nurture System Increased MQL-to-SQL Conversion by 60%",
        desc: "The marketing team was sending batch emails with no behavioral logic. Built a behavioral nurture system with lead scoring and real-time CRM sync. MQL-to-SQL conversion up 60% in the first quarter.",
        metric: "60%",
        metricLabel: "Better Conversion",
      },
    ],
  },
  agencies: {
    kicker: "For Agencies · Scalable Client Delivery",
    faqHint: "Most asked by agencies: Will clients need to be involved during the build?",
    h1: "Your agency scales<br/>on people. It should<br/><em>scale on systems.</em>",
    desc: "Every new client adds work that shouldn't require your team's hands. Another onboarding. Another reporting setup. Another set of handoffs. Right now your revenue scales with your headcount. I'm <strong>Shelbie Knight</strong> and I build the <strong>delivery automation that breaks that pattern</strong>, so you take on more clients without taking on more staff.",
    btnPrimary: "See the Agency Builds",
    btnGhost: "Find Out What I'd Automate First →",
    cases: [
      {
        tag: "Operations Automation · Digital Agency (22 staff)",
        title: "Client Onboarding: From 4-Hour Manual Process to 45-Minute Automated Flow",
        desc: "Every onboarding involved four hours of account manager time. Rebuilt the entire flow as an automated workflow triggered by contract signature. 45 minutes with no account manager involvement.",
        metric: "45min",
        metricLabel: "From 4 Hours",
      },
      {
        tag: "Client Reporting Automation · Digital Agency",
        title: "Automated Client Reporting Freed 12 Hours Per Account Manager Per Week",
        desc: "Account managers were spending 12+ hours a week per client building reports by hand. Built an automated system that handles all of it. The time went back to billable work.",
        metric: "12h",
        metricLabel: "Per AM Per Week",
      },
      {
        tag: "AI Lead Generation · Boutique Consultancy",
        title: "Automated Business Development Built Consistent Pipeline for the First Time",
        desc: "No systematic outreach, just referrals. Built an automated BD system: targeted prospecting, personalized outreach sequences. First three months: 8 qualified conversations, 3 new retainers.",
        metric: "3",
        metricLabel: "New Retainers / Qtr",
      },
    ],
  },
};
