import { useRef, useState } from 'react'
import './styles.css'
import { TextColorHoverPropsTypes } from './TextColorHover.types'



export const TextColorHover: React.FC<TextColorHoverPropsTypes> = ({ text }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const ref = useRef<any>()
  const { x, y } = coords
  const maskStyle: any = {
    '--maskX': x,
    '--maskY': y,
  }

  const handleMouseMov = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const width = ref.current.clientWidth
    const height = ref.current.clientHeight
    const offX = (e.nativeEvent.offsetX / width) * 100
    const offY = (e.nativeEvent.offsetY / height) * 100
    setCoords({
      x: offX,
      y: offY,
    })
  }

  const handleMouseOut = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setCoords({
      x: 0,
      y: 0,
    })
  }

  return (
    <div id='mouseOverTextWrapper'>
      <div className='mouseOverTextContainer' onMouseMove={handleMouseMov} onMouseOut={handleMouseOut} style={maskStyle} ref={ref as any}>
        <div className='mouseOverTextTitleWrapper'>
          <h1>{text}</h1>
        </div>
        <div className='mouseOverTextTitleWrapper mouseOverTexCloneWrapper'>
          <h1>{text}</h1>
        </div>
      </div>
    </div>
  )
}
