import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export interface ColorPropsType {
  color: string | `#${string}` | `rgb(${number}, ${number}, ${number})` | `rgba(${number}, ${number}, ${number}, ${number})`
}

export const RandomColor = (): string => { 
  const randomColor = Math.floor(Math.random()*16777215).toString(16)
  return `#${randomColor}`
}

export const ColorByIndex = (index:number, arraySize:number) => { 
  return `hsl(${(index * 360) / arraySize}, 100%, 50%)`
}

export const ChangeSectionColor = (bgColor: string, inView: boolean, parentID: string): void => {
  // add this where this function will be used
  // const [refItem, inView] = useInView({
  //   threshold: 0,
  // })
  const wrapper = document.getElementById(parentID)
  useEffect(() => {
    inView && wrapper && (wrapper.style.backgroundColor = bgColor)
  }, [inView])
}

export const LightenDarkenColor = (color: any, amount: number) => {
  var usePound = false
  if (color[0] == '#') {
    color = color.slice(1)
    usePound = true
  }

  var num = parseInt(color, 16)

  var r = (num >> 16) + amount

  if (r > 255) r = 255
  else if (r < 0) r = 0

  var b = ((num >> 8) & 0x00ff) + amount

  if (b > 255) b = 255
  else if (b < 0) b = 0

  var g = (num & 0x0000ff) + amount

  if (g > 255) g = 255
  else if (g < 0) g = 0

  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
}
