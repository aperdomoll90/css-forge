import { ValuePerBreakpoint } from '../utils'

export type DrawButtonVariant = 'circled' | 'underline'

export interface DrawButtonProps {
  /** Link URL */
  href?: string
  /** Click handler */
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void
  /** Button content */
  children: React.ReactNode
  /** Additional CSS class */
  className?: string
  /** Font size - string for single size, object for responsive sizes */
  fontSize?: string | ValuePerBreakpoint
  /** Link target */
  target?: string
  /** Button variant */
  variant?: DrawButtonVariant
  /** Custom styles */
  style?: React.CSSProperties
  /** Download attribute for file downloads */
  download?: boolean | string
  /** Label color */
  labelColor?: string
  /** Stroke color for the SVG */
  strokeColor?: string
}