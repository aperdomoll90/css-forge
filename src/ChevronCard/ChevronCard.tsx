import { ChevronCardPropsType } from './ChevronCard.types'
import './styles.css'

export const ChevronCard: React.FC<ChevronCardPropsType> = ({ color, buttonColor, buttonHover, buttonLabel, label,labelColor, imgUrl, linkUrl, direction }) => {
  const styleProps = {
    '--color': color ? color : '#363aca',
    '--buttonColor': buttonColor ? buttonColor : '#4baf74',
    '--buttonHover': buttonHover ? buttonHover : '#7bcf84',
    '--direction': direction ? direction : '45deg',
    '--labelColor': labelColor ? labelColor : '#fff',
  }
  return (
    <div className='chevronCard' style={styleProps as React.CSSProperties}>
      <div className='box'>
        <div className="chevronCard-label">{label}</div>
        <img alt='profile of barber' src={imgUrl} className='chevronCardPicture' />
      </div>
      <a target='_blank' href={linkUrl}>
        {buttonLabel}
      </a>
    </div>
  )
}
