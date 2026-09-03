const values = [
  {
    label: "Always visible",
    body: "Keep the information that matters in view, without opening another app or tab to check it.",
  },
  {
    label: "One glance, less checking",
    body: "Laid out around the information you need to see quickly during the workday, not to browse.",
  },
  {
    label: "Up to 30 days on a charge",
    body: "Low-power operation is designed to keep the display running for long periods with minimal charging attention.",
  },
];

export function ValueStrip() {
  return (
    <section className="rule" style={{ borderColor: "var(--color-line)" }}>
      <div className="container-page grid gap-8 py-12 sm:grid-cols-3 sm:gap-6 sm:py-16">
        {values.map((v) => (
          <div key={v.label} className="border-l-2 pl-5" style={{ borderColor: "var(--color-signal-red)" }}>
            <h2 className="text-base font-semibold sm:text-lg" style={{ color: "var(--color-ink)" }}>
              {v.label}
            </h2>
            <p className="mt-2 text-sm leading-relaxed sm:text-base" style={{ color: "var(--color-ink-soft)" }}>
              {v.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
