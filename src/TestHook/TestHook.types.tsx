export interface TestHookPropsType {
  size?: number
  top?: number
  bottom?: number
  left?: number
  right?: number
  color?: `#${string}` | `rgb(${number}, ${number}, ${number})` | `rgba(${number}, ${number}, ${number}, ${number})` | ''
  buttonHover?: string
  buttonBackgroundColor?: string
  shadow?: boolean
  ariaControls?: string
  ariaExpanded?: boolean
  customClass?: string
}
