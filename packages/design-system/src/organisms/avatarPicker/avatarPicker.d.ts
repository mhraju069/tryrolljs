import type { AvatarPickerProps } from './types'

declare const AvatarPicker: <T extends unknown, F extends string = string>(
  props: AvatarPickerProps<T, F>,
) => JSX.Element

export default AvatarPicker
