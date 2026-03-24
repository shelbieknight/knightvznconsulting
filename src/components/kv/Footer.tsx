import kvLogo from "@/assets/kv-logo.png";

const Footer = () => (
  <footer className="bg-surface-dark px-5 md:px-12 lg:px-20 py-12 lg:py-14 border-t border-primary-foreground/[0.06]">
    <div className="container-kv grid grid-cols-1 lg:grid-cols-3 items-center gap-10 text-center lg:text-left">
      <a href="/" className="no-underline flex items-center gap-3 justify-center lg:justify-start">
        <img src={kvLogo} alt="KnightVzn logo" className="w-9 h-9 object-contain invert flex-shrink-0" />
        <div>
          <div className="font-display text-lg font-bold text-primary-foreground tracking-wide">KnightVzn</div>
          <div className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/40 font-medium">
            Marketing & Operations Automation
          </div>
        </div>
      </a>
      <p className="text-[12px] text-primary-foreground/40 lg:text-center font-medium">
        © 2025 KnightVzn. All rights reserved.<br />
        Remote-first, Global
      </p>
      <nav className="flex gap-8 justify-center lg:justify-end">
        {["About", "Services", "Work", "Contact"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-[11px] tracking-[0.12em] uppercase text-primary-foreground/40 hover:text-pop no-underline transition-colors font-semibold"
          >
            {link}
          </a>
        ))}
      </nav>
    </div>
  </footer>
);

export default Footer;
