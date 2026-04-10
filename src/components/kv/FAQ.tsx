import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";

const BOOKING_URL = "https://calendly.com/shelbieknight";

interface FAQProps {
  faqHint?: string;
}

const faqItems = [
  {
    q: "Can you automate follow-up, reporting, and client onboarding?",
    a: "Yes, and those three specifically come up constantly. Behavioral follow-up sequences, auto-generated reports, deal-triggered onboarding. These are usually the first things built because the ROI is obvious and the time savings show up immediately.",
  },
  {
    q: "How do you connect tools that don't integrate with each other?",
    a: "This comes up in almost every audit. A CRM that doesn't sync with email. A project tool disconnected from billing. The fix is connecting those tools and building workflows that handle the transfers automatically.",
  },
  {
    q: "How long does it take to see results from marketing automation?",
    a: "The audit week usually turns up a few things you can do right away. On the operations side, people typically get meaningful time back within the first couple weeks. Marketing takes longer. Pipeline results typically show up between 30 and 60 days.",
  },
  {
    q: "Do I need to be technical to use the systems you build?",
    a: "Non-technical people run these systems all the time. Everything is built on tools your team already uses or can get comfortable with quickly, and every build comes with clear documentation.",
  },
  {
    q: "What's the difference between KnightVzn and a marketing agency?",
    a: "Most agencies give you a strategy deck. KnightVzn gives you a system that's already running. By the end of the project, the automation is built, tested, documented, and in production.",
  },
  {
    q: "Where should a small business start with automation?",
    a: "Start with the thing you touch every week that takes more than an hour. For most businesses that's follow-up, reporting, or client onboarding. Those three come up in almost every audit. Once you fix the biggest time drain, everything else gets easier to see. If you're not sure which one is costing you the most, that's exactly what the Automation Audit is designed to find out.",
  },
  {
    q: "What happens after the build is done? Who maintains it?",
    a: "Every system is documented so your team can run it without me. Most clients do not need ongoing maintenance because the tools we use are designed for non-technical operators. If something breaks or needs updating, I offer a retainer for ongoing support. But most clients can manage it themselves from day one.",
  },
  {
    q: "What automation tools does KnightVzn use?",
    a: "Zapier, Make, and n8n for workflow automation. HubSpot, Go High Level, and ActiveCampaign for marketing and CRM. Notion, Airtable, and Google Workspace for ops infrastructure. The tools used depend on what you already have. The goal is always to work with your existing stack, not replace it.",
  },
  {
    q: "Is this similar to hiring a fractional CMO?",
    a: "It overlaps in some ways but the focus is different. A fractional CMO typically owns your entire marketing function, manages your team, and sets brand strategy. KnightVzn focuses specifically on building the marketing and operations systems that make execution automatic. Think of it as the infrastructure layer: the automation, workflows, and connected tools that let your team operate without manual overhead. Some clients bring Shelbie in alongside a fractional CMO. Others find the systems work is exactly what they needed instead.",
  },
];

const FAQ = ({ faqHint }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-pad bg-background relative overflow-hidden">
      <div className="container-kv">
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-16 lg:gap-[80px] items-start">
          <div className="lg:sticky lg:top-[140px]">
            <AnimatedSection>
              <div className="eyebrow mb-7">FAQ</div>
            </AnimatedSection>
            {faqHint && (
              <p className="text-[13px] text-primary-foreground/40 italic mt-2 mb-0 min-h-[20px]">
                {faqHint}
              </p>
            )}
            <AnimatedSection delay={0.1}>
              <h2 className="font-display text-[clamp(36px,4vw,56px)] font-bold leading-[0.98] tracking-[-0.03em] text-foreground mb-6">
                Questions people ask
                <br />before they
                <br /><span className="text-gradient">reach out.</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-[15px] leading-[1.75] text-muted-foreground">
                Answered honestly, without the sales pitch.
              </p>
            </AnimatedSection>
          </div>

          <div className="flex flex-col">
            {faqItems.map((item, i) => (
              <AnimatedSection key={i} delay={0.05 * i}>
                <div className="border-t border-border last:border-b">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full py-6 lg:py-7 flex justify-between items-center gap-5 cursor-pointer bg-transparent border-none text-left group"
                  >
                    <h3 className="font-display text-lg font-bold text-foreground leading-[1.35] tracking-[-0.01em] group-hover:text-pop transition-colors">
                      {item.q}
                    </h3>
                    <div
                      className={`w-8 h-8 flex-shrink-0 border-2 flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                        openIndex === i ? "rotate-45 border-pop text-pop bg-pop/10" : "border-border text-foreground"
                      }`}
                    >
                      +
                    </div>
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-7 text-[15px] leading-[1.85] text-muted-foreground">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            ))}

            {/* Still have questions CTA */}
            <AnimatedSection delay={0.3}>
              <div className="mt-10 p-7 bg-pop/[0.06] border border-pop/20 rounded-xl text-center">
                <p className="font-display text-[16px] font-semibold text-foreground mb-2">Still have questions?</p>
                <p className="text-[14px] text-muted-foreground mb-5">Book a free 30-minute call. No pitch, just answers.</p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-pop text-accent-foreground font-display text-[12px] font-bold tracking-[0.08em] uppercase px-6 py-3 rounded-md no-underline hover:opacity-90 transition-opacity"
                >
                  Let's Talk →
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
