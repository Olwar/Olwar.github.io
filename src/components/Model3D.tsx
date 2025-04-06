
import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Mesh } from "three";

interface ModelProps {
  isLanding: boolean;
  onClick?: () => void;
}

function PlaceholderModel({ isLanding, onClick }: ModelProps) {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame(() => {
    if (meshRef.current && !isLanding) {
      // Slow automatic rotation when on the main page
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh
      ref={meshRef}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered && isLanding ? 1.1 : 1}
    >
      {/* This is a placeholder for the GLB model */}
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial 
        color={hovered ? "#666666" : "#444444"} 
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
}

export default function Model3D({ isLanding, onClick }: ModelProps) {
  return (
    <div className={`h-full w-full ${isLanding ? 'cursor-pointer' : ''}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        
        <PlaceholderModel isLanding={isLanding} onClick={onClick} />
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate={isLanding}
          autoRotateSpeed={1}
          enabled={isLanding}
        />
      </Canvas>
    </div>
  );
}
