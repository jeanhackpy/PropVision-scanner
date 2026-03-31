## 2025-05-15 - [Accessible Bottom Sheet Handles]
**Learning:** For bottom sheets that minimize or slide without fully closing, using a semantic `<button>` instead of a `div` for the drag handle ensures it is keyboard-reachable and properly announced by screen readers. Adding `disabled={!activeState}` prevents redundant interactions when the sheet is already in its minimized state.
**Action:** Always implement bottom sheet handles as `<button aria-label="...">` with appropriate focus-visible rings on the inner visual element.

## 2025-05-15 - [Vite and Gemini API Safety]
**Learning:** Initializing AI services (e.g., @google/genai) must handle missing API keys gracefully. Explicitly checking that keys are neither undefined nor the string 'undefined' (which Vite might inject if not properly loaded) avoids crashing the application in browser environments.
**Action:** Use a fallback (e.g., `process.env.API_KEY || ''`) during initialization to prevent top-level runtime errors.
