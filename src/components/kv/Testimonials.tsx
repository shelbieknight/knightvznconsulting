import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "We were doing every client onboarding manually. Shelbie rebuilt the whole thing in three weeks. It now runs without anyone touching it, and we onboard twice as many clients with the same team.",
    name: "Jamie L.",
    role: "CEO, TechFlow SaaS",
    initials: "JL",
  },
  {
    quote: "I was the one doing all the lead follow-up. Manually. At 11pm. Shelbie built a system that does it better than I ever did, and I haven't touched a follow-up email in four months.",
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
  <section id="testimonials" className="section-pad bg-surface-dark relative overflow-hidden">
    <div className="absolute left-[5%] top-[30%] w-[400px] h-[400px] rounded-full opacity-[0.06] blur-[100px] pointer-events-none"
      style={{ background: "radial-gradient(circle, hsl(var(--electric)), transparent)" }}
    />

    <div className="container-kv relative z-10">
      <div className="flex items-end justify-between mb-14 lg:mb-[72px]">
        <div>
          <AnimatedSection>
            <div className="eyebrow mb-7">Client Voices</div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="font-display text-[clamp(40px,4.5vw,64px)] font-bold leading-[0.98] tracking-[-0.03em] text-primary-foreground">
              What clients say
              <br />about working with <span className="text-gradient">Shelbie.</span>
            </h2>
          </AnimatedSection>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {testimonials.map((t, i) => (
          <AnimatedSection key={i} delay={0.1 * i}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-primary-foreground/[0.04] border border-primary-foreground/[0.08] p-9 lg:p-10 relative hover:border-pop/30 transition-colors h-full flex flex-col"
            >
              <div className="w-8 h-1 mb-6" style={{ background: "var(--gradient-primary)" }} />
              <div className="text-pop tracking-[4px] text-sm mb-5 font-bold">★★★★★</div>
              <p className="text-[15px] leading-[1.75] text-primary-foreground/60 mb-8 relative z-10 flex-1">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 flex items-center justify-center font-display text-sm font-bold text-accent-foreground flex-shrink-0" style={{ background: "var(--gradient-primary)" }}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-[14px] font-bold text-primary-foreground font-display">{t.name}</div>
                  <div className="text-[12px] text-primary-foreground/40 mt-0.5 tracking-wide font-medium">{t.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
