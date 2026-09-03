import type { Variant } from "../../types";

export interface ScreenPalette {
  accent: string;
  accentSoft: string;
  amber: string;
  amberSoft: string;
}

/**
 * Maps the physical display variant to the colors that variant's panel can
 * actually produce: the mono unit renders highlights in ink only, the
 * tri-color unit adds red and amber. Keeping this in one place means the
 * device mockup never shows a color the real hardware couldn't.
 */
export function getScreenPalette(variant: Variant): ScreenPalette {
  if (variant === "signal") {
    return {
      accent: "var(--color-signal-red)",
      accentSoft: "var(--color-signal-red-soft)",
      amber: "var(--color-signal-amber)",
      amberSoft: "var(--color-signal-amber-soft)",
    };
  }
  return {
    accent: "var(--color-ink)",
    accentSoft: "var(--color-paper-deep)",
    amber: "var(--color-ink-soft)",
    amberSoft: "var(--color-paper-raised)",
  };
}
