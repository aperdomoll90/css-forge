export interface ExpandButtonProps {
  /** Controlled active state */
  active?: boolean
  /** Initial state for uncontrolled mode */
  defaultActive?: boolean
  /** Callback when toggle state changes */
  onToggle?: (active: boolean) => void
  /** Icon color */
  color?: string
  /** Button background color */
  backgroundColor?: string
  /** Button size in pixels */
  size?: number
  /** ID of the element this button controls */
  ariaControls?: string
  /** Accessible label for the button */
  ariaLabel?: string
  /** Additional CSS class */
  className?: string
}