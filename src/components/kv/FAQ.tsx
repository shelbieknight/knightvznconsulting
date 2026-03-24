import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";

const faqItems = [
  {
    q: "I'm manually doing follow-up, reporting, and onboarding. Is that really automatable?",
    a: "Yes, and those three specifically come up constantly. Behavioral follow-up sequences, auto-generated reports, deal-triggered onboarding — these are usually the first things built because the ROI is obvious and the time savings show up immediately. Most people who think they're \"not ready for automation\" are already doing 20+ hours a week of work that could be handled automatically. They've just gotten used to it.",
  },
  {
    q: "My team uses 6 different tools and none of them talk to each other. Can that be fixed?",
    a: "This comes up in almost every audit. A CRM that doesn't sync with email. A project tool disconnected from billing. Reports that someone has to export and compile manually every week. The fix is connecting those tools and building workflows that handle the transfers automatically — so the data is just there, where it needs to be, without anyone touching it.",
  },
  {
    q: "How quickly will I actually see a difference?",
    a: "The audit week usually turns up a few things you can do right away — before any major build starts. On the operations side, people typically get meaningful time back within the first couple weeks of having systems running. Marketing takes longer — pipeline results typically show up between 30 and 60 days, depending on your sales cycle.",
  },
  {
    q: "I'm not technical. Will I actually be able to use and maintain this?",
    a: "Non-technical people run these systems all the time. Everything is built on tools your team already uses or can get comfortable with quickly, and every build comes with clear documentation. You don't need to understand how it works under the hood — you just need it to work.",
  },
  {
    q: "I hired an agency before and got a strategy deck. How is this different?",
    a: "Most agencies give you a strategy deck. KnightVzn gives you a system that's already running. By the end of an engagement, the automation is built, tested, documented, and in production. Shelbie handles the build personally — no junior handoffs, no \"here's what you should do.\" Just the thing, done.",
  },
  {
    q: "What if I don't know where to start with automation?",
    a: "That's what the Automation Audit is for. Most people come in knowing something needs to change but having no idea where to start — they just know they're doing a lot of things manually. The audit goes through everything, figures out what's worth automating and what isn't, and puts it in order of impact. You walk away knowing exactly what to do first.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-pad bg-background">
      <div className="container-kv">
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-16 lg:gap-[100px] items-start">
          {/* Left sticky */}
          <div className="lg:sticky lg:top-[100px]">
            <AnimatedSection>
              <div className="eyebrow mb-7">Common Questions</div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="font-serif text-[clamp(38px,4vw,58px)] font-normal leading-[1.08] tracking-[-0.015em] text-foreground mb-6">
                Things people ask<br />before they<br /><em className="italic">reach out.</em>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-base leading-[1.75] text-muted-foreground font-light">
                Answered honestly, without the sales pitch.
              </p>
            </AnimatedSection>
          </div>

          {/* FAQ list */}
          <div className="flex flex-col">
            {faqItems.map((item, i) => (
              <AnimatedSection key={i} delay={0.05 * i}>
                <div className="border-t border-border last:border-b">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full py-6 lg:py-7 flex justify-between items-center gap-5 cursor-pointer bg-transparent border-none text-left group"
                  >
                    <h3 className="font-serif text-xl font-medium text-foreground leading-[1.35] tracking-[-0.01em] group-hover:text-muted-foreground transition-colors">
                      {item.q}
                    </h3>
                    <div
                      className={`w-[30px] h-[30px] flex-shrink-0 border border-border flex items-center justify-center text-foreground text-lg transition-all duration-300 ${
                        openIndex === i ? "rotate-45 border-gold text-gold" : ""
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
                        <p className="pb-7 text-base leading-[1.85] text-muted-foreground font-light">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
