export interface ToggleButtonProps {
  /** Controlled active state */
  active?: boolean
  /** Initial state for uncontrolled mode */
  defaultActive?: boolean
  /** Callback when toggle state changes */
  onToggle?: (active: boolean) => void
  /** Button size in rem units */
  size?: number
  /** Icon color (hamburger lines) */
  color?: string
  /** Button background color */
  buttonBackgroundColor?: string
  /** Enable drop shadow */
  shadow?: boolean
  /** ID of the element this button controls */
  ariaControls?: string
  /** Accessible label for the button */
  ariaLabel?: string
  /** Additional CSS class */
  className?: string
}
