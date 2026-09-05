import { useContext } from "react";
import { VariantContext } from "../context/variantContextValue";

export function useVariant() {
  const ctx = useContext(VariantContext);
  if (!ctx) throw new Error("useVariant must be used within VariantProvider");
  return ctx;
}
