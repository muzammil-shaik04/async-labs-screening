const values = [
  {
    label: "Paper-like clarity",
    body: "E-ink holds its image without a backlight, so it reads like a printed page even in daylight.",
  },
  {
    label: "Zero distractions",
    body: "No notifications, no feed, no app icons. It shows the one thing you set it to show.",
  },
  {
    label: "Up to 30 days a charge",
    body: "The screen only draws power when it changes — a full month before it needs a cable again.",
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
