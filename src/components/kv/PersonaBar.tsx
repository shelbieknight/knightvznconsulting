interface PersonaBarProps {
  activePersona: string;
  onPersonaChange: (key: string) => void;
}

const personas = [
  { key: "default", label: "Everyone" },
  { key: "startup", label: "Startup Founder" },
  { key: "smbs", label: "SMB Owner" },
  { key: "marketing", label: "Marketing Manager" },
  { key: "agencies", label: "Agency" },
];

const PersonaBar = ({ activePersona, onPersonaChange }: PersonaBarProps) => (
  <div className="bg-surface-dark border-b border-primary-foreground/[0.06] sticky top-[56px] md:top-[72px] z-40">
    <div className="container-kv px-3 md:px-[60px] flex items-center gap-0 overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <span className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-primary-foreground/30 font-semibold whitespace-nowrap pr-4 md:pr-6 border-r border-primary-foreground/10 mr-3 md:mr-5 leading-[42px] md:leading-[52px]">
        I am a
      </span>
      {personas.map((p) => (
        <button
          key={p.key}
          onClick={() => onPersonaChange(p.key)}
          className={`text-[11px] md:text-[12px] tracking-[0.08em] uppercase font-semibold bg-transparent border-none cursor-pointer px-3 md:px-5 leading-[42px] md:leading-[52px] border-b-[3px] transition-all whitespace-nowrap ${
            activePersona === p.key
              ? "text-pop border-pop"
              : "text-primary-foreground/40 border-transparent hover:text-primary-foreground/70"
          }`}
        >
          {p.label}
        </button>
      ))}
    </div>
  </div>
);

export default PersonaBar;
