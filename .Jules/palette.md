## 2025-05-15 - [Accessibility & Resilience]
**Learning:** Icon-only buttons and interactive map areas lacked ARIA labels and keyboard support, making the app unusable for screen reader and keyboard users. Additionally, a missing entry point script tag in index.html and unhandled missing API keys in services caused the app to fail silently.
**Action:** Always provide ARIA labels in the UI's primary language (French), convert interactive divs to semantic buttons with focus-visible styles, and ensure services handle environment gaps gracefully to maintain a working UI during verification.
