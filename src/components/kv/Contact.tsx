import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const BOOKING_URL = "https://calendly.com/shelbie-knightvzn/30min";

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
          {/* Left */}
          <div>
            <AnimatedSection>
              <div className="eyebrow mb-7">Let's Connect</div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="font-display text-[clamp(40px,4.5vw,64px)] font-bold leading-[0.98] tracking-[-0.03em] text-foreground mb-6">
                Tell me where
                <br />the time goes.
                <br /><span className="text-gradient">Let's get it back.</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-[16px] leading-[1.85] text-muted-foreground mb-10">
                Tell me what's costing you the most time right now — the follow-up nobody's doing consistently, the tools that should connect but don't. I'll tell you what I'd fix first.
              </p>
            </AnimatedSection>

            {/* Book a Call CTA */}
            <AnimatedSection delay={0.25}>
              <motion.a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-4 px-10 py-5 text-accent-foreground text-[13px] tracking-[0.14em] uppercase font-bold no-underline mb-12 pulse-glow relative overflow-hidden group"
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
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-col gap-6">
                {[
                  { icon: "✉", label: "Email", value: "shelbie@knightvzn.com" },
                  { icon: "📍", label: "Location", value: "Remote · Available Worldwide" },
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

            <AnimatedSection delay={0.35}>
              <div className="mt-11 p-8 border-2 border-pop/20 bg-pop/[0.03] relative">
                <div className="absolute top-0 left-0 w-8 h-1" style={{ background: "var(--gradient-primary)" }} />
                <p className="font-display text-lg font-medium leading-[1.65] text-muted-foreground">
                  "I keep the client list small on purpose. Every engagement I take on, I'm the one building. Not a junior, not an off-the-shelf process."
                </p>
                <cite className="font-sans text-[11px] tracking-[0.16em] uppercase text-pop not-italic block mt-4 font-bold">
                  — Shelbie Knight, Founder
                </cite>
              </div>
            </AnimatedSection>
          </div>

          {/* Form */}
          <AnimatedSection delay={0.15}>
            <div className="flex flex-col gap-5">
              {/* Book a call inline reminder */}
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 border border-electric/20 bg-electric/[0.04] no-underline hover:border-electric/40 hover:bg-electric/[0.08] transition-all group mb-2"
              >
                <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center bg-electric/20 text-electric">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <polyline points="10 14 12 16 16 12" />
                  </svg>
                </div>
                <div>
                  <div className="text-[12px] font-bold text-electric font-display tracking-wide">Prefer to talk first?</div>
                  <div className="text-[12px] text-muted-foreground">Book a free 30-minute strategy call →</div>
                </div>
              </a>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] tracking-[0.18em] uppercase text-pop font-bold">First Name</label>
                  <input type="text" placeholder="Alex" className="bg-background border-2 border-border text-foreground p-3.5 font-sans text-[15px] outline-none focus:border-pop transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] tracking-[0.18em] uppercase text-pop font-bold">Last Name</label>
                  <input type="text" placeholder="Johnson" className="bg-background border-2 border-border text-foreground p-3.5 font-sans text-[15px] outline-none focus:border-pop transition-colors" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] tracking-[0.18em] uppercase text-pop font-bold">Email</label>
                <input type="email" placeholder="alex@yourcompany.com" className="bg-background border-2 border-border text-foreground p-3.5 font-sans text-[15px] outline-none focus:border-pop transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] tracking-[0.18em] uppercase text-pop font-bold">Company Type</label>
                <select className="bg-background border-2 border-border text-foreground p-3.5 font-sans text-[15px] outline-none focus:border-pop transition-colors appearance-none">
                  <option value="">Select one...</option>
                  <option value="startup-preseed">Startup (Pre-seed / Seed)</option>
                  <option value="startup-series">Startup (Series A+)</option>
                  <option value="smb-small">SMB (1–50 employees)</option>
                  <option value="smb-mid">SMB (50–200 employees)</option>
                  <option value="agency">Agency or Consultancy</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] tracking-[0.18em] uppercase text-pop font-bold">Service Interest</label>
                <select className="bg-background border-2 border-border text-foreground p-3.5 font-sans text-[15px] outline-none focus:border-pop transition-colors appearance-none">
                  <option value="">What can I help with?</option>
                  <option value="marketing-automation">AI Marketing Automation Build</option>
                  <option value="ops-automation">Operations Automation & Workflows</option>
                  <option value="lead-gen">AI Lead Generation System</option>
                  <option value="content-seo">AI Content & SEO Pipeline</option>
                  <option value="audit">Marketing & Ops Automation Audit</option>
                  <option value="retainer">Ongoing Automation Retainer</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] tracking-[0.18em] uppercase text-pop font-bold">Tell me about your project</label>
                <textarea
                  placeholder="What manual work is eating your time? Which tools don't talk to each other?"
                  className="bg-background border-2 border-border text-foreground p-3.5 font-sans text-[15px] outline-none focus:border-pop transition-colors resize-none min-h-[120px]"
                />
              </div>
              <button
                onClick={() => setSubmitted(true)}
                disabled={submitted}
                className={`self-start inline-flex items-center gap-3 font-display font-bold text-[12px] tracking-[0.14em] uppercase px-12 py-[18px] border-none cursor-pointer transition-all duration-300 ${
                  submitted
                    ? "bg-[#16a34a] text-accent-foreground pointer-events-none"
                    : "bg-foreground text-background hover:bg-foreground/90 hover:-translate-y-1"
                }`}
              >
                {submitted ? "✓ Message received — Shelbie will be in touch!" : (
                  <>
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
