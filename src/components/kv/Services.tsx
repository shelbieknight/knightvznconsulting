import AnimatedSection from "./AnimatedSection";

const services = [
  {
    num: "01",
    title: "AI Marketing Automation Build",
    desc: "Lead capture, nurture sequences, behavioral triggers, and conversion flows built as a single connected system. The right message reaches the right lead at the right time, automatically.",
    tags: ["Lead Nurture", "Behavioral Triggers", "Conversion Flows"],
  },
  {
    num: "02",
    title: "Operations Automation & AI Workflows",
    desc: "Maps where time is actually going, then builds workflows that handle it automatically. Eliminates manual steps and tribal knowledge dependencies.",
    tags: ["Workflow Design", "Tool Integration", "Process Mapping"],
  },
  {
    num: "03",
    title: "AI Lead Generation System",
    desc: "Targeted outreach, lead scoring, nurture sequences, and CRM sync — one pipeline that runs end-to-end without manual intervention.",
    tags: ["Outreach", "Lead Scoring", "CRM Sync"],
  },
  {
    num: "04",
    title: "AI Content & SEO Pipeline",
    desc: "An AI-assisted pipeline that handles research, drafting, publishing, and tracking so search authority compounds without taking over someone's week.",
    tags: ["Content Ops", "SEO", "AI Drafting"],
  },
  {
    num: "05",
    title: "Marketing & Ops Automation Audit",
    desc: "A full audit of your marketing funnel and operations — mapping what's manual, what's broken, and what's worth fixing first. You walk away with a clear prioritized plan.",
    tags: ["Audit", "Prioritization", "Roadmap"],
  },
  {
    num: "06",
    title: "Ongoing Automation & Growth Retainer",
    desc: "Monthly retainer for businesses that want to keep building — adding new automation, refining what's already running, and expanding the infrastructure as the business grows.",
    tags: ["Retainer", "Optimization", "Scaling"],
  },
];

const Services = () => (
  <section id="services" className="section-pad bg-foreground relative overflow-hidden">
    <div className="container-kv">
      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-end mb-16 lg:mb-20">
        <div>
          <AnimatedSection>
            <div className="eyebrow mb-7 before:bg-gold text-background/40">What I Build</div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="font-serif text-[clamp(42px,4.5vw,66px)] font-normal leading-[1.06] tracking-[-0.015em] text-background">
              Systems that replace<br /><em className="italic">manual work.</em>
            </h2>
          </AnimatedSection>
        </div>
        <AnimatedSection delay={0.15}>
          <p className="text-[17px] leading-[1.8] text-background/70 font-light self-end">
            Every engagement starts with understanding where time goes. Then I build the systems that get it back — connected, automated, and documented so your team can run them without me.
          </p>
        </AnimatedSection>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-background/[0.08]">
        {services.map((svc, i) => (
          <AnimatedSection key={svc.num} delay={0.05 * i}>
            <div className="bg-foreground p-10 lg:p-12 relative overflow-hidden group cursor-default hover:bg-foreground/95 transition-colors h-full">
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />

              <span className="font-mono text-[12.5px] text-background/55 tracking-[0.1em] mb-8 block font-light">
                {svc.num}
              </span>
              <h3 className="font-serif text-2xl font-medium text-background leading-tight mb-3.5 tracking-[-0.01em]">
                {svc.title}
              </h3>
              <p className="text-[15px] leading-[1.78] text-background/70 font-light mb-9">
                {svc.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10.5px] tracking-[0.12em] uppercase font-normal text-background/55 border border-background/[0.18] px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
