import { useRef, useState } from "react";
import { screenTemplates } from "../data/screens";
import { useVariant } from "../hooks/useVariant";
import { DeviceMockup } from "./DeviceMockup";
import type { ScreenId } from "../types";

export function ScreensShowcase() {
  const { variant } = useVariant();
  const [active, setActive] = useState<ScreenId>("focus");
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const activeTemplate = screenTemplates.find((t) => t.id === active)!;

  function onTabKeyDown(e: React.KeyboardEvent, index: number) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const dir = e.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (index + dir + screenTemplates.length) % screenTemplates.length;
    const next = screenTemplates[nextIndex];
    setActive(next.id);
    tabRefs.current[next.id]?.focus();
  }

  return (
    <section id="screens" className="container-page py-16 sm:py-24">
      <div className="mb-10 max-w-xl sm:mb-14">
        <h2 className="text-2xl font-semibold sm:text-3xl" style={{ color: "var(--color-ink)" }}>
          One display. Whatever your workday calls for.
        </h2>
        <p className="mt-3 text-base leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
          Choose what deserves a glance. Switch between layouts to see how
          Attend can fit different moments of the workday.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center lg:gap-16">
        <div className="order-2 lg:order-1">
          <div role="tablist" aria-label="Display templates" className="flex flex-col">
            {screenTemplates.map((t, i) => {
              const isActive = t.id === active;
              return (
                <button
                  key={t.id}
                  ref={(el) => {
                    tabRefs.current[t.id] = el;
                  }}
                  role="tab"
                  id={`tab-${t.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${t.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActive(t.id)}
                  onKeyDown={(e) => onTabKeyDown(e, i)}
                  className="flex items-baseline justify-between gap-4 border-t py-4 text-left transition-colors first:border-t-0 sm:border-t sm:first:border-t"
                  style={{
                    borderColor: "var(--color-line)",
                  }}
                >
                  <span
                    className="text-lg font-medium sm:text-xl"
                    style={{ color: isActive ? "var(--color-signal-red)" : "var(--color-ink)" }}
                  >
                    {t.label}
                  </span>
                </button>
              );
            })}
          </div>

          <p
            id={`panel-${active}`}
            role="tabpanel"
            aria-labelledby={`tab-${active}`}
            className="mt-5 max-w-sm text-sm leading-relaxed sm:text-base"
            style={{ color: "var(--color-ink-soft)" }}
          >
            {activeTemplate.description}
          </p>
        </div>

        <div className="order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none">
          <DeviceMockup screen={active} variant={variant} />
        </div>
      </div>
    </section>
  );
}
