import React from 'react'
import './styles.css'
import '../utils/GlobalStyles.css'
import { SlicerButtonPropsTypes } from './SlicerButton.types'

export const SlicerButton: React.FC<SlicerButtonPropsTypes> = ({ label, linkUrl, color, fontSize, colorHover }) => {
  const defaultColor = '#d93654'
  const defaultColorHover = '#f2f2f2'
  return (
    <a href={linkUrl}>
      <div className='slicerButton-wrapper' style={{ '--fontSize': fontSize ? fontSize : '1rem','--color': color ? color : defaultColor, '--colorHover': colorHover ? colorHover : defaultColorHover, } as React.CSSProperties}>
        <h2>
          {label}
          <span> {label}</span>
          <span> {label}</span>
        </h2>
      </div>
    </a>
  )
}
