import './styles.css'
import { PerspectiveControlsPropsTypes } from './PerspectiveControls.types'

export const PerspectiveControls: React.FC<PerspectiveControlsPropsTypes> = props => {
  const { cameraRef, top, left, right, bottom, customClass, labelColor, primaryColor, buttonColor, hoverColor, pressColor } = props

  const classArray = customClass ? `camera-controls-wrapper ${customClass}` : 'camera-controls-wrapper'

  const stylesProps = {
    '--top': top ? `${top}rem` : 'auto',
    '--bottom': bottom ? `${bottom}rem` : 'auto',
    '--left': left ? `${left}rem` : 'auto',
    '--right': right ? `${right}rem` : 'auto',
    '--labelColor': labelColor ? labelColor : '#ffffff',
    '--primaryColor': primaryColor ? primaryColor : 'transparent',
    '--buttonColor': buttonColor ? buttonColor : 'transparent',
    '--hoverColor': hoverColor ? hoverColor : '#7d7b7b',
    '--pressColor': pressColor ? pressColor : '#383838',
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
    <svg fill='#000000'  version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 219.508 219.508'>
      <path
        d='M143.778,88.557l-10.607-10.607l33.672-33.671l-33.672-33.671L143.778,0l44.277,44.278L143.778,88.557z M73.533,121.572
      c0-28.952,22.145-52.825,50.385-55.583l21.711-21.711l-20.542-20.542c-52.014,2.259-93.635,45.275-93.635,97.836
      c0,54.002,43.934,97.936,97.936,97.936h7.5v-42.081h-7.5C98.59,177.427,73.533,152.37,73.533,121.572z'
      />
    </svg>
  )
  return (
    <div data-testId='camera-controls-wrapper' className={classArray} style={stylesProps as React.CSSProperties}>
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
      <button className='camera-controls-button camera-button-reset' type='button' onClick={resetCamera}>
      </button>
    </div>
  )
}
