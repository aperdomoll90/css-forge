import './styles.css'
import fishBowlTop from './images/fishBowlTop.png'
import soil from './images/soil.png'
import onion from './images/onion.png'
import plants from './images/plants.png'
import fishbowl from './images/fishbowl.png'
import clouds from './images/clouds.png'

function Terrarium() {
  return (
    <div className='TerrariumArea'>
      <div className='shade'>
        <p>Sleeping Onion</p>
      </div>
      <div className='fullTerrarium'>
        <div className='fishbowlSky'>
          <img src={clouds} className=' clouds' alt='clouds' />
        </div>
        <img src={fishbowl} className='imgPosition fishbowl' alt='fishbowl' />
        <img src={plants} className='imgPosition plants' alt='plants' />
        <img src={onion} className='imgPosition onion' alt='pokemon sleeping' />
        <img src={soil} className='imgPosition soil' alt='soil' />
        <img src={fishBowlTop} className='imgPosition fishBowlTop' alt='fish bowl opening' />
      </div>
    </div>
  )
}

export default Terrarium
