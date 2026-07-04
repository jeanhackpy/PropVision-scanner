## 2025-05-22 - [Keyboard Navigation for Visual Interactive Elements]

**Learning:** Interactive components like maps or bottom sheet handles are often overlooked in keyboard accessibility audits. Simply adding a click handler is insufficient; they require explicit roles, tabIndices, and keyboard event listeners (Enter/Space) to be truly usable.

**Action:** When creating custom interactive areas (like a div-based map), always include `role="button"`, `tabIndex={0}`, `onKeyDown`, and high-contrast focus rings (`focus-visible:ring-inset`) to ensure accessibility within overflow-hidden containers.
