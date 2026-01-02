import { useState, useId } from 'react'
import { HillToggleProps } from './HillToggle.types'
import styles from './HillToggle.module.scss'
import { Moon, MountainLeft, MountainRight, Star, TreeLarge, TreeRound } from './HillMedia'


export const HillToggle: React.FC<HillToggleProps> = ({
  checked: controlledChecked,
  defaultChecked = false,
  onToggle,
  size = 1,
  ariaLabel = 'Toggle day/night mode',
  className = '',
  style,
}) => {
  const generatedId = useId()
  const inputId = `hill-toggle-${generatedId}`

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
    '--size': size,
    ...style,
  } as React.CSSProperties

  return (
    <div className={`${styles['c-hill-toggle-wrapper']} ${className}`} style={styleProps}>
      <input
        type="checkbox"
        id={inputId}
        checked={checked}
        onChange={handleChange}
        aria-label={ariaLabel}
      />
      <label htmlFor={inputId} className={styles['c-hill-toggle']} data-checked={checked}>
        <Moon className={styles['moon']} />
        <div className={styles['sun']} />
        <Star className={styles['star-small']} />
        <Star className={styles['star-large']} />
        <MountainRight className={styles['mountain-right']} />
        <MountainLeft className={styles['mountain-left']} />
        <TreeLarge className={styles['tree-large']} />
        <TreeRound className={styles['tree-medium']} />
        <TreeRound className={styles['tree-small']} />
        <span />
      </label>
    </div>
  )
}