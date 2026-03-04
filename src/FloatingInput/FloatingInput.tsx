import { FloatingInputProps } from './FloatingInput.types'
import styles from './FloatingInput.module.scss'

export const FloatingInput: React.FC<FloatingInputProps> = ({
  name,
  label,
  type = 'text',
  required = false,
  disabled = false,
  error,
  value,
  onChange,
  onBlur,
  className = '',
  borderColor,
  borderColorFocus,
  backgroundColor,
  textColor,
  errorColor,
  style,
}) => {
  const errorId = `${name}-error`

  const combinedStyle = {
    ...(borderColor && { '--border-color': borderColor }),
    ...(borderColorFocus && { '--border-color-focus': borderColorFocus }),
    ...(backgroundColor && { '--background-color': backgroundColor }),
    ...(textColor && { '--text-color': textColor }),
    ...(errorColor && { '--error-color': errorColor }),
    ...style,
  } as React.CSSProperties

  return (
    <div
      className={`${styles['c-floating-input']} ${className}`}
      style={combinedStyle}
      data-disabled={disabled || undefined}
      data-error={!!error || undefined}
    >
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        disabled={disabled}
        placeholder=" "
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        aria-required={required}
      />
      <label htmlFor={name}>{label}</label>
      {error && (
        <span id={errorId} className={styles['c-floating-input__error']} role="alert">
          {error}
        </span>
      )}
    </div>
  )
}