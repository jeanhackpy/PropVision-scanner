# Palette UX Journal

## 2025-05-18 - Semantic Actions for Agent Contact Cards
**Learning:** Decorative `<button>` elements used as call/contact triggers lack native platform integration and omit accessible phone details for screen reader users.
**Action:** Replace unconfigured contact buttons with semantic `<a href="tel:...">` links with descriptive `aria-label` including the contact name and number, and add visible `focus-visible:ring-2` keyboard focus states.
