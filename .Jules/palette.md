## 2025-05-14 - Accessibility for Simulated Interactive Areas
**Learning:** Large custom interactive areas like simulated maps must have explicit `role="button"`, `tabIndex={0}`, and keyboard event handlers (Enter/Space) to be accessible to keyboard users. Using `focus-visible:ring-inset` ensures the focus indicator is visible even if the element is at the edge of the viewport.
**Action:** Always check if custom `onClick` containers need a corresponding keyboard interaction pattern and clear focus state.
