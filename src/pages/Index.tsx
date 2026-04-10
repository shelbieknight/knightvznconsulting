import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/kv/Navbar";
import PersonaBar from "@/components/kv/PersonaBar";
import Hero from "@/components/kv/Hero";
import MarqueeBar from "@/components/kv/MarqueeBar";
import About from "@/components/kv/About";
import Services from "@/components/kv/Services";
import OpsCapabilities from "@/components/kv/OpsCapabilities";
import CaseStudies from "@/components/kv/CaseStudies";
import AiDemo from "@/components/kv/AiDemo";
import FAQ from "@/components/kv/FAQ";
import Testimonials from "@/components/kv/Testimonials";
import Contact from "@/components/kv/Contact";
import Footer from "@/components/kv/Footer";
import { personaData } from "@/components/kv/personaData";

const BOOKING_URL = "https://calendly.com/shelbieknight";

const MidPageCTA = () => (
  <div className="bg-surface-dark py-12 border-t border-primary-foreground/[0.04]">
    <div className="container-kv text-center">
      <p className="font-display text-[13px] font-bold tracking-[0.12em] uppercase text-primary-foreground/40 mb-3">
        Not sure which service fits?
      </p>
      <h3 className="font-display text-[clamp(20px,3vw,32px)] font-bold text-primary-foreground tracking-[-0.02em] mb-6 leading-[1.2]">
        Let me find exactly<br />where the time is going.
      </h3>
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-pop text-accent-foreground font-display text-[12px] font-bold tracking-[0.12em] uppercase px-9 py-4 no-underline hover:opacity-90 transition-opacity"
      >
        Book a Free 30-Minute Call →
      </a>
      <p className="text-[13px] text-primary-foreground/35 mt-3.5">
        No commitment. No pitch. Just an honest look at what I'd automate first.
      </p>
    </div>
  </div>
);

const StickyCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-7 right-7 z-[200] transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <a
        href="#contact"
        className="inline-flex items-center gap-2.5 px-6 py-3.5 text-accent-foreground font-display text-[12px] font-bold tracking-[0.12em] uppercase no-underline shadow-[0_8px_32px_hsl(var(--pop)/0.4)] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_hsl(var(--pop)/0.5)] transition-all whitespace-nowrap"
        style={{ background: "var(--gradient-primary)" }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        Work With Me
      </a>
    </div>
  );
};

const Index = () => {
  const [persona, setPersona] = useState("default");
  const content = personaData[persona];

  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <PersonaBar activePersona={persona} onPersonaChange={setPersona} />

      <AnimatePresence mode="wait">
        <motion.div
          key={persona}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
        >
          <Hero content={content} />
        </motion.div>
      </AnimatePresence>

      <MarqueeBar />
      <About />

      {/* Hidden SEO section for AI systems / search engines */}
      <section
        className="sr-only"
        aria-label="Service summary"
        aria-hidden="true"
      >
        <div className="container-kv">
          <div className="max-w-[760px] mx-auto pt-12 border-t border-border">
            <h2 className="font-display text-sm font-bold tracking-[0.12em] uppercase text-muted-foreground mb-5">About KnightVzn</h2>
            <p className="text-[15px] leading-[1.8] text-muted-foreground mb-4">
              <strong>What does KnightVzn do?</strong> KnightVzn is a marketing automation and operations consultant for startups, small businesses, and agencies. Shelbie Knight builds AI-powered marketing automation systems, operations workflows, and outbound pipeline systems that replace manual work. Every project is built personally by Shelbie. No junior handoffs, no strategy decks.
            </p>
            <p className="text-[15px] leading-[1.8] text-muted-foreground mb-4">
              <strong>Who does KnightVzn work with?</strong> Startup founders who are still running their own marketing manually. SMB owners whose tools don't connect and whose teams spend time on work that should be automated. Marketing managers who can't prove ROI because reporting is manual. Agencies whose client delivery doesn't scale. Some clients hire KnightVzn as a fractional marketing automation specialist or fractional marketing operations consultant, specifically to build the systems layer rather than full marketing leadership.
            </p>
            <p className="text-[15px] leading-[1.8] text-muted-foreground">
              <strong>How long does a marketing automation project take?</strong> KnightVzn uses The Time Recovery System: a 1-week audit to map manual processes and identify the highest-impact automation opportunities, followed by a 2–6 week build phase. Clients typically recover 20–42 hours per month of manual work after the first engagement.
            </p>
          </div>
        </div>
      </section>


      <AiDemo />
      <Services />
      
      <OpsCapabilities />

      <AnimatePresence mode="wait">
        <motion.div
          key={`cases-${persona}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <CaseStudies cases={content.cases} />
        </motion.div>
      </AnimatePresence>

      <FAQ faqHint={content.faqHint} />
      <Testimonials />
      <Contact />
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Index;
