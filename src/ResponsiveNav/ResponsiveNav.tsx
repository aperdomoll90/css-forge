import { useEffect, useState } from 'react'
import './styles.css'
import '../utils/GlobalStyles.css'
import { ResponsiveNavPropsTypes } from './ResponsiveNav.type'
import { menuItemsArrayPropsTypes } from '../utils/GlobalTypes.types'
import logo from '../media/Logo.png'
import { ToggleButton } from '../ToggleButton'

export const ResponsiveNav: React.FC<ResponsiveNavPropsTypes> = ({ height, width, logoHeight, logoMargin, menuItemsArray, primaryColor, secondaryColor, hoverColor, pressColor, labelColor }) => {
  const [active, setActive] = useState<Boolean>(false)
  useEffect(() => {
    const primaryNav = document.querySelector('.primary-navigation') as HTMLElement
    const navToggle = document.querySelector('.mobile-nav-toggle') as HTMLElement

    navToggle?.addEventListener('click', () => {
      const visibility = primaryNav?.getAttribute('data-visible')
      if (visibility === 'false') {
        primaryNav?.setAttribute('data-visible', 'true')
        navToggle?.setAttribute('aria-expanded', 'true')
      } else if (visibility === 'true') {
        primaryNav?.setAttribute('data-visible', 'false')
        navToggle?.setAttribute('aria-expanded', 'false ')
      }
    })
  }, [])

  const stylesProps = {
    '--height': height ? `${height}rem` : '5.4rem',
    '--width': width ? `${width}rem` : '100%',
    '--logoHeight': logoHeight ? logoHeight : '3rem',
    '--logoMargin': logoMargin ? logoMargin : '1rem',
    '--primaryColor': primaryColor ? primaryColor : '#222327',
    '--secondaryColor': secondaryColor ? secondaryColor : '#29fd53',
    '--labelColor': labelColor ? labelColor : '#fff',
    '--hoverColor': hoverColor ? hoverColor : '#1c2942',
    '--pressColor': pressColor ? pressColor : '#1c2942',
  }

  return (
    <header id='primary-header' className='primary-header flex-row' style={stylesProps as React.CSSProperties}>
      <div>
        <img src={logo} className='primary-logo' />
      </div>

      <ToggleButton customClass='mobile-nav-toggle' ariaControls='primary-navigation' ariaExpanded={false} setActive={setActive} buttonBackgroundColor='transparent' />
      {/* <button className='mobile-nav-toggle' aria-controls='primary-navigation' aria-expanded='false'>
        <span className='sr-only'>menu</span>
      </button> */}
      <nav>
        <ul id='primary-navigation' data-visible='false' className='primary-navigation uppercase ff-sans-cond flex-row'>
          {menuItemsArray &&
            menuItemsArray.map((item: menuItemsArrayPropsTypes, index: number) => (
              <li className='responsiveNav-active'>
                <a className='responsiveNav-link' href={item.link}>
                  <span aria-hidden='true'>0{index}</span>
                  {item.label}
                </a>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  )
}
