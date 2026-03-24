import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import heroPhoto from "@/assets/hero-photo.jpg";
import { PersonaContent } from "./personaData";

interface HeroProps {
  content: PersonaContent;
}

const Hero = ({ content }: HeroProps) => {
  const statRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const stats = [
      { target: 10, suffix: "+" },
      { target: 150, suffix: "+" },
      { target: 42, suffix: "" },
    ];
    const timeout = setTimeout(() => {
      statRefs.current.forEach((el, i) => {
        if (!el) return;
        const { target, suffix } = stats[i];
        const dur = 1600;
        const start = performance.now();
        const step = (now: number) => {
          const p = Math.min((now - start) / dur, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.floor(ease * target) + (p === 1 ? suffix : "");
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
    }, 1200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-background">
      <header className="min-h-screen grid grid-cols-1 lg:grid-cols-[1fr_380px] relative overflow-hidden pt-[72px] container-kv">
        {/* Ruled-paper lines */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-50"
          style={{
            backgroundImage: "linear-gradient(to bottom, transparent 71px, rgba(26,26,23,0.04) 71px, rgba(26,26,23,0.04) 72px, transparent 72px)",
            backgroundSize: "100% 72px",
          }}
        />

        {/* Left */}
        <div className="flex flex-col justify-center px-7 md:px-14 lg:px-20 py-16 lg:py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3.5 text-[13px] tracking-[0.18em] uppercase text-foreground mb-9 whitespace-nowrap"
          >
            <span className="w-8 h-px bg-gradient-to-r from-gold to-mid" />
            <span>{content.kicker}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(46px,5.5vw,80px)] font-normal leading-none tracking-[-0.02em] text-foreground"
            dangerouslySetInnerHTML={{ __html: content.h1 }}
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-10 h-px bg-gold my-10"
          />

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg leading-[1.8] text-muted-foreground max-w-[480px]"
            dangerouslySetInnerHTML={{ __html: content.desc }}
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="flex gap-7 items-center mt-12 lg:mt-14 flex-wrap"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2.5 px-9 py-4 bg-foreground text-background text-[11px] tracking-[0.16em] uppercase font-medium no-underline hover:bg-foreground/85 hover:-translate-y-0.5 transition-all group"
            >
              {content.btnPrimary}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-1 transition-transform">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#contact"
              className="text-xs tracking-[0.14em] uppercase font-normal text-muted-foreground no-underline flex items-center gap-2 hover:text-foreground hover:gap-3.5 transition-all"
            >
              {content.btnGhost}
            </a>
          </motion.div>
        </div>

        {/* Right — Photo Panel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.5 }}
          className="relative overflow-hidden bg-pale border-l border-border min-h-[60vh] lg:min-h-screen hidden lg:block"
        >
          <img
            src={heroPhoto}
            alt="Shelbie Knight"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[320px] h-[68%] object-cover object-top"
            width={640}
            height={960}
          />
          {/* Fade overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-pale/90" />

          {/* Stats */}
          <div className="absolute top-9 left-9 flex flex-col gap-6 z-10">
            {[
              { label: "Years Experience" },
              { label: "Systems Built" },
              { label: "Hrs/Wk Avg Saved" },
            ].map((stat, i) => (
              <div key={i}>
                <span
                  ref={(el) => { statRefs.current[i] = el; }}
                  className="font-serif text-[38px] font-normal text-foreground leading-none"
                >
                  0
                </span>
                <div className="text-[12.5px] tracking-[0.16em] uppercase text-muted-foreground mt-1 font-normal">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Vertical text */}
          <span className="absolute right-5 top-1/2 rotate-90 -translate-x-1/2 origin-right text-xs tracking-[0.2em] uppercase text-foreground/30 whitespace-nowrap font-normal">
            KnightVzn · Est. 2015
          </span>

          {/* Identity block */}
          <div className="absolute bottom-8 left-0 right-0 text-center z-10">
            <div className="font-serif text-[22px] font-medium text-foreground tracking-wide">
              Shelbie Knight
            </div>
            <div className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground mt-1">
              Marketing & Operations Automation
            </div>
          </div>
        </motion.div>
      </header>
    </div>
  );
};

export default Hero;
