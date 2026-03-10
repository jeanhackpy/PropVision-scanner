## 2026-03-10 - Accessibility & Keyboard Navigation
**Learning:** Interactive elements implemented as `div` or `svg` (like map containers or custom drag handles) are invisible to screen readers and keyboard users unless explicitly given a `role="button"`, `tabIndex={0}`, and appropriate keyboard event listeners. Using `focus-visible` ensures that these accessibility improvements don't negatively impact the visual experience for mouse users.

**Action:** Always use semantic `<button>` elements for interactables when possible. For custom components like maps, ensure `role`, `tabIndex`, `aria-label`, and `onKeyDown` are present. Apply `focus-visible:ring` to provide clear feedback for keyboard navigation.
