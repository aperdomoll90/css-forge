import { useState } from 'react'
import { ExpandButtonProps } from './ExpandButton.types'
import styles from './ExpandButton.module.scss'

export const ExpandButton: React.FC<ExpandButtonProps> = ({
  variant = 'rotate',
  active: controlledActive,
  defaultActive = false,
  onToggle,
  color = '#fff',
  size = 1.5,
  lineThickness = 0.125,
  ariaControls,
  ariaLabel = 'Expand',
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
    '--size': `${size}rem`,
    '--color': color,
    '--line-thickness': `${lineThickness}rem`,
    ...style,
  } as React.CSSProperties

  return (
    <button
      className={`${styles['c-expand-button']} ${className}`}
      onClick={handleClick}
      aria-pressed={active}
      aria-controls={ariaControls}
      aria-label={ariaLabel}
      data-variant={variant}
      style={styleProps}
    >
      <span className={styles['c-expand-button__line']} />
      <span className={styles['c-expand-button__line']} data-vertical="true" />
    </button>
  )
}