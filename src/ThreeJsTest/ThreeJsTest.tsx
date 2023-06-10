import { ThreeJsTestPropsType } from './ThreeJsTest.types'
import './styles.css'

export const ThreeJsTest: React.FC<ThreeJsTestPropsType> = ({ size }) => {
  const faeCircleSize = {
    width: `${size}px`,
    height: `${size}px`,
  }
  const topCircle = {
    width: `${size}px`,
    height: `${size}px`,
    top: `-${size && size / 2.5}px`,
  }

  return (
    <div className='ThreeJsTestContainer'>
      <div className='faeCircle' style={faeCircleSize}></div>
      <div className='faeCircle' style={faeCircleSize}></div>
      <div className='faeCircle' style={topCircle}></div>
      <p>loading...</p>
    </div>
  )
}
