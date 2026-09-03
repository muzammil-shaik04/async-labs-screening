import { useEffect, useState } from "react";

/**
 * Counts down from `startSeconds`, looping back to the start when it hits
 * zero. Used to give the device mockup a sense of being "alive" without
 * being distracting — a single number ticking once a second.
 */
export function useCountdown(startSeconds: number, paused = false) {
  const [seconds, setSeconds] = useState(startSeconds);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setSeconds((s) => (s <= 0 ? startSeconds : s - 1));
    }, 1000);
    return () => window.clearInterval(id);
  }, [startSeconds, paused]);

  const mins = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");

  return `${mins}:${secs}`;
}
