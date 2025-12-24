import { CameraControls } from '@react-three/drei'
import React, { createRef, useEffect, useRef } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { FixedModelPropsTypes, FixedModelStatePropsType } from './FixedModel.types'
import { useGLTF, useAnimations } from '@react-three/drei'
import './styles.css'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

// const Model = ({ ...props }) => {
//   const group = useRef<any>()
//   const { nodes, materials, animations }: any = useGLTF('/seaTurtle/scene.gltf')
//   const { actions } = useAnimations(animations, group)
//   return (
//     <group ref={group} {...props} dispose={null} position={[0, 0, 0]}>
//       <group name='Sketchfab_Scene'>
//         <group name='Sketchfab_model' rotation={[-Math.PI / 2, 0, 0]} scale={2.18}>
//           <group name='Root'>
//             <group name='Hawksbillarmature'>
//               <group name='Hawksbillmesh' position={[-0.01, 0.05, 0]} />
//               <primitive object={nodes.Hawksbillarmature_rootJoint} />
//               <skinnedMesh name='Hawksbillmesh_0' geometry={nodes.Hawksbillmesh_0.geometry} material={materials['hawksbill.body']} skeleton={nodes.Hawksbillmesh_0.skeleton} />
//               <skinnedMesh name='Hawksbillmesh_1' geometry={nodes.Hawksbillmesh_1.geometry} material={materials.outer} skeleton={nodes.Hawksbillmesh_1.skeleton} />
//               <skinnedMesh name='Hawksbillmesh_2' geometry={nodes.Hawksbillmesh_2.geometry} material={materials['hawksbill.eyes']} skeleton={nodes.Hawksbillmesh_2.skeleton} />
//             </group>
//           </group>
//         </group>
//       </group>
//     </group>
//   )
// }

// useGLTF.preload('/seaTurtle/scene.gltf')

// LEATHERBACK

