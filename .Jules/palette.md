# Palette Journal - Property Scanner Investment

## 2026-04-12 - Accessibility for Interactive Maps and Bottom Sheets
**Learning:** Interactive maps implemented as `div` elements lack keyboard accessibility. Using `role="button"`, `tabIndex={0}`, and `onKeyDown` handlers with specific focus-visible rings (especially `ring-inset` for edge elements) is essential for screen reader and keyboard users. Bottom sheet drag handles should be semantic `button` elements to ensure they are discoverable in the tab order.
**Action:** Apply these patterns to `SimulatedMap.tsx` and the bottom sheet in `App.tsx`.
