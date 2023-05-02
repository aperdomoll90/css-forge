import { useEffect } from 'react'
import './styles.css'
import { rotateElement } from '../BubbleCard/utils/MouseEvents'

export interface PerspectiveCardPropsType {
  color?: string
  label: string
  content: string
  imgUrl: string
  linkUrl?: string
}

function PerspectiveCard({ color, label, content, imgUrl, linkUrl }: PerspectiveCardPropsType) {
  
  useEffect(() => {
    const contentArea = document.querySelector('.perspectiveCard-content')

    document.addEventListener('mousemove', e => {
      rotateElement(e, contentArea)
    })
  
  }, [])
  return (
    <div className='perspectiveCard-wrapper'>
      <div className='perspectiveCard-content'>
        <div className='perspectiveCard-marquee'>{label}</div>
        <img alt={`${label}-image`} src={imgUrl} className='perspectiveCard-img' />
        <h1 className='perspectiveCard-title'>{label}</h1>
        <div className='perspectiveCard-body'>
          <p className='perspectiveCard-content-text'>{content}</p>
        </div>
        <div className='perspectiveCard-footer'>
          <button className='perspectiveCard-btn perspectiveCard-success'>Demo</button>
          <button className='perspectiveCard-btn perspectiveCard-border'>Github</button>
        </div>
      </div>
    </div>
  )
}

export default PerspectiveCard
