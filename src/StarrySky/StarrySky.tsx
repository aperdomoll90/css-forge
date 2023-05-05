import { useEffect } from 'react'
import './styles.css'

export const StarrySky: React.FC<{}> = () => {
  useEffect(() => {
    rain()
  }, [])
  const rain = () => {
    let area = document.querySelector('.StarrySky')
    let amount = 20
    let i = 0
    if (area) {
      while (i < amount) {
        let drop = document.createElement('i')
        // let size = Math.random() * 5
        let posX = Math.floor(Math.random() * window.innerWidth)
        let posY = Math.floor(Math.random() * window.innerHeight)
        let delay = Math.random() * 10
        let duration = Math.random() * 5

        // drop.style.width = 0.2 + size + 'px'
        drop.style.left = posX + 'px'
        drop.style.top = posY + 'px'

        drop.style.animationDelay = delay + 's'
        drop.style.animationDuration = 20 + duration + 's'

        area.appendChild(drop)
        i++
      }
    }
  }

  return (
    <div className='StarrySky'>
      <div className='stars'></div>
      <div className='clouds'></div>
    </div>
  )
}
