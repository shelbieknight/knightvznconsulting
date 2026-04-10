import AnimatedSection from "./AnimatedSection";
import { PersonaContent } from "../kv/personaData";
import { motion } from "framer-motion";

interface CaseStudiesProps {
  cases: PersonaContent["cases"];
}

const CaseStudies = ({ cases }: CaseStudiesProps) => (
  <section id="work" className="section-pad bg-background relative overflow-hidden border-t border-border">
    <div className="container-kv relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-end mb-14 lg:mb-[72px]">
        <div>
          <AnimatedSection>
            <div className="eyebrow mb-7">Client Results</div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="font-display text-[clamp(40px,4.5vw,64px)] font-bold leading-[0.98] tracking-[-0.03em] text-foreground">
              What it looks like
              <br />when it's <span className="text-gradient">done right.</span>
            </h2>
          </AnimatedSection>
        </div>
        <AnimatedSection delay={0.15}>
          <p className="text-[16px] leading-[1.8] text-muted-foreground self-end">
            Real engagements, specific problems, measurable outcomes. No hypothetical case studies. These are systems that are running right now.
          </p>
        </AnimatedSection>
      </div>

      <div className="flex flex-col gap-4">
        {cases.map((c, i) => (
          <AnimatedSection key={i} delay={0.1 * i}>
            <motion.div
              whileHover={{ x: 8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="grid grid-cols-1 md:grid-cols-[64px_1fr_180px] gap-6 md:gap-10 items-center p-8 md:p-10 bg-surface-elevated border border-border hover:border-pop/30 transition-all cursor-default group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-pop transition-colors duration-300" />
              <span className="hidden md:block font-display text-[48px] font-bold text-foreground/[0.06] leading-none group-hover:text-pop/20 transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <span className="text-[11px] tracking-[0.14em] uppercase text-electric font-bold border border-electric/20 bg-electric/[0.06] px-3 py-1 inline-block mb-3">
                  {c.tag}
                </span>
                <h3 className="font-display text-xl font-bold text-foreground leading-tight mb-2 tracking-[-0.01em]">
                  {c.title}
                </h3>
                <p className="text-[14px] text-muted-foreground leading-[1.65]">
                  {c.desc}
                </p>
              </div>
              <div className="text-left md:text-right">
                <div className="font-display text-[52px] font-bold text-pop leading-none metric-glow">
                  {c.metric}
                </div>
                <div className="text-[11px] tracking-[0.14em] uppercase text-muted-foreground mt-1 font-semibold">
                  {c.metricLabel}
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudies;
