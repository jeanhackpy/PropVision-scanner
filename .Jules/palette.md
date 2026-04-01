## 2025-05-15 - Bottom Sheet Accessibility
**Learning:** Bottom sheet handles are often implemented as decorative `div`s with click listeners, making them inaccessible to keyboard and screen reader users. They should be semantic `button` elements with explicit ARIA labels.
**Action:** Always refactor `div` click-handles into `<button>` elements with `focus-visible` styles and context-specific `aria-label` (e.g., 'Réduire la liste') and ensure they are disabled when the primary action is redundant.
