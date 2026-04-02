## 2026-04-02 - Semantic Interactive Handles
**Learning:** Using 'div' with 'onClick' for interactive UI elements (like bottom sheet handles) excludes keyboard users and doesn't provide semantic feedback to screen readers.
**Action:** Always use semantic '<button>' elements for interactive handles, even if they are purely decorative in appearance, and provide appropriate ARIA labels and focus states.
