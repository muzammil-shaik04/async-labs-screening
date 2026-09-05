import { createContext } from "react";
import type { Variant } from "../types";

export interface VariantContextValue {
  variant: Variant;
  setVariant: (v: Variant) => void;
}

export const VariantContext = createContext<VariantContextValue | null>(null);
