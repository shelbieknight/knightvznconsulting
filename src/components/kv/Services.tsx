import AnimatedSection from "./AnimatedSection";

const services = [
  {
    num: "01",
    title: "Marketing Automation",
    desc: "Maps your full marketing funnel from first touch to closed deal, then builds the automation that runs it. Lead capture, nurture sequences, behavioral triggers, and conversion flows connected into one system.",
    tags: ["Lead Nurture", "Behavioral Triggers", "Conversion Flows"],
    timeline: "Typical engagement: 3–6 weeks",
  },
  {
    num: "02",
    title: "Operations Automation & AI Workflows",
    desc: "Maps where time is actually going, then builds workflows that handle it automatically.",
    tags: ["Workflow Design", "Tool Integration", "Process Mapping"],
    timeline: "Typical engagement: 2–4 weeks",
  },
  {
    num: "03",
    title: "Digital Strategy & Lead Generation",
    desc: "Prospecting lists, personalized outreach sequences, lead scoring, and CRM sync. Built for consistent pipeline without a sales hire. First contact to qualified conversation, handled automatically.",
    tags: ["Prospecting", "Outreach Sequences", "Lead Scoring", "CRM Sync"],
    timeline: "Typical engagement: 4–6 weeks",
  },
  {
    num: "04",
    title: "Content & SEO Pipeline",
    desc: "A full content engine covering blog posts, LinkedIn, Instagram, Facebook, and X (Twitter). Research, drafting, publishing, and performance tracking in one pipeline.",
    tags: ["Blog", "LinkedIn", "Instagram", "Facebook", "X", "SEO"],
    timeline: "Ongoing or project-based",
  },
];

const Services = () => (
  <section id="services" className="section-pad bg-surface-dark relative overflow-hidden">
    {/* Gradient orbs */}
    <div className="absolute -left-[150px] top-[20%] w-[500px] h-[500px] rounded-full opacity-[0.08] blur-[100px] pointer-events-none"
      style={{ background: "radial-gradient(circle, hsl(var(--pop)), transparent)" }}
    />
    <div className="absolute right-[10%] bottom-[10%] w-[300px] h-[300px] rounded-full opacity-[0.05] blur-[80px] pointer-events-none"
      style={{ background: "radial-gradient(circle, hsl(var(--electric)), transparent)" }}
    />

    <div className="container-kv relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-end mb-16 lg:mb-20">
        <div>
          <AnimatedSection>
            <div className="eyebrow mb-7" style={{ color: "rgba(255,255,255,0.5)" }}>
              <span className="text-gradient">What I Build</span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="font-display text-[clamp(40px,4.5vw,64px)] font-bold leading-[0.98] tracking-[-0.03em] text-primary-foreground">
              Systems that replace
              <br /><span className="text-gradient">manual work.</span>
            </h2>
          </AnimatedSection>
        </div>
        <AnimatedSection delay={0.15}>
          <p className="text-[16px] leading-[1.8] text-primary-foreground/50 self-end">
            Four services. One through-line: find the manual work, then get rid of it. The result is a business that handles more without needing more people to handle it.
          </p>
        </AnimatedSection>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((svc, i) => (
          <AnimatedSection key={svc.num} delay={0.05 * i}>
            <div className="bg-primary-foreground/[0.04] border border-primary-foreground/[0.08] p-9 lg:p-10 relative overflow-hidden group cursor-default hover:border-pop/30 hover:bg-primary-foreground/[0.06] transition-all duration-300 h-full card-lift flex flex-col">
              <div className="absolute top-0 left-0 bottom-0 w-[3px] scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-500 bg-pop" />
              <span className="font-mono text-[12px] text-electric font-bold tracking-[0.15em] mb-7 block">
                {svc.num}
              </span>
              <h3 className="font-display text-xl font-bold text-primary-foreground leading-tight mb-3 tracking-[-0.01em]">
                {svc.title}
              </h3>
              <p className="text-[14px] leading-[1.78] text-primary-foreground/50 mb-8 flex-1">
                {svc.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] tracking-[0.12em] uppercase font-semibold text-primary-foreground/40 border border-primary-foreground/[0.12] px-3 py-1 group-hover:text-electric group-hover:border-electric/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-[11px] text-primary-foreground/55 mt-4 tracking-[0.04em]">
                {svc.timeline}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Audit + Retainer footer row */}
      <AnimatedSection delay={0.2}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-border mt-[1px]">
          <div className="bg-surface-dark p-8 md:p-10 flex items-center justify-between gap-6 flex-wrap">
            <div>
              <p className="font-display text-[13px] font-bold tracking-[0.08em] uppercase text-pop mb-1.5">Not sure where to start?</p>
              <p className="text-[15px] text-primary-foreground/65 leading-[1.5]">
                The <strong className="text-primary-foreground">Automation Audit</strong> maps what's manual, what's broken, and what to fix first. One week. No commitment.
              </p>
            </div>
            <a href="#contact" className="flex-shrink-0 inline-flex items-center gap-2 bg-pop text-accent-foreground font-display text-[11px] font-bold tracking-[0.1em] uppercase px-6 py-3 no-underline hover:opacity-90 transition-opacity whitespace-nowrap">
              Start With an Audit →
            </a>
          </div>
          <div className="bg-surface-dark p-8 md:p-10 flex items-center gap-6 flex-wrap">
            <div>
              <p className="font-display text-[13px] font-bold tracking-[0.08em] uppercase text-primary-foreground/55 mb-1.5">Already a client?</p>
              <p className="text-[15px] text-primary-foreground/65 leading-[1.5]">
                Ongoing work is available as a <strong className="text-primary-foreground">monthly retainer</strong>: keep building, refining, and expanding your automation infrastructure. Cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default Services;
