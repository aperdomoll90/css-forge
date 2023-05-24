import { useState } from 'react'
import './styles.css'
import '../utils/GlobalStyles.css'
import { ResponsiveNavPropsTypes } from './ResponsiveNav.type'
import { menuItemsArrayPropsTypes } from '../utils/GlobalTypes.types'
import { ToggleButton } from '../ToggleButton'

export const ResponsiveNav: React.FC<ResponsiveNavPropsTypes> = ({ logo, height, width, logoHeight, logoMargin, menuItemsArray, primaryColor, secondaryColor, hoverColor, pressColor, labelColor }) => {
  const [visible, setVisible] = useState(false)

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

  const renderMenuItems = menuItemsArray?.map((item: menuItemsArrayPropsTypes, index: number) => (
    <li key={`${item.label}-${index}`} className='responsiveNav-active'>
      <a className='responsiveNav-link' href={item.link}>
        <span aria-hidden='true'>0{index}</span>
        {item.label}
      </a>
    </li>
  ))

  return (
    <section id='primary-header' className='primary-header flex-row' style={stylesProps as React.CSSProperties}>
      <div>{logo && <img src={logo} className='primary-logo' />}</div>
      <ToggleButton
        top={1}
        right={1}
        customClass='mobile-nav-toggle'
        ariaControls='primary-navigation'
        ariaExpanded={visible}
        active={visible}
        setActive={() => {
          setVisible(!visible)
        }}
        buttonBackgroundColor='transparent'
      />
      <nav>
        <ul id='primary-navigation' aria-aria-expanded={visible} data-visible={visible} className='primary-navigation uppercase ff-sans-cond flex-row'>
          {renderMenuItems}
        </ul>
      </nav>
    </section>
  )
}
