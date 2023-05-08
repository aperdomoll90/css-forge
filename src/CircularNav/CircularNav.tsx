import { useEffect } from 'react'
import './styles.css'
import { AddIcon } from '../IconCollection/IconCollection'
import { CircularNavPropsTypes, MenuItemsArrayPropsTypes } from './CircularNav.types'

export const CircularNav: React.FC<CircularNavPropsTypes> = ({ MenuItemsArray, color, hoverColor, pressColor }) => {
  useEffect(() => {
    let toggle = document.querySelector('.circularNavToggle') as HTMLElement
    let menu = document.querySelector('.circularNavMenu') as HTMLElement
    toggle.onclick = () => {
      menu.classList.toggle('circularNavActive')
    }
  }, [])

  return (
    <div className='circularNavWrapper'>
      <div className='circularNavMenu' style={{ '--color': color, '--hoverColor': hoverColor, '--pressColor': pressColor } as React.CSSProperties}>
        <div className='circularNavToggle'>
          <div className='circularNavToggle-icon'>{AddIcon}</div>
        </div>
        {MenuItemsArray &&
          MenuItemsArray.map((item: MenuItemsArrayPropsTypes, index: number) => {
            return (
              <li className='circularNavMenu-icon' style={{ '--i': index } as React.CSSProperties}>
                <a href={item.link} className='circularNavMenu-icon'>
                  {item.icon}
                </a>
              </li>
            )
          })}
      </div>
    </div>
  )
}
