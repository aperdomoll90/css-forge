import React, { useEffect } from 'react'
import './styles.css'
import { DrawSvgPropsTypes } from './DrawSvg.types'

export const DrawSvg: React.FC<DrawSvgPropsTypes> = ({ line, strokeWidth, color, width, height, top, right, left }) => {
  const stylesProps = {
    '--strokeWidth': strokeWidth ? strokeWidth : '3',
    '--height': height ? `${height}` : '100vh',
    '--width': width ? `${width}%` : '100%',
    '--top': top ? `${top}` : 'auto',
    '--left': left ? `${left}` : 'auto',
    '--right': right ? `${right}` : 'auto',
    '--color': color ? color : '#e20953',
  }

  useEffect(() => {
    const container = document.querySelector('.lineContainer')
    const path: SVGGeometryElement | null = container && container.querySelector('path')
    if (path) {
      const pathLength = path.getTotalLength()
      path.style.strokeDasharray = pathLength + ' ' + pathLength
      path.style.strokeDashoffset = pathLength.toString()

      window.addEventListener('scroll', () => {
        // what % down is it
        const scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)

        // length to offset he dashes
        const drawLength = pathLength * scrollPercentage

        // Draw in reverse
        const offset = pathLength - drawLength
        path.style.strokeDashoffset = offset.toString()
      })
    }
  }, [])

  return (
    <div className='lineContainer' style={stylesProps as React.CSSProperties}>
      <>{line}</>
    </div>
  )
}
