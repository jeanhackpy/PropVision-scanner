## 2025-05-15 - [Vite & esm.sh Reliability]
**Learning:** The application's reliance on `esm.sh` for runtime dependency resolution via an `importmap` causes significant delays in initial mounting and intermittent timeouts in automated verification.
**Action:** Use `wait_until="networkidle"` with a 60s timeout in Playwright scripts and ensure a `.env` with `GEMINI_API_KEY=dummy` exists to prevent mounting failures.

## 2025-05-15 - [Index.html Entry Point]
**Learning:** Vite build/dev may fail to mount the React app if the `<script type="module" src="/index.tsx">` is missing from `index.html`, even if the build succeeds.
**Action:** Always verify that `index.html` contains the entry point script tag immediately following the root element.
