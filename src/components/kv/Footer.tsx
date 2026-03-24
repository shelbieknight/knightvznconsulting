const Footer = () => (
  <footer className="bg-foreground px-5 md:px-12 lg:px-20 py-12 lg:py-14 border-t border-background/[0.08]">
    <div className="container-kv grid grid-cols-1 lg:grid-cols-3 items-center gap-10 text-center lg:text-left">
      <a href="/" className="no-underline">
        <div className="font-serif text-xl font-medium text-background tracking-wide">Shelbie Knight</div>
        <div className="text-xs tracking-[0.2em] uppercase text-background/60 mt-0.5 font-normal">
          KnightVzn · Marketing & Operations Automation
        </div>
      </a>
      <p className="text-[12.5px] text-background/60 font-light lg:text-center">
        © 2025 KnightVzn. All rights reserved.<br />
        Marketing Automation · Operations Automation · Remote-first, Global
      </p>
      <nav className="flex gap-8 justify-center lg:justify-end">
        {["About", "Services", "Work", "Contact"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-xs tracking-[0.12em] uppercase text-background/65 hover:text-background no-underline transition-colors font-normal"
          >
            {link}
          </a>
        ))}
      </nav>
    </div>
  </footer>
);

export default Footer;
