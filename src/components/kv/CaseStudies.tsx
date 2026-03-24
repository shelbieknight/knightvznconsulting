import AnimatedSection from "./AnimatedSection";
import { PersonaContent } from "../kv/personaData";

interface CaseStudiesProps {
  cases: PersonaContent["cases"];
}

const CaseStudies = ({ cases }: CaseStudiesProps) => (
  <section id="work" className="section-pad bg-background">
    <div className="container-kv">
      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-end mb-14 lg:mb-[72px]">
        <div>
          <AnimatedSection>
            <div className="eyebrow mb-7">Results</div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="font-serif text-[clamp(42px,4.5vw,66px)] font-normal leading-[1.06] tracking-[-0.015em] text-foreground">
              What it looks like<br />when it's <em className="italic">done right.</em>
            </h2>
          </AnimatedSection>
        </div>
        <AnimatedSection delay={0.15}>
          <p className="text-[17px] leading-[1.8] text-muted-foreground font-light self-end">
            Real engagements. Specific problems. Measurable outcomes. No hypothetical case studies — these are systems that are running right now.
          </p>
        </AnimatedSection>
      </div>

      {/* Case items */}
      <div className="flex flex-col gap-0.5">
        {cases.map((c, i) => (
          <AnimatedSection key={i} delay={0.1 * i}>
            <div className="grid grid-cols-1 md:grid-cols-[64px_1fr_160px] gap-6 md:gap-12 items-center p-8 md:p-11 bg-pale border-l-2 border-transparent hover:bg-pale/70 hover:border-l-gold transition-all cursor-default group relative">
              {/* Number */}
              <span className="hidden md:block font-serif text-[44px] font-normal text-foreground/10 leading-none group-hover:text-foreground/25 transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Content */}
              <div>
                <span className="text-[12.5px] tracking-[0.14em] uppercase text-muted-foreground border border-border px-2.5 py-1 inline-block mb-2.5 font-normal">
                  {c.tag}
                </span>
                <h3 className="font-serif text-2xl font-medium text-foreground leading-tight mb-2 tracking-[-0.01em]">
                  {c.title}
                </h3>
                <p className="text-[15px] text-muted-foreground leading-[1.65] font-light">
                  {c.desc}
                </p>
              </div>

              {/* Metric */}
              <div className="text-left md:text-right">
                <div className="font-serif text-[46px] font-normal text-foreground leading-none">
                  {c.metric}
                </div>
                <div className="text-[12.5px] tracking-[0.12em] uppercase text-muted-foreground mt-1 font-normal">
                  {c.metricLabel}
                </div>
              </div>

              {/* Arrow */}
              <span className="absolute right-8 md:right-12 top-1/2 -translate-y-1/2 text-gold opacity-0 group-hover:opacity-100 group-hover:right-9 transition-all text-lg">
                →
              </span>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudies;
