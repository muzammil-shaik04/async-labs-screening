const useCases = [
  {
    title: "Deep work",
    body: "Focus timer and a do-not-disturb state, visible without touching the keyboard.",
  },
  {
    title: "Daily planning",
    body: "Calendar, tasks and reminders laid out once, instead of reopened all day.",
  },
  {
    title: "Developer workflow",
    body: "Build status and project metrics, kept off the screen you're coding on.",
  },
  {
    title: "Shared spaces",
    body: "Meeting status, room availability or a team announcement, always visible.",
  },
];

export function UseCases() {
  return (
    <section className="rule" style={{ borderColor: "var(--color-line)" }}>
      <div className="container-page py-16 sm:py-24">
        <h2 className="max-w-lg text-2xl font-semibold sm:text-3xl" style={{ color: "var(--color-ink)" }}>
          Made for the moments between tabs.
        </h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-10 lg:grid-cols-4">
          {useCases.map((u) => (
            <div key={u.title}>
              <h3 className="text-base font-semibold sm:text-lg" style={{ color: "var(--color-ink)" }}>
                {u.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed sm:text-base" style={{ color: "var(--color-ink-soft)" }}>
                {u.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
