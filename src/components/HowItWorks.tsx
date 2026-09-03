const steps = [
  {
    n: "01",
    title: "Choose",
    body: "Start with a template or create a layout for the information you want visible.",
  },
  {
    n: "02",
    title: "Customize",
    body: "Arrange the content around what you actually need to know at a glance.",
  },
  {
    n: "03",
    title: "Schedule",
    body: "Set different content to appear at different times of the day.",
  },
  {
    n: "04",
    title: "Connect",
    body: "Connect supported services and keep information current through automatic updates.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="rule" style={{ borderColor: "var(--color-line)" }}>
      <div className="container-page py-16 sm:py-24">
        <h2 className="max-w-lg text-2xl font-semibold sm:text-3xl" style={{ color: "var(--color-ink)" }}>
          Set it up from the companion app. Let the display do the rest.
        </h2>

        <ol className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n}>
              <span className="block font-mono text-sm" style={{ color: "var(--color-signal-red)" }}>
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
