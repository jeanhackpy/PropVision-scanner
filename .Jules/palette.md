## 2025-05-22 - [Accessibility Sweep for Icon Buttons]
**Learning:** Icon-only buttons (Menu, Close, FAB) in the main interface lacked descriptive ARIA labels, making them inaccessible to screen reader users despite being visually intuitive.
**Action:** Always ensure icon-only buttons have descriptive `aria-label` attributes and explicit `type="button"` to provide a better experience for non-visual users and prevent default behaviors.
