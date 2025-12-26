import { SlicerButtonProps } from './SlicerButton.types'
import styles from './SlicerButton.module.scss'

export const SlicerButton: React.FC<SlicerButtonProps> = ({
  label,
  href,
  color = '#fff',
  colorHover = '#aaa',
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
