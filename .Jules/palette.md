## 2025-05-23 - Accessible Bottom Sheets
**Learning:** Bottom sheet "drag handles" are often implemented as decorative divs, but they act as interactive elements (especially when they close the sheet). Using a semantic <button> ensures keyboard users can close the sheet and provides a clear focus target.
**Action:** Always wrap drag handles in a <button> with an aria-label if they are clickable.

## 2025-05-23 - Keyboard Map Interaction
**Learning:** Custom map components implemented as divs with onClick are inaccessible to keyboard and screen reader users.
**Action:** Add tabIndex={0}, role="button", and an onKeyDown handler that mimics the click action (e.g., dropping a pin at the center of the viewport) to make the map navigable and interactive via keyboard.
