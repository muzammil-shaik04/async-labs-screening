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

/**
 * Hand-built CSS/SVG representation of the fixed 7.5-inch hardware — kept to
 * the product's real proportions and kickstand, with no fabricated ports,
 * buttons or branding added to the physical frame.
 */
export function DeviceMockup({ screen, variant, className = "" }: DeviceMockupProps) {
  const ScreenContent = screenComponents[screen];

  return (
    <div className={`@container relative w-full ${className}`}>
      {/* kickstand, sits behind the frame */}
      <div
        aria-hidden="true"
        className="absolute bottom-[-8%] left-1/2 h-[30%] w-[24%] -translate-x-1/2"
        style={{
          background: "var(--color-ink)",
          clipPath: "polygon(20% 0%, 80% 0%, 96% 100%, 4% 100%)",
          transform: "translateX(-50%) rotate(-1.5deg)",
          zIndex: 0,
        }}
      />

      {/* frame */}
      <div
        className="relative z-10 w-full rounded-[3%] p-[2.6%] shadow-[0_1rem_2.25rem_-0.75rem_rgba(23,23,18,0.35)]"
        style={{ background: "var(--color-ink)", aspectRatio: "5 / 3" }}
      >
        <div
          className="h-full w-full overflow-hidden rounded-[1.5%] p-[4%]"
          style={{ background: "var(--color-paper)" }}
        >
          <div key={screen} className="animate-fade-in h-full w-full">
            <ScreenContent variant={variant} />
          </div>
        </div>
      </div>
    </div>
  );
}
