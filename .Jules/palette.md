## 2025-05-15 - Map Keyboard Navigation Pattern
**Learning:** For interactive maps that lack precise keyboard cursor control, providing a "drop at center" shortcut (Enter/Space) significantly improves accessibility for keyboard-only users compared to no interaction at all.
**Action:** Implement `onKeyDown` with center-coordinate pin dropping for all future simulated map components in this repository.

## 2025-05-15 - Focus Rings on Overflow Containers
**Learning:** In this application's layout, many containers use `overflow-hidden`. Standard `ring-offset` focus styles are clipped by these boundaries.
**Action:** Use `focus-visible:ring-inset` to ensure focus indicators remain visible on elements near or at the edge of overflow containers.
