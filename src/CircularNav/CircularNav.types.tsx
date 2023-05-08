export interface CircularNavPropsTypes {
  MenuItemsArray: MenuItemsArrayPropsTypes[]
  color?: string
  hoverColor?: string
  pressColor?: string
}

export interface MenuItemsArrayPropsTypes {
  label?: string
  icon: React.SVGProps<SVGSVGElement>
  link: string
}
