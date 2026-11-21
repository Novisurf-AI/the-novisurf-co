import Image from "next/image";
import { Logo } from "@/components/Logo";
import { Sidebar } from "@/components/Sidebar";

const CAPABILITIES = [
  { label: "Thinks", body: "Understands what you mean, not just what you type." },
  { label: "Reasons", body: "Weighs context, priorities, and trade-offs on your behalf." },
  { label: "Executes", body: "Follows through on tasks across the tools you already use." },
  { label: "Thinks ahead", body: "Notices what needs doing before you have to ask.", highlight: true },
];

const TEAM: { name: string; initials: string; role: string; photo?: string }[] = [
  { name: "Divi Jaiwanth", initials: "DJ", role: "Co-founder" },
  { name: "Smart Bob", initials: "SB", role: "Co-founder", photo: "/team/smart-bob.jpg" },
  { name: "U San Oo", initials: "SO", role: "Co-founder" },
];

const FOOTER_LINKS = [
  [
    { label: "About", href: "#home" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ],
  [
    { label: "HeySurf", href: "https://heysurf.dev" },
    { label: "Using Surf", href: "https://heysurf.dev/using-surf" },
    { label: "Pricing", href: "https://heysurf.dev/pricing" },
    { label: "Docs", href: "https://heysurf.dev/docs" },
    { label: "Blog", href: "https://heysurf.dev/blog" },
  ],
  [
    { label: "Privacy Policy", href: "https://heysurf.dev/privacy" },
    { label: "Terms of Service", href: "https://heysurf.dev/terms" },
  ],
];

function Section({
  id,
  index,
  children,
  wide = false,
}: {
  id?: string;
  index: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <section id={id} className={`section${wide ? " section--wide" : ""}`}>
      <p className="section__index" aria-hidden="true">
        {index}
      </p>
      <div className="section__body">{children}</div>
    </section>
  );
}

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="shell">
      <div className="guides" aria-hidden="true">
        <span className="guide guide--a" />
        <span className="guide guide--b" />
        <span className="guide guide--c" />
        <span className="guide guide--d" />
        <span className="guide guide--e" />
      </div>

      <Sidebar />

      <main className="main">
        <Section id="home" index="01">
          <h1 className="display">
            Novisurf operates{" "}
            <a className="dotted" href="https://heysurf.dev" target="_blank" rel="noreferrer">
              HeySurf
            </a>
            , the most intelligent personal assistant.
          </h1>
          <div className="prose">
            <p>
              We believe the interaction between agents and humans should feel natural — as effortless as talking to
              someone who already knows you. Computers are now capable of thinking, reasoning, and executing. Yet most
              AI still sits and waits for you to ask.
            </p>
            <p>
              What if we took a step further?{" "}
              <a className="dotted" href="#vision">
                A personal intelligence
              </a>
              , built to offload your mental workload — one that remembers what matters, notices what needs doing,
              and thinks ahead of you.
            </p>
            <p>That&rsquo;s the core vision of HeySurf.</p>
          </div>
          <div className="actions">
            <a className="btn btn--solid" href="https://heysurf.dev" target="_blank" rel="noreferrer">
              Try HeySurf
            </a>
            <a className="btn btn--outline" href="#team">
              Meet the team
            </a>
          </div>
        </Section>

        <Section id="vision" index="02" wide>
          <div className="panel">
            {CAPABILITIES.map((c, i) => (
              <div key={c.label} className={`panel__cell${c.highlight ? " panel__cell--accent" : ""}`}>
                <span className="mono">{String(i + 1).padStart(2, "0")}</span>
                <h3>{c.label}</h3>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="team" index="03" wide>
          <div className="narrow">
            <h2 className="heading">The people behind HeySurf</h2>
            <p className="prose">
              Novisurf is a small team of three co-founders. We design, build, and ship HeySurf ourselves — obsessed
              with making a personal intelligence that quietly takes a little off your mind.
            </p>
          </div>
          <ul className="team">
            {TEAM.map((m, i) => (
              <li key={m.name} className="member">
                <div className={`member__portrait${m.photo ? " member__portrait--photo" : ""}`}>
                  {m.photo ? (
                    <Image
                      className="member__photo"
                      src={m.photo}
                      alt={`Portrait of ${m.name}`}
                      fill
                      sizes="(max-width: 720px) 100vw, 33vw"
                    />
                  ) : (
                    <span className="member__initials">{m.initials}</span>
                  )}
                  <span className="member__index mono">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="member__meta">
                  <h3>{m.name}</h3>
                  <p>{m.role}, Novisurf Co</p>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contact" index="04">
          <h2 className="heading">Say hello</h2>
          <p className="prose">
            We&rsquo;re building a new kind of relationship between people and computers. If you&rsquo;d like to
            work with us, invest, or simply tell us how HeySurf fits into your day, we&rsquo;d love to hear from you.
          </p>
          <div className="actions">
            <a className="btn btn--solid" href="https://heysurf.dev/contact" target="_blank" rel="noreferrer">
              Get in touch
            </a>
          </div>
        </Section>

        <footer className="footer">
          <div className="footer__brand">
            <Logo size={20} />
            <span>Novisurf Co</span>
          </div>
          <div className="footer__cols">
            {FOOTER_LINKS.map((col, i) => (
              <ul key={i}>
                {col.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      {...(l.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <p className="footer__legal mono">© {year} Novisurf Co. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
