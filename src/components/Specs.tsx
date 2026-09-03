const specs = [
  { label: "Display", value: "7.5\" e-ink, mono or tri-color" },
  { label: "Battery", value: "3000 mAh, up to 30 days" },
  { label: "Charging", value: "USB-C, ~2 hours" },
  { label: "Connectivity", value: "Wi-Fi, Bluetooth, USB" },
  { label: "Mounting", value: "Desk stand or wall slot" },
  { label: "Weight", value: "Approx. 300 g" },
];

export function Specs() {
  return (
    <section id="specs" className="rule" style={{ borderColor: "var(--color-line)" }}>
      <div className="container-page grid gap-10 py-16 sm:py-24 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-2xl font-semibold sm:text-3xl" style={{ color: "var(--color-ink)" }}>
            The hardware, plainly
          </h2>
          <p className="mt-3 max-w-md text-base leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
            Same 7.5-inch frame either way — the tri-color unit just adds red
            to what the panel can print.
          </p>

          <dl className="mt-8 divide-y" style={{ borderColor: "var(--color-line)" }}>
            {specs.map((s) => (
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

        <figure className="overflow-hidden rounded-xl">
          <img
            src="/assets/product-desk.jpg"
            alt="Attend display standing on a desk on its kickstand, showing a blank e-ink screen, beside a plant and a coffee mug"
            className="h-full w-full object-cover"
            width={1007}
            height={841}
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
}
