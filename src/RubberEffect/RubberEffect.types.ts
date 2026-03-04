export type RubberEffectProps = {
  /**
   * Whether the effect is in the "open" state.
   */
  open?: boolean
  /**
   * Animation duration in seconds.
   * @default 0.9
   */
  duration?: number
  /**
   * Background color of the effect.
   */
  color?: string
  /**
   * Peak stretch amount for the rubber effect.
   * Values > 1 stretch wider, < 1 compress.
   * @default 5
   */
  stretchAmount?: number
  /**
   * Bounce back amount (slight overshoot before settling).
   * @default 0.9
   */
  bounceAmount?: number
  /**
   * CSS easing function for the animation.
   * @default 'ease-in-out'
   */
  easing?: string
  /**
   * Additional class name for the effect element.
   */
  className?: string
  /**
   * Inline styles for the effect element.
   */
  style?: React.CSSProperties
  /**
   * Content inside the effect (usually empty, just a background).
   */
  children?: React.ReactNode
}