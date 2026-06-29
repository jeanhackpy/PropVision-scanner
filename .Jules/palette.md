## 2026-06-29 - Accessibility and Robustness Foundation
**Learning:** In projects using `@google/genai` directly in the browser, a missing API key can cause fatal initialization errors that block the entire React application from mounting. Additionally, missing entry scripts in `index.html` can lead to incomplete production builds.
**Action:** Always wrap AI SDK initialization in a defensive getter that checks for keys, and ensure the production build transforms a realistic number of modules (>1700 for a standard React app) by verifying the `index.html` entry point.
