import { useEffect, useRef } from 'react'
import './styles.css'

export interface BubbleCardPropsType {
  color?: string
  label: string
  content: string
  imgUrl: string
  demoUrl: string
  codeUrl: string
}

function BubbleCard({ color, label, content, imgUrl, demoUrl, codeUrl }: BubbleCardPropsType) {
  const areaRef = useRef()

  const handleMouseMov = e => {
    const width = window.innerWidth
    const height = window.innerHeight
    // get mouse position
    const x = e.clientX
    const y = e.clientY
    // find the middle
    const middleX = window.innerWidth / 2
    const middleY = window.innerHeight / 2

    //get offset from middle
    const offsetX = ((x - middleX) / middleX) * 85
    const offsetY = ((y - middleY) / middleY) * 85

    const wobbles = document.querySelectorAll('.wobble')

    wobbles.forEach(wobble => {
      const speed = wobble.getAttribute('data-speed')
      const x = (offsetX / width) * speed
      const y = (offsetY / height) * speed
      wobble.style.transform = `translateX(${x}%) translateY(${y}%) `
    })
  }

  return (
    <div className='bubbleCard-wrapper'>
      <div className='bubbleCard-content' ref={areaRef as any} onMouseMove={handleMouseMov}>
        <div className='bubbleCard-marquee '>
          <div data-speed='-255' className='wobble'>
            {label}
          </div>
        </div>
        <div className='bubbleCard-img-container'>
          <img data-speed='-25' alt={`${label}-image`} src={imgUrl} className='bubbleCard-img wobble' />
        </div>
        <h1 className='bubbleCard-title'>{label}</h1>
        <div className='bubbleCard-body'>
          <p className='bubbleCard-content-text'>{content}</p>
        </div>
        <div className='bubbleCard-footer'>
          <a className='bubbleCard-link' target='_blank' href={demoUrl}>
            <button className='bubbleCard-btn bubbleCard-success'>Demo</button>
          </a>
          <a className='bubbleCard-link' target='_blank' href={codeUrl}>
            <button className='bubbleCard-btn bubbleCard-border'>Github</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default BubbleCard
