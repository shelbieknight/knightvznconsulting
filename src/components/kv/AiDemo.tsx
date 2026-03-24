import AnimatedSection from "./AnimatedSection";

const AiDemo = () => (
  <section id="ai-demo" className="section-pad bg-pale relative">
    <div className="container-kv">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-[100px] items-center">
        {/* Left */}
        <div>
          <AnimatedSection>
            <div className="eyebrow mb-7">How It Works</div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="font-serif text-[clamp(38px,4vw,60px)] font-normal leading-[1.08] tracking-[-0.015em] text-foreground mb-6">
              Audit. Build.<br /><em className="italic">Launch.</em>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-[17px] leading-[1.85] text-muted-foreground font-light mb-10">
              Every engagement starts with a full audit — I map your marketing funnel, your operations, every manual step your team is taking. Then I build the systems that eliminate the repetitive work, connect the disconnected tools, and create automation infrastructure that runs without you managing it. The typical timeline is 2–6 weeks from audit to live systems.
            </p>
          </AnimatedSection>
        </div>

        {/* Terminal */}
        <AnimatedSection delay={0.15}>
          <div className="rounded-[10px] overflow-hidden shadow-[0_32px_80px_rgba(26,26,23,0.14),0_0_0_1px_rgba(26,26,23,0.08)]">
            {/* Bar */}
            <div className="bg-[#1e1e1a] px-[18px] py-3.5 flex items-center gap-[7px] border-b border-background/[0.06]">
              <span className="w-[11px] h-[11px] rounded-full bg-[#ff5f56]" />
              <span className="w-[11px] h-[11px] rounded-full bg-[#ffbd2e]" />
              <span className="w-[11px] h-[11px] rounded-full bg-[#27c93f]" />
              <span className="flex-1 text-center font-mono text-xs text-background/50 tracking-[0.08em]">
                knightvzn — automation-audit
              </span>
            </div>
            {/* Body */}
            <div className="bg-[#141412] p-7 pb-8 font-mono text-[13.5px] leading-[2]">
              <div className="text-background/55">
                <span className="text-gold">$ </span>
                <span className="text-[#7ec8a4] font-normal">knightvzn audit --full-stack</span>
              </div>
              <div className="text-background/28 text-xs">Scanning marketing funnel + operations...</div>
              <div className="text-background/55">
                Finding automation gaps... <span className="text-background/80">21 high-impact</span>
              </div>
              <br />
              <div className="text-background/55">
                <span className="text-gold">✓ </span>
                <span className="text-background/80">Automation Opportunities Found:</span>
              </div>
              <div className="text-background/28 text-xs">
                &nbsp;&nbsp;• Lead nurture pipeline: save ~18 hrs/wk
              </div>
              <div className="text-background/28 text-xs">
                &nbsp;&nbsp;• Ops workflows: save ~24 hrs/wk
              </div>
              <div className="text-background/28 text-xs">
                &nbsp;&nbsp;• Content + reporting: 10× output
              </div>
              <br />
              <div className="text-background/55">
                <span className="text-gold">→ </span>
                Building 90-day roadmap
                <span className="terminal-cursor ml-1" />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default AiDemo;
