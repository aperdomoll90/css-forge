import { useState } from 'react'
import { ToggleButtonProps } from './ToggleButton.types'
import { LightenDarkenColor } from '../utils/ColorManipulation'
import styles from './ToggleButton.module.scss'

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  active: controlledActive,
  defaultActive = false,
  onToggle,
  size = 2,
  color = '#fff',
  buttonBackgroundColor = '#303030da',
  shadow = false,
  ariaControls,
  ariaLabel = 'Toggle menu',
  className = '',
}) => {
  const [internalActive, setInternalActive] = useState(defaultActive)
  const isControlled = controlledActive !== undefined
  const active = isControlled ? controlledActive : internalActive

  const handleClick = () => {
    const newActive = !active
    if (!isControlled) {
      setInternalActive(newActive)
    }
    onToggle?.(newActive)
  }

  const styleProps = {
    '--size': `${size}rem`,
    '--color': color,
    '--button-hover': LightenDarkenColor(buttonBackgroundColor.replace(/da$/, ''), -60),
    '--button-background-color': buttonBackgroundColor,
    '--shadow': shadow ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
  } as React.CSSProperties

  return (
    <button
      aria-label={ariaLabel}
      aria-pressed={active}
      aria-expanded={active}
      aria-controls={ariaControls}
      className={`${styles['c-toggle-button']} ${className}`}
      style={styleProps}
      onClick={handleClick}
      data-active={active}
    >
      <span />
    </button>
  )
}
