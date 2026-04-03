import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const BOOKING_URL = "https://calendly.com/shelbieknight";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="section-pad bg-background relative overflow-hidden">
      {/* Gradient orb */}
      <div className="absolute right-[5%] top-[15%] w-[350px] h-[350px] rounded-full opacity-[0.05] blur-[80px] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--pop)), hsl(var(--electric)), transparent)" }}
      />

      <div className="container-kv relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-[100px] items-start">
          {/* Left — trust + headline + quote + CTA */}
          <div>
            <AnimatedSection>
              <div className="eyebrow mb-7">Work With Shelbie</div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="font-display text-[clamp(40px,4.5vw,64px)] font-bold leading-[0.98] tracking-[-0.03em] text-foreground mb-6">
                Tell me where
                <br />the time goes.
                <br /><span className="text-gradient">Let's get it back.</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="p-8 border-2 border-pop/20 bg-pop/[0.03] relative mb-10">
                <div className="absolute top-0 left-0 w-8 h-1" style={{ background: "var(--gradient-primary)" }} />
                <div className="inline-flex items-center gap-2 text-[13px] font-semibold text-muted-foreground tracking-[0.08em] uppercase mb-8">
                  <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                  Currently accepting new clients
                </div>
                <p className="font-display text-lg font-medium leading-[1.65] text-muted-foreground">
                  "I keep my client list small on purpose. Every client I take on, I'm the one building. Not a junior, not an off-the-shelf process."
                </p>
                <cite className="font-sans text-[11px] tracking-[0.16em] uppercase text-pop not-italic block mt-4 font-bold">
                  Shelbie Knight, Founder
                </cite>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
              <motion.a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-4 px-10 py-5 text-accent-foreground text-[13px] tracking-[0.14em] uppercase font-bold no-underline mb-4 pulse-glow relative overflow-hidden group"
                style={{ background: "var(--gradient-primary)" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Book a Free Strategy Call
                <svg width="16" height="16" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-1.5 transition-transform duration-300">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.a>
              <p className="text-[13px] text-muted-foreground mt-3.5">
                30 minutes. No pitch. Just an honest look at what I'd fix first.
              </p>
            </AnimatedSection>
          </div>

          {/* Right — simplified form */}
          <div>
            <AnimatedSection delay={0.15}>
              <p className="font-display text-[13px] font-bold tracking-[0.12em] uppercase text-muted-foreground mb-6">
                Prefer to send a message?
              </p>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] tracking-[0.18em] uppercase text-pop font-bold">First Name</label>
                  <input type="text" placeholder="Alex" className="bg-background border-2 border-border text-foreground p-3.5 font-sans text-[15px] outline-none focus:border-pop transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] tracking-[0.18em] uppercase text-pop font-bold">Email</label>
                  <input type="email" placeholder="alex@yourcompany.com" className="bg-background border-2 border-border text-foreground p-3.5 font-sans text-[15px] outline-none focus:border-pop transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] tracking-[0.18em] uppercase text-pop font-bold">What's going on?</label>
                  <textarea
                    placeholder="What manual work is eating your time? Which tools don't talk to each other?"
                    className="bg-background border-2 border-border text-foreground p-3.5 font-sans text-[15px] outline-none focus:border-pop transition-colors resize-y min-h-[110px]"
                  />
                </div>
                <button
                  onClick={() => setSubmitted(true)}
                  disabled={submitted}
                  className={`self-start inline-flex items-center gap-3 font-display font-bold text-[12px] tracking-[0.14em] uppercase px-12 py-[18px] border-none cursor-pointer transition-all duration-300 ${
                    submitted
                      ? "bg-[#16a34a] text-accent-foreground pointer-events-none"
                      : "bg-foreground text-background hover:bg-pop hover:text-accent-foreground hover:-translate-y-0.5"
                  }`}
                >
                  {submitted ? "✓ Message sent. Shelbie will be in touch!" : (
                    <>
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </>
                  )}
                </button>
              </div>

              {/* Contact details */}
              <div className="flex flex-col gap-4 mt-9">
                {[
                  { icon: "✉", label: "Email", value: "shelbie@knightvzn.ai" },
                  { icon: "⚡", label: "Response Time", value: "Within 24 hours" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 items-start group">
                    <div className="w-10 h-10 flex-shrink-0 border-2 border-border flex items-center justify-center text-sm group-hover:border-pop group-hover:bg-pop/10 transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-[11px] tracking-[0.16em] uppercase text-pop font-bold mb-0.5">{item.label}</div>
                      <div className="text-[15px] text-foreground font-medium">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
