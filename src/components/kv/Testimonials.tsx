import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    quote: "We were doing every client onboarding manually. Shelbie rebuilt the whole thing in three weeks. It now runs without anyone touching it — and we onboard twice as many clients with the same team.",
    name: "Jamie L.",
    role: "CEO, TechFlow SaaS",
    initials: "JL",
  },
  {
    quote: "I was the one doing all the lead follow-up. Manually. At 11pm. Shelbie built a system that does it better than I ever did — and I haven't touched a follow-up email in four months.",
    name: "Marcus R.",
    role: "Founder, Retail SMB",
    initials: "MR",
  },
  {
    quote: "The audit found 22 hours a week of manual work we'd completely normalized. We genuinely thought we were running lean. Turns out we were just used to it. That's gone now.",
    name: "Sara K.",
    role: "COO, Growth Agency",
    initials: "SK",
  },
];

const Testimonials = () => (
  <section id="testimonials" className="section-pad bg-foreground">
    <div className="container-kv">
      {/* Header */}
      <div className="flex items-end justify-between mb-14 lg:mb-[72px]">
        <div>
          <AnimatedSection>
            <div className="eyebrow mb-7 before:bg-gold text-background/65">Client Voices</div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="font-serif text-[clamp(42px,4.5vw,64px)] font-normal leading-[1.06] tracking-[-0.015em] text-background">
              What clients say<br />about working with <em className="italic">Shelbie.</em>
            </h2>
          </AnimatedSection>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-background/[0.06]">
        {testimonials.map((t, i) => (
          <AnimatedSection key={i} delay={0.1 * i}>
            <div className="bg-foreground p-10 lg:p-12 relative border-b-2 border-transparent hover:border-b-gold hover:bg-foreground/95 transition-all h-full flex flex-col">
              {/* Quote mark */}
              <span className="absolute top-7 left-8 font-serif text-[80px] font-normal leading-[0.8] text-background/[0.06]">
                "
              </span>

              <div className="text-[#D4A853] tracking-[3px] text-sm mb-6">★★★★★</div>

              <p className="font-serif text-xl italic font-normal leading-[1.65] text-background/70 mb-9 relative z-10 flex-1">
                {t.quote}
              </p>

              <div className="flex items-center gap-3.5">
                <div className="w-[42px] h-[42px] rounded-full bg-gradient-to-br from-gold to-gold/30 flex items-center justify-center font-serif text-[15px] font-medium text-foreground flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-[15px] font-medium text-background">{t.name}</div>
                  <div className="text-xs text-background/60 mt-0.5 tracking-wide">{t.role}</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
