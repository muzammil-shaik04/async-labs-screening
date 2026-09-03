import { useCountdown } from "../../hooks/useCountdown";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import type { Variant } from "../../types";
import { getScreenPalette } from "./variantColors";

export function FocusScreen({ variant }: { variant: Variant }) {
  const reducedMotion = useReducedMotion();
  const time = useCountdown(25 * 60, reducedMotion);
  const palette = getScreenPalette(variant);

  return (
    <div className="@container flex h-full flex-col justify-between font-mono">
      <div className="flex items-center justify-between">
        <span
          className="rounded-sm px-[1.5cqw] py-[0.8cqw] text-[3.2cqw] font-medium tracking-wide"
          style={{ background: palette.accent, color: "var(--color-paper)" }}
        >
          DO NOT DISTURB
        </span>
        <span className="text-[3.2cqw]" style={{ color: "var(--color-ink-soft)" }}>
          UNTIL 3:00 PM
        </span>
      </div>

      <div className="flex flex-col items-start">
        <span className="text-[3.2cqw] tracking-wide" style={{ color: "var(--color-ink-soft)" }}>
          DEEP WORK
        </span>
        <span
          className="mt-[0.5cqw] text-[15cqw] leading-none font-semibold"
          style={{ color: "var(--color-ink)", fontVariantNumeric: "tabular-nums" }}
          aria-live="off"
        >
          {time}
        </span>
      </div>

      <div className="flex items-center justify-between text-[3.2cqw]" style={{ color: "var(--color-ink-soft)" }}>
        <span>API integration</span>
        <span>3 of 5 tasks</span>
      </div>
    </div>
  );
}
