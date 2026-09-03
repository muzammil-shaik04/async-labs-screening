import type { Variant } from "../../types";
import { getScreenPalette } from "./variantColors";

const pulls = [
  { repo: "api", label: "2 open", state: "ok" as const },
  { repo: "web", label: "review", state: "warn" as const },
  { repo: "infra", label: "1 open", state: "ok" as const },
];

export function DashboardScreen({ variant }: { variant: Variant }) {
  const palette = getScreenPalette(variant);

  return (
    <div className="@container flex h-full flex-col justify-between font-mono">
      <div className="flex items-center justify-between">
        <span className="text-[3.2cqw] tracking-wide" style={{ color: "var(--color-ink-soft)" }}>
          MAIN BRANCH · SAMPLE
        </span>
        <span
          className="rounded-sm px-[1.5cqw] py-[0.8cqw] text-[3.2cqw] font-medium"
          style={{ background: palette.accent, color: "var(--color-paper)" }}
        >
          BUILD PASSING
        </span>
      </div>

      <div className="flex items-end gap-[4cqw]">
        <div className="flex flex-col">
          <span className="text-[11cqw] leading-none font-semibold" style={{ color: "var(--color-ink)" }}>
            32%
          </span>
          <span className="mt-[0.8cqw] text-[3cqw]" style={{ color: "var(--color-ink-soft)" }}>
            CPU
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-[11cqw] leading-none font-semibold" style={{ color: "var(--color-ink)" }}>
            68%
          </span>
          <span className="mt-[0.8cqw] text-[3cqw]" style={{ color: "var(--color-ink-soft)" }}>
            RAM
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-[1.2cqw]">
        {pulls.map((p) => (
          <div key={p.repo} className="flex items-center justify-between text-[3.2cqw]">
            <span style={{ color: "var(--color-ink)" }}>{p.repo}</span>
            <span
              style={{
                color: p.state === "warn" ? palette.amber : "var(--color-ink-soft)",
              }}
            >
              {p.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
