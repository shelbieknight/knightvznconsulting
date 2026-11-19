import { useEffect } from "react";
import Navbar from "@/components/kv/Navbar";
import Contact from "@/components/kv/Contact";
import Footer from "@/components/kv/Footer";
import AnimatedSection from "@/components/kv/AnimatedSection";

type Project = {
  id: string;
  kind: "Prototype" | "Client build" | "Proposal" | "KnightVzn";
  title: string;
  industry: string;
  summary: string;
  problem: string;
  built: string[];
  decisions: string;
  stack: string;
  demo?: { label: string; href: string };
  source?: string;
};

const prototypes: Project[] = [
  {
    id: "client-update",
    kind: "Prototype",
    title: "Client Status Update Drafter",
    industry: "Legal tech, personal injury",
    summary:
      "Personal injury clients call to ask what is happening with their case. Someone on staff stops, reads the file, and writes an update by hand. This prototype drafts that update from the activity already logged in the case.",
    problem:
      "Case notes are written for attorneys, not clients. Turning them into a clear update takes staff time on every call, and clients who don't speak English often get less detail.",
    built: [
      "A case activity feed where staff pick which events to include",
      "An AI draft in plain English",
      "Tone options: formal, friendly, brief",
      "Translation to Spanish and Arabic",
    ],
    decisions:
      "Staff choose the inputs and review every draft before it goes out. The tool writes; a person decides what the client hears. It sits inside the existing case view so there is no new place to check.",
    stack: "HTML, CSS, JavaScript, AI drafting",
    demo: { label: "Open the prototype", href: "https://shelbieknight.github.io/8am-prototype/" },
    source: "https://github.com/shelbieknight/8am-prototype",
  },
  {
    id: "automation-intake",
    kind: "Prototype",
    title: "AI Automation Intake and ROI Calculator",
    industry: "Manufacturing, multiple business units",
    summary:
      "Large companies hear about automation ideas in hallway conversations and lose them. This prototype gives every team one form to log a manual workflow and puts a dollar figure on it, so the best ideas get to discovery first.",
    problem:
      "Without a shared intake, automation requests arrive in different formats with no cost attached. Leaders can't compare a finance exception process against a supply chain inquiry.",
    built: [
      "An intake form by business unit with guided field help",
      "ROI inputs: hours per week, team size, loaded hourly rate, error rate",
      "An opportunity pipeline view",
      "A deployed and ROI tracking view",
    ],
    decisions:
      "Every field has an example and a plain explanation, like how to calculate a loaded rate, so people outside finance can fill it in. The naming format (object plus action) keeps the pipeline easy to scan.",
    stack: "HTML, CSS, JavaScript, AI scoring",
    demo: { label: "Open the prototype", href: "https://shelbieknight.github.io/valmont-prototype/" },
    source: "https://github.com/shelbieknight/valmont-prototype",
  },
  {
    id: "transformation-hub",
    kind: "Prototype",
    title: "AI Transformation Hub",
    industry: "B2B marketing organization",
    summary:
      "When every marketing team experiments with AI on its own, nobody knows what already exists. This hub catalogs each use case with its owner, the manual process it replaces, and where it stands.",
    problem:
      "Teams rebuild the same tools, retired experiments stay listed, and leadership can't see progress across the org.",
    built: [
      "A use case catalog grouped by team",
      "A before and after for each one, such as UTMs hand-built in spreadsheets versus a guided validator",
      "Owners and status, including retired items and why",
    ],
    decisions:
      "Each entry is written as current state and future state in one line, so the value is clear without a meeting. Every AI output in the catalog keeps a named reviewer.",
    stack: "React, Vite, Tailwind",
    demo: { label: "Open the prototype", href: "https://shelbieknight.github.io/aitransformationhub/" },
    source: "https://github.com/shelbieknight/ai-transformation-hub",
  },
];

