import { useEffect } from 'react';
import { Meta, Title, IconGallery, IconItem } from '@storybook/blocks';

import { Icon as IconExample } from './Icon';
import './styles.css'


function CircularNav() {
    
    useEffect(() => {
        let toggle = document.querySelector('.circularNavToggle') as HTMLElement;
        let menu = document.querySelector('.circularNavMenu') as HTMLElement
        toggle.onclick = () => { menu.classList.toggle('circularNavActive')}
    }, [])

  return (   
 <div className="circularNavWrapper">
    <div className="circularNavMenu">
           <div className="circularNavToggle"><ion-icon name="add-outline"/></div>
           <li style={{'--i':0} as React.CSSProperties}><a href='#'><ion-icon name="home-outline"/></a></li>
           <li style={{'--i':1} as React.CSSProperties}><a href='#'><ion-icon name="person-outline"/></a></li>
           <li style={{'--i':2} as React.CSSProperties}><a href='#'><ion-icon name="settings-outline"/></a></li>
           <li style={{'--i':3} as React.CSSProperties}><a href='#'><ion-icon name="mail-outline"/></a></li>
           <li style={{'--i':4} as React.CSSProperties}><a href='#'><ion-icon name="key-outline"/></a></li>
           <li style={{'--i':5} as React.CSSProperties}><a href='#'><ion-icon name="videocam-outline"/></a></li>
           <li style={{'--i':6} as React.CSSProperties}><a href='#'><ion-icon name="water-outline"/></a></li>
           <li style={{'--i':7} as React.CSSProperties}><a href='#'><ion-icon name="paw-outline"/></a></li>
                
     </div>
</div>
  )
}

export default CircularNav
