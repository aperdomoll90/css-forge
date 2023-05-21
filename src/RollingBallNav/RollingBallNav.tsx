import { useEffect } from 'react'
import './styles.css'
import '../utils/GlobalStyles.css'
import { RollingBallNavPropsTypes } from './RollingBallNav.type'
import { menuItemsArrayPropsTypes } from '../utils/GlobalTypes.types'

export const RollingBallNav: React.FC<RollingBallNavPropsTypes> = ({ height, width, menuItemsArray, primaryColor, secondaryColor, hoverColor, pressColor, labelColor }) => {
  useEffect(() => {
    const list: NodeListOf<Element> = document.querySelectorAll('.rollingBallNavList')
    list.forEach(activeItem => {
      activeItem.addEventListener('click', () => {
        list.forEach(listItem => listItem.classList.remove('rollingBallNavActive'))
        activeItem.classList.add('rollingBallNavActive')
      })
    })
  }, [])

  const stylesProps = {
    '--width': width ? `${width}rem` : '26rem',
    '--height': height ? `${height}rem` : '5.4rem',
    '--primaryColor': primaryColor ? primaryColor : '#222327',
    '--secondaryColor': secondaryColor ? secondaryColor : '#29fd53',
    '--labelColor': labelColor ? labelColor : '#222327',
    '--hoverColor': hoverColor ? hoverColor : '#1c2942',
    '--pressColor': pressColor ? pressColor : '#1c2942',
  }

  return (
    <div className='rollingBallNavWrapper' style={stylesProps as React.CSSProperties}>
      <div className='rollingBallNav'>
        <ul>
          {menuItemsArray &&
            menuItemsArray.map((item: menuItemsArrayPropsTypes) => {
              console.log('item', item)
              return (
                <li className='rollingBallNavList'>
                  {/* <a href={item.link}> */}
                  <a>
                    <div className='rollingBallNavIcon'> <>{item.icon}</></div>
                    <span className='rollingBallNavText'>{item.label}</span>
                  </a>
                </li>
              )
            })}
          <div className='rollingBallNavIndicator'> </div>
        </ul>
      </div>
    </div>
  )
}
