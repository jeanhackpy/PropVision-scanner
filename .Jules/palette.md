## 2025-05-15 - Improving Keyboard Accessibility for Interactive Elements

**Learning:** Interactive maps and decorative handles (like those on bottom sheets) are often implemented as `div` elements, making them invisible to keyboard users. Converting these to semantic `button` elements or adding appropriate roles/tabIndex/event handlers is crucial for accessibility.

**Action:** Always verify if decorative Visual handles or map containers are keyboard-reachable. Use `group` on a parent button and `group-focus-visible:ring` on decorative inner elements to provide accessible focus indicators without compromising visual design.
