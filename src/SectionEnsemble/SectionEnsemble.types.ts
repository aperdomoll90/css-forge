import { CameraControls } from '@react-three/drei'

export interface StatePropsType {
  sections: number
  pages: number
  zoom: number
  top: any
}

export interface ModelProps {
  modelUrl: string
}

export interface ModelPropsTypes {
  children: React.ReactNode
  state: StatePropsType
  modelUrl: string
  modelPosition: [x: number, y: number, z: number]
  modelRotationX: number
  modelRotationY: number
  modelRotationZ: number
  bgColor?: string
  animated?: boolean
  manualControls?: boolean
  testId?: string
  customClass?: string
  domContentRef?: React.MutableRefObject<HTMLDivElement>
  cameraRef?: React.RefObject<CameraControls>
}

export interface SectionEnsemblePropsTypes extends ModelPropsTypes {
  camera: CameraPropsTypes
}

export interface CameraPropsTypes {
  x: number
  y: number
  z: number
  fov: number
  cameraRef?: React.RefObject<CameraControls>
}
