const essentials = [
  { label: "Display", value: "7.5-inch" },
  { label: "Variants", value: "Black & white or tri-color" },
  { label: "Battery", value: "Up to approximately 30 days" },
  { label: "Placement", value: "Desk or wall" },
  { label: "Control", value: "Mobile & desktop companion app" },
  { label: "Content", value: "Custom layouts, templates & scheduled updates" },
];

export function Specs() {
  return (
    <section id="product" className="rule" style={{ borderColor: "var(--color-line)" }}>
      <div className="container-page grid gap-10 py-16 sm:py-24 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-2xl font-semibold sm:text-3xl" style={{ color: "var(--color-ink)" }}>
            The product, at a glance
          </h2>
          <p className="mt-3 max-w-md text-base leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
            Same 7.5-inch display either way — the tri-color variant simply
            adds red to what the panel can show.
          </p>

          <dl className="mt-8 divide-y" style={{ borderColor: "var(--color-line)" }}>
            {essentials.map((s) => (
              <div
                key={s.label}
                className="flex items-baseline justify-between gap-4 border-t py-3 first:border-t-0"
                style={{ borderColor: "var(--color-line)" }}
              >
                <dt className="text-sm" style={{ color: "var(--color-ink-soft)" }}>
                  {s.label}
                </dt>
                <dd className="text-right font-mono text-sm" style={{ color: "var(--color-ink)" }}>
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <figure>
          <div className="overflow-hidden rounded-xl">
            <img
              src="/assets/product-desk.png"
              alt="Attend display standing on a desk on its kickstand, showing a blank screen, beside a plant and a coffee mug"
              className="h-full w-full object-cover"
              width={1007}
              height={841}
              loading="lazy"
            />
          </div>
          <figcaption className="mt-3 text-xs" style={{ color: "var(--color-ink-soft)" }}>
            The current 7.5-inch product reference.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