const otherWork: Project[] = [
  {
    id: "vendor-marketplace",
    kind: "Proposal",
    title: "Local Event Vendor Marketplace",
    industry: "Events, Las Vegas",
    summary:
      "A full build proposal for a neighborhood-first platform where people find local party vendors and small vendors get a fair listing. Covers the vendor marketplace, community hub, waitlist landing page, a launch event promotion, and ongoing growth support, with a clickable prototype attached.",
    problem: "",
    built: [],
    decisions: "",
    stack: "HTML, JavaScript",
    demo: { label: "Open proposal and prototype", href: "https://shelbieknight.github.io/party-local/" },
  },
  {
    id: "it-services",
    kind: "Client build",
    title: "Managed IT Services Website",
    industry: "IT and cybersecurity, Los Angeles",
    summary:
      "A marketing site for a managed IT and cybersecurity provider. The page leads with the buyer's pain points, then services, industries served, and an FAQ, with calls to action placed where a business owner is ready to book.",
    problem: "",
    built: [],
    decisions: "",
    stack: "React, TypeScript",
    source: "https://github.com/shelbieknight/hornet-tech-launchpad",
  },
  {
    id: "retainer",
    kind: "KnightVzn",
    title: "Campaign Retainer Packages",
    industry: "Offer design",
    summary:
      "A pricing page for business owners who need consistent campaigns but can't afford a full agency. Three tiers (Launch, Promote, Convert) from $1,000 to $2,600 a month, each pairing a landing page with social posting and, at the higher tiers, email and CRM follow-up.",
    problem: "",
    built: [],
    decisions: "",
    stack: "HTML",
    demo: { label: "Open the page", href: "https://shelbieknight.github.io/knightvzn-campaigns/" },
  },
];

const tagClass: Record<Project["kind"], string> = {
  Prototype: "text-pop border-pop/30 bg-pop/[0.06]",
  "Client build": "text-electric border-electric/20 bg-electric/[0.06]",
  Proposal: "text-electric border-electric/20 bg-electric/[0.06]",
  KnightVzn: "text-muted-foreground border-border bg-transparent",
};

const Tag = ({ kind }: { kind: Project["kind"] }) => (
  <span
    className={`text-[11px] tracking-[0.14em] uppercase font-bold border px-3 py-1 inline-block ${tagClass[kind]}`}
  >
    {kind}
  </span>
);

