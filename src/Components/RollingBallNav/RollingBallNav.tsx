import { useEffect } from 'react';
import './styles.css'

declare global {
    namespace JSX {
      interface IntrinsicElements {
        ['ion-icon']: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      }
    }
}
declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
      // extends React's HTMLAttributes
      name?: string
    }
  }

function RollingBallNav() {
useEffect(()=>{
    const list = document.querySelectorAll('.rollingBallNavList')
    function activeLink(){
        list.forEach((item)=> item.classList.remove('rollingBallNavActive'))
        this.classList.add('rollingBallNavActive')
    }
    list.forEach((item)=>{
        item.addEventListener('click',activeLink)
    })
},[])

  return (   
 <div className="rollingBallNavWrapper">
   <div className="rollingBallNav">
<ul>
    <li className='rollingBallNavList rollingBallNavActive'>
        <a href="#">
            <span className="rollingBallNavIcon"><ion-icon name="home-outline"/></span>
            <span className="rollingBallNavText">Home</span>
        </a>
    </li>
    <li className='rollingBallNavList'>
        <a href="#">
            <span className="rollingBallNavIcon"><ion-icon name="person-outline"/></span>
            <span className="rollingBallNavText">Profile</span>
        </a>
    </li>
    <li className='rollingBallNavList'>
        <a href="#">
            <span className="rollingBallNavIcon"><ion-icon name="chatbubble-outline"/></span>
            <span className="rollingBallNavText">Messages</span>
        </a>
    </li>
    <li className='rollingBallNavList'>
        <a href="#">
            <span className="rollingBallNavIcon"><ion-icon name="camera-outline"/></span>
            <span className="rollingBallNavText">Photos</span>
        </a>
    </li>
    <li className='rollingBallNavList'>
        <a href="#">
            <span className="rollingBallNavIcon"><ion-icon name="settings-outline"/></span>
            <span className="rollingBallNavText">Settings</span>
        </a>
    </li>
    <div className="rollingBallNavIndicator"> </div>
</ul>
   </div>
</div>
  )
}

export default RollingBallNav
