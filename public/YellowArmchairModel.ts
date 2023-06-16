/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: MADE.COM (https://sketchfab.com/made-it)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/3d-models/ritchie-armchair-ochre-yellow-a2217ae834c74a90a439a3a6a09c4e8f
title: Ritchie Armchair, Ochre Yellow
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export const YellowArmchairModel = ({ ...props }) => {
  const group = useRef()
  const { nodes, materials }:any = useGLTF('/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, 0, 0.11]} rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.06, 27.41, -0.65]}>
            <mesh geometry={nodes.PEARL_GREY.geometry} material={materials.PEARL_GREY} />
            <mesh geometry={nodes.RAINBOW_BUTTONS.geometry} material={materials.EnvironmentAmbientLight} />
            <mesh geometry={nodes.LEGS.geometry} material={materials.LEGS} />
          </group>
        </group>
        <mesh geometry={nodes.FLOOR.geometry} material={materials.FLOOR} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
