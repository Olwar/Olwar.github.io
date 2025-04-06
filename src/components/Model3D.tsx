import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center, Environment } from "@react-three/drei";
import { Mesh, Group, Box3, Vector3 } from "three";

interface ModelProps {
  isLanding: boolean;
  onClick?: () => void;
}

// Separate component for the 3D model
function ModelObject({ isLanding, onClick }: ModelProps) {
  const modelRef = useRef<Group>(null);
  const { scene } = useGLTF("/3dOlli.glb");

  // Optional logging effect (can be removed)
  useEffect(() => {
    if (scene) {
      console.log("Loaded GLTF Scene:", scene);
      const box = new Box3().setFromObject(scene);
      const size = box.getSize(new Vector3());
      const center = box.getCenter(new Vector3());
      console.log("Model Bounding Box Size (before Center):", size);
      console.log("Model Bounding Box Center (before Center):", center);
    }
  }, [scene]);
  
  // Add back useFrame for slow rotation on main page
  useFrame((state, delta) => {
    if (modelRef.current && !isLanding) {
      modelRef.current.rotation.y += 0.5 * delta; // Adjust base speed (0.5) if needed
    }
  });

  return (
    <group 
      ref={modelRef}
      onClick={onClick}
      scale={7.5} // Set fixed scale
    >
      <Center>
        <primitive object={scene} />
      </Center>
    </group>
  );
}

// Controls component
function ModelControls({ isLanding }: { isLanding: boolean }) {
  return (
    <OrbitControls 
      enableZoom={false}
      enablePan={false}
      autoRotate={isLanding} // Only auto-rotate on landing
      autoRotateSpeed={1}
      enabled={true} // Always allow manual rotation
    />
  );
}

// Main component wrapper
export default function Model3D({ isLanding, onClick }: ModelProps) {
  return (
    <div className={`h-full w-full ${isLanding ? 'cursor-pointer' : ''}`}>
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={2.0} />
        <directionalLight position={[5, 5, 5]} intensity={2.0} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.8} />
        
        <Environment preset="sunset" />

        <ModelObject isLanding={isLanding} onClick={onClick} />
        <ModelControls isLanding={isLanding} />
      </Canvas>
    </div>
  );
}
