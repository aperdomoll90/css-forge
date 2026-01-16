import { SlicerButtonProps } from './SlicerButton.types'
import styles from './SlicerButton.module.scss'

export const SlicerButton: React.FC<SlicerButtonProps> = ({
  label,
  href,
  color = 'var(--white-100)',
  colorHover = 'var(--gray-400)',
  fontSize = '1rem',
  className = '',
  style,
}) => {
  const styleProps = {
    '--font-size': fontSize,
    '--color': color,
    '--color-hover': colorHover,
    ...style,
  } as React.CSSProperties

  return (
    <a href={href} className={`${styles['c-slicer-button']} ${className}`} style={styleProps} data-label={label}>
      {label}
    </a>
  )
}
