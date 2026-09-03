import { useRef, useState } from "react";
import { MobileNav } from "./MobileNav";

const links = [
  { href: "#screens", label: "Screens" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#product", label: "Product" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <header
      className="sticky top-0 z-40 border-b backdrop-blur"
      style={{ borderColor: "var(--color-line)", background: "rgba(234,231,221,0.85)" }}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-block h-3 w-4 rounded-[2px]"
            style={{ background: "var(--color-ink)" }}
          />
          <span className="text-lg font-semibold" style={{ fontFamily: "var(--font-display)" }}>
            Attend
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-[color:var(--color-signal-red)]"
              style={{ color: "var(--color-ink-soft)" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center sm:flex">
          <a
            href="#waitlist"
            className="rounded-full px-4 py-2 text-sm font-medium transition-transform hover:-translate-y-0.5"
            style={{ background: "var(--color-ink)", color: "var(--color-paper)" }}
          >
            Get updates
          </a>
        </div>

        <button
          ref={menuButtonRef}
          className="flex items-center gap-1.5 sm:hidden"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span className="flex flex-col gap-1">
            <span className="block h-0.5 w-5" style={{ background: "var(--color-ink)" }} />
            <span className="block h-0.5 w-5" style={{ background: "var(--color-ink)" }} />
          </span>
        </button>
      </div>

      <MobileNav
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={[...links, { href: "#waitlist", label: "Get updates" }]}
        triggerRef={menuButtonRef}
      />
    </header>
  );
}
