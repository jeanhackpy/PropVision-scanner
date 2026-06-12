## 2025-06-12 - [Keyboard navigation for maps]
**Learning:** For simulated maps, users benefit from keyboard-accessible markers. Adding role="button" and tabIndex={0} to the map container, along with Enter/Space to drop a pin and Arrow keys for fine-grained movement (2% steps), creates an inclusive "Pin-Point Search" experience.
**Action:** Use keyboard event handlers to update (x, y) coordinates on map components to support users who cannot use a mouse.
