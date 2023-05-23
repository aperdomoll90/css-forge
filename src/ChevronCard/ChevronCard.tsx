import { ChevronCardPropsType } from './ChevronCard.types'
import './styles.css'

export const ChevronCard: React.FC<ChevronCardPropsType> = ({ color, buttonColor, buttonHover, buttonLabel, label,labelColor, imgUrl, linkUrl, direction }) => {
  const styleProps = { '--color': color, '--buttonColor': buttonColor, '--buttonHover': buttonHover, '--direction': direction , '--labelColor': labelColor}
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
