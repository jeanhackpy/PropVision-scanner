## 2025-05-22 - [Critical Rendering Fix & Accessibility Uplift]
**Learning:** The application entry point must be explicitly defined in index.html for Vite to bundle the app correctly. Additionally, AI service initialization at the module level can crash the entire frontend if environment variables (like API keys) are missing; always implement a graceful fallback to mock data to maintain a functional UI.
**Action:** Always verify that index.html contains the necessary entry script tag. Implement a "safe initialization" pattern for all external services to prevent app-wide crashes during the initial load.

## 2025-05-22 - [Interactive Map Accessibility]
**Learning:** Custom interactive components like simulated maps or canvases are often invisible to keyboard users and screen readers.
**Action:** Apply `role="button"`, `tabIndex={0}`, and `aria-label` to non-semantic interactive areas. Map primary click actions to `Enter` or `Space` keys with a logical default interaction point (e.g., center of the component).

## 2025-05-22 - [Bottom Sheet UX]
**Learning:** A simple horizontal bar in a bottom sheet is not inherently accessible or semantic.
**Action:** Use a semantic `<button>` for bottom sheet handles. Apply `group` styling to the parent button and `group-focus-visible:ring` to the child handle-bar to provide clear visual feedback during keyboard navigation.
