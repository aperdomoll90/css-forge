import { ChevronCardPropsType, styleVariableType } from './ChevronCard.types'
import './styles.css'

export const ChevronCard: React.FC<ChevronCardPropsType> = ({ color, label, imgUrl, linkUrl }) => {
  let styleVariable: any = color === 'red' ? { '--color': `red`, '--direction': '-45deg' } : { '--color': '#002366', '--direction': `45deg` }

  return (
    <div className='ChevronCard'>
      <div className='box' style={styleVariable}>
        <p>{label}</p>
        <img alt='profile of barber' src={imgUrl} className='ChevronCardPicture' />
      </div>
      <a target='_blank' href={linkUrl}>
        Book Now
      </a>
    </div>
  )
}
