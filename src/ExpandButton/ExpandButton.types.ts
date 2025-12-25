export interface ExpandButtonProps {
  /** Controlled active state */
  active?: boolean
  /** Initial state for uncontrolled mode */
  defaultActive?: boolean
  /** Callback when toggle state changes */
  onToggle?: (active: boolean) => void
  /** Icon color (defaults to currentColor for inheritance) */
  color?: string
  /** Icon size in pixels */
  size?: number
  /** ID of the element this button controls */
  ariaControls?: string
  /** Accessible label for the button */
  ariaLabel?: string
  /** Additional CSS class for custom styling */
  className?: string
  /** Inline styles for custom styling */
  style?: React.CSSProperties
}