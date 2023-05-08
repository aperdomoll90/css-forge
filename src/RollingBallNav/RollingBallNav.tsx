import { useEffect } from 'react'
import './styles.css'

// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       ['ion-icon']: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
//     }
//   }
// }
// declare module 'react' {
//   interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
//     // extends React's HTMLAttributes
//     name?: string
//   }
// }

export const RollingBallNav: React.FC<{}> = () => {
  useEffect(() => {
    const list : NodeListOf<Element> = document.querySelectorAll('.rollingBallNavList')
    list.forEach(activeItem => {
      activeItem.addEventListener('click', () => {
          list.forEach(listItem => listItem.classList.remove('rollingBallNavActive'))
          activeItem.classList.add('rollingBallNavActive')
      })
    })
  }, [])

  return (
    <div className='rollingBallNavWrapper'>
      <div className='rollingBallNav'>
        <ul>
          <li className='rollingBallNavList rollingBallNavActive'>
            {/* <a href='#'> */}
              <span className='rollingBallNavIcon'>
                <ion-icon name='home-outline' />
              </span>
              <span className='rollingBallNavText'>Home</span>
            {/* </a> */}
          </li>
          <li className='rollingBallNavList'>
            {/* <a href='#'> */}
              <span className='rollingBallNavIcon'>
                <ion-icon name='person-outline' />
              </span>
              <span className='rollingBallNavText'>Profile</span>
            {/* </a> */}
          </li>
          <li className='rollingBallNavList'>
            {/* <a href='#'> */}
              <span className='rollingBallNavIcon'>
                <ion-icon name='chatbubble-outline' />
              </span>
              <span className='rollingBallNavText'>Messages</span>
            {/* </a> */}
          </li>
          <li className='rollingBallNavList'>
            {/* <a href='#'> */}
              <span className='rollingBallNavIcon'>
                <ion-icon name='camera-outline' />
              </span>
              <span className='rollingBallNavText'>Photos</span>
            {/* </a> */}
          </li>
          <li className='rollingBallNavList'>
            {/* <a href='#'> */}
              <span className='rollingBallNavIcon'>
                <ion-icon name='settings-outline' />
              </span>
              <span className='rollingBallNavText'>Settings</span>
            {/* </a> */}
          </li>
          <div className='rollingBallNavIndicator'> </div>
        </ul>
      </div>
    </div>
  )
}
