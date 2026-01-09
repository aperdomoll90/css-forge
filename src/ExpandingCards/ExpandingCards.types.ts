import { CSSProperties, ReactNode } from 'react'

export interface ExpandingCardItem {
  /** Content to render inside the card */
  content: ReactNode
  /** Background color or CSS value */
  background?: string
  /** Custom styles for this specific card */
  style?: CSSProperties
  /** Custom class for this specific card */
  className?: string
}

export interface ExpandingCardsAnimation {
  /** Transition duration in seconds, default: 0.5 */
  duration?: number
  /** Transition timing function, default: 'ease-in-out' */
  timing?: string
  /** Flex-grow value when expanded, default: 7 */
  expandedGrow?: number
  /** Flex-grow value when collapsed, default: 1 */
  collapsedGrow?: number
}

export interface ExpandingCardsProps {
  /** Array of card items */
  items: ExpandingCardItem[]
  /** Height of the container, default: '90%' */
  height?: string
  /** Gap between cards, default: '10px' */
  gap?: string
  /** Horizontal margin, default: '50px' */
  marginInline?: string
  /** Border radius of cards, default: '30px' */
  borderRadius?: string
  /** Minimum card width when collapsed, default: '70px' */
  minWidth?: string
  /** Animation configuration */
  animation?: ExpandingCardsAnimation
  /** Custom class for the container */
  className?: string
  /** Custom class applied to all cards */
  cardClassName?: string
  /** Callback when a card is clicked */
  onCardClick?: (index: number) => void
  /** Callback when a card is hovered */
  onCardHover?: (index: number | null) => void
}
