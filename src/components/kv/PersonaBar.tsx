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
  <div className="bg-pale border-b border-border sticky top-[72px] z-40">
    <div className="container-kv px-5 md:px-[60px] flex items-center gap-0 overflow-x-auto scrollbar-hide">
      <span className="text-xs tracking-[0.16em] uppercase text-muted-foreground font-normal whitespace-nowrap pr-7 border-r border-border mr-6 leading-[52px]">
        I am a
      </span>
      {personas.map((p) => (
        <button
          key={p.key}
          onClick={() => onPersonaChange(p.key)}
          className={`text-[13px] tracking-[0.08em] uppercase font-normal bg-transparent border-none cursor-pointer px-5 leading-[52px] border-b-2 transition-all whitespace-nowrap ${
            activePersona === p.key
              ? "text-foreground border-foreground font-medium"
              : "text-muted-foreground border-transparent hover:text-foreground"
          }`}
        >
          {p.label}
        </button>
      ))}
    </div>
  </div>
);

export default PersonaBar;
