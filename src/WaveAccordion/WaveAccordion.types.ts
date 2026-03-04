export interface WaveAccordionAnimation {
  /** Transition duration in seconds, default: 0.5 */
  duration?: number
  /** Transition timing: 'pop' | 'snap' | custom cubic-bezier, default: 'pop' */
  timing?: 'pop' | 'snap' | string
  /** Scale factor for hovered panel, default: 1.07 */
  hoverScale?: number
  /** Scale factor for adjacent panels, default: 1.02 */
  adjacentScale?: number
  /** Z translation multiplier for hovered panel, default: 2.2 */
  hoverDepth?: number
  /** Z translation multiplier for adjacent panels, default: 1.2 */
  adjacentDepth?: number
  /** Rotation angle for adjacent panels in degrees, default: 35 */
  rotateAngle?: number
  /** Perspective multiplier, default: 25 */
  perspective?: number
}

export interface WaveAccordionProps {
  /** Array of image URLs or ReactNodes for panels */
  items: (string | React.ReactNode)[]
  /** Height of the accordion container, default: '50dvh' */
  height?: string
  /** Gap between panels, default: '1%' */
  gap?: string
  /** Aspect ratio of each panel, default: '2 / 11.5' */
  aspectRatio?: string
  /** Animation configuration */
  animation?: WaveAccordionAnimation
  /** Apply grayscale filter to inactive panels, default: true */
  grayscale?: boolean
  /** Custom class for the container */
  className?: string
  /** Custom class for each panel */
  panelClassName?: string
  /** Callback when a panel is clicked */
  onPanelClick?: (index: number) => void
  /** Callback when a panel receives focus */
  onPanelFocus?: (index: number) => void
}