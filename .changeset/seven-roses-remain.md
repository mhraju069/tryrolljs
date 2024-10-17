---
'@roll-network/design-system': major
---

Changed font family setup

- Removed injectFonts & injectFontsV2 functions to exclude fonts from the JS bundle.
- Added separate fonts folder in the dist from where web & native projects will be able to import the fonts.
