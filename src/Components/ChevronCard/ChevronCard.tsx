import './styles.css'

export interface ChevronCardPropsType {
  color?: 'red' | undefined
  label: string
  imgUrl: string
  linkUrl?: string
}

function ChevronCard({ color, label, imgUrl, linkUrl }: ChevronCardPropsType) {
  let styleVariable
  color === 'red' ? (styleVariable = { '--color': `red`, '--direction': '-45deg' }) : (styleVariable = { '--color': '#002366', '--direction': `45deg` })

  return (
    <div className='crewCard'>
      <div className='box' style={styleVariable}>
        <p>{label}</p>
        <img alt='profile of barber' src={imgUrl} className='crewCardPicture' />
      </div>
      <a target='_blank' href={linkUrl}>
        Book Now
      </a>
    </div>
  )
}

export default ChevronCard
