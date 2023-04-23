import { useRef, useState, useEffect } from 'react'
import { gsap, Elastic } from 'gsap'
import './styles.css'

function BouncyLine() {
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const ref = useRef<HTMLInputElement>()

  const handleMouseMov = (e: React.ChangeEvent<HTMLInputElement>) => {
    const width = ref.current.clientWidth
    const height = ref.current.clientHeight
    const offX = (e.nativeEvent.offsetX / width) * 500
    const offY = (e.nativeEvent.offsetY / height) * 500
    setCoords({
      x: offX,
      y: offY,
    })
    updatePath(width)
  }
  const updatePath = (width: number) => {
    const path = document.querySelector('path') as SVGPathElement
    let { x, y } = coords
    path.setAttribute('d', `M250,0 Q${x},${y} 250,500`)
  }

  const handleMouseOut = (e: React.ChangeEvent<HTMLInputElement>) => {
    const path = document.querySelector('path')
    snapBack()
    function snapBack() {
      gsap.to(path, { ease: Elastic.easeOut.config(1, 0, 3), attr: { d: 'M250,0 Q250,250 250,500' } })
    }
  }

  // same effect but using JavaScrip Event Listeners
  // useEffect(()=>{
  //     let areaEffect = document.getElementById('BouncyLineWrapper')
  //     const path = document.querySelector('path')
  //     // let areaEffect = document

  //     areaEffect.addEventListener('mousemove', event => {
  //     let x = event.clientX
  //     let y = event.clientY
  //     let width = x / window.innerWidth
  //     updateCoords(x, y)
  //     function updateCoords(x, y) {
  //       x = width * 500
  //       path.setAttribute('d', `M250,0 Q${x},${y} 250,500`)
  //     }
  //   })

  //   areaEffect.addEventListener('mouseout', event => {
  //     snapBack()
  //     function snapBack() {
  //         // path.setAttribute('d', 'M250,0 Q250,250 250,500')
  //         gsap.to(path, { ease: Elastic.easeOut.config(1,0,3), attr: { d: 'M250,0 Q250,250 250,500' } })
  //       }
  //   })

  // },[])

  return (
    <div id='BouncyLineWrapper' preserveAspectRatio='xMidYMid meet' onMouseMove={handleMouseMov} onMouseOut={handleMouseOut} ref={ref}>
      <svg viewBox='0 0 500 500'>
        <path d='M250,0 Q250,250 250,500' />
      </svg>
    </div>
  )
}

export default BouncyLine
