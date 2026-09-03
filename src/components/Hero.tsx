import { useVariant } from "../hooks/useVariant";
import { DeviceMockup } from "./DeviceMockup";
import { VariantToggle } from "./VariantToggle";

export function Hero() {
  const { variant } = useVariant();

  return (
    <section id="top" className="container-page pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
        <div>
          <p className="mb-5 text-sm font-medium" style={{ color: "var(--color-signal-red)" }}>
            A 7.5-inch workspace display
          </p>
          <h1
            className="text-[2.5rem] leading-[1.05] font-semibold sm:text-6xl lg:text-[3.5rem]"
            style={{ color: "var(--color-ink)" }}
          >
            The screen that only shows what deserves your attention.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed sm:text-lg" style={{ color: "var(--color-ink-soft)" }}>
            Attend keeps one glance's worth of information visible beside
            your screen — your focus session, next meeting, tasks or
            project status — so you can spend less time checking and more
            time doing.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#screens"
              className="rounded-full px-6 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5 sm:text-base"
              style={{ background: "var(--color-ink)", color: "var(--color-paper)" }}
            >
              Explore the display
            </a>
            <a
              href="#screens"
              className="text-sm font-medium underline decoration-[var(--color-line-strong)] underline-offset-4 sm:text-base"
              style={{ color: "var(--color-ink)" }}
            >
              See what it can show
            </a>
          </div>

          <div className="mt-10">
            <p className="mb-2 text-xs font-medium tracking-wide" style={{ color: "var(--color-ink-soft)" }}>
              Try the two display variants
            </p>
            <VariantToggle />
          </div>
        </div>

        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <DeviceMockup screen="focus" variant={variant} />
        </div>
      </div>
    </section>
  );
}
