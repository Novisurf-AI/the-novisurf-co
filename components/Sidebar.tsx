"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "vision", label: "Vision" },
  { id: "team", label: "Team" },
  { id: "contact", label: "Contact" },
];

export function Sidebar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const sections = LINKS.map(({ id }) => document.getElementById(id)).filter(
        (el): el is HTMLElement => el !== null,
      );
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      const threshold = Math.min(160, window.innerHeight * 0.25);
      let current = sections[0]?.id ?? "home";
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= threshold) current = section.id;
      }
      if (atBottom && sections.length) current = sections[sections.length - 1].id;
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <aside className="sidebar">
      <div className="sidebar__inner">
        <a href="#home" className="brand" aria-label="Novisurf Co home">
          <Logo size={18} />
          <span>Novisurf Co</span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav id="site-nav" className={`nav${open ? " nav--open" : ""}`}>
          <ul>
            {LINKS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={active === id ? "is-active" : undefined}
                  aria-current={active === id ? "true" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn--outline btn--sm" href="https://heysurf.dev" target="_blank" rel="noreferrer">
            HeySurf
          </a>
        </nav>
      </div>
    </aside>
  );
}
