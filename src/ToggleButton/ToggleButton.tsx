import { useEffect, useState } from 'react'
import './styles.css'
import { ToggleButtonPropsType } from './ToggleButton.types'
import { MenuItemsArrayPropsTypes } from '../utils/GlobalTypes.types'
import { LightenDarkenColor } from '../utils/ColorManipulation'

export const ToggleButton: React.FC<ToggleButtonPropsType> = ({ MenuItemsArray, color, buttonHover, labelColor, labelColorHover, buttonBackgroundColor, menuBackgroundColor }) => {
  const [showMenu, setShowMenu] = useState<boolean>()
  const toggleMenu = () => setShowMenu(value => !value)

  const defaultColor = '#1863ff'
  const defaultLabelColor = '#000'
  const defaultLabelColorHover = '#1863ff'
  const defaultBackgroundColor = '#fff'

  const stylesProps = {
    '--color': color ? color : defaultColor,
    '--buttonHover': buttonHover ? buttonHover : LightenDarkenColor(defaultBackgroundColor, -80),
    '--labelColor': labelColor ? labelColor : defaultLabelColor,
    '--labelColorHover': labelColorHover ? labelColorHover : defaultLabelColorHover,
    '--menuBackgroundColor': menuBackgroundColor ? menuBackgroundColor : defaultBackgroundColor,
    '--buttonBackgroundColor': buttonBackgroundColor ? buttonBackgroundColor : defaultBackgroundColor,
  }

  useEffect(() => {
    let menuToggle = document.querySelector('.ToggleButton') as HTMLElement
    let menuDropDown = document.querySelector('.ToggleButtonDropDown') as HTMLElement
    if (menuToggle && menuDropDown) {
      menuToggle.onclick = function () {
        menuToggle.classList.toggle('ToggleButtonActive')
        menuDropDown.classList.toggle('ToggleButtonDropDownActive')
      }
    }
  }, [])

  const ToggleButton = (
    <div className='ToggleButton'>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )

  return (
    <div className='fieldLocation'>
      <div className='ToggleButtonWrapper' style={stylesProps as React.CSSProperties}>
        {ToggleButton}
        <div className='ToggleButtonDropDown'>
          {MenuItemsArray &&
            MenuItemsArray.map((item: MenuItemsArrayPropsTypes, index: number) => {
              return (
                <>
                  {item.icon} <p>{item.label}</p>
                </>
              )
            })}
        </div>
      </div>
    </div>
  )
}
