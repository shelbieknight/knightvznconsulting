import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="section-pad bg-background">
      <div className="container-kv">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-[120px] items-start">
          {/* Left */}
          <div>
            <AnimatedSection>
              <div className="eyebrow mb-7">Let's Connect</div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="font-serif text-[clamp(42px,4.5vw,66px)] font-normal leading-[1.06] tracking-[-0.015em] text-foreground mb-6">
                Tell me where<br />the time goes.<br /><em className="italic">Let's get it back.</em>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-[17px] leading-[1.85] text-muted-foreground font-light mb-12">
                Tell me what's costing you the most time right now — the follow-up nobody's doing consistently, the tools that should connect but don't, the report someone rebuilds from scratch every week. I'll tell you what I'd fix first and what the realistic impact looks like.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
              <div className="flex flex-col gap-6">
                <div className="flex gap-[18px] items-start">
                  <div className="w-9 h-9 flex-shrink-0 border border-border flex items-center justify-center text-[13px]">
                    ✉
                  </div>
                  <div>
                    <div className="text-[12.5px] tracking-[0.14em] uppercase text-muted-foreground mb-0.5 font-normal">Email</div>
                    <div className="text-base text-foreground font-normal">shelbie@knightvzn.com</div>
                  </div>
                </div>
                <div className="flex gap-[18px] items-start">
                  <div className="w-9 h-9 flex-shrink-0 border border-border flex items-center justify-center text-[13px]">
                    📍
                  </div>
                  <div>
                    <div className="text-[12.5px] tracking-[0.14em] uppercase text-muted-foreground mb-0.5 font-normal">Location</div>
                    <div className="text-base text-foreground font-normal">Remote · Available Worldwide</div>
                  </div>
                </div>
                <div className="flex gap-[18px] items-start">
                  <div className="w-9 h-9 flex-shrink-0 border border-border flex items-center justify-center text-[13px]">
                    ⚡
                  </div>
                  <div>
                    <div className="text-[12.5px] tracking-[0.14em] uppercase text-muted-foreground mb-0.5 font-normal">Response Time</div>
                    <div className="text-base text-foreground font-normal">Within 24 hours</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="mt-11 p-7 border border-border bg-gold/[0.04]">
                <p className="font-serif text-[19px] italic font-normal leading-[1.65] text-muted-foreground">
                  "I keep the client list small on purpose. Every engagement I take on, I'm the one building. Not a junior, not an off-the-shelf process. If we work together, you get my full attention."
                </p>
                <cite className="font-sans text-xs tracking-[0.14em] uppercase text-gold-dark not-italic block mt-3.5 font-normal">
                  — Shelbie Knight, Founder of KnightVzn
                </cite>
              </div>
            </AnimatedSection>
          </div>

          {/* Form */}
          <AnimatedSection delay={0.15}>
            <div className="flex flex-col gap-[18px]">
              <div className="grid grid-cols-2 gap-3.5">
                <div className="flex flex-col gap-[7px]">
                  <label className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground font-normal">First Name</label>
                  <input type="text" placeholder="Alex" className="bg-background border border-border text-foreground p-3.5 font-sans text-base font-light outline-none focus:border-foreground transition-colors" />
                </div>
                <div className="flex flex-col gap-[7px]">
                  <label className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground font-normal">Last Name</label>
                  <input type="text" placeholder="Johnson" className="bg-background border border-border text-foreground p-3.5 font-sans text-base font-light outline-none focus:border-foreground transition-colors" />
                </div>
              </div>
              <div className="flex flex-col gap-[7px]">
                <label className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground font-normal">Email</label>
                <input type="email" placeholder="alex@yourcompany.com" className="bg-background border border-border text-foreground p-3.5 font-sans text-base font-light outline-none focus:border-foreground transition-colors" />
              </div>
              <div className="flex flex-col gap-[7px]">
                <label className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground font-normal">Company Type</label>
                <select className="bg-background border border-border text-foreground p-3.5 font-sans text-base font-light outline-none focus:border-foreground transition-colors appearance-none">
                  <option value="">Select one...</option>
                  <option value="startup-preseed">Startup (Pre-seed / Seed)</option>
                  <option value="startup-series">Startup (Series A+)</option>
                  <option value="smb-small">SMB (1–50 employees)</option>
                  <option value="smb-mid">SMB (50–200 employees)</option>
                  <option value="agency">Agency or Consultancy</option>
                </select>
              </div>
              <div className="flex flex-col gap-[7px]">
                <label className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground font-normal">Service Interest</label>
                <select className="bg-background border border-border text-foreground p-3.5 font-sans text-base font-light outline-none focus:border-foreground transition-colors appearance-none">
                  <option value="">What can I help with?</option>
                  <option value="marketing-automation">AI Marketing Automation Build</option>
                  <option value="ops-automation">Operations Automation & Workflows</option>
                  <option value="lead-gen">AI Lead Generation System</option>
                  <option value="content-seo">AI Content & SEO Pipeline</option>
                  <option value="audit">Marketing & Ops Automation Audit</option>
                  <option value="retainer">Ongoing Automation Retainer</option>
                </select>
              </div>
              <div className="flex flex-col gap-[7px]">
                <label className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground font-normal">Tell me about your project</label>
                <textarea
                  placeholder="What manual work is eating your time? Which tools don't talk to each other? What would change if you got 20 hours a week back?"
                  className="bg-background border border-border text-foreground p-3.5 font-sans text-base font-light outline-none focus:border-foreground transition-colors resize-none min-h-[120px]"
                />
              </div>
              <button
                onClick={() => setSubmitted(true)}
                disabled={submitted}
                className={`self-start inline-flex items-center gap-2.5 font-sans font-medium text-xs tracking-[0.16em] uppercase px-11 py-[18px] border-none cursor-pointer transition-all ${
                  submitted
                    ? "bg-[#2a5c3a] text-background pointer-events-none"
                    : "bg-foreground text-background hover:bg-foreground/85 hover:-translate-y-0.5"
                }`}
              >
                {submitted ? "✓ Message received — Shelbie will be in touch!" : (
                  <>
                    Send Message
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
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
