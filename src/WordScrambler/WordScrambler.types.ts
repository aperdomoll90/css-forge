export interface WordScramblerProps {
  /** Array of words to cycle through */
  words: string[]
  /** Scramble speed in milliseconds */
  speed?: number
  /** Text color */
  textColor?: string
  /** Font size */
  fontSize?: string
  /** Additional CSS class */
  className?: string
  /** Custom styles */
  style?: React.CSSProperties
}