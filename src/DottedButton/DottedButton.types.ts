export interface DottedButtonProps {
  /** Label text for the button */
  label: string
  /** Link URL */
  href?: string
  /** Text color */
  textColor?: string
  /** Dot color */
  dotColor?: string
  /** Additional CSS class */
  className?: string
  /** Custom styles */
  style?: React.CSSProperties
  /** Click handler */
  onClick?: () => void
}