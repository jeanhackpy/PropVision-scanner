## 2024-03-04 - [Map & Sheet Accessibility]
**Learning:** Converting non-semantic interactive handles (like a drag bar `div`) to semantic `<button>` elements with `aria-label` provides instant keyboard accessibility and screen reader support without changing the visual design. Using `group-focus-visible` on the parent button allows styling the inner handle bar for focus states.
**Action:** Always prefer `<button>` for interaction handles and use `focus-visible` rings that match the brand's primary color.

## 2024-03-04 - [AI Service Safety]
**Learning:** Vite may inject `process.env.API_KEY` as a literal string "undefined" if the environment variable is missing during build, rather than leaving it as `undefined`. This causes `new GoogleGenAI({ apiKey: "undefined" })` to fail with a runtime error instead of a graceful skip.
**Action:** Explicitly check for both `undefined` and the string "undefined" when initializing AI services in a Vite environment.
