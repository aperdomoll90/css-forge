import { FaeLoaderPropsType } from './FaeLoader.types'
import './styles.css'
import '../utils/GlobalStyles.css'

export const FaeLoader: React.FC<FaeLoaderPropsType> = ({ size }) => {
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
    <div className='FaeLoaderContainer'>
      <div className='faeCircle' style={faeCircleSize}></div>
      <div className='faeCircle' style={faeCircleSize}></div>
      <div className='faeCircle' style={topCircle}></div>
      <p>loading...</p>
    </div>
  )
}
