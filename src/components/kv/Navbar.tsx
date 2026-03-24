import { useState, useEffect } from "react";

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
          : "bg-background border-b-2 border-border"
      }`}
    >
      <a href="/" className="flex flex-col gap-0.5 no-underline">
        <span className="font-serif text-xl font-medium text-foreground tracking-wide">
          KnightVzn
        </span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Automation Studio
        </span>
      </a>

      <ul className="hidden md:flex gap-9 list-none m-0 p-0">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-[11px] uppercase tracking-[0.1em] font-normal text-muted-foreground hover:text-foreground transition-colors no-underline"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="hidden md:inline-block bg-foreground text-background text-[11px] font-semibold uppercase tracking-[0.12em] no-underline px-6 py-3 hover:bg-foreground/85 transition-colors"
      >
        Work With Me
      </a>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-2"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-5 h-px bg-foreground transition-all ${mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
        <span className={`block w-5 h-px bg-foreground transition-all ${mobileOpen ? "opacity-0" : ""}`} />
        <span className={`block w-5 h-px bg-foreground transition-all ${mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-[72px] left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground no-underline"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-foreground text-background text-xs font-semibold uppercase tracking-widest no-underline px-6 py-3 text-center mt-2"
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
