## 2025-05-15 - [Focus Rings in Overflow-Hidden Containers]
**Learning:** When applying focus indicators to interactive elements with `overflow-hidden` (common for maps or carousels), standard `ring` or `outline` can be clipped. Use `focus-visible:ring-inset` to ensure the focus state remains visible to keyboard users within the component boundaries.
**Action:** Use `ring-inset` for any container-level interactive elements that use `overflow-hidden`.
