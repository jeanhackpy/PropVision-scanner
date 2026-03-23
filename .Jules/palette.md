## 2025-05-15 - Bottom Sheet Accessibility Pattern
**Learning:** For bottom sheets that minimize or slide without fully closing, using a semantic `<button>` for the drag handle ensures keyboard accessibility and proper focus states. Additionally, disabling the handle when the sheet is already minimized prevents redundant interactions and provides better context for screen readers.
**Action:** Always wrap interactive handles in a `<button>` with a descriptive ARIA label (e.g., 'Réduire la liste') and use `disabled={!activeState}` to manage its interactivity based on the sheet's state.
