import './styles.css'

export interface BubbleCardPropsType {
  color?: string
  label: string
  content: string
  imgUrl: string
  linkUrl?: string
}

function BubbleCard({ color, label, content, imgUrl, linkUrl }: BubbleCardPropsType) {
  return (
    <div className='bubbleCard-wrapper'>
      <div className='bubbleCard-content'>
        <div className="bubbleCard-marquee">{label}</div>
        <img alt={`${label}-image`} src={imgUrl} className='bubbleCard-img' />
        <h1 className='bubbleCard-title'>{label}</h1>
        <div className='bubbleCard-body'>
          <p className='bubbleCard-content-text'>{content}</p>
        </div>
        <div className='bubbleCard-footer'>
          <button className='bubbleCard-btn bubbleCard-success'>Demo</button>
          <button className='bubbleCard-btn bubbleCard-border'>Github</button>
        </div>
      </div>
    </div>
  )
}

export default BubbleCard
