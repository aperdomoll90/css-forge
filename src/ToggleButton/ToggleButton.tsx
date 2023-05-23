import { useEffect } from 'react'
import './styles.css'
import '../utils/GlobalStyles.css'
import { ToggleButtonPropsType } from './ToggleButton.types'
import { LightenDarkenColor } from '../utils/ColorManipulation'

export const ToggleButton: React.FC<ToggleButtonPropsType> = ({ size, color, buttonHover, buttonBackgroundColor, shadow, setActive, ariaControls, ariaExpanded, top, bottom, left, right, customClass }) => {
  const defaultColor = '#fff'
  const defaultBackgroundColor = '#303030da'

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
  const toggleMenu = () => setActive((value: Boolean) => !value)

  useEffect(() => {
    let menuToggle = document.querySelector('.ToggleButton') as HTMLElement
    if (menuToggle) {
      menuToggle.onclick = function () {
        menuToggle.classList.toggle('ToggleButtonActive')
        toggleMenu()
      }
    }
  }, [])
  const classArray = customClass && customClass ? `ToggleButton ${customClass}` : 'ToggleButton'
  return (
    <button className={classArray} aria-controls={ariaControls} aria-expanded={ariaExpanded} style={stylesProps as React.CSSProperties}>
      <span></span>
      <span></span>
      <span></span>
      <span className='sr-only'>menu</span>
    </button>
  )
}
