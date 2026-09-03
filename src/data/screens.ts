import type { ScreenTemplate } from "../types";

export const screenTemplates: ScreenTemplate[] = [
  {
    id: "focus",
    label: "Focus timer",
    description:
      "A countdown and a do-not-disturb flag, sized to read from across the room.",
  },
  {
    id: "dashboard",
    label: "Dev dashboard",
    description:
      "Build status, open pull requests and the metric you actually check by hand.",
  },
  {
    id: "standup",
    label: "Meeting status",
    description:
      "What's next on the calendar, and whether it's safe to knock.",
  },
  {
    id: "calendar",
    label: "Calendar & tasks",
    description: "The day laid out once, instead of re-opened forty times.",
  },
];
