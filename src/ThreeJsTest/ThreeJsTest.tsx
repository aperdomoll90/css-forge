import React, { Suspense, useEffect, useRef } from 'react'
import { ThreeJsTestPropsType } from './ThreeJsTest.types'
import './styles.css'
import { Canvas } from '@react-three/fiber'
import state from './state'
import { Section } from './sections'
import { Html, useGLTF } from '@react-three/drei'
import { useFrame, useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useInView } from 'react-intersection-observer'
// export const Model = props => {
//   const group = useRef()
//   const { nodes, materials } = useGLTF(chairUrl)
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <mesh castShadow receiveShadow geometry={nodes.Curve007_1.geometry} material={materials['Material.001']} />
//       <mesh castShadow receiveShadow geometry={nodes.Curve007_2.geometry} material={materials['Material.002']} />
//     </group>
//   )
// }

// useGLTF.preload(chairUrl)
interface ModelProps {
  url: string
}
export const Model: React.FC<ModelProps> = ({ url }) => {
  const gltf = useLoader(GLTFLoader, url)
  return <primitive object={gltf.scene} dispose={null} />
}

interface SectionEnsembleProps {
  children: React.ReactNode
  bgColor?: string
  modelUrl: string
  positionY: number
  domContent?: React.MutableRefObject<HTMLDivElement>
}

export const SectionEnsemble: React.FC<SectionEnsembleProps> = ({ children, bgColor = "#fff", modelUrl, positionY, domContent }) => {
  const ref = useRef<any>()
  useFrame(() => (ref.current.rotation.y += 0.01))
  const [refItem, inView] = useInView({
    threshold: 0,
  })
  const wrapper = document.getElementById("three-wrapper")
  useEffect(() => {
    inView && wrapper && (wrapper.style.backgroundColor = bgColor);
  }, [inView])

  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, positionY, 0]}>
        <mesh ref={ref} position={[0, -35, 20]}>
          <Model url={modelUrl} />
        </mesh>
        <Html  portal={domContent} fullscreen>
        <div ref={refItem} className='canvas-html-container'>{children}</div>
        </Html>
      </group>
    </Section>
  )
}

//Drei is used as a helper library for react-three-fiber for stuff like shapes etc
// Canvas: the canvas object will render your three js elements not the DOM elements

// !!!!! The canvas stretches to the size of the parent container (next relative or absolute)
// make sure to give it space to show content

const Lights = () => {
  return (
    <>
      {/* Ambient Light illuminates lights for all objects */}
      <ambientLight intensity={0.3} />

      {/* Direction light */}
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight castShadow position={[0, 10, 0]} intensity={1.5} shadow-mapSize-width={1024} shadow-mapSize-height={1024} shadow-camera-far={50} shadow-camera-left={-10} shadow-camera-right={10} shadow-camera-top={10} shadow-camera-bottom={-10} />

      {/* Spotlight Large overhead light */}
      <spotLight intensity={1} position={[1000, 0, 0]} castShadow />
    </>
  )
}

const yellowChairUrl = '/armchairYellow/scene.gltf'
const pinkChairUrl = '/armchairPink/scene.gltf'
const blueChairUrl = '/armchairBlue/scene.gltf'

const sectionOneContent = <h1>Hello</h1>

const sectionTwoContent = <h1>Pink is in</h1>

const sectionThreeContent = <h1>And Blue</h1>

export const ThreeJsTest: React.FC<ThreeJsTestPropsType> = ({ size }) => {
  const domContent = React.useRef() as React.MutableRefObject<HTMLDivElement>
  const scrollArea = React.useRef<any>()
  const onScroll = (e: any) => (state.top.current = e.target.scrollTop)
  useEffect(() => void onScroll({ target: scrollArea.current }), [])
  return (
    <div id='three-wrapper' className='three-wrapper'>
      <Canvas legacy camera={{ position: [0, 0, 120], fov: 70 }}>
        <Lights />
        <Suspense fallback={null}>
          <SectionEnsemble domContent={domContent} positionY={250} modelUrl={yellowChairUrl} bgColor='#f15946'>
            {sectionOneContent}
          </SectionEnsemble>
          <SectionEnsemble domContent={domContent} positionY={0} modelUrl={pinkChairUrl} bgColor='#571ec1'>
            {sectionTwoContent}
          </SectionEnsemble>
          <SectionEnsemble domContent={domContent} positionY={-250} modelUrl={blueChairUrl} bgColor='#636567'>
            {sectionThreeContent}
          </SectionEnsemble>
        </Suspense>
      </Canvas>
      <div ref={scrollArea} onScroll={onScroll} className='three-scroll-area-wrapper'>
        <div ref={domContent} className='three-scroll-dom-content' />
        <div className='three-scroll-area' style={{ height: `${state.sections * 100}vh` }} />
      </div>
    </div>
  )
}
