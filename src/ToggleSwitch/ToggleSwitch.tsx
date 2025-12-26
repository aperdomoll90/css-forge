import { useState, useId } from 'react'
import { ToggleSwitchProps } from './ToggleSwitch.types'
import styles from './ToggleSwitch.module.scss'

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked: controlledChecked,
  defaultChecked = false,
  onToggle,
  id,
  color = '#f28b30',
  sliderColor = '#fff',
  size = 60,
  labelBefore,
  labelAfter,
  ariaLabel = 'Toggle switch',
  className = '',
  style,
}) => {
  const generatedId = useId()
  const inputId = id || `toggle-switch-${generatedId}`

  const [internalChecked, setInternalChecked] = useState(defaultChecked)
  const isControlled = controlledChecked !== undefined
  const checked = isControlled ? controlledChecked : internalChecked

  const handleChange = () => {
    const newChecked = !checked
    if (!isControlled) {
      setInternalChecked(newChecked)
    }
    onToggle?.(newChecked)
  }

  const styleProps = {
    '--size': `${size}px`,
    '--color': color,
    '--slider-color': sliderColor,
    ...style,
  } as React.CSSProperties

  return (
    <div className={`${styles['c-toggle-switch']} ${className}`} style={styleProps}>
      <input
        type="checkbox"
        id={inputId}
        checked={checked}
        onChange={handleChange}
        aria-label={ariaLabel}
        data-checked={checked}
      />
      <label htmlFor={inputId} data-label-before={labelBefore} data-label-after={labelAfter}>
        <span />
      </label>
    </div>
  )
}