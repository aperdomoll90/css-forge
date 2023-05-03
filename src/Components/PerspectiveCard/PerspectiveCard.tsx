import { useEffect } from 'react'
import './styles.css'
import { rotateElement } from '../BubbleCard/utils/MouseEvents'

export interface PerspectiveCardPropsType {
  label: string
  content: string
  imgUrl: string
  demoUrl: string
  codeUrl: string
}

function PerspectiveCard({ label, content, imgUrl, demoUrl, codeUrl }: PerspectiveCardPropsType) {
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
          <a className='perspectiveCard-link' target='_blank' href={demoUrl}>
            <button className='perspectiveCard-btn perspectiveCard-success'>Demo</button>
          </a>
          <a className='perspectiveCard-link' target='_blank' href={codeUrl}>
          <button className='perspectiveCard-btn perspectiveCard-border'>Github</button>
        </a>
        </div>
      </div>
    </div>
  )
}

export default PerspectiveCard
