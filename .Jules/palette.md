## 2025-05-15 - Interactive Map Accessibility
**Learning:** Interactive maps implemented as clickable divs are inaccessible to keyboard and screen reader users. They lack focus indication and a way to trigger events without a mouse.
**Action:** Use `role="button"`, `tabIndex={0}`, and descriptive `aria-label` on map containers. Implement `onKeyDown` (Enter/Space) to trigger a default action like dropping a pin at the center.

## 2025-05-15 - Semantic Bottom Sheet Handles
**Learning:** Custom UI components like bottom sheet drag handles are often non-semantic divs that are skipped by assistive technology.
**Action:** Implement drag handles as `<button>` elements with `aria-label` and use Tailwind `group-focus-visible` to style the inner decorative bar when the parent button is focused via keyboard.

## 2025-05-15 - Critical Viewport verification
**Learning:** Mobile-first applications can appear broken or missing content in default desktop viewports during automated testing if layout logic depends on screen size or specific mobile interactions.
**Action:** Always set a mobile-specific viewport (e.g., 390x844) in Playwright verification scripts to ensure the UI renders correctly and all interactive elements are reachable.
