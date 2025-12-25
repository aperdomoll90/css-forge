export interface ColorPropsType {
  color: string | `#${string}` | `rgb(${number}, ${number}, ${number})` | `rgba(${number}, ${number}, ${number}, ${number})`
}

export const RandomColor = (): string => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16)
  return `#${randomColor.padStart(6, '0')}`
}

export const ColorByIndex = (index: number, arraySize: number): string => {
  return `hsl(${(index * 360) / arraySize}, 100%, 50%)`
}

export const LightenDarkenColor = (color: string, amount: number): string => {
  let usePound = false
  if (color[0] === '#') {
    color = color.slice(1)
    usePound = true
  }

  const num = parseInt(color, 16)

  let r = (num >> 16) + amount
  r = Math.max(Math.min(255, r), 0)

  let g = ((num >> 8) & 0x00ff) + amount
  g = Math.max(Math.min(255, g), 0)

  let b = (num & 0x0000ff) + amount
  b = Math.max(Math.min(255, b), 0)

  return (usePound ? '#' : '') + (b | (g << 8) | (r << 16)).toString(16).padStart(6, '0')
}
