import { useEffect } from 'react'
import { rotateElement } from '../utils/MouseEvents'
import { PerspectiveCardPropsType } from './PerspectiveCard.types'
import './styles.css'

export const PerspectiveCard: React.FC<PerspectiveCardPropsType> = ({ label, content, imgUrl, demoUrl, codeUrl }) => {
  useEffect(() => {
    const contentArea: HTMLDivElement | null = document.querySelector('.perspectiveCard-content')

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
