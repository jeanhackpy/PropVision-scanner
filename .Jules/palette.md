## 2025-05-15 - Interactive Map Accessibility
**Learning:** Mouse-only interactive elements like maps can be made keyboard-accessible by using 'role="button"', 'tabIndex={0}', and handling 'Enter'/'Space' to trigger a default action (like centering a pin). Using 'focus-visible:ring-inset' ensures the focus indicator remains visible inside the container boundaries.
**Action:** Always provide a keyboard fallback for coordinate-based interactions by using logical defaults (e.g., center point).