// camera={{ fov: 30, position: [30, Math.PI / 2, Math.PI / 0.09] }}
function LeatherbackModel({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations }: any = useGLTF('/Leatherback/scene.gltf')
  const { actions, names }: any = useAnimations(animations, group)
  if (actions && names) {
    useEffect(() => {
      actions[names[0]].reset().fadeIn(0.1).play()
    }, [actions])
  }
  return (
    <group ref={group as any} {...props} dispose={null}>
      <group name='Sketchfab_Scene'>
        <group name='Sketchfab_model' rotation={[-Math.PI / 2, 0, 0]}>
          <group name='8b6bdf9bbc4a49a0a2aa14c21b891ee8fbx' rotation={[Math.PI / 2, 0, 0]}>
            <group name='Object_2'>
              <group name='RootNode'>
                <group name='leatherbackjuv_body' position={[0.04, -0.02, 0.06]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group name='leatherbackjuv_eye' position={[0.02, 0, 1.35]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group name='leatherbackjuv_membrane' position={[0.02, 0, 1.35]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group name='leatherbackjuv_armature' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name='Object_8'>
                    <primitive object={nodes._rootJoint} />
                    <group name='Object_10' position={[0.04, -0.02, 0.06]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <group name='Object_12' position={[0.02, 0, 1.35]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <group name='Object_15' position={[0.02, 0, 1.35]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <skinnedMesh name='Object_11' geometry={nodes.Object_11.geometry} material={materials.leatherbackjuv_body} skeleton={nodes.Object_11.skeleton} />
                    <skinnedMesh name='Object_13' geometry={nodes.Object_13.geometry} material={materials.leatherbackjuv_eye} skeleton={nodes.Object_13.skeleton} />
                    <skinnedMesh name='Object_14' geometry={nodes.Object_14.geometry} material={materials.leatherbackjuv_body} skeleton={nodes.Object_14.skeleton} />
                    <skinnedMesh name='Object_16' geometry={nodes.Object_16.geometry} material={materials.leatherbackjuv_membrane} skeleton={nodes.Object_16.skeleton} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Leatherback/scene.gltf')

function GreenTurtleModel({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations }: any = useGLTF('/greenseaturtle/scene.gltf')
  const { actions, names }: any = useAnimations(animations, group)
  if (actions && names) {
    useEffect(() => {
      actions[names[0]].reset().fadeIn(0.5).play()
    }, [actions])
  }

  return (
    <group ref={group as any} {...props} dispose={null}>
      <group name='Sketchfab_Scene'>
        <group name='Sketchfab_model' rotation={[-Math.PI / 2, 0, 0]} scale={0.08}>
          <group name='green_016_round5changes_johnsonfbx' rotation={[Math.PI / 2, 0, 0]}>
            <group name='Object_2'>
              <group name='RootNode'>
                <group name='green_juvenilearmature' position={[-2.27, 2.99, -2.19]} rotation={[-Math.PI / 2, 0, -3.12]} scale={100}>
                  <group name='Object_5'>
                    <primitive object={nodes._rootJoint} />
                    <group name='Object_39' rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <group name='Object_42' rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <skinnedMesh name='Object_40' geometry={nodes.Object_40.geometry} material={materials.greeneye} skeleton={nodes.Object_40.skeleton} />
                    <skinnedMesh name='Object_41' geometry={nodes.Object_41.geometry} material={materials.greeneyeouter} skeleton={nodes.Object_41.skeleton} />
                    <skinnedMesh name='Object_43' geometry={nodes.Object_43.geometry} material={materials.greenbody} skeleton={nodes.Object_43.skeleton} />
                  </group>
                </group>
                <group name='green_juvenileeye' rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group name='green_juvenilemesh' rotation={[-Math.PI / 2, 0, 0]} scale={100} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/greenseaturtle/scene.gltf')

// GREEN SEA TURTLE

interface ModelProps {
  modelUrl: string
}

const Model: React.FC<ModelProps> = ({ modelUrl }) => {
  const gltf = useLoader(GLTFLoader, modelUrl)
  return <primitive object={gltf.scene} dispose={null} />
}

const Ensemble = () => {
  const meshRef = useRef<any>()
  const modelUrl = '/greenseaturtle/scene.gltf'
  // camera={{ fov: 5, position: [-40, 40, Math.PI / 0.09] }}
  //   const modelUrl = '/Leatherback/scene.gltf'

  return (
    <group position={[0, 0, 0]}>
      <mesh ref={meshRef}>
        {/* <Model modelUrl={modelUrl} /> */}
        {/* <GreenTurtleModel /> */}
        <LeatherbackModel />
      </mesh>
    </group>
  )
}

export const FixedModel: React.FC<FixedModelPropsTypes> = props => {
  const cameraRef = useRef() as React.RefObject<CameraControls>
  const scrollArea = React.useRef<any>()
  //   const state: FixedModelStatePropsType = {
  //     sections: 4,
  //     pages: 4, //returns a max of 100vh
  //     zoom: 1,
  //     top: createRef<any>(),
  //   }

  return (
    <div id='fixed-model-wrapper'>
      <div id='fixed-model-canvas-container'>
        <Canvas id='fixed-model-canvas' camera={{ fov: 30, position: [30, Math.PI / 2, Math.PI / 0.09] }} className='section-ensemble-flex-container' legacy>
          {/* <CameraControls ref={cameraRef} /> */}
          <ambientLight intensity={0.2} />
          <directionalLight castShadow position={[10, 10, 0]} intensity={1.5} shadow-mapSize-width={1024} shadow-mapSize-height={1024} shadow-camera-far={50} shadow-camera-left={-10} shadow-camera-right={10} shadow-camera-top={10} shadow-camera-bottom={-10} />
          <spotLight intensity={0.5} position={[100, 0, 0]} castShadow />
          <Ensemble />
        </Canvas>
      </div>

      <div ref={scrollArea} className='fixed-model-content-wrapper'>
        <div className='fixed-test' style={{ '--color': 'rgba(69, 23, 207, 0.441)' } as React.CSSProperties} />
        <div className='fixed-test' style={{ '--color': 'rgba(207, 23, 23, 0.441)' } as React.CSSProperties} />
        <div className='fixed-test' style={{ '--color': 'rgba(48, 207, 23, 0.441)' } as React.CSSProperties} />
        <div className='fixed-test' style={{ '--color': 'rgba(207, 23, 87, 0.441)' } as React.CSSProperties} />
      </div>
    </div>
  )
}
