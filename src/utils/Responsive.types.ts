export type ResponsiveOptions = 'default' | 'md' | 'lg' | 'xl' | 'xxl'
export type ResponsiveType<T> = {
  [key in ResponsiveOptions]?: T
}