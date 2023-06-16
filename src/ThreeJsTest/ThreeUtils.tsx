import { useRef } from 'react'
import { Section } from './sections'
import { Html, useGLTF } from '@react-three/drei'
import { useFrame, useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

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

export const SectionEnsemble: React.FC<SectionEnsembleProps> = ({ children, bgColor, modelUrl, positionY, domContent }) => {
  const ref = useRef<any>()
  useFrame(() => (ref.current.rotation.y += 0.01))
  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, positionY, 0]}>
        <mesh ref={ref} position={[0, -35, 20]}>
          <Model url={modelUrl} />
        </mesh>
        <Html portal={domContent} fullscreen>
          <>{children}</>
        </Html>
      </group>
    </Section>
  )
}
