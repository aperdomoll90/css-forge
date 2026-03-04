export interface SlicerButtonProps {
  /** The text label for the button */
  label: string
  /** URL to navigate to when clicked */
  href: string
  /** Text color - defaults to currentColor */
  color?: string
  /** Hover color for the slicing effect */
  colorHover?: string
  /** Font size (e.g., '1rem', '16px') */
  fontSize?: string
  /** Additional CSS class for custom styling */
  className?: string
  /** Inline styles for custom styling */
  style?: React.CSSProperties
}