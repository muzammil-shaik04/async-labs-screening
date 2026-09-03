import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

export function MobileNav({ open, onClose, links }: MobileNavProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    firstLinkRef.current?.focus();
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 sm:hidden">
      <button
        aria-label="Close menu"
        className="absolute inset-0"
        style={{ background: "rgba(23,23,18,0.4)" }}
        onClick={onClose}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className="absolute inset-y-0 right-0 flex w-[78%] max-w-xs flex-col gap-1 p-6 shadow-2xl"
        style={{ background: "var(--color-paper)" }}
      >
        <div className="mb-6 flex items-center justify-between">
          <span className="font-display text-sm font-semibold" style={{ fontFamily: "var(--font-display)" }}>
            Menu
          </span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-full p-2 text-xl leading-none"
            style={{ color: "var(--color-ink)" }}
          >
            &times;
          </button>
        </div>
        {links.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            ref={i === 0 ? firstLinkRef : undefined}
            onClick={onClose}
            className="border-b py-3 text-base font-medium"
            style={{ borderColor: "var(--color-line)", color: "var(--color-ink)" }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>,
    document.body,
  );
}
