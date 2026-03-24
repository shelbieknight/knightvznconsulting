import AnimatedSection from "./AnimatedSection";

const AiDemo = () => (
  <section id="ai-demo" className="section-pad bg-surface-dark relative overflow-hidden">
    {/* Geometric grid */}
    <div className="absolute inset-0 geo-grid opacity-[0.03]" />
    
    <div className="container-kv relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-[80px] items-center">
        {/* Left */}
        <div>
          <AnimatedSection>
            <div className="eyebrow mb-7">How It Works</div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="font-display text-[clamp(38px,4vw,60px)] font-bold leading-[0.98] tracking-[-0.03em] text-primary-foreground mb-6">
              Audit. Build.
              <br /><span className="text-pop">Launch.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-[16px] leading-[1.85] text-primary-foreground/50 mb-10">
              Every engagement starts with a full audit — I map your marketing funnel, your operations, every manual step your team is taking. Then I build the systems that eliminate the repetitive work. The typical timeline is 2–6 weeks from audit to live systems.
            </p>
          </AnimatedSection>
          
          {/* Steps */}
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col gap-6">
              {[
                { step: "01", label: "Audit", desc: "Map every manual process" },
                { step: "02", label: "Build", desc: "Automate the high-impact work" },
                { step: "03", label: "Launch", desc: "Deploy, document, done" },
              ].map((s) => (
                <div key={s.step} className="flex items-center gap-5 group">
                  <div className="w-12 h-12 border-2 border-pop/30 flex items-center justify-center font-mono text-sm text-pop font-bold group-hover:bg-pop group-hover:text-accent-foreground transition-all">
                    {s.step}
                  </div>
                  <div>
                    <div className="font-display text-primary-foreground font-bold text-sm tracking-wide">{s.label}</div>
                    <div className="text-primary-foreground/40 text-sm">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Terminal */}
        <AnimatedSection delay={0.15}>
          <div className="overflow-hidden border border-primary-foreground/10 shadow-[0_40px_100px_-20px_hsl(var(--pop)/0.15)]">
            {/* Bar */}
            <div className="bg-[#0a0a0a] px-5 py-3.5 flex items-center gap-2 border-b border-primary-foreground/[0.06]">
              <span className="w-3 h-3 rounded-full bg-pop/80" />
              <span className="w-3 h-3 rounded-full bg-primary-foreground/20" />
              <span className="w-3 h-3 rounded-full bg-primary-foreground/20" />
              <span className="flex-1 text-center font-mono text-[11px] text-primary-foreground/30 tracking-[0.1em] font-medium">
                knightvzn — automation-audit
              </span>
            </div>
            {/* Body */}
            <div className="bg-[#050505] p-7 pb-8 font-mono text-[13px] leading-[2.2]">
              <div className="text-primary-foreground/50">
                <span className="text-pop font-bold">$ </span>
                <span className="text-[#4ade80] font-medium">knightvzn audit --full-stack</span>
              </div>
              <div className="text-primary-foreground/20 text-xs">Scanning marketing funnel + operations...</div>
              <div className="text-primary-foreground/50">
                Finding automation gaps... <span className="text-primary-foreground/80 font-medium">21 high-impact</span>
              </div>
              <br />
              <div className="text-primary-foreground/50">
                <span className="text-pop">✓ </span>
                <span className="text-primary-foreground/80 font-medium">Automation Opportunities Found:</span>
              </div>
              <div className="text-primary-foreground/25 text-xs">
                &nbsp;&nbsp;• Lead nurture pipeline: save ~18 hrs/wk
              </div>
              <div className="text-primary-foreground/25 text-xs">
                &nbsp;&nbsp;• Ops workflows: save ~24 hrs/wk
              </div>
              <div className="text-primary-foreground/25 text-xs">
                &nbsp;&nbsp;• Content + reporting: 10× output
              </div>
              <br />
              <div className="text-primary-foreground/50">
                <span className="text-pop font-bold">→ </span>
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
