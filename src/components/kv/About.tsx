import AnimatedSection from "./AnimatedSection";

const features = [
  {
    num: "01",
    title: "AI Marketing Automation",
    desc: "Lead capture, nurture sequences, behavioral triggers — built as one connected system that runs 24/7.",
  },
  {
    num: "02",
    title: "Operations Workflow Engine",
    desc: "Map your manual processes, eliminate repetitive steps, connect your tools into workflows that run themselves.",
  },
  {
    num: "03",
    title: "AI-Powered Lead Generation",
    desc: "Targeted outreach, scoring, nurture, and CRM sync — one pipeline that fills itself without manual intervention.",
  },
];

const About = () => (
  <section id="about" className="section-pad bg-background relative overflow-hidden">
    {/* Large geometric accent */}
    <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] border-2 border-pop/[0.06] rotate-45 pointer-events-none hidden lg:block" />
    <div className="absolute -right-10 top-1/2 -translate-y-[45%] w-[400px] h-[400px] border border-pop/[0.04] rotate-45 pointer-events-none hidden lg:block" />

    <div className="container-kv">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-[100px] items-start relative z-10">
        {/* Left */}
        <div>
          <AnimatedSection>
            <div className="eyebrow mb-7">About Shelbie</div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="font-display text-foreground font-bold leading-[0.98] tracking-[-0.03em] text-[clamp(40px,4.5vw,64px)] mb-9">
              Ten years of building
              <br />marketing that{" "}
              <span className="text-pop">actually runs.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="flex flex-col gap-5">
              <p className="text-[16px] leading-[1.85] text-muted-foreground">
                Most marketing systems are held together by manual effort and good intentions. Someone sends the follow-up when they remember to. Someone updates the spreadsheet because nobody else will. The report gets built every Monday because it has to — even though the data already exists in three different tools.
              </p>
              <p className="text-[16px] leading-[1.85] text-muted-foreground">
                <strong className="text-foreground font-semibold">I fix that.</strong> I've spent 10+ years building marketing and operations systems that actually run — AI-powered automation, connected workflows, and infrastructure that doesn't depend on someone remembering to do the thing.
              </p>
              <p className="text-[16px] leading-[1.85] text-muted-foreground">
                <strong className="text-foreground font-semibold">Every engagement is built personally by me</strong> — no junior handoffs, no strategy decks your team has to figure out on their own. You get the system, running, documented, and done.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Right — Feature cards */}
        <div className="flex flex-col gap-4 mt-2">
          {features.map((f, i) => (
            <AnimatedSection key={f.num} delay={0.1 * (i + 1)}>
              <div className="bg-surface-elevated p-8 lg:p-9 border border-border hover:border-pop/30 transition-all cursor-default group card-lift relative overflow-hidden">
                {/* Accent corner */}
                <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                  <div className="absolute top-0 right-0 w-[60px] h-[60px] bg-pop/[0.06] -translate-y-1/2 translate-x-1/2 rotate-45 group-hover:bg-pop/[0.15] transition-colors" />
                </div>
                
                <span className="font-mono text-[11px] text-pop font-bold tracking-[0.15em] mb-3 block">
                  {f.num}
                </span>
                <h3 className="font-display text-[22px] font-bold text-foreground mb-2 tracking-[-0.01em] group-hover:text-pop transition-colors">
                  {f.title}
                </h3>
                <p className="text-[15px] leading-[1.72] text-muted-foreground">
                  {f.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
