import React, { useEffect, useRef } from 'react'
import './styles.css'
import '../utils/GlobalStyles.css'
import { wobbleElement } from '../utils/MouseEvents'
import { BubbleCardPropsType } from './BubbleCard.types'
import { LightenDarkenColor } from '../utils/ColorManipulation'

export const BubbleCard: React.FC<BubbleCardPropsType> = ({ width, height, primaryColor, secondaryColor, fontColor, label, content, imgUrl, imgWidth, imgX, imgY, hoverX, hoverY, hoverScale, demoUrl, codeUrl }): JSX.Element => {
  useEffect(() => {
    const elements = document.querySelectorAll('.wobble')
    document.addEventListener('mousemove', e => {
      wobbleElement(e, elements)
    })
  }, [])

  const stylesProps = {
    '--width': width ? `${width}rem` : '17rem',
    '--height': height ? `${height}rem` : '23rem',
    '--primaryColor': primaryColor ? primaryColor : '#1c2942',
    '--secondaryColor': secondaryColor ? secondaryColor : '#67df6e',
    '--fontColor': fontColor ? fontColor : '#fff',
    '--buttonActive': secondaryColor ? LightenDarkenColor(secondaryColor, -50) : LightenDarkenColor('#67df6e', -50),
    '--imgWidth': imgWidth ? `${imgWidth}%` : '70%',
    '--imgY': imgY ? `${imgY}rem` : '3.5rem',
    '--imgX': imgX ? `${imgX}rem` : '1.8rem',
    '--hoverX': hoverX ? `${hoverX}rem` : '-3rem',
    '--hoverY': hoverY ? `${hoverY}rem` : '-5rem',
    '--hoverScale': hoverScale ? hoverScale : 0.8,
  }

  return (
    <div className='bubbleCard-wrapper' style={stylesProps as React.CSSProperties}>
      <div className='bubbleCard-content'>
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
          {demoUrl && (
            <a className='bubbleCard-link' target='_blank' href={demoUrl}>
              <button className='bubbleCard-btn bubbleCard-success'>Demo</button>
            </a>
          )}
          {codeUrl && (
            <a className='bubbleCard-link' target='_blank' href={codeUrl}>
              <button className='bubbleCard-btn bubbleCard-border'>Github</button>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
