import { useEffect } from 'react'
import './styles.css'
import hiker from './media/hiker.png'
import plane2 from './media/plane2.png'
import plane3 from './media/plane3.png'
import backgroundMountain from './media/plane4.png'
import sky from './media/space.jpeg'

function HikerParallax() {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      let scroll = window.pageYOffset
      let screenWidth = window.screen.width

      const translate = document.querySelectorAll('.translate')
      const backgroundMountain = document.querySelector('.backgroundMountain')
      const shadow = document.querySelector('.heroShadow')

      // >>>>>>>>>>>>>>>>>>> TRANSLATE Y
      translate.forEach(element => {
        let speed = element.dataset.speed
        element.style.transform = `translateY(${scroll * speed}px)`
      })

      // <<<<<<<<<<<<<<<<<<<< HEIGHT
      if (shadow) {
        shadow.style.height = `${scroll * 0.5 + 270}px`
      }

      // <<<<<<<<<<<<<<<<<<<< WIDTH
      if (backgroundMountain) {
        if (screenWidth < 992) {
          backgroundMountain.style.width = `${-scroll / 25 + 250}vw`
        }
        if (screenWidth > 991) {
          backgroundMountain.style.width = `${-scroll / 25 + 100}vw`
        }
      }
    })
  }, [])
  return (
    <section id='hiker-parallax-wrapper'>
      <div className='hiker-parallax'>
        <img src={hiker} className='hiker translate contentOnLoadAnimation' data-speed='0.3' alt='hiker' />
        <img src={plane2} className='plane2 translate contentOnLoadAnimation' data-speed='-0.7' alt='mountain forest' />
        <img src={plane3} className='plane3 translate contentOnLoadAnimation' data-speed='-0.4' alt='medium mountain' />
        <img src={backgroundMountain} className='backgroundMountain contentOnLoadAnimation' alt='High mountain peeks covered in snow' />
        <img src={sky} className='sky translate contentOnLoadAnimation' data-speed='-0.3' alt='sky' />
      </div>
    </section>
  )
}

export default HikerParallax
