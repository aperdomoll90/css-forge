import { useState } from 'react'
import { HamburgerButtonProps } from './HamburgerButton.types'
import { LightenDarkenColor } from '../utils/ColorManipulation'
import styles from './HamburgerButton.module.scss'

export const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  active: controlledActive,
  defaultActive = false,
  onToggle,
  size = 2,
  color = '#fff',
  backgroundColor = '#303030da',
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
    '--background-hover': LightenDarkenColor(backgroundColor.replace(/da$/, ''), -60),
    '--background-color': backgroundColor,
    '--shadow': shadow ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
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