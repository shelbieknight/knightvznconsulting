import AnimatedSection from "./AnimatedSection";

const opsCards = [
  {
    icon: "⚙️",
    title: "Workflow Automation",
    desc: "Repetitive processes handled automatically — approvals, handoffs, notifications, data entry. Built on the tools your team already uses.",
    tags: ["Zapier", "Make", "n8n", "Custom"],
  },
  {
    icon: "🔗",
    title: "Tool Integration",
    desc: "CRM, project management, billing, email — connected into one system that syncs automatically, no manual data transfers.",
    tags: ["CRM Sync", "API", "Webhooks"],
  },
  {
    icon: "📊",
    title: "Automated Reporting",
    desc: "Pull data from every platform, format it, send it — automatically. Weekly, monthly, real-time dashboards that nobody has to build manually.",
    tags: ["Dashboards", "KPIs", "Auto-Send"],
  },
  {
    icon: "🚀",
    title: "Client Onboarding",
    desc: "Contract signed → tools provisioned, welcome sent, kickoff scheduled, team notified. One trigger, everything handled.",
    tags: ["Triggers", "Sequences", "Templates"],
  },
];

const OpsCapabilities = () => (
  <section id="ops-capabilities" className="section-pad bg-background">
    <div className="container-kv">
      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-end mb-16 lg:mb-20">
        <div>
          <AnimatedSection>
            <div className="eyebrow mb-7">Operations</div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="font-serif text-[clamp(42px,4.5vw,66px)] font-normal leading-[1.06] tracking-[-0.015em] text-foreground">
              The manual work<br />your team has<br /><em className="italic">gotten used to.</em>
            </h2>
          </AnimatedSection>
        </div>
        <AnimatedSection delay={0.15}>
          <p className="text-[17px] leading-[1.8] text-muted-foreground font-light self-end">
            Most teams don't realize how much time goes to things that could be handled automatically. The audit finds it. The build fixes it.
          </p>
        </AnimatedSection>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
        {opsCards.map((card, i) => (
          <AnimatedSection key={card.title} delay={0.1 * i}>
            <div className="bg-background p-10 lg:p-11 flex flex-col gap-4 border-l-2 border-transparent hover:border-l-gold hover:bg-pale transition-all cursor-default group h-full">
              <div className="flex items-start gap-[18px]">
                <div className="w-10 h-10 flex-shrink-0 bg-pale border border-border flex items-center justify-center text-base group-hover:bg-gold/10 group-hover:border-gold transition-all">
                  {card.icon}
                </div>
                <h3 className="font-serif text-[22px] font-medium text-foreground leading-tight tracking-[-0.01em] pt-2">
                  {card.title}
                </h3>
              </div>
              <p className="text-[15px] leading-[1.78] text-muted-foreground font-light">
                {card.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-1">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs tracking-[0.1em] uppercase font-normal text-muted-foreground border border-border px-3 py-1 group-hover:text-foreground group-hover:border-foreground/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default OpsCapabilities;
