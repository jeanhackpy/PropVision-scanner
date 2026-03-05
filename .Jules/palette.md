## 2026-03-05 - Accessibility & Environment Resilience
**Learning:** Interactive non-semantic elements (like custom maps) must have role='button' and tabIndex={0} to be discoverable by screen readers and keyboard users. Additionally, AI services in browser environments may fail if API keys are passed as literal 'undefined' strings via environment variables.
**Action:** Always add keyboard handlers (Enter/Space) to interactive containers and implement robust API key checks (checking for 'undefined' string) to prevent app crashes during verification.
