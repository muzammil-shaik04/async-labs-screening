import type { Variant } from "../../types";
import { getScreenPalette } from "./variantColors";

export function StandupScreen({ variant }: { variant: Variant }) {
  const palette = getScreenPalette(variant);

  return (
    <div className="@container flex h-full flex-col justify-between font-mono">
      <div className="flex items-center justify-between">
        <span className="text-[3.2cqw] tracking-wide" style={{ color: "var(--color-ink-soft)" }}>
          RIGHT NOW
        </span>
        <span
          className="rounded-sm px-[1.5cqw] py-[0.8cqw] text-[3.2cqw] font-medium"
          style={{ background: palette.accent, color: "var(--color-paper)" }}
        >
          IN A MEETING
        </span>
      </div>

      <div className="flex flex-col items-start">
        <span className="text-[6.5cqw] leading-tight font-semibold" style={{ color: "var(--color-ink)" }}>
          Design review
        </span>
        <span className="mt-[1cqw] text-[3.4cqw]" style={{ color: "var(--color-ink-soft)" }}>
          Back at 3:00 PM
        </span>
      </div>

      <div className="flex items-center justify-between text-[3.2cqw]" style={{ color: "var(--color-ink-soft)" }}>
        <span>Next: Team sync</span>
        <span>3:30 PM</span>
      </div>
    </div>
  );
}
