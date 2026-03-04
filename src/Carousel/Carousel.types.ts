export interface CarouselProps {
  /** Array of slide content (React nodes) */
  children: React.ReactNode[]
  /** Number of slides to show at once */
  slidesToShow?: number
  /** Enable infinite loop navigation */
  loop?: boolean
  /** Show dot navigation */
  showDots?: boolean
  /** Show prev/next buttons */
  showButtons?: boolean
  /** Position buttons outside the carousel container */
  outerButtons?: boolean
  /** Custom class for previous button */
  prevButtonClassName?: string
  /** Custom class for next button */
  nextButtonClassName?: string
  /** Custom previous button icon */
  prevIcon?: React.ReactNode
  /** Custom next button icon */
  nextIcon?: React.ReactNode
  /** Button color */
  buttonColor?: string
  /** Active dot color */
  activeDotColor?: string
  /** Inactive dot color */
  dotColor?: string
  /** Transition duration in ms */
  transitionDuration?: number
  /** Enable lazy loading of slides */
  lazyLoad?: boolean
  /** Autoplay interval in ms (0 to disable) */
  autoplay?: number
  /** Pause autoplay on hover */
  pauseOnHover?: boolean
  /** Additional CSS class */
  className?: string
  /** Custom styles */
  style?: React.CSSProperties
}