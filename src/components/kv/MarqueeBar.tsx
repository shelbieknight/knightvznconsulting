const items = [
  "Marketing Automation",
  "Operations Workflows",
  "AI Lead Generation",
  "Content & SEO Pipelines",
  "CRM Integration",
  "Client Onboarding",
  "Reporting Automation",
  "Revenue Operations",
];

const MarqueeBar = () => (
  <div className="bg-pale border-y border-border py-4 overflow-hidden relative">
    <div className="flex gap-0 animate-marquee w-max">
      {[...items, ...items].map((item, i) => (
        <div
          key={i}
          className="flex items-center gap-12 whitespace-nowrap text-[11.5px] tracking-[0.2em] uppercase text-muted-foreground font-normal px-12"
        >
          {item}
          <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
        </div>
      ))}
    </div>
  </div>
);

export default MarqueeBar;
