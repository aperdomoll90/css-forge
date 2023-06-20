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
      <spotLight intensity={0.5} position={[1000, 0, 0]} castShadow />
    </>
  )
}

const Model: React.FC<ModelProps> = ({ modelUrl }) => {
  const gltf = useLoader(GLTFLoader, modelUrl)
  return <primitive object={gltf.scene} dispose={null} />
}

const Ensemble: React.FC<SectionEnsemblePropsTypes> = props => {
  const { children, modelUrl, modelPosition, animated, customClass, modelRotationX, modelRotationY, modelRotationZ, domContentRef } = props
  // Add rotation to Z axis
  const meshRef = useRef<any>()
  animated && useFrame(() => (meshRef.current.rotation.y += 0.01))
  // Add Custom Class
  const classArray = customClass ? `section-ensemble-container section-ensemble-flex-container relative-container ${customClass}` : 'section-ensemble-container section-ensemble-flex-container relative-container'

  return (
    <group position={[0, 0, 0]}>
      <mesh ref={meshRef} position={modelPosition} rotation={[modelRotationX, modelRotationY, modelRotationZ]}>
        <Model modelUrl={modelUrl} />
      </mesh>
      <Html portal={domContentRef} fullscreen>
        <div className={classArray}>
          <>
            {children}
          </>
        </div>
      </Html>
    </group>
  )
}

export const SectionEnsemble: React.FC<SectionEnsemblePropsTypes> = props => {
  const { children, bgColor, camera, manualControls, canvasWidth, canvasHeight, canvasTop, canvasLeft, canvasRight, canvasBottom,cameraRef } = props
  const domContentRef = React.useRef() as React.MutableRefObject<HTMLDivElement>

  console.log('canvasWidth', canvasWidth)
  const styleProps = {
    '--bgColor': bgColor ? bgColor : '#f15946',
    '--canvasWidth': canvasWidth ? canvasWidth : '100%',
    '--canvasHeight': canvasHeight ? canvasHeight : '100%',
    '--canvasTop': canvasTop ? canvasTop : '0%',
    '--canvasLeft': canvasLeft ? canvasLeft : '0%',
    '--canvasRight': canvasRight ? canvasRight : '0%',
    '--canvasBottom': canvasBottom ? canvasBottom : '0%',
  }

  return (
    <div id='section-ensemble-wrapper' className='section-ensemble-wrapper section-ensemble-flex-container relative-container' style={styleProps as React.CSSProperties}>
      <Canvas id='section-ensemble-canvas' camera={{ fov: camera.fov, position: [camera.x, camera.y, camera.z] }} className='section-ensemble-flex-container' legacy>
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
