export interface HillToggleProps {
  /** Controlled checked state */
  checked?: boolean
  /** Initial state for uncontrolled mode */
  defaultChecked?: boolean
  /** Callback when toggle state changes */
  onToggle?: (checked: boolean) => void
  /** Size multiplier (default: 1) */
  size?: number
  /** Accessible label for the toggle */
  ariaLabel?: string
  /** Additional CSS class for custom styling */
  className?: string
  /** Inline styles for custom styling */
  style?: React.CSSProperties
}