import AnimatedSection from "./AnimatedSection";

const features = [
  {
    num: "01",
    title: "AI Marketing Automation",
    desc: "Lead capture, nurture sequences, and behavioral triggers, all built as one connected system that runs 24/7.",
  },
  {
    num: "02",
    title: "Operations Workflow Engine",
    desc: "Map your manual processes, eliminate repetitive steps, connect your tools into workflows that run themselves.",
  },
  {
    num: "03",
    title: "Lead Generation & Websites",
    desc: "Targeted outreach, scoring, nurture, CRM sync, and high-converting websites — one pipeline from first click to closed deal.",
  },
];

const About = () => (
  <section id="about" className="section-pad bg-background relative overflow-hidden">
    {/* Gradient orb */}
    <div className="absolute -right-[100px] top-1/3 w-[400px] h-[400px] rounded-full opacity-[0.06] blur-[80px] pointer-events-none"
      style={{ background: "radial-gradient(circle, hsl(var(--pop)), hsl(var(--electric)), transparent)" }}
    />

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
              <span className="text-gradient">actually runs.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="flex flex-col gap-5">
              <p className="text-[16px] leading-[1.85] text-muted-foreground">
                Most marketing systems are held together by manual effort and good intentions. Someone sends the follow-up when they remember to. Someone updates the spreadsheet because nobody else will. The report gets built every Monday because it has to, even though the data already exists in three different tools.
              </p>
              <p className="text-[16px] leading-[1.85] text-muted-foreground">
                <strong className="text-foreground font-semibold">I fix that.</strong> I've spent 10+ years building marketing and operations systems that actually run. AI-powered automation, connected workflows, and infrastructure that doesn't depend on someone remembering to do the thing.
              </p>
              <p className="text-[16px] leading-[1.85] text-muted-foreground">
                <strong className="text-foreground font-semibold">Every engagement is built personally by me.</strong> No junior handoffs, no strategy decks your team has to figure out on their own. You get the system, running, documented, and done.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Right — Feature cards */}
        <div className="flex flex-col gap-4 mt-2">
          {features.map((f, i) => (
            <AnimatedSection key={f.num} delay={0.1 * (i + 1)}>
              <div className="bg-surface-elevated p-8 lg:p-9 border border-border hover:border-pop/30 transition-all cursor-default group card-lift relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-pop transition-colors" />
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
