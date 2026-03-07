## 2025-05-15 - [Bottom Sheet Accessibility & Map Interaction]
**Learning:** Transitioning a div-based drag handle to a semantic button is a critical accessibility win for screen readers and keyboard users. Additionally, "simulated" interactive elements like custom SVG maps require `tabIndex` and keyboard event handlers (Enter/Space) to be usable by all users.
**Action:** Always wrap drag handles in buttons with descriptive ARIA labels, and ensure non-standard interactive areas have a logical keyboard fallback action.
