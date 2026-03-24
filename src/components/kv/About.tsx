import AnimatedSection from "./AnimatedSection";

const features = [
  {
    label: "Marketing",
    title: "AI Marketing Automation",
    desc: "Lead capture, nurture sequences, behavioral triggers — built as one connected system that runs 24/7.",
  },
  {
    label: "Operations",
    title: "Operations Workflow Engine",
    desc: "Map your manual processes, eliminate repetitive steps, connect your tools into workflows that run themselves.",
  },
  {
    label: "Lead Gen",
    title: "AI-Powered Lead Generation",
    desc: "Targeted outreach, scoring, nurture, and CRM sync — one pipeline that fills itself without manual intervention.",
  },
];

const About = () => (
  <section id="about" className="section-pad bg-background relative overflow-hidden">
    {/* Watermark */}
    <span className="absolute -right-8 top-1/2 -translate-y-1/2 font-serif text-[280px] font-bold text-foreground/[0.025] leading-none pointer-events-none select-none hidden lg:block">
      SK
    </span>

    <div className="container-kv">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-[120px] items-start relative z-10">
        {/* Left */}
        <div>
          <AnimatedSection>
            <div className="eyebrow mb-7">About Shelbie</div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="font-serif text-foreground font-normal leading-[1.06] tracking-[-0.015em] text-[clamp(42px,4.5vw,66px)] mb-9">
              Ten years of building<br />marketing that <em className="italic">actually runs.</em>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="flex flex-col gap-[18px]">
              <p className="text-[17px] leading-[1.85] text-muted-foreground font-light">
                Most marketing systems are held together by manual effort and good intentions. Someone sends the follow-up when they remember to. Someone updates the spreadsheet because nobody else will. The report gets built every Monday because it has to — even though the data already exists in three different tools.
              </p>
              <p className="text-[17px] leading-[1.85] text-muted-foreground font-light">
                <strong className="text-foreground font-medium">I fix that.</strong> I've spent 10+ years building marketing and operations systems that actually run — AI-powered automation, connected workflows, and infrastructure that doesn't depend on someone remembering to do the thing. For startups, SMBs, marketing teams, and agencies.
              </p>
              <p className="text-[17px] leading-[1.85] text-muted-foreground font-light">
                <strong className="text-foreground font-medium">Every engagement is built personally by me</strong> — no junior handoffs, no strategy decks your team has to figure out on their own. You get the system, running, documented, and done.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Right — Feature cards */}
        <div className="flex flex-col gap-0.5 mt-2">
          {features.map((f, i) => (
            <AnimatedSection key={f.label} delay={0.1 * (i + 1)}>
              <div className="bg-pale p-8 lg:p-9 border-l-2 border-transparent hover:border-l-gold hover:bg-pale/80 transition-all cursor-default group">
                <div className="text-[12.5px] tracking-[0.16em] uppercase text-gold-dark font-medium mb-2.5">
                  {f.label}
                </div>
                <h3 className="font-serif text-[22px] font-medium text-foreground mb-2 tracking-[-0.01em]">
                  {f.title}
                </h3>
                <p className="text-[15px] leading-[1.72] text-muted-foreground font-light">
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
