# Palette's Journal

## 2025-05-15 - [Accessible Map & Handle Interactions]
**Learning:** Custom interactive elements like simulated maps and bottom sheet handles are often implemented as non-semantic `div`s, which breaks keyboard navigation. Converting handles to semantic `<button>` elements and adding `tabIndex={0}` + `onKeyDown` to maps significantly improves accessibility without changing the visual design.
**Action:** Always check for non-button interactive elements and replace them with semantic buttons or appropriate ARIA roles and keyboard handlers.

## 2025-05-15 - [Graceful Service Initialization]
**Learning:** Initializing third-party services (like Gemini AI) directly in the module scope can crash the entire application if environment variables (like API keys) are missing.
**Action:** Use a fallback or null-check during service initialization and handle missing services gracefully in the business logic to prevent app-wide crashes.
