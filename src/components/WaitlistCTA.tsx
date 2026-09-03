import { useState, type FormEvent } from "react";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function WaitlistCTA() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!EMAIL_PATTERN.test(trimmed)) {
      setError("Enter a valid email address.");
      return;
    }
    setError(null);
    setSubmitted(true);
  }

  return (
    <section id="waitlist" className="rule" style={{ borderColor: "var(--color-line)" }}>
      <div className="container-page py-16 sm:py-24">
        <div
          className="rounded-2xl px-6 py-12 text-center sm:px-16 sm:py-16"
          style={{ background: "var(--color-ink)" }}
        >
          <h2 className="text-2xl font-semibold sm:text-3xl" style={{ color: "var(--color-paper)" }}>
            Interested in what comes next?
          </h2>
          <p className="mx-auto mt-3 max-w-sm text-sm sm:text-base" style={{ color: "var(--color-paper-deep)" }}>
            Leave your email to hear more about the Attend concept.
          </p>

          {submitted ? (
            <p
              role="status"
              className="mx-auto mt-8 max-w-sm rounded-full px-5 py-3 text-sm font-medium"
              style={{ background: "var(--color-paper)", color: "var(--color-ink)" }}
            >
              Thanks — you're on the list.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <div className="flex-1 text-left">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? "email-error" : undefined}
                  className="w-full rounded-full px-5 py-3 text-sm outline-none sm:text-base"
                  style={{ background: "var(--color-paper)", color: "var(--color-ink)" }}
                />
                {error && (
                  <p id="email-error" className="mt-2 text-xs" style={{ color: "var(--color-signal-red-soft)" }}>
                    {error}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="shrink-0 rounded-full px-6 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5 sm:text-base"
                style={{ background: "var(--color-signal-red)", color: "var(--color-paper)" }}
              >
                Stay updated
              </button>
            </form>
          )}

          <p className="mx-auto mt-4 max-w-sm text-xs" style={{ color: "var(--color-paper-deep)" }}>
            No spam. Just occasional updates about the concept.
          </p>
        </div>
      </div>
    </section>
  );
}
