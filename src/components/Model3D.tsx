
import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center, Environment } from "@react-three/drei"; // Re-enabled useGLTF and added Center and Environment
import { Mesh, Group, Box3, Vector3 } from "three";

interface ModelProps {
  isLanding: boolean;
  onClick?: () => void;
}

// Separate component for the 3D model to ensure hooks are used properly
function ModelObject({ isLanding, onClick }: ModelProps) {
  const modelRef = useRef<Group>(null); // Keep group ref for scale/rotation
  const [hovered, setHovered] = useState(false);
  const { scene } = useGLTF("/3dOlli.glb"); // Restore GLTF loading

  // Re-enable effect for logging (optional, can be removed later)
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
  
  useFrame(() => {
    if (modelRef.current && !isLanding) {
      // Slow automatic rotation when on the main page
      modelRef.current.rotation.y += 0.01;
    }
  });

  return (
    // Use a group to apply rotation/scale/hover effects
    <group 
      ref={modelRef}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered && isLanding ? 8.5 : 7.5} // Keep adjusted scale
    >
      {/* Wrap primitive in Center */}
      <Center>
        <primitive object={scene} />
      </Center>
    </group>
  );
}

// Controls component to properly handle orbit controls
function ModelControls({ isLanding }: { isLanding: boolean }) {
  return (
    <OrbitControls 
      enableZoom={false}
      enablePan={false}
      autoRotate={isLanding}
      autoRotateSpeed={1}
      enabled={isLanding}
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
        
        {/* Removed the intensity prop from Environment component */}
        <Environment preset="sunset" />

        <ModelObject isLanding={isLanding} onClick={onClick} />
        <ModelControls isLanding={isLanding} />
      </Canvas>
    </div>
  );
}
