export type Variant = "mono" | "signal";

export type ScreenId = "focus" | "dashboard" | "standup" | "calendar";

export interface ScreenTemplate {
  id: ScreenId;
  label: string;
  description: string;
}
