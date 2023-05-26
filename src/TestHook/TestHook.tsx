import React, { useState } from 'react'
import './styles.css'
import '../utils/GlobalStyles.css'
import { TestHookPropsType } from './TestHook.types'
import { LightenDarkenColor } from '../utils/ColorManipulation'

export const TestHook: React.FC<TestHookPropsType> = ({ size, color, buttonHover, buttonBackgroundColor, shadow, ariaControls, ariaExpanded, top, bottom, left, right, customClass }) => {
  const defaultColor = '#fff'
  const defaultBackgroundColor = '#303030da'
  const [active, setActive] = useState(false)

  const stylesProps = {
    '--size': size ? `${size}rem` : '2rem',
    '--color': color ? color : defaultColor,
    '--buttonHover': buttonHover ? buttonHover : LightenDarkenColor(buttonBackgroundColor || defaultBackgroundColor, -80),
    '--buttonBackgroundColor': buttonBackgroundColor ? buttonBackgroundColor : defaultBackgroundColor,
    '--shadow': shadow ? 'rgba(0, 0, 0, 0.8)' : '',
    '--top': top ? `${top}rem` : 'auto',
    '--bottom': bottom ? `${bottom}rem` : 'auto',
    '--left': left ? `${left}rem` : 'auto',
    '--right': right ? `${right}rem` : 'auto',
  }

  const isActive = active ? 'TestHookActive TestHook' : 'TestHook'
  const classArray = customClass && customClass ? `${isActive} ${customClass}` : isActive

  return (
    <button className={classArray} aria-controls={ariaControls} aria-expanded={ariaExpanded} style={stylesProps as React.CSSProperties} onClick={() => setActive((value: Boolean) => !value)}>
      <span></span>
      <span></span>
      <span></span>
      <span className='sr-only'>menu</span>
    </button>
  )
}
