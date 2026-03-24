import AnimatedSection from "./AnimatedSection";

const services = [
  {
    num: "01",
    title: "AI Marketing Automation Build",
    desc: "Lead capture, nurture sequences, behavioral triggers, and conversion flows built as a single connected system.",
    tags: ["Lead Nurture", "Behavioral Triggers", "Conversion Flows"],
  },
  {
    num: "02",
    title: "Operations Automation & AI Workflows",
    desc: "Maps where time is actually going, then builds workflows that handle it automatically.",
    tags: ["Workflow Design", "Tool Integration", "Process Mapping"],
  },
  {
    num: "03",
    title: "AI Lead Generation & Website Builds",
    desc: "Targeted outreach, lead scoring, nurture sequences, CRM sync, and conversion-ready websites — one end-to-end pipeline from first touch to closed deal.",
    tags: ["Outreach", "Lead Scoring", "CRM Sync", "Website Builds"],
  },
  {
    num: "04",
    title: "AI Content & SEO Pipeline",
    desc: "An AI-assisted pipeline that handles research, drafting, publishing, and tracking.",
    tags: ["Content Ops", "SEO", "AI Drafting"],
  },
  {
    num: "05",
    title: "Marketing & Ops Automation Audit",
    desc: "A full audit mapping what's manual, what's broken, and what's worth fixing first.",
    tags: ["Audit", "Prioritization", "Roadmap"],
  },
  {
    num: "06",
    title: "Ongoing Automation & Growth Retainer",
    desc: "Monthly retainer to keep building, refining, and expanding your automation infrastructure.",
    tags: ["Retainer", "Optimization", "Scaling"],
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
            <div className="eyebrow mb-7">What I Build</div>
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
            Every engagement starts with understanding where time goes. Then I build the systems that get it back — connected, automated, and documented.
          </p>
        </AnimatedSection>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((svc, i) => (
          <AnimatedSection key={svc.num} delay={0.05 * i}>
            <div className="bg-primary-foreground/[0.04] border border-primary-foreground/[0.08] p-9 lg:p-10 relative overflow-hidden group cursor-default hover:border-pop/30 hover:bg-primary-foreground/[0.06] transition-all duration-300 h-full card-lift">
              <div className="absolute top-0 left-0 right-0 h-[3px] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" style={{ background: "var(--gradient-primary)" }} />
              <span className="font-mono text-[12px] text-electric font-bold tracking-[0.15em] mb-7 block">
                {svc.num}
              </span>
              <h3 className="font-display text-xl font-bold text-primary-foreground leading-tight mb-3 tracking-[-0.01em]">
                {svc.title}
              </h3>
              <p className="text-[14px] leading-[1.78] text-primary-foreground/50 mb-8">
                {svc.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] tracking-[0.12em] uppercase font-semibold text-primary-foreground/40 border border-primary-foreground/[0.12] px-3 py-1 group-hover:text-electric group-hover:border-electric/30 transition-colors"
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
