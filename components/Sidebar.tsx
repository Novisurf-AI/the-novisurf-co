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
    const sections = LINKS.map(({ id }) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
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
