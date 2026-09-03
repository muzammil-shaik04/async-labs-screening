import type { Variant } from "../../types";
import { getScreenPalette } from "./variantColors";

const tasks = [
  { label: "Design review", done: true },
  { label: "API integration", done: true },
  { label: "Write tests", done: false },
  { label: "Ship changelog", done: false },
];

export function CalendarScreen({ variant }: { variant: Variant }) {
  const palette = getScreenPalette(variant);

  return (
    <div className="@container flex h-full font-mono">
      <div className="flex w-[34%] flex-col justify-between pr-[3cqw]" style={{ borderRight: `1px solid var(--color-paper-deep)` }}>
        <div>
          <span className="block text-[3cqw] tracking-wide" style={{ color: "var(--color-ink-soft)" }}>
            WED
          </span>
          <span className="block text-[10cqw] font-semibold leading-none" style={{ color: "var(--color-ink)" }}>
            27
          </span>
          <span className="block text-[3cqw]" style={{ color: "var(--color-ink-soft)" }}>
            MAY
          </span>
        </div>
        <span
          className="w-fit rounded-sm px-[1.5cqw] py-[0.8cqw] text-[2.8cqw] font-medium"
          style={{ background: palette.amberSoft, color: "var(--color-ink)" }}
        >
          4 EVENTS
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-center gap-[2.2cqw] pl-[4cqw]">
        {tasks.map((t) => (
          <div key={t.label} className="flex items-center gap-[2.5cqw]">
            <span
              className="inline-block h-[3cqw] w-[3cqw] shrink-0 rounded-[0.6cqw]"
              style={{
                background: t.done ? palette.accent : "transparent",
                border: `0.4cqw solid ${t.done ? palette.accent : "var(--color-ink-soft)"}`,
              }}
            />
            <span
              className="text-[3.4cqw]"
              style={{
                color: t.done ? "var(--color-ink-soft)" : "var(--color-ink)",
                textDecoration: t.done ? "line-through" : "none",
              }}
            >
              {t.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
