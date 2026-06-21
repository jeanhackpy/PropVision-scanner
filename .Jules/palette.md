## 2025-06-21 - [Accessible Non-Semantic Interactive Elements]
**Learning:** When using non-semantic elements like `div` for complex interactions (maps, bottom sheet handles), it is critical to provide `role`, `tabIndex`, and `onKeyDown` handlers (supporting Enter and Space) alongside `aria-label` to ensure keyboard and screen reader accessibility. Visual focus indicators should also be carefully implemented using `focus-visible`.
**Action:** Always verify that every `onClick` handler on a non-button element is accompanied by keyboard support and appropriate ARIA attributes.
