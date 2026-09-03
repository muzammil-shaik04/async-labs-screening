import type { ScreenId, Variant } from "../types";
import { FocusScreen } from "./screens/FocusScreen";
import { DashboardScreen } from "./screens/DashboardScreen";
import { StandupScreen } from "./screens/StandupScreen";
import { CalendarScreen } from "./screens/CalendarScreen";

interface DeviceMockupProps {
  screen: ScreenId;
  variant: Variant;
  className?: string;
}

const screenComponents: Record<ScreenId, React.ComponentType<{ variant: Variant }>> = {
  focus: FocusScreen,
  dashboard: DashboardScreen,
  standup: StandupScreen,
  calendar: CalendarScreen,
};

export function DeviceMockup({ screen, variant, className = "" }: DeviceMockupProps) {
  const ScreenContent = screenComponents[screen];

  return (
    <div className={`@container relative w-full ${className}`}>
      {/* kickstand, sits behind the frame */}
      <div
        aria-hidden="true"
        className="absolute bottom-[-10%] left-1/2 h-[34%] w-[26%] -translate-x-1/2"
        style={{
          background: "var(--color-ink)",
          clipPath: "polygon(18% 0%, 82% 0%, 100% 100%, 0% 100%)",
          transform: "translateX(-50%) rotate(-2deg)",
          zIndex: 0,
        }}
      />

      {/* frame */}
      <div
        className="relative z-10 w-full rounded-[3.5%] p-[3%] pb-[6%] shadow-[0_1.5rem_3rem_-1rem_rgba(23,23,18,0.45)]"
        style={{ background: "var(--color-ink)", aspectRatio: "5 / 3" }}
      >
        <div
          className="h-full w-full overflow-hidden rounded-[2%] p-[4%]"
          style={{ background: "var(--color-paper)" }}
        >
          <div key={screen} className="animate-fade-in h-full w-full">
            <ScreenContent variant={variant} />
          </div>
        </div>

        <span
          className="absolute bottom-[1.6%] left-1/2 -translate-x-1/2 text-[2.6cqw] font-medium tracking-[0.2em]"
          style={{ color: "var(--color-paper-deep)", fontFamily: "var(--font-display)" }}
        >
          ASYNC LABS
        </span>
      </div>
    </div>
  );
}
