import { ValuePerBreakpoint } from '../utils'

export interface BubbleButtonProps {
  /** Button label text */
  label: string
  /** Font size - string for single size, object for responsive sizes */
  fontSize?: string | ValuePerBreakpoint
  /** Magnet area padding - string for single size, object for responsive sizes */
  magnetArea?: string | ValuePerBreakpoint
  /** Button padding - string for single size, object for responsive sizes */
  padding?: string | ValuePerBreakpoint
  /** Additional CSS class */
  className?: string
  /** Click handler */
  onClick?: () => void
  /** Link URL - renders as anchor if provided */
  href?: string
  /** Link target */
  target?: string
  /** Label color */
  labelColor?: string
  /** Background color */
  backgroundColor?: string
  /** Background hover color */
  backgroundHoverColor?: string
  /** Custom styles */
  style?: React.CSSProperties
}