import './styles.css'

export interface FaeLoaderPropsType {
  size?: number;
}

function FaeLoader({size}:FaeLoaderPropsType) {

    const faeCircleSize ={
        width:`${size}px`,
        height:`${size}px`,
    }
    const topCircle ={
        width:`${size}px`,
        height:`${size}px`,
        top:`-${size && size/2.5}px`,
    }
  
  return (
    <div className='FaeLoaderContainer'>
      <div className="faeCircle" style={faeCircleSize}></div>
      <div className="faeCircle" style={faeCircleSize}></div>
      <div className="faeCircle" style={topCircle}></div>
      <p>loading...</p>
    </div>
  )
}

export default FaeLoader


