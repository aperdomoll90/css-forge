import { useRef } from 'react'
import { DottedButtonProps } from './DottedButton.types'
import { useMagnetize } from '../utils'
import styles from './DottedButton.module.scss'

export const DottedButton: React.FC<DottedButtonProps> = ({
  label,
  href = '#',
  textColor,
  dotColor,
  className = '',
  style,
  onClick,
}) => {
  const areaRef = useRef<HTMLSpanElement>(null)

  const { handleMouseMove, handleMouseLeave } = useMagnetize({
    areaRef,
    targets: [
      {
        selector: `.${styles['c-dotted-button-link']}`,
        options: {
          intensity: 0.35,
          followLerpFactor: 0.1,
          clampWithinArea: true,
          returnSpring: { stiffness: 11, damping: 14, precision: 0.01 },
        },
      },
    ],
  })

  return (
    <span
      ref={areaRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${styles['c-dotted-button']} ${className}`}
      style={{
        '--text-color': textColor,
        '--dot-color': dotColor,
        ...style,
      } as React.CSSProperties}
    >
      <a href={href} className={styles['c-dotted-button-link']} onClick={onClick}>
        {label}
      </a>
    </span>
  )
}