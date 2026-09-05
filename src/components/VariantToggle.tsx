import { useVariant } from "../hooks/useVariant";
import type { Variant } from "../types";

const options: { id: Variant; label: string; swatch: string[] }[] = [
  { id: "mono", label: "Black & white", swatch: ["var(--color-ink)"] },
  {
    id: "signal",
    label: "Black, white & red",
    swatch: ["var(--color-ink)", "var(--color-signal-red)"],
  },
];

export function VariantToggle({ className = "" }: { className?: string }) {
  const { variant, setVariant } = useVariant();

  return (
    <div
      role="group"
      aria-label="Display variant"
      className={`inline-flex items-center gap-1 rounded-full border p-1 ${className}`}
      style={{ borderColor: "var(--color-line)" }}
    >
      {options.map((opt) => {
        const active = opt.id === variant;
        return (
          <button
            key={opt.id}
            type="button"
            aria-pressed={active}
            onClick={() => setVariant(opt.id)}
            className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium transition-colors sm:text-sm ${
              active ? "text-[color:var(--color-paper)]" : "text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-ink)]"
            }`}
            style={{ background: active ? "var(--color-ink)" : "transparent" }}
          >
            <span className="flex -space-x-1">
              {opt.swatch.map((c, i) => (
                <span
                  key={i}
                  aria-hidden="true"
                  className="h-2.5 w-2.5 rounded-full ring-1"
                  style={{ background: c, borderColor: "var(--color-paper)" }}
                />
              ))}
            </span>
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
