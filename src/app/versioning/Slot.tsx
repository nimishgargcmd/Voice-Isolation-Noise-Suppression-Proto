import { createElement } from "react";
import { useVersionedComponent } from "./useVersionedComponent";

/**
 * Ergonomic resolver for prop-only slots. Renders the active version's
 * implementation, or nothing if none is registered. For slots that forward a
 * ref (e.g. Header), use the `useVersionedComponent` hook directly instead so
 * the ref/props stay typed.
 */
export function Slot({
  name,
  ...props
}: { name: string } & Record<string, unknown>) {
  const Comp = useVersionedComponent(name);
  if (!Comp) return null;
  return createElement(Comp, props);
}