const LinkButton = ({ href, children, primary }: { href: string; children: React.ReactNode; primary?: boolean }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] no-underline px-6 py-3 transition-all ${
      primary
        ? "text-accent-foreground hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-6px_hsl(var(--pop)/0.4)]"
        : "text-foreground border border-border hover:border-pop/40"
    }`}
    style={primary ? { background: "var(--gradient-primary)" } : undefined}
  >
    {children} →
  </a>
);

const Work = () => {
  useEffect(() => {
    document.title = "Work and Prototypes | Shelbie Knight | KnightVzn";
    const hash = window.location.hash;
    if (hash) document.querySelector(hash)?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, []);

  const all = [...prototypes, ...otherWork];

  return (
    <div className="bg-background text-foreground">
      <Navbar />

      {/* Header */}
      <section className="bg-surface-dark px-4 md:px-10 lg:px-20 pt-[120px] md:pt-[160px] pb-16 md:pb-24 border-b border-primary-foreground/[0.06]">
        <div className="container-kv">
          <AnimatedSection>
            <div className="eyebrow mb-7">Work · Prototypes · Builds</div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="font-display text-[clamp(40px,5.5vw,76px)] font-bold leading-[0.98] tracking-[-0.03em] text-primary-foreground max-w-[14ch]">
              See it working <span className="text-gradient">before you buy it.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="text-[17px] leading-[1.8] text-primary-foreground/60 mt-8 max-w-[62ch]">
              When an idea needs buy-in, I build a version you can click through instead of a slide that describes it. Every project here opens as a working demo or a live page.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Index */}
      <section className="px-4 md:px-10 lg:px-20 py-16 md:py-24 bg-background">
        <div className="container-kv">
          <div className="text-[11px] tracking-[0.14em] uppercase text-muted-foreground font-semibold mb-5">
            All projects
          </div>
          <div className="border border-border overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse">
              <tbody>
                {all.map((p) => (
                  <tr key={p.id} className="border-b border-border last:border-b-0">
                    <td className="p-4 md:p-5 align-top">
                      <a href={`#${p.id}`} className="font-display text-[16px] font-bold text-foreground no-underline hover:text-pop transition-colors">
                        {p.title}
                      </a>
                    </td>
                    <td className="p-4 md:p-5 align-top whitespace-nowrap"><Tag kind={p.kind} /></td>
                    <td className="p-4 md:p-5 align-top text-[14px] text-muted-foreground">{p.industry}</td>
                    <td className="p-4 md:p-5 align-top text-[13px] text-muted-foreground font-mono whitespace-nowrap">{p.stack}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Prototype case studies */}
      <section className="px-4 md:px-10 lg:px-20 pb-16 md:pb-24 bg-background">
        <div className="container-kv">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 items-end mb-10 md:mb-14">
            <h2 className="font-display text-[clamp(32px,3.5vw,48px)] font-bold leading-[1] tracking-[-0.02em]">
              Prototype case studies
            </h2>
            <p className="text-[16px] leading-[1.8] text-muted-foreground">
              Each one starts with a slow, manual task and shows the automated version, with a person still approving the output.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {prototypes.map((p) => (
              <article
                key={p.id}
                id={p.id}
                className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 lg:gap-12 p-6 md:p-10 bg-surface-elevated border border-border"
              >
                <aside className="flex flex-col gap-5">
                  <div><Tag kind={p.kind} /></div>
                  <dl className="grid grid-cols-2 lg:grid-cols-1 gap-4 m-0">
                    <div>
                      <dt className="text-[11px] tracking-[0.14em] uppercase text-muted-foreground font-semibold">Industry</dt>
                      <dd className="m-0 mt-1 text-[13px] font-mono text-foreground">{p.industry}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] tracking-[0.14em] uppercase text-muted-foreground font-semibold">Stack</dt>
                      <dd className="m-0 mt-1 text-[13px] font-mono text-foreground">{p.stack}</dd>
                    </div>
                  </dl>
                </aside>
                <div className="min-w-0">
                  <h3 className="font-display text-[clamp(24px,2.5vw,32px)] font-bold leading-tight tracking-[-0.01em]">{p.title}</h3>
                  <p className="text-[16px] leading-[1.75] text-foreground/80 mt-3 max-w-[66ch]">{p.summary}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 border border-border mt-7">
                    <div className="p-5 border-b md:border-b-0 md:border-r border-border">
                      <h4 className="text-[11px] tracking-[0.14em] uppercase text-pop font-bold mb-3">The problem</h4>
                      <p className="text-[14px] leading-[1.65] text-muted-foreground">{p.problem}</p>
                    </div>
                    <div className="p-5 border-b md:border-b-0 md:border-r border-border">
                      <h4 className="text-[11px] tracking-[0.14em] uppercase text-pop font-bold mb-3">What I built</h4>
                      <ul className="pl-4 m-0 flex flex-col gap-1.5 list-disc">
                        {p.built.map((b) => (
                          <li key={b} className="text-[14px] leading-[1.6] text-muted-foreground">{b}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-5">
                      <h4 className="text-[11px] tracking-[0.14em] uppercase text-pop font-bold mb-3">Design decisions</h4>
                      <p className="text-[14px] leading-[1.65] text-muted-foreground">{p.decisions}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-6">
                    {p.demo && <LinkButton href={p.demo.href} primary>{p.demo.label}</LinkButton>}
                    {p.source && <LinkButton href={p.source}>View source</LinkButton>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Other work */}
      <section className="px-4 md:px-10 lg:px-20 pb-20 md:pb-32 bg-background">
        <div className="container-kv">
          <h2 className="font-display text-[clamp(32px,3.5vw,48px)] font-bold leading-[1] tracking-[-0.02em] mb-10 md:mb-14">
            Client and KnightVzn builds
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {otherWork.map((p) => (
              <article
                key={p.id}
                id={p.id}
                className="scroll-mt-24 flex flex-col gap-4 p-6 md:p-8 bg-surface-elevated border border-border"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <Tag kind={p.kind} />
                  <span className="text-[11px] tracking-[0.14em] uppercase text-muted-foreground font-semibold">{p.industry}</span>
                </div>
                <h3 className="font-display text-[22px] font-bold leading-tight">{p.title}</h3>
                <p className="text-[14px] leading-[1.7] text-muted-foreground flex-1">{p.summary}</p>
                <div className="flex flex-wrap gap-3">
                  {p.demo && <LinkButton href={p.demo.href}>{p.demo.label}</LinkButton>}
                  {p.source && <LinkButton href={p.source}>View source</LinkButton>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default Work;
