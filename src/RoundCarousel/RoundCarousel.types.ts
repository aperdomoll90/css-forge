export interface RoundCarouselSlide {
  /** Background color or image URL */
  background: string
  /** Optional label for accessibility */
  label?: string
}

export interface RoundCarouselProps {
  /** Array of slides */
  slides: RoundCarouselSlide[]
  /** Size of the carousel in rem */
  size?: number
  /** Callback when active slide changes - use this to sync external content */
  onSlideChange?: (index: number, slide: RoundCarouselSlide) => void
  /** Additional CSS class */
  className?: string
  /** Custom styles */
  style?: React.CSSProperties
}