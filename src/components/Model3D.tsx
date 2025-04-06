import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Mesh, Group } from "three";

interface ModelProps {
  isLanding: boolean;
  onClick?: () => void;
}

function Model({ isLanding, onClick }: ModelProps) {
  const modelRef = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);
  const { scene } = useGLTF("/3dOlli.glb");
  
  useFrame(() => {
    if (modelRef.current && !isLanding) {
      // Slow automatic rotation when on the main page
      modelRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group
      ref={modelRef}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered && isLanding ? 1.1 : 1}
    >
      <primitive object={scene} />
    </group>
  );
}

export default function Model3D({ isLanding, onClick }: ModelProps) {
  return (
    <div className={`h-full w-full ${isLanding ? 'cursor-pointer' : ''}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        
        <Model isLanding={isLanding} onClick={onClick} />
        
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
