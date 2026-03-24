export interface CaseStudy {
  tag: string;
  title: string;
  desc: string;
  metric: string;
  metricLabel: string;
}

export interface PersonaContent {
  kicker: string;
  h1: string;
  desc: string;
  btnPrimary: string;
  btnGhost: string;
  cases: CaseStudy[];
}

export const personaData: Record<string, PersonaContent> = {
  default: {
    kicker: "AI Marketing · Operations · Lead Generation",
    h1: "Your business<br/>shouldn't run<br/><em>on manual.</em>",
    desc: "I'm <strong>Shelbie Knight</strong>. If you're still the one doing follow-up by hand, your tools don't talk to each other, and half your week goes to work that should happen automatically, that's what I fix. I build <strong>AI-powered marketing and operations systems</strong> so the business runs without you in the middle of it.",
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
    h1: "You're the one<br/>doing it all.<br/><em>That's the problem.</em>",
    desc: "I'm <strong>Shelbie Knight</strong>. You're building a company and running all its systems at the same time. Manually following up on leads, onboarding clients, pulling reports. I build <strong>AI-powered marketing and operations systems</strong> that handle that work automatically, so you can get your time back without hiring for every problem.",
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
    h1: "Your business runs<br/>on your team's<br/><em>manual effort.</em>",
    desc: "I'm <strong>Shelbie Knight</strong>. Your team is doing work that systems should be handling. Tools that don't connect, reports someone pulls every week, onboarding that requires three people every time. I build <strong>AI-powered operations and marketing automation</strong> that gives your team their time back.",
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
        tag: "Operations Automation · SMB (38 employees)",
        title: "Team Got 22 Hours Back Per Week After Tool Integration",
        desc: "Four tools that had never been connected. Someone was manually moving data between all of them every single day. Connected the full stack and automated the data flows.",
        metric: "22h",
        metricLabel: "Saved Per Week",
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
    h1: "Your team is doing<br/>execution work.<br/><em>Strategy is suffering.</em>",
    desc: "I'm <strong>Shelbie Knight</strong>. Your team is smart and capable, but they're spending most of their time on manual follow-up, rebuilding the same reports, and managing campaigns that should run themselves. I build the <strong>marketing systems and strategy</strong> that free your team to do the work that actually moves the business.",
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
    h1: "Your agency scales<br/>on people. It should<br/><em>scale on systems.</em>",
    desc: "I'm <strong>Shelbie Knight</strong>. Every new client means another manual onboarding, another reporting setup, another set of handoffs. I build <strong>AI-powered operations and delivery automation</strong> for agencies: standardized onboarding, automated client reporting, and the operational infrastructure that lets you take on more clients without burning out your team.",
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
