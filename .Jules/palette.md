## 2025-05-15 - [Accessible Map Navigation]
**Learning:** For interactive map components that lack a standard HTML input equivalent, providing keyboard navigation (Arrows for movement, Space/Enter for placement) paired with dynamic ARIA labels in the UI's primary language (French in this case) significantly improves accessibility for screen reader users.
**Action:** Always implement `onKeyDown` handlers for coordinate-based components and ensure `aria-label` updates reflect the current interaction state (e.g., from 'place' to 'adjust').
