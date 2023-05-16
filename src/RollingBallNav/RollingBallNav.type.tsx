import { menuItemsArrayPropsTypes } from '../utils/GlobalTypes.types'

export interface RollingBallNavPropsTypes {
  menuItemsArray: menuItemsArrayPropsTypes[]
  height?: number
  width?: number
  primaryColor?: string
  secondaryColor?: string
  hoverColor?: string
  pressColor?: string
  labelColor?: string
}
