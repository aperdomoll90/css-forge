import './styles.css'
import narwhalBody from './images/narwhalBody.png'
import flipper from './images/flipper.png'
import fin from './images/fin.png'

function Narwhal() {
  return (
    <div className='narwhalArea'>
        <div className="shade">
            <p>Nora Narwhal</p>
        </div>
      <div className='fullNarwhal'>
        <img src={flipper} className='flipperRight' alt='flipper' />
        <img src={fin}  className="fin" alt='fin' />
        <img src={narwhalBody} className='narwhalBody' alt='Narwhal Body' />
        <img src={flipper} className='flipper' alt='flipper' />
        <div className='blinkers'>
          <div className='narwhalCircle' />
          <div className='narwhalCircle' />
        </div>
      </div>
      <div className='narwhalShadow' />
    </div>
  )
}

export default Narwhal
