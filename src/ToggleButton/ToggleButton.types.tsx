import { MenuItemsArrayPropsTypes } from '../utils/GlobalTypes.types'

export interface ToggleButtonPropsType {
  MenuItemsArray: MenuItemsArrayPropsTypes[]
  color?: `#${string}` | `rgb(${number}, ${number}, ${number})` | `rgba(${number}, ${number}, ${number}, ${number})` | ''
  buttonHover?: string
  labelColor?: string
  labelColorHover?: string
  buttonBackgroundColor?: string
  menuBackgroundColor?: string
}
