import { useEffect } from 'react'
import { rotateElement } from '../utils/MouseEvents'
import { PerspectiveCardPropsType } from './PerspectiveCard.types'
import './styles.css'
import '../utils/GlobalStyles.css'
import { LightenDarkenColor } from '../utils/ColorManipulation'

export const PerspectiveCard: React.FC<PerspectiveCardPropsType> = ({ width, height, primaryColor, secondaryColor, fontColor, label, content, imgUrl, imgWidth, demoUrl, codeUrl }): JSX.Element => {
  useEffect(() => {
    const contentArea: HTMLDivElement | null = document.querySelector('.perspectiveCard-content')
    document.addEventListener('mousemove', e => {
      rotateElement(e, contentArea)
    })
  }, [])
  const stylesProps = {
    '--width': width ? `${width}rem` : '17rem',
    '--height': height ? `${height}rem` : '23rem',
    '--imgWidth': imgWidth ? `${imgWidth}%` : '70%',
    '--primaryColor': primaryColor ? primaryColor : '#1c2942',
    '--secondaryColor': secondaryColor ? secondaryColor : '#67df6e',
    '--fontColor': fontColor ? fontColor : '#fff',
    '--buttonActive': secondaryColor ? LightenDarkenColor(secondaryColor, -50) : LightenDarkenColor('#67df6e', -50),
  }
  return (
    <div className='perspectiveCard-wrapper' style={stylesProps as React.CSSProperties}>
      <div className='perspectiveCard-content'>
        <div className='perspectiveCard-marquee'>{label}</div>
        <div className='perspectiveCard-img-container'>
          <img alt={`${label}-image`} src={imgUrl} className='perspectiveCard-img' />
        </div>
        <h1 className='perspectiveCard-title'>{label}</h1>
        <div className='perspectiveCard-body'>
          <p className='perspectiveCard-content-text'>{content}</p>
        </div>
        <div className='perspectiveCard-footer'>
        {demoUrl && (
            <a className='perspectiveCard-link' target='_blank' href={demoUrl}>
              <button className='perspectiveCard-btn perspectiveCard-success'>Demo</button>
            </a>
          )}
          {codeUrl && (
            <a className='perspectiveCard-link' target='_blank' href={codeUrl}>
              <button className='perspectiveCard-btn perspectiveCard-border'>Github</button>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
