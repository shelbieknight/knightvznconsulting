import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const opsCards = [
  {
    icon: "⚙️",
    title: "Workflow Automation",
    desc: "Repetitive processes handled automatically: approvals, handoffs, notifications, data entry.",
    tags: ["Zapier", "Make", "n8n", "Custom"],
  },
  {
    icon: "🔗",
    title: "Tool Integration",
    desc: "CRM, project management, billing, email. Connected into one system that syncs automatically.",
    tags: ["CRM Sync", "API", "Webhooks"],
  },
  {
    icon: "📊",
    title: "Automated Reporting",
    desc: "Pull data from every platform, format it, send it. Automatically. Real-time dashboards nobody has to build.",
    tags: ["Dashboards", "KPIs", "Auto-Send"],
  },
  {
    icon: "🚀",
    title: "Client Onboarding",
    desc: "Contract signed → tools provisioned, welcome sent, kickoff scheduled, team notified. One trigger, everything handled.",
    tags: ["Triggers", "Sequences", "Templates"],
  },
  {
    icon: "📱",
    title: "Social Media & Content",
    desc: "LinkedIn, Instagram, Facebook, X, and blog content planned, created, scheduled, and tracked. One system instead of five tabs.",
    tags: ["LinkedIn", "Instagram", "Facebook", "X", "Blog"],
  },
  {
    icon: "📧",
    title: "Email & Calendar Automation",
    desc: "Meeting scheduling, follow-ups, inbox rules, and email sequences handled without lifting a finger. Less admin, more actual work.",
    tags: ["Scheduling", "Follow-Ups", "Sequences", "Inbox Rules"],
  },
];

const OpsCapabilities = () => (
  <section id="ops-capabilities" className="section-pad bg-background relative overflow-hidden">
    <div className="container-kv relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-end mb-16 lg:mb-20">
        <div>
          <AnimatedSection>
            <div className="eyebrow mb-7">Operations</div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="font-display text-[clamp(40px,4.5vw,64px)] font-bold leading-[0.98] tracking-[-0.03em] text-foreground">
              The manual work
              <br />your team has
              <br /><span className="text-gradient">gotten used to.</span>
            </h2>
          </AnimatedSection>
        </div>
        <AnimatedSection delay={0.15}>
          <p className="text-[16px] leading-[1.8] text-muted-foreground self-end">
            Most teams don't realize how much time goes to things that could be handled automatically. The audit finds it. The build fixes it.
          </p>
        </AnimatedSection>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {opsCards.map((card, i) => (
          <AnimatedSection key={card.title} delay={0.1 * i}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-surface-elevated border border-border p-9 lg:p-10 flex flex-col gap-4 hover:border-pop/30 transition-colors cursor-default group h-full relative overflow-hidden"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 bg-pop/10 border border-pop/20 flex items-center justify-center text-lg group-hover:bg-pop/20 transition-all">
                  {card.icon}
                </div>
                <h3 className="font-display text-[21px] font-bold text-foreground leading-tight tracking-[-0.01em] pt-2.5 group-hover:text-pop transition-colors">
                  {card.title}
                </h3>
              </div>
              <p className="text-[15px] leading-[1.78] text-muted-foreground">
                {card.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-1">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] tracking-[0.12em] uppercase font-semibold text-muted-foreground border border-border px-3 py-1 group-hover:text-pop group-hover:border-pop/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default OpsCapabilities;
