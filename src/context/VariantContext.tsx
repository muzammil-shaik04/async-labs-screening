import { createContext, useState, type ReactNode } from "react";
import type { Variant } from "../types";

export interface VariantContextValue {
  variant: Variant;
  setVariant: (v: Variant) => void;
}

export const VariantContext = createContext<VariantContextValue | null>(null);

export function VariantProvider({ children }: { children: ReactNode }) {
  const [variant, setVariant] = useState<Variant>("signal");

  return (
    <VariantContext.Provider value={{ variant, setVariant }}>
      {children}
    </VariantContext.Provider>
  );
}
