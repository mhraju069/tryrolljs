export interface AvatarPickerProps {
  onAvatarChange?: (avatar: string) => void
  maxImageSize?: number // bytes
  value?: string
}
