import React, { useEffect, useRef } from 'react'
import './styles.css'
import { wobbleElement } from '../utils/MouseEvents'
import { BubbleCardPropsType } from './BubbleCard.types'

export const BubbleCard : React.FC<BubbleCardPropsType> = ({ color, label, content, imgUrl, demoUrl, codeUrl }): JSX.Element => {
  useEffect(() => {
    const elements = document.querySelectorAll('.wobble')

    document.addEventListener('mousemove', e => {
      wobbleElement(e, elements)
    })
  }, [])

  return (
    <div className='bubbleCard-wrapper'>
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


