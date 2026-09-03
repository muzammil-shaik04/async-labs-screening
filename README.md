# Attend — Async Labs frontend screening (T5)

**Name:** [Your Name]
**Task:** T5 — Website Frontend Development

## What I built

A marketing site for **Attend**, a product concept built around the
7.5-inch Async Labs display: an always-on screen for developers and
knowledge workers that shows one thing worth a glance — a focus timer, a
build status, a meeting, a day's tasks — instead of a feed. I picked this
angle deliberately and built the whole site around it rather than covering
every example use case from the brief.

The centerpiece is an interactive device mockup, built in CSS/SVG from the
physical product reference (not a static image), that:

- **Switches between four screen templates** (Focus timer, Dev dashboard,
  Meeting status, Calendar & tasks) via accessible, keyboard-navigable tabs.
- **Switches between the mono and tri-color hardware variants** live, so
  every highlight on screen only uses colors that variant's e-ink panel can
  actually produce.
- **Runs a real countdown timer** in the hero, so the display reads as
  "alive" the way the physical product would.

Everything else on the site — value strip, how-it-works, spec sheet with the
real product photo, and a validated waitlist form — is built to support that
one idea rather than pad the page out.

## Stack

React 19 + TypeScript + Vite + Tailwind CSS v4. No UI kit — every component
is hand-built. Fonts: Space Grotesk (display), Inter (body), IBM Plex Mono
(data/labels on the device screens).

## Running it locally

```bash
npm install
npm run dev       # http://localhost:5173
```

Other scripts: `npm run build` (typecheck + production build to `dist/`),
`npm run preview` (serve the production build), `npm run lint` (oxlint).

## Project structure

```
├── src/
│   ├── components/        # Header, Hero, DeviceMockup, section components…
│   │   └── screens/       # The 4 screen templates + shared color logic
│   ├── context/            # Variant (mono/tri-color) React context
│   ├── hooks/               # useCountdown, useReducedMotion, useVariant
│   └── data/                 # Screen template copy
├── public/assets/          # Product photo, favicon
└── screenshots/            # Submission screenshots (01–05)
```

I kept the Vite app at the repo root (rather than nested under `work/`) so
it deploys directly on Vercel/Netlify with zero config — flagging this as a
deliberate deviation from the suggested repo layout.

## Live demo

[add your deployed URL here]

Deploying takes about a minute:
1. Push this repo to GitHub (see below).
2. Go to [vercel.com/new](https://vercel.com/new) (or [app.netlify.com](https://app.netlify.com)), import the repo. Framework preset: **Vite**. No env vars needed.
3. Deploy, then paste the resulting URL above.

## Publishing to GitHub

```bash
cd async-labs-frontend
git remote add origin https://github.com/<you>/async-labs-screening-<YourName>.git
git branch -M main
git push -u origin main
```
(A first commit is already made locally — see `git log`.)

## Accessibility & responsiveness notes

- Verified with axe-core: 0 violations.
- Keyboard: full tab order, visible focus rings, Escape closes the mobile
  menu, arrow keys move between screen-template tabs.
- Respects `prefers-reduced-motion` (disables the crossfade and timer
  re-render pacing).
- Tested at 320px through desktop widths; layouts recompose at the sm/lg
  breakpoints rather than just shrinking.

## What's left / what I'd do next

- The waitlist form validates client-side only (no backend) — noted in the
  UI copy rather than hidden.
- Only one real product photo was available, so the tri-color variant is
  represented on-screen (via the mockup's live color palette) rather than
  with a second physical photo.
- Next: swap the placeholder companion-app screenshots in "How it works"
  for real UI, and add a dark-mode pass for the marketing site itself.

## Tools used

React, TypeScript, Vite, Tailwind CSS v4, oxlint, axe-core (manual
accessibility check), Playwright (manual visual/interaction QA during
development, not included as a test suite).
