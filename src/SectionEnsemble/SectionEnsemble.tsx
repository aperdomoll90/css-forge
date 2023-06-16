import React, { Suspense, useEffect, useRef } from 'react'
import './styles.css'
import { Canvas } from '@react-three/fiber'
import { CameraControls, Html, OrbitControls } from '@react-three/drei'
import { useFrame, useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { ModelProps, SectionEnsemblePropsTypes } from './SectionEnsemble.types'
import { PerspectiveControls } from '../PerspectiveControls/PerspectiveControls'

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight castShadow position={[0, 10, 0]} intensity={1.5} shadow-mapSize-width={1024} shadow-mapSize-height={1024} shadow-camera-far={50} shadow-camera-left={-10} shadow-camera-right={10} shadow-camera-top={10} shadow-camera-bottom={-10} />
      <spotLight intensity={.5} position={[1000, 0, 0]} castShadow />
    </>
  )
}

const Model: React.FC<ModelProps> = ({ modelUrl }) => {
  const gltf = useLoader(GLTFLoader, modelUrl)
  return <primitive object={gltf.scene} dispose={null} />
}

const Ensemble: React.FC<SectionEnsemblePropsTypes> = props => {
  const { children, modelUrl, modelPosition, animated, customClass, modelRotationX, modelRotationY, modelRotationZ, domContentRef, cameraRef } = props
  // Add rotation to Z axis
  const meshRef = useRef<any>()
  animated && useFrame(() => (meshRef.current.rotation.y += 0.01))
  // Add Custom Class
  const classArray = customClass ? `section-ensemble-container section-ensemble-flex-container relative-container ${customClass}` : 'section-ensemble-container section-ensemble-flex-container relative-container'

  const controlsProps = {
    buttonColor: 'transparent',
    top: 2,
    right: 3,
  }


  return (
    <group position={[0, 0, 0]}>
      <mesh ref={meshRef} position={modelPosition} rotation={[modelRotationX, modelRotationY, modelRotationZ]}>
        <Model modelUrl={modelUrl} />
      </mesh>
      <Html portal={domContentRef} fullscreen>
        <div className={classArray}>
          <>
          <PerspectiveControls cameraRef={cameraRef as any} {...controlsProps}  /> 
            {children}
          </>
        </div>
      </Html>
    </group>
  )
}

export const SectionEnsemble: React.FC<SectionEnsemblePropsTypes> = props => {
  const { children, bgColor, camera, manualControls } = props
  const domContentRef = React.useRef() as React.MutableRefObject<HTMLDivElement>
  const cameraRef = useRef() as React.RefObject<CameraControls>

  return (
    <div id='section-ensemble-wrapper' className='section-ensemble-wrapper section-ensemble-flex-container relative-container' style={{ '--bgColor': bgColor ? bgColor : '#f15946' } as React.CSSProperties}>
      <Canvas camera={{ fov: camera.fov, position: [camera.x, camera.y, camera.z] }} className='section-ensemble-container section-ensemble-flex-container relative-container' legacy>
        {/* pass cameraRef as props from other components so controls can be a independent component */}
        <CameraControls ref={cameraRef} />
        <Lights />
        <Ensemble domContentRef={domContentRef} cameraRef={cameraRef as any} {...props}>
          {children}
        </Ensemble>
      </Canvas>
      <div className='section-ensemble-dom-content-wrapper'>
        <div ref={domContentRef} className='section-ensemble-dom-content' />
        <div className='section-ensemble-area' style={{ height: `100%` }} />
      </div>
    </div>
  )
}
