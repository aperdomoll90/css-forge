import { menuItemsArrayPropsTypes } from '../utils/GlobalTypes.types'

export interface ResponsiveNavPropsTypes {
  menuItemsArray: menuItemsArrayPropsTypes[]
  logo?:string
  height?: number
  width?: number
  logoHeight?: number
  logoMargin?: number
  primaryColor?: string
  secondaryColor?: string
  hoverColor?: string
  pressColor?: string
  labelColor?: string
}
