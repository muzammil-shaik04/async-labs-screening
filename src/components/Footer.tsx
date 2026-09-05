export function Footer() {
  return (
    <footer className="rule" style={{ borderColor: "var(--color-line)" }}>
      <div className="container-page flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-block h-3 w-4 rounded-[2px]"
            style={{ background: "var(--color-ink)" }}
          />
          <span className="text-sm font-medium" style={{ color: "var(--color-ink)" }}>
            Attend — Async Labs screening concept
          </span>
        </div>

        <p className="text-xs" style={{ color: "var(--color-ink-soft)" }}>
          Concept site for the Async Labs frontend screening task. Not an
          official Async Labs product page.
        </p>
      </div>
    </footer>
  );
}
