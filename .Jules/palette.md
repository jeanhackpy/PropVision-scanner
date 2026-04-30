## 2025-05-14 - Accessibility and Keyboard Navigation Sweep
**Learning:** Icon-only buttons and non-semantic interactive elements (like div-based drag handles) significantly hinder keyboard and screen reader accessibility. Adding focus-visible rings and descriptive ARIA labels is a high-impact micro-UX improvement.
**Action:** Always ensure icon-only buttons have `aria-label` and `type="button"`. Convert interactive `div`s to `button`s and provide visual focus indicators using Tailwind's `focus-visible` utilities.
