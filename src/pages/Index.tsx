import { useState } from "react";
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

      <AiDemo />
      <FAQ />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
