## 2025-05-14 - Accessibility for Mobile-First Bottom Sheets
**Learning:** For interactive bottom sheets that use a "handle" for closing, applying `role="button"` and `tabIndex` to the handle's container (the hit area) rather than the decorative bar itself improves accessibility while maintaining the intended UX.
**Action:** Always ensure the interactive container of a drag handle is keyboard-focusable and has a clear ARIA label for screen readers.
