import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

interface FloatingBoxProps {
  position: [number, number, number]
  delay: number
  color: string
}

function FloatingBox({ position, delay, color }: FloatingBoxProps) {
  const meshRef = useRef<Mesh>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + delay) * 0.5
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} transparent opacity={0.8} />
    </mesh>
  )
}

function FloatingSphere({ position, delay, color }: FloatingBoxProps) {
  const meshRef = useRef<Mesh>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005
      meshRef.current.rotation.y += 0.008
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + delay) * 0.3
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.5 + delay) * 0.2
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.8, 16, 16]} />
      <meshStandardMaterial color={color} transparent opacity={0.7} />
    </mesh>
  )
}

function FloatingTorus({ position, delay, color }: FloatingBoxProps) {
  const meshRef = useRef<Mesh>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.008
      meshRef.current.rotation.z += 0.005
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + delay) * 0.4
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[0.6, 0.2, 8, 16]} />
      <meshStandardMaterial color={color} transparent opacity={0.6} />
    </mesh>
  )
}

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        {/* Primary blue shapes */}
        <FloatingBox position={[-4, 2, 0]} delay={0} color="#0ea5e9" />
        <FloatingSphere position={[4, -1, 2]} delay={1} color="#3b82f6" />
        <FloatingTorus position={[-2, -2, 1]} delay={2} color="#1d4ed8" />
        
        {/* Purple accent shapes */}
        <FloatingSphere position={[3, 3, -1]} delay={3} color="#a855f7" />
        <FloatingBox position={[-3, -1, 3]} delay={4} color="#8b5cf6" />
        <FloatingTorus position={[1, 1, -2]} delay={5} color="#7c3aed" />
        
        {/* Additional shapes for depth */}
        <FloatingBox position={[0, -3, 4]} delay={6} color="#06b6d4" />
        <FloatingSphere position={[-1, 2, 5]} delay={7} color="#0891b2" />
      </Canvas>
    </div>
  )
}