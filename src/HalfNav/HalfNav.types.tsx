import { menuItemsArrayPropsTypes } from '../utils/GlobalTypes.types'

export interface HalfNavPropsType {
  menuItemsArray: menuItemsArrayPropsTypes[]
  color?: `#${string}` | `rgb(${number}, ${number}, ${number})` | `rgba(${number}, ${number}, ${number}, ${number})` | ''
  buttonHover?: string
  labelColor?: string
  labelColorHover?: string
  buttonBackgroundColor?: string
  menuBackgroundColor?: string
}
