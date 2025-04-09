import React, { useRef, useMemo, Suspense, memo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { 
  OrbitControls, 
  useGLTF, 
  Center, 
  Environment, 
  Html,
  useAnimations,
  useProgress,
  AdaptiveDpr,
  BakeShadows,
  PerformanceMonitor
} from "@react-three/drei";
import { Group, Clock, Vector3, MathUtils, SRGBColorSpace, NoColorSpace, Material, Texture, Object3D } from "three";

interface ModelProps {
  isLanding: boolean;
  onClick?: () => void;
}

// Detect Firefox browser to apply special optimizations
const isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

// Model path constant for easy updates
const MODEL_PATH = "/3dOlli-optimized-max.glb";

// Preload the optimized model
useGLTF.preload(MODEL_PATH);

// Simple React loading component that doesn't use drei hooks
function LoadingIndicator() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="text-lg font-medium mb-2">
          Loading 3D Model...
        </div>
        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-500 animate-pulse"
            style={{ width: '60%' }}
          />
        </div>
      </div>
    </div>
  );
}

// Three.js specific loading component that must be used inside Canvas
function CanvasLoadingScreen() {
  const { progress } = useProgress();
  
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <div className="text-lg font-medium mb-2">
          {Math.round(progress)}% Loaded
        </div>
        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </Html>
  );
}

// Helper type for objects with materials
interface ObjectWithMaterial extends Object3D {
  material?: Material & {
    map?: Texture;
    precision?: string;
    fog?: boolean;
    needsUpdate?: boolean;
  };
}

// Separate component for the 3D model
const ModelObject = memo(({ isLanding, onClick }: ModelProps) => {
  const modelRef = useRef<Group>(null);
  const clock = useMemo(() => new Clock(), []);
  
  // State to track animation timing
  const rotationRef = useRef({ 
    lastTime: 0, 
    // Limit to 45fps on Firefox for better performance but still good visuals
    interval: isFirefox ? 1000/45 : 0
  });
  
  // Load the optimized model
  const gltf = useGLTF(MODEL_PATH);
  const { scene, animations } = gltf;
  
  // Fix texture encoding issues that can cause warnings in Firefox
  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        const obj = child as ObjectWithMaterial;
        if (obj.material) {
          // Handle Firefox texture issues
          if (obj.material.map) {
            // Use NoColorSpace for Firefox to avoid alpha-premult warnings
            // but only if we're actually getting the warning
            if (isFirefox) {
              // Use SRGBColorSpace for better visuals while still avoiding warnings
              obj.material.map.colorSpace = SRGBColorSpace;
            } else {
              obj.material.map.colorSpace = SRGBColorSpace;
            }
            obj.material.map.needsUpdate = true;
          }
          
          // Don't reduce quality too much on Firefox
          if (isFirefox) {
            // Use medium precision instead of low for better visuals
            obj.material.precision = 'mediump';
            // Keep fog for visual quality
            obj.material.fog = true;
          }
          
          obj.material.needsUpdate = true;
        }
      });
    }
  }, [scene]);
  
  // Optional: Use animations if they exist in the model
  const { actions } = useAnimations(animations, modelRef);
  
  // Optimize rotation to be smoother on various browsers with throttled updates
  useFrame(() => {
    if (modelRef.current && !isLanding) {
      const now = performance.now();
      
      // For Firefox, use a frame limiting strategy but not too aggressive
      if (isFirefox) {
        if (now - rotationRef.current.lastTime > rotationRef.current.interval) {
          rotationRef.current.lastTime = now;
          
          // Use lerp for smoother transitions in Firefox
          const targetRotation = modelRef.current.rotation.y + 0.015;
          modelRef.current.rotation.y = MathUtils.lerp(
            modelRef.current.rotation.y,
            targetRotation,
            0.4 // Less aggressive lerp for smoother motion
          );
        }
      } else {
        // Standard approach for other browsers
        const delta = Math.min(0.016, clock.getDelta()); // Cap delta time
        modelRef.current.rotation.y += 0.5 * delta;
      }
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
});

// Controls component
const ModelControls = memo(({ isLanding }: { isLanding: boolean }) => {
  return (
    <OrbitControls 
      enableZoom={false}
      enablePan={false}
      autoRotate={isLanding} // Only auto-rotate on landing
      autoRotateSpeed={isFirefox ? 0.7 : 1} // Slightly slower rotation on Firefox
      enabled={true} // Always allow manual rotation
      enableDamping={true}
      dampingFactor={0.05}
      makeDefault // Prevents control conflicts
    />
  );
});

// Main component wrapper
export default function Model3D({ isLanding, onClick }: ModelProps) {
  // Memoize camera settings to prevent unnecessary re-renders
  const cameraPosition = useMemo(() => new Vector3(0, 0, 10), []);

  return (
    <div className={`h-full w-full ${isLanding ? 'cursor-pointer' : ''}`}>
      <Suspense fallback={<LoadingIndicator />}>
        <Canvas 
          camera={{ 
            position: cameraPosition, 
            fov: 50 
          }}
          performance={{ min: 0.5 }} // Set a lower bound for frame rate
          dpr={isFirefox ? [1, 1.5] : [1, 2]} // Better resolution on Firefox but still optimized
          gl={{ 
            antialias: true, // Keep antialiasing for better visuals
            alpha: true,
            powerPreference: 'high-performance',
            // Still prevent alpha premultiplication issues on Firefox
            premultipliedAlpha: !isFirefox
          }}
          // Use normal frameloop for better visual quality
          frameloop="always"
        >
          <PerformanceMonitor onDecline={() => {
            // If performance drops, we can reduce quality
            console.log("Performance declining, reducing quality");
          }} />
          
          <AdaptiveDpr pixelated />
          <BakeShadows />
          
          <Suspense fallback={<CanvasLoadingScreen />}>
            {/* Improved lighting setup for better visuals */}
            <ambientLight intensity={1.8} />
            <directionalLight position={[5, 5, 5]} intensity={1.8} />
            <spotLight 
              position={[0, 5, 5]} 
              intensity={0.8} 
              angle={0.6} 
              penumbra={0.5} 
            />
            
            <Environment preset="sunset" />

            <ModelObject isLanding={isLanding} onClick={onClick} />
            <ModelControls isLanding={isLanding} />
          </Suspense>
        </Canvas>
      </Suspense>
    </div>
  );
}
