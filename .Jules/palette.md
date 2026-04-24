## 2026-04-24 - Accessible Map and Semantic Handles
**Learning:** Converting decorative `div` elements to semantic `button` elements can inadvertently reduce the click target size if the `button` is only applied to the decorative part. Always ensure the `button` wraps the entire hit area or uses full-width styling to maintain usability for mouse/touch users.
**Action:** Use a full-width `button` as a container for decorative handles, and apply `group-focus-visible` styles to the inner decorative element to provide a clear focus indicator without compromising the target size.

**Learning:** Interactive maps implemented as `div`s can be made keyboard accessible by adding `role="button"`, `tabIndex={0}`, and an `onKeyDown` handler that supports 'Space/Enter' for activation and 'Arrow' keys for fine-grained movement.
**Action:** Implement a `handleKeyDown` function that checks for `ArrowLeft/Right/Up/Down` and updates the pin coordinates with a small step (e.g., 2%), ensuring the values stay within the 0-100 range.
