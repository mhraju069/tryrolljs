import { useTheme } from '../..'

type Props = {
  open: boolean
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  renderDropdown: () => React.ReactElement
  alignLeft?: boolean
}

export const Dropdown: React.FC<Props> = ({
  children,
  open,
  renderDropdown,
  onMouseEnter,
  onMouseLeave,
  alignLeft,
}) => {
  const theme = useTheme()
  return (
    <div className="relative">
      <div>{children}</div>
      {open && (
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="absolute rounded-lg shadow-xl"
          style={{
            backgroundColor: theme.background.primary,
            zIndex: 1000,
            right: alignLeft ? 0 : undefined,
          }}
        >
          {renderDropdown()}
        </div>
      )}
    </div>
  )
}
