"use client";

import { useEffect, useState } from "react";

const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "timeline", label: "Timeline" },
  { id: "projects", label: "Projects" },
  { id: "publications", label: "Publications" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Active section detection
      const sections = nav.map((n) => document.getElementById(n.id));
      const scrollPos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (s && s.offsetTop <= scrollPos) {
          setActive(nav[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-xl border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <a
          href="#home"
          className="font-display text-lg tracking-tight flex items-center gap-2"
        >
          <span className="text-accent">◆</span>
          <span>Joonhyung Kwak</span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`px-3 py-1.5 text-sm tracking-wide transition-colors rounded-full ${
                active === item.id
                  ? "text-accent"
                  : "text-muted hover:text-ink"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-ink p-2"
          aria-label="Menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-bg border-t border-line">
          <nav className="flex flex-col px-6 py-4">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`py-3 text-sm tracking-wide ${
                  active === item.id ? "text-accent" : "text-muted"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
