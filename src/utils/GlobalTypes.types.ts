export type ResponsiveOptions = 'default' | 'md' | 'lg' | 'xl' | 'xxl'
export type ResponsiveType<T> = {
  [key in ResponsiveOptions]?: T
}

export interface ValuePerBreakpoint {
  default?: string
  sm?: string
  md?: string
  mdx?: string
  lg?: string
}

export interface menuItemsArrayPropsTypes {
  label?: string
  icon: React.SVGProps<SVGSVGElement>
  link: string
}
