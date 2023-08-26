import './styles.css'
import { PerspectiveControlsPropsTypes } from './PerspectiveControls.types'
export const PerspectiveControls: React.FC<PerspectiveControlsPropsTypes> = props => {
  const { ariaExpanded, cameraRef, top, left, right, bottom, customClass, labelColor, primaryColor, buttonColor, hoverColor, pressColor } = props

  const classArray = customClass ? `camera-controls-wrapper ${customClass}` : 'camera-controls-wrapper'

  const stylesProps = {
    '--top': top ? `${top}rem` : 'auto',
    '--bottom': bottom ? `${bottom}rem` : 'auto',
    '--left': left ? `${left}rem` : 'auto',
    '--right': right ? `${right}rem` : 'auto',
    '--labelColor': labelColor ? labelColor : '#7d7b7b',
    '--primaryColor': primaryColor ? primaryColor : 'transparent',
    '--buttonColor': buttonColor ? buttonColor : 'transparent',
    '--hoverColor': hoverColor ? hoverColor : '#342727',
    '--pressColor': pressColor ? pressColor : '#f3f3f3',
  }

  const DEG45 = Math.PI / 4
  const rotateCameraLeft = () => {
    return cameraRef?.current?.rotate(DEG45, 0, true)
  }
  const rotateCameraRight = () => {
    return cameraRef?.current?.rotate(-DEG45, 0, true)
  }
  const rotateCameraDown = () => {
    return cameraRef?.current?.rotate(0, DEG45, true)
  }
  const rotateCameraUp = () => {
    return cameraRef?.current?.rotate(0, -DEG45, true)
  }

  const resetCamera = () => {
    return cameraRef?.current?.reset(true)
  }

  const RotateArrow = (
    <svg id='eVO4Tuj5D2G1' xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 300 300' shape-rendering='geometricPrecision' text-rendering='geometricPrecision'>
    <path d='M89.662403,73.78619l20.315275-.813688-.55839,21.887464' transform='matrix(.882948 0.469472-.469472 0.882948 15.097428-30.84039)' fill='none' stroke-width='6' stroke-linecap='round' />
    <path
      d='M210.932435,84.453305c61.175117,5.728806,81.427332,39.935488,82.993456,57.836336c3.409005,38.965131-58.603109,85.905453-138.213454,92.874222-53.504331,4.31001-144.833479-11.034657-150.940978-67.576489-.132167-1.223568-10.041715-46.519927,59.472837-73.194618'
      transform='matrix(.996195 0.087156-.087156 0.996195 15.375977-12.156787)'
      fill='none'
    
      stroke-width='6'
      stroke-linecap='round'
    />
    <path d='M8.393237,131.756687c9.214094,80.057197,289.595981,55.445745,289.154431-25.297738' transform='matrix(.996195 0.087156-.087156 0.996195 8.645131 23.221898)' fill='none' stroke-width='6' stroke-linecap='round' />
  </svg>
  )
  // const RotateArrow = (
  //   <svg fill='#000000' version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 219.508 219.508'>
  //     <path
  //       d='M143.778,88.557l-10.607-10.607l33.672-33.671l-33.672-33.671L143.778,0l44.277,44.278L143.778,88.557z M73.533,121.572
  //     c0-28.952,22.145-52.825,50.385-55.583l21.711-21.711l-20.542-20.542c-52.014,2.259-93.635,45.275-93.635,97.836
  //     c0,54.002,43.934,97.936,97.936,97.936h7.5v-42.081h-7.5C98.59,177.427,73.533,152.37,73.533,121.572z'
  //     />
  //   </svg>
  // )
  return (
    <div data-testId='camera-controls-wrapper' aria-expanded={ariaExpanded} className={classArray} style={stylesProps as React.CSSProperties}>
      <button className='camera-controls-button camera-button-to-left' type='button' onClick={rotateCameraLeft}>
        {RotateArrow}
      </button>
      <button className='camera-controls-button camera-button-to-right' type='button' onClick={rotateCameraRight}>
        {RotateArrow}
      </button>
      <button className='camera-controls-button camera-button-to-up' type='button' onClick={rotateCameraUp}>
        {RotateArrow}
      </button>
      <button className='camera-controls-button camera-button-to-down' type='button' onClick={rotateCameraDown}>
        {RotateArrow}
      </button>
      <button className='camera-controls-button camera-button-reset' type='button' onClick={resetCamera}></button>
    </div>
  )
}
