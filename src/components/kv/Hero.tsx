import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import heroPhoto from "@/assets/shelbie-headshot.jpg";
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
    <div className="bg-surface-dark relative overflow-hidden">
      {/* Gradient orb */}
      <div className="absolute -right-[200px] -top-[200px] w-[700px] h-[700px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--pop-glow)), hsl(var(--electric)), transparent)" }}
      />
      <div className="absolute -left-[100px] bottom-[10%] w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--electric)), transparent)" }}
      />


      <header className="lg:min-h-screen grid grid-cols-1 lg:grid-cols-[1fr_400px] relative pt-[56px] md:pt-[72px] container-kv">
        {/* Left */}
        <div className="flex flex-col justify-start px-5 md:px-14 lg:px-20 py-9 md:py-16 lg:py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 text-[10px] lg:text-[12px] tracking-[0.2em] uppercase font-semibold mb-[18px] lg:mb-10"
          >
            <span className="text-pop">{content.kicker}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(34px,7vw,64px)] lg:text-[clamp(48px,5.4vw,76px)] font-bold leading-[1.0] lg:leading-[0.95] tracking-[-0.03em] text-primary-foreground [&_em]:not-italic [&_em]:text-gradient"
            dangerouslySetInnerHTML={{ __html: content.h1 }}
          />

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-base lg:text-lg leading-[1.7] lg:leading-[1.8] text-primary-foreground/60 max-w-[520px] mt-7 [&_strong]:text-primary-foreground [&_strong]:font-semibold"
            dangerouslySetInnerHTML={{ __html: content.desc }}
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="flex gap-4 lg:gap-6 items-center mt-7 lg:mt-14 flex-wrap"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-3 px-7 lg:px-10 py-3.5 lg:py-4 text-accent-foreground text-[11px] lg:text-[12px] tracking-[0.14em] uppercase font-bold no-underline hover:-translate-y-1 transition-all duration-300 group"
              style={{ background: "var(--gradient-primary)" }}
            >
              {content.btnPrimary}
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-1.5 transition-transform duration-300">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="https://calendly.com/shelbieknight"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] tracking-[0.14em] uppercase font-medium text-primary-foreground/50 lg:text-primary-foreground/50 no-underline flex items-center gap-2 hover:text-electric hover:gap-4 transition-all duration-300"
            >
              {content.btnGhost}
            </a>
          </motion.div>
        </div>

        {/* Right — Photo Panel (desktop only) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden min-h-[60vh] lg:min-h-screen hidden lg:block"
        >
          <img
            src={heroPhoto}
            alt="Shelbie Knight"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[340px] h-[70%] object-cover object-top transition-all duration-700"
            width={640}
            height={960}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/60 to-transparent" />

          {/* Stats */}
          <div className="absolute top-10 left-10 flex flex-col gap-7 z-10">
            {[
              { label: "Years Exp." },
              { label: "Systems Built" },
              { label: "Hrs Saved / Mo / Client" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 + i * 0.15 }}
              >
                <span
                  ref={(el) => { statRefs.current[i] = el; }}
                  className="font-display text-[42px] font-bold text-primary-foreground leading-none metric-glow"
                >
                  0
                </span>
                <div className="text-[11px] tracking-[0.2em] uppercase text-primary-foreground/40 mt-1 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Identity block */}
          <div className="absolute bottom-10 left-0 right-0 text-center z-10">
            <div className="font-display text-[22px] font-bold text-primary-foreground tracking-wide">
              Shelbie Knight
            </div>
            <div className="text-[11px] tracking-[0.22em] uppercase text-pop font-semibold mt-1">
              Marketing & Operations Automation
            </div>
          </div>
        </motion.div>
      </header>

      {/* Mobile hero panel (visible ≤1024px) */}
      <div className="lg:hidden overflow-hidden">
        <img
          src={heroPhoto}
          alt="Shelbie Knight"
          className="w-full max-h-[480px] h-[480px] object-cover object-[50%_0%] block"
        />
        <div className="flex justify-between gap-0 px-5 py-6 bg-surface-dark border-t border-primary-foreground/[0.08] border-b border-b-primary-foreground/[0.08]">
          {[
            { num: "10+", label: "Years Exp." },
            { num: "150+", label: "Systems Built" },
            { num: "42", label: "Hrs Saved / Mo" },
          ].map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-center flex-1 ${i > 0 ? "border-l border-primary-foreground/[0.08]" : ""}`}
            >
              <span className="font-display text-[32px] font-bold text-primary-foreground leading-none metric-glow">
                {stat.num}
              </span>
              <span className="text-[10px] tracking-[0.15em] uppercase text-primary-foreground/40 mt-1.5 font-semibold text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
        <div className="px-5 py-3 pb-5 bg-surface-dark relative z-[1]">
          <div className="font-display text-lg font-bold text-primary-foreground">
            Shelbie Knight
          </div>
          <div className="text-[10px] tracking-[0.18em] uppercase text-pop font-semibold mt-0.5">
            Marketing & Operations Automation
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
