import { useState, useId } from 'react'
import { DesertToggleProps } from './DesertToggle.types'
import styles from './DesertToggle.module.scss'
import { Cliff, Constellation, FirstHill, LastHill, SaguaroCactus, SecondHill, Shade, ThirdHill, Tumbleweed } from './DesertMedia'


export const DesertToggle: React.FC<DesertToggleProps> = ({
  checked: controlledChecked,
  defaultChecked = false,
  onToggle,
  size = 1,
  ariaLabel = 'Toggle day/night mode',
  className = '',
  style,
}) => {
  const generatedId = useId()
  const inputId = `desert-toggle-${generatedId}`

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
    <div className={`${styles['c-desert-toggle-wrapper']} ${className}`} style={styleProps}>
      <input
        type="checkbox"
        id={inputId}
        checked={checked}
        onChange={handleChange}
        aria-label={ariaLabel}
      />
      <label htmlFor={inputId} className={styles['c-desert-toggle']} data-checked={checked}>
        <Constellation className={styles['constellation']} />
        <span />
        <LastHill className={styles['fourth-hill']} />
        <ThirdHill className={styles['third-hill']} />
        <SecondHill className={styles['second-hill']} />
        <Cliff className={styles['cliff']} />
        <FirstHill className={styles['first-hill']} />
        <Shade className={styles['shade']} />
        <SaguaroCactus className={styles['saguaro']} />
        <Tumbleweed className={styles['tumbleweed']} />
      </label>
    </div>
  )
}