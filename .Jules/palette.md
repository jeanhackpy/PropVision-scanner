## 2025-02-13 - [Startup & Accessibility]
**Learning:** The application would crash on startup due to a missing Gemini API key being initialized at the module level. Additionally, the entry point script tag was missing in index.html, preventing any UX from being rendered. Semantic button elements are crucial for bottom sheet interaction handles to ensure keyboard focusability.
**Action:** Always wrap AI service initialization in a check for the API key and ensure the index.html entry point is present. Use <button> for any interactive handle, even if it looks like a simple bar.
