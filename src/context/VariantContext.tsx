import { useState, type ReactNode } from "react";
import type { Variant } from "../types";
import { VariantContext } from "./variantContextValue";

export function VariantProvider({ children }: { children: ReactNode }) {
  const [variant, setVariant] = useState<Variant>("signal");

  return (
    <VariantContext.Provider value={{ variant, setVariant }}>
      {children}
    </VariantContext.Provider>
  );
}
