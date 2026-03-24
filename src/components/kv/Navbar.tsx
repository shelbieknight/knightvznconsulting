import { useState, useEffect } from "react";
import kvLogo from "@/assets/kv-logo.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center justify-between px-5 md:px-12 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-surface-dark border-b border-primary-foreground/[0.06]"
      }`}
    >
      <a href="/" className="flex items-center gap-3 no-underline group">
        <img src={kvLogo} alt="KnightVzn logo" className="w-9 h-9 object-contain invert" />
        <div className="flex flex-col gap-0">
          <span className={`font-display text-lg font-bold tracking-wide ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
            KnightVzn
          </span>
          <span className={`text-[9px] uppercase tracking-[0.25em] ${scrolled ? 'text-muted-foreground' : 'text-primary-foreground/40'} font-medium`}>
            Automation Studio
          </span>
        </div>
      </a>

      <ul className="hidden md:flex gap-8 list-none m-0 p-0">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={`text-[11px] uppercase tracking-[0.12em] font-semibold no-underline transition-colors hover:text-pop ${
                scrolled ? 'text-muted-foreground' : 'text-primary-foreground/50'
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="hidden md:inline-block text-accent-foreground text-[11px] font-bold uppercase tracking-[0.12em] no-underline px-7 py-3 hover:-translate-y-0.5 transition-all duration-300 hover:shadow-[0_8px_30px_-6px_hsl(var(--pop)/0.4)]"
        style={{ background: "var(--gradient-primary)" }}
      >
        Work With Me
      </a>

      <button
        className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-2"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-5 h-0.5 transition-all ${scrolled ? 'bg-foreground' : 'bg-primary-foreground'} ${mobileOpen ? "rotate-45 translate-y-[4px]" : ""}`} />
        <span className={`block w-5 h-0.5 transition-all ${scrolled ? 'bg-foreground' : 'bg-primary-foreground'} ${mobileOpen ? "opacity-0" : ""}`} />
        <span className={`block w-5 h-0.5 transition-all ${scrolled ? 'bg-foreground' : 'bg-primary-foreground'} ${mobileOpen ? "-rotate-45 -translate-y-[4px]" : ""}`} />
      </button>

      {mobileOpen && (
        <div className="absolute top-[72px] left-0 right-0 bg-surface-dark border-b border-primary-foreground/10 p-6 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-widest text-primary-foreground/60 hover:text-pop no-underline font-medium"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-accent-foreground text-xs font-bold uppercase tracking-widest no-underline px-6 py-3 text-center mt-2"
            style={{ background: "var(--gradient-primary)" }}
            onClick={() => setMobileOpen(false)}
          >
            Work With Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
