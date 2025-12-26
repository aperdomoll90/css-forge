import { useState } from 'react'
import { HamburgerButtonProps } from './HamburgerButton.types'
import styles from './HamburgerButton.module.scss'

export const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  active: controlledActive,
  defaultActive = false,
  onToggle,
  color = 'currentColor',
  size = 32,
  ariaControls,
  ariaLabel = 'Toggle menu',
  className = '',
  style,
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
    '--size': `${size}px`,
    '--color': color,
    ...style,
  } as React.CSSProperties

  return (
    <button
      aria-label={ariaLabel}
      aria-pressed={active}
      aria-expanded={active}
      aria-controls={ariaControls}
      className={`${styles['c-hamburger-button']} ${className}`}
      style={styleProps}
      onClick={handleClick}
      data-active={active}
    >
      <span />
    </button>
  )
}