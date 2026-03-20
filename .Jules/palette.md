## 2025-03-20 - Focus states on interactive backgrounds

**Learning:** When adding keyboard navigation to large interactive elements like maps, standard focus rings can be hard to see against complex visual backgrounds. Using `focus-visible:ring-inset` ensures the focus indicator is always contained within the element boundaries and remains clearly visible to the user.

**Action:** For large edge-to-edge interactive areas, prefer `focus-visible:ring-4 focus-visible:ring-inset` to provide strong visual feedback without affecting layout or bleeding off-screen.
