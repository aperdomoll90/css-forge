import { useState } from 'react'
import { ExpandButtonProps } from './ExpandButton.types'
import styles from './ExpandButton.module.scss'

export const ExpandButton: React.FC<ExpandButtonProps> = ({
  active: controlledActive,
  defaultActive = false,
  onToggle,
  color = 'currentColor',
  size = 24,
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
    '--size': `${size}px`,
    '--color': color,
    ...style,
  } as React.CSSProperties

  return (
    <button
      className={`${styles['c-expand-button']} ${className}`}
      onClick={handleClick}
      aria-pressed={active}
      aria-expanded={active}
      aria-controls={ariaControls}
      aria-label={ariaLabel}
      data-active={active}
      style={styleProps}
    >
      <span className={styles['c-expand-button__hidden']}>
        {active ? 'Collapse' : 'Expand'}
      </span>
      <svg
        className={styles['c-expand-button__icon']}
        viewBox="0 0 14 14"
        aria-hidden="true"
        focusable="false"
        data-active={active}
      >
        {active ? (
          <path
            d="M0.600532 6.53322C0.455732 6.53322 0.330555 6.4827 0.224999 6.38165C0.119443 6.28061 0.0666656 6.1554 0.0666656 6.00602C0.0666656 5.85662 0.117777 5.72936 0.219999 5.62425C0.322221 5.51912 0.448888 5.46655 0.599999 5.46655H13.3995C13.5443 5.46655 13.6694 5.51708 13.775 5.61812C13.8806 5.71916 13.9333 5.84438 13.9333 5.99375C13.9333 6.14315 13.8822 6.27041 13.78 6.37552C13.6778 6.48065 13.5511 6.53322 13.4 6.53322H0.600532Z"
            fill="var(--color)"
          />
        ) : (
          <path
            d="M6.46732 7.53325H0.867318C0.716207 7.53325 0.58954 7.48273 0.487318 7.38169C0.385096 7.28064 0.333984 7.15543 0.333984 7.00605C0.333984 6.85665 0.385096 6.7294 0.487318 6.62429C0.58954 6.51915 0.716207 6.46659 0.867318 6.46659H6.46732V0.866585C6.46732 0.715474 6.51784 0.588807 6.61888 0.486584C6.71993 0.384362 6.84514 0.333252 6.99452 0.333252C7.14392 0.333252 7.27117 0.384362 7.37629 0.486584C7.48142 0.588807 7.53398 0.715474 7.53398 0.866585V6.46659H13.134C13.2851 6.46659 13.4118 6.51711 13.514 6.61815C13.6162 6.7192 13.6673 6.84441 13.6673 6.99379C13.6673 7.14319 13.6162 7.27044 13.514 7.37555C13.4118 7.48069 13.2851 7.53325 13.134 7.53325H7.53398V13.1333C7.53398 13.2844 7.48346 13.411 7.38242 13.5133C7.28137 13.6155 7.15616 13.6666 7.00678 13.6666C6.85738 13.6666 6.73013 13.6155 6.62502 13.5133C6.51988 13.411 6.46732 13.2844 6.46732 13.1333V7.53325Z"
            fill="var(--color)"
          />
        )}
      </svg>
    </button>
  )
}