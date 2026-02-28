## 2026-02-28 - [Keyboard Map Navigation]
**Learning:** For interactive "visual" components like custom maps, providing a keyboard fallback (e.g., Tab focus + Enter to drop a pin at center) is critical for accessibility and prevents the app from being a "dead end" for non-mouse users.
**Action:** Always ensure non-semantic interactive elements have `tabIndex={0}`, `role="button"`, and an `onKeyDown` handler for basic keyboard interaction.
