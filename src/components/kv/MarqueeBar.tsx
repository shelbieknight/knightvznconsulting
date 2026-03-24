const items = [
  "Marketing Automation",
  "Operations Workflows",
  "AI Lead Generation",
  "Website Builds",
  "Content & SEO Pipelines",
  "Social Media Management",
  "CRM Integration",
  "Client Onboarding",
  "Reporting Automation",
  "Revenue Operations",
];

const MarqueeBar = () => (
  <div className="bg-background border-y border-border py-5 overflow-hidden relative">
    <div className="flex gap-0 animate-marquee w-max">
      {[...items, ...items].map((item, i) => (
        <div
          key={i}
          className="flex items-center gap-10 whitespace-nowrap text-[12px] tracking-[0.18em] uppercase text-muted-foreground font-semibold px-10"
        >
          {item}
          <span className="w-2 h-2 bg-pop flex-shrink-0 rotate-45" />
        </div>
      ))}
    </div>
  </div>
);

export default MarqueeBar;
