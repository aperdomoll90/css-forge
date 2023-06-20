/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: DigitalLife3D (https://sketchfab.com/DigitalLife3D)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/3d-models/model-74a-juvenile-leatherback-sea-turtle-820022879ce84a8fab0b95994fd2e6c7
title: Model 74A - Juvenile Leatherback Sea Turtle
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/scene.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="8b6bdf9bbc4a49a0a2aa14c21b891ee8fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="leatherbackjuv_body" position={[0.04, -0.02, 0.06]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group name="leatherbackjuv_eye" position={[0.02, 0, 1.35]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group name="leatherbackjuv_membrane" position={[0.02, 0, 1.35]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group name="leatherbackjuv_armature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Object_8">
                    <primitive object={nodes._rootJoint} />
                    <group name="Object_10" position={[0.04, -0.02, 0.06]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <group name="Object_12" position={[0.02, 0, 1.35]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <group name="Object_15" position={[0.02, 0, 1.35]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <skinnedMesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials.leatherbackjuv_body} skeleton={nodes.Object_11.skeleton} />
                    <skinnedMesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials.leatherbackjuv_eye} skeleton={nodes.Object_13.skeleton} />
                    <skinnedMesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials.leatherbackjuv_body} skeleton={nodes.Object_14.skeleton} />
                    <skinnedMesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials.leatherbackjuv_membrane} skeleton={nodes.Object_16.skeleton} />
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

useGLTF.preload('/scene.gltf')
