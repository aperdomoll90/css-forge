export type RubberSplitViewProps = {
  /**
   * Unique ID for the component (used for toggle input).
   */
  id: string
  /**
   * Controlled open state.
   */
  open?: boolean
  /**
   * Default open state for uncontrolled usage.
   */
  defaultOpen?: boolean
  /**
   * Callback fired when open state changes.
   */
  onToggle?: (open: boolean) => void
  /**
   * Content for the banner panel (with the rubber effect background).
   */
  bannerContent?: React.ReactNode
  /**
   * Content for the content panel.
   */
  contentPanel?: React.ReactNode
  /**
   * Animation duration in seconds.
   * @default 0.9
   */
  duration?: number
  /**
   * Peak stretch amount for the rubber effect.
   * @default 5
   */
  stretchAmount?: number
  /**
   * Bounce back amount before settling.
   * @default 0.9
   */
  bounceAmount?: number
  /**
   * CSS easing function for the animation.
   * @default 'ease-in-out'
   */
  easing?: string
  /**
   * Class name for the container.
   */
  className?: string
  /**
   * Class name for the banner panel (RubberEffect).
   */
  bannerClassName?: string
  /**
   * Class name for the content panel.
   */
  contentClassName?: string
  /**
   * Class name for the toggle wrapper.
   */
  toggleClassName?: string
  /**
   * Inline styles for the container.
   */
  style?: React.CSSProperties
  /**
   * Show the built-in toggle.
   * @default true
   */
  showToggle?: boolean
  /**
   * Labels for the toggle.
   */
  toggleLabels?: {
    left?: string
    right?: string
  }
  /**
   * Banner background color.
   * @default '#667eea'
   */
  bannerColor?: string
  /**
   * Content panel background color.
   * @default '#1a1a2e'
   */
  contentColor?: string
  /**
   * Toggle color override. If not provided, auto-contrasts with
   * the current panel background (uses contentColor when over banner,
   * bannerColor when over content).
   */
  toggleColor?: string
  /**
   * Toggle size in pixels.
   * @default 60
   */
  toggleSize?: number
  /**
   * Accessible label for the toggle.
   */
  'aria-label'?: string
}