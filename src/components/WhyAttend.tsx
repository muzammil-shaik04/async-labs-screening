const mainScreenItems = ["BUILD", "EDITOR", "BROWSER", "TERMINAL"];
const attendItems = ["NEXT MEETING", "FOCUS", "TASKS"];

export function WhyAttend() {
  return (
    <section className="rule" style={{ borderColor: "var(--color-line)" }}>
      <div className="container-page py-16 sm:py-24">
        <p className="text-sm font-medium" style={{ color: "var(--color-signal-red)" }}>
          Why Attend
        </p>
        <h2 className="mt-3 max-w-xl text-2xl font-semibold sm:text-3xl" style={{ color: "var(--color-ink)" }}>
          Your laptop is for doing. Attend is for knowing.
        </h2>
        <p className="mt-3 max-w-md text-base leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
          Keep the information you check repeatedly on a dedicated surface,
          while your main screen stays focused on the work itself.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 sm:gap-8">
          <div className="rounded-xl border p-6" style={{ borderColor: "var(--color-line)" }}>
            <p className="text-xs font-medium tracking-wide" style={{ color: "var(--color-ink-soft)" }}>
              Your main screen
            </p>
            <ul className="mt-4 flex flex-col gap-2 font-mono text-sm" style={{ color: "var(--color-ink)" }}>
              {mainScreenItems.map((item) => (
                <li key={item} className="border-t pt-2 first:border-t-0 first:pt-0" style={{ borderColor: "var(--color-line)" }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-xl border p-6"
            style={{ borderColor: "var(--color-signal-red)", background: "var(--color-paper-raised)" }}
          >
            <p className="text-xs font-medium tracking-wide" style={{ color: "var(--color-signal-red)" }}>
              Attend
            </p>
            <ul className="mt-4 flex flex-col gap-2 font-mono text-sm" style={{ color: "var(--color-ink)" }}>
              {attendItems.map((item) => (
                <li key={item} className="border-t pt-2 first:border-t-0 first:pt-0" style={{ borderColor: "var(--color-line-strong)" }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
