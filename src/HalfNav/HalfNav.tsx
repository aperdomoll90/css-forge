import { useEffect, useState } from 'react'
import './styles.css'
import '../utils/GlobalStyles.css'
import { HalfNavPropsType } from './HalfNav.types'
import { menuItemsArrayPropsTypes } from '../utils/GlobalTypes.types'
import { LightenDarkenColor } from '../utils/ColorManipulation'
import { ToggleButton } from '../ToggleButton'

export const HalfNav: React.FC<HalfNavPropsType> = ({ menuItemsArray, color, buttonHover, labelColor, labelColorHover, buttonBackgroundColor, menuBackgroundColor }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false)

  useEffect(() => {
    console.log('showMenu', showMenu)
  }, [showMenu])

  const defaultColor = '#fff'
  const defaultLabelColor = '#fff'
  const defaultLabelColorHover = '#7a7777'
  const defaultBackgroundColor = '#303030da'

  const stylesProps = {
    '--color': color ? color : defaultColor,
    '--buttonHover': buttonHover ? buttonHover : LightenDarkenColor(defaultBackgroundColor, -80),
    '--labelColor': labelColor ? labelColor : defaultLabelColor,
    '--labelColorHover': labelColorHover ? labelColorHover : defaultLabelColorHover,
    '--menuBackgroundColor': menuBackgroundColor ? menuBackgroundColor : defaultBackgroundColor,
    '--buttonBackgroundColor': buttonBackgroundColor ? buttonBackgroundColor : defaultBackgroundColor,
  }

  useEffect(() => {
    let menuDropDown = document.querySelector('.HalfNavDropDown') as HTMLElement
    showMenu ? menuDropDown.classList.add('HalfNavDropDownActive') : menuDropDown.classList.remove('HalfNavDropDownActive')
  }, [showMenu])

  return (
    <div className='HalfNavWrapper' style={stylesProps as React.CSSProperties}>
      <ToggleButton setActive={setShowMenu} color={color} buttonHover={buttonHover} buttonBackgroundColor={buttonBackgroundColor} />
      <div className='HalfNavDropDown'>
        {menuItemsArray &&
          menuItemsArray.map((item: menuItemsArrayPropsTypes, index: number) => {
            return (
              <div className='HalfNavDropDown-menu-bullet'>
                <p>{item.label}</p>
              </div>
            )
          })}
      </div>
    </div>
  )
}
