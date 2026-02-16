# Palette's Journal

## 2025-05-15 - [Bottom Sheet Handle Accessibility]
**Learning:** Using a `div` for a bottom sheet drag handle prevents keyboard users from interacting with the list visibility. Converting it to a `<button>` with a clear `aria-label` enables keyboard control and provides a natural focus target.
**Action:** Always use semantic `<button>` elements for interaction handles, even if they look like simple bars or icons.

## 2025-05-15 - [Interactive Map Keyboard Navigation]
**Learning:** Custom map components often rely on click events, excluding keyboard and screen reader users. Adding `role="button"`, `tabIndex={0}`, and `onKeyDown` allows users to interact with spatial interfaces without a mouse.
**Action:** For any custom interactive visual area (like maps or canvases), implement standard keyboard interaction handlers and ARIA roles.

## 2025-05-15 - [Resilient AI Service Integration]
**Learning:** Initializing AI SDKs (like `@google/genai`) can throw immediate errors if environment variables are missing, crashing the entire frontend application. Wrapping initialization in a simulation mode fallback ensures the UI remains functional for development and demo purposes.
**Action:** Always implement a fallback or simulation mode for third-party services that depend on external configuration.
