import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled])';

export function MobileNav({ open, onClose, links, triggerRef }: MobileNavProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const wasOpenRef = useRef(false);

  // Open: move focus in and lock scroll. Close: return focus to the trigger.
  useEffect(() => {
    if (open) {
      wasOpenRef.current = true;
      firstLinkRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      if (wasOpenRef.current) {
        wasOpenRef.current = false;
        triggerRef.current?.focus();
      }
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, triggerRef]);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key !== "Tab" || !panelRef.current) return;

      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
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
          <span className="text-sm font-semibold" style={{ fontFamily: "var(--font-display)" }}>
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
