## 2025-03-05 - Simulated Map Accessibility
**Learning:** Maps in interactive real estate applications are usually only navigable via cursor clicks. Making the simulated map container focusable, adding an keyboard event listener, and mapping Space/Enter keys to drop a pin significantly improves access for keyboard and screen-reader users.
**Action:** Always wrap or assign simulated maps with a proper keyboard-navigable container (with `tabIndex={0}`, `role="application"`, standard `focus-visible` outline rings, and click/keypress handlers mapping to dropping a pin).
