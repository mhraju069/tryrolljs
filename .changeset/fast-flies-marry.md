---
'@roll-network/design-system': major
---

Migrate from native-base to gluestack-ui

BREAKING CHANGES:
- ButtonV2
  - Change `isDisabled` to `disabled`
  - Change `isLoading` to `loading`
- Spinner
  - Size prop is updated to `size?: 'small' | 'large' | number`
- Toast & ToastV2
  - Toasts should now be called via `useToast` hook instead of `Toast.show`
- Modal
  - Size prop is updated to `size?: 'xs' | 'sm' | 'md' | 'lg' | 'full'`
- useClipboard
  - The hook return value is changed from `{ onCopy }` to `{ copy, paste }`
