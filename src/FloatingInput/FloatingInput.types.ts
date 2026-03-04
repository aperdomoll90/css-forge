export interface FloatingInputProps {
  /** Input name/id */
  name: string
  /** Label text */
  label: string
  /** Input type */
  type?: string
  /** Is field required */
  required?: boolean
  /** Is field disabled */
  disabled?: boolean
  /** Error message */
  error?: string
  /** Input value */
  value?: string
  /** Change handler */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  /** Blur handler */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  /** Additional CSS class */
  className?: string
  /** Border color */
  borderColor?: string
  /** Border color on focus */
  borderColorFocus?: string
  /** Background color */
  backgroundColor?: string
  /** Text color */
  textColor?: string
  /** Error color */
  errorColor?: string
  /** Custom styles */
  style?: React.CSSProperties
}