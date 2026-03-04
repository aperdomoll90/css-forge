export interface ToggleSwitchProps {
  /** Controlled checked state */
  checked?: boolean
  /** Initial state for uncontrolled mode */
  defaultChecked?: boolean
  /** Callback when toggle state changes */
  onToggle?: (checked: boolean) => void
  /** ID for the input element (required for label association) */
  id?: string
  /** Track/background color */
  color?: string
  /** Slider/knob color */
  sliderColor?: string
  /** Label text color */
  labelColor?: string
  /** Delay for color transition in seconds (useful for syncing with other animations) */
  colorDelay?: number
  /** Size of the toggle in pixels */
  size?: number
  /** Label text shown before the toggle */
  labelBefore?: string
  /** Label text shown after the toggle */
  labelAfter?: string
  /** Accessible label for the toggle */
  ariaLabel?: string
  /** Additional CSS class for custom styling */
  className?: string
  /** Inline styles for custom styling */
  style?: React.CSSProperties
}