import { useEffect, useState } from 'react'
import './styles.css'

export const ToggleButton: React.FC<{}> = () => {
  const [showMenu, setShowMenu] = useState<boolean>()
  const toggleMenu = () => setShowMenu(value => !value)
  useEffect(() => {
    let menuToggle = document.querySelector('.ToggleButton') as HTMLElement
    let menuDropDown = document.querySelector('.ToggleButtonDropDown') as HTMLElement
    menuToggle.onclick = function () {
      menuToggle.classList.toggle('ToggleButtonActive')
      menuDropDown.classList.toggle('ToggleButtonDropDownActive')
    }
  }, [])

  return (
    <div className='fieldLocation'>
      <div className='ToggleButtonWrapper'>
        <div className='ToggleButton'>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className='ToggleButtonDropDown'>
          <p>
            <ion-icon name='home-outline' /> Home
          </p>
          <p>
            <ion-icon name='chatbubble-outline' /> Messages
          </p>
          <p>
            <ion-icon name='person-outline' /> Profile
          </p>
          <p>
            <ion-icon name='settings-outline' /> Settings
          </p>
        </div>
      </div>
    </div>
  )
}
