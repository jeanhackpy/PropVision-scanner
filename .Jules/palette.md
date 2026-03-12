## 2025-05-15 - [Accessibility & Localization]
**Learning:** For mobile-first applications using French as the primary UI language, ARIA labels must be consistent with the localized text (e.g., 'Menu principal', 'Réduire la liste') to ensure a coherent experience for screen reader users. Additionally, long localized strings in badges require font-size reduction (e.g., `text-[10px]`) to prevent layout overflow on smaller viewports.
**Action:** Always check the UI's language before adding ARIA labels and adjust badge typography for long localized phrases.

## 2025-05-15 - [Semantic Handles]
**Learning:** Using a `<button>` element for bottom sheet drag handles instead of a `div` ensures keyboard discoverability and provides a clear interaction model (e.g., closing/minimizing) through the `aria-label` and `disabled` state.
**Action:** Implement interactive handles as semantic buttons with appropriate focus-visible rings and ARIA descriptions.
