import { RubberEffectProps } from './RubberEffect.types'
import styles from './RubberEffect.module.scss'

/**
 * RubberEffect
 *
 * A simple animated background with a rubber band stretch effect.
 * Use as a background layer - content placed on top won't distort.
 *
 * @example
 * ```tsx
 * <div data-open={isOpen}>
 *   <RubberEffect color="#667eea" className="banner-bg" />
 *   <div className="banner-content">Content here</div>
 * </div>
 * ```
 */
export const RubberEffect: React.FC<RubberEffectProps> = ({
  open,
  duration = 0.9,
  color,
  stretchAmount = 5,
  bounceAmount = 0.9,
  easing = 'ease-in-out',
  className = '',
  style,
  children,
}) => {
  return (
    <div
      className={`${styles['c-rubber-effect']} ${className}`}
      data-open={open}
      style={
        {
          '--rubber-duration': `${duration}s`,
          '--rubber-color': color,
          '--rubber-stretch': stretchAmount,
          '--rubber-bounce': bounceAmount,
          '--rubber-easing': easing,
          ...style,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  )
}