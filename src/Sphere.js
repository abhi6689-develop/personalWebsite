import * as THREE from 'three'
import ReactDOM from 'react-dom'
import React, { useRef, useMemo } from 'react'
import { Canvas, createPortal, useFrame } from 'react-three-fiber'
import { Shadow, OrthographicCamera, OrbitControls } from 'drei'
import { Text } from 'drei'
import './styles.css'

export default function Sphere({ children }) {
  const cam = useRef()
  const [scene, target] = useMemo(() => {
    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#e23e57')
    const target = new THREE.WebGLRenderTarget(2048, 2048)
    return [scene, target]
  }, [])

  useFrame(({ gl }) => {
    gl.setRenderTarget(target)
    gl.render(scene, cam.current)
    gl.setRenderTarget(null)
  })

  return (
    <>
      <OrthographicCamera ref={cam} makeDefault={false} position={[0, 0, 10]} zoom={10} />
      {createPortal(
        <Text
          color="#dcecd3"
          fontSize={6}
          maxWidth={60}
          lineHeight={1}
          letterSpacing={-0.1}
          textAlign="center"
          text={children}
          font="https://fonts.googleapis.com/css?family=Barlow:400,700https://fonts.gstatic.com/barlow-v4-latin-regular.woff"
          anchorX="center"
          anchorY="middle">
          {children}
        </Text>,
        scene
      )}
      <mesh>
        <sphereBufferGeometry attach="geometry" args={[2, 64, 64]} />
        <meshStandardMaterial attach="material" map={target.texture} />
      </mesh>
      <Shadow scale={[2, 2, 1]} opacity={0.2} position={[0, -2.1, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <Shadow color="#C12020" scale={[4, 4, 1]} opacity={0.2} position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} />
    </>
  )
}