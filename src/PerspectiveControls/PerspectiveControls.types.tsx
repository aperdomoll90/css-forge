import { CameraControls } from '@react-three/drei'

export interface PerspectiveControlsPropsTypes {
  cameraRef: React.RefObject<CameraControls | null>
  top?: number
  left?: number
  right?: number
  bottom?: number
  customClass?: string
  labelColor?: string
  primaryColor?: string
  buttonColor?: string
  hoverColor?: string
  pressColor?: string
}
