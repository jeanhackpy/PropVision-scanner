# Palette's Journal

## 2026-01-30 - Critical Mounting and Accessibility Insights
**Learning:** The React application was completely failing to mount on production build because of a missing module script entry point in index.html. Adding the `<script type="module" src="/index.tsx"></script>` right after the importmap block resolved this issue, transforming 1720 modules instead of 2. Furthermore, focus ring indicators on map components with overflow-hidden should use inset focus rings (`focus-visible:ring-inset`) to prevent clipping. Finally, using semantic `<a>` tags with `tel:` protocols instead of regular `<button>` elements for telephone contacts leverages native device calling features.
**Action:** Always verify that the entry script tag is present in index.html immediately after any importmap tags, and prefer semantic `tel:` anchor links and inset focus states on clipped maps for superior native UX.
