import AnimatedSection from "./AnimatedSection";

const features = [
  {
    num: "01",
    title: "Marketing Automation",
    desc: "Campaigns, nurture sequences, and behavioral triggers built as one connected funnel that runs from first touch to closed deal without you in it.",
  },
  {
    num: "02",
    title: "Operations & Workflows",
    desc: "Connect your tools, eliminate manual work, and build the backend systems that keep your business running without you in the middle of it.",
  },
  {
    num: "03",
    title: "AI Strategy & Integration",
    desc: "Know exactly where AI fits, which tools to use, and how to implement it right so you're not wasting time on the wrong things.",
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
            <div className="eyebrow mb-7">About Shelbie Knight</div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="font-display text-foreground font-bold leading-[0.98] tracking-[-0.03em] text-[clamp(40px,4.5vw,64px)] mb-9">
              Marketing automation and
              <br />operations systems that{" "}
              <span className="text-gradient">actually run.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="flex flex-col gap-5">
              <p className="text-[16px] leading-[1.85] text-muted-foreground">
                <strong className="text-foreground font-semibold">Every project is built personally by me.</strong> No junior handoffs. No strategy decks your team has to figure out alone. You get a system that's running, documented, and done, built by the same person who scoped it.
              </p>
              <p className="text-[16px] leading-[1.85] text-muted-foreground">
                I've spent 10+ years building marketing and operations systems across startups, SMBs, and agencies. I built the first versions of these systems inside a self-funded startup where the budget didn't exist to hire, so automation wasn't a strategy, it was how we kept up. What I've learned is that most manual work isn't a people problem. It's a systems problem. And most growth problems aren't hiring problems either. They're the same thing. The follow-up that doesn't happen, the tools that don't talk, the report nobody has time to build. Those are fixable.
              </p>
              <p className="text-[16px] leading-[1.85] text-muted-foreground">
                <strong className="text-foreground font-semibold">That's what I build.</strong> Connected workflows and infrastructure that runs without someone holding it together.
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
