## 2025-02-18 - Focus rings on elements with hidden overflow
**Learning:** For components that utilize `overflow-hidden` (such as `SimulatedMap`), standard focus rings or those using `ring-offset` can be clipped by the container bounds, making keyboard navigation indicators invisible. Utilizing Tailwind's `focus-visible:ring-inset` ensures the focus indicator is drawn within the borders of the element.
**Action:** When designing keyboard-accessible interactive containers with hidden overflow, always employ `focus-visible:ring-inset` to guarantee outline visibility without clipping.

## 2025-02-18 - Bottom sheet handle accessibility container
**Learning:** Visual handles (like bottom sheet grab bars) are often styled as thin lines nested inside larger click containers. Applying role, keyboard navigation, and `tabIndex` to the actual interactive container wrapper instead of the decorative child bar ensures a reliable screen reader focus, a much larger click/tap target, and a cleaner implementation.
**Action:** In keyboard-accessible bottom sheets, apply the accessibility attributes (`role="button"`, `tabIndex={0}`, keyboard handlers) directly to the parent clickable region rather than styling the nested indicator with them.
