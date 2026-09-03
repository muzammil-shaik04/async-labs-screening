const steps = [
  {
    n: "01",
    title: "Create",
    body: "Start from a template or design a layout from scratch in the companion app.",
  },
  {
    n: "02",
    title: "Customize",
    body: "Pick the data, the type, the density. Fit it to what one glance should tell you.",
  },
  {
    n: "03",
    title: "Schedule",
    body: "Set it to change with the day — a focus screen at 9, a calendar at 5.",
  },
  {
    n: "04",
    title: "Sync",
    body: "Connect Google Calendar, Outlook or Slack status and let it stay current on its own.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="rule" style={{ borderColor: "var(--color-line)" }}>
      <div className="container-page py-16 sm:py-24">
        <h2 className="max-w-lg text-2xl font-semibold sm:text-3xl" style={{ color: "var(--color-ink)" }}>
          Set up once, from your phone or your desk
        </h2>

        <ol className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n}>
              <span
                className="block font-mono text-sm"
                style={{ color: "var(--color-signal-red)" }}
              >
                {s.n}
              </span>
              <h3 className="mt-3 text-lg font-semibold" style={{ color: "var(--color-ink)" }}>
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed sm:text-base" style={{ color: "var(--color-ink-soft)" }}>
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
