## 2024-05-22 - [Bottom Sheet Accessibility]
**Learning:** Bottom sheet handles implemented as visual-only `div` elements fail keyboard navigation. Converting them to semantic `<button>` elements with `aria-expanded` and `aria-label` provides necessary context for screen readers and allows keyboard interaction.
**Action:** Use semantic `<button>` for interaction handles and ensure `aria-label` matches the UI language for consistency.

## 2024-05-22 - [App Initialization Crash]
**Learning:** Application crashes caused by missing API keys in AI service initialization prevent the UI from rendering, blocking UX verification. Graceful handling with a simulation mode ensures the app remains usable for testing and demonstration.
**Action:** Implement fallback mock data for AI services when environment variables are missing to ensure robust application behavior.
