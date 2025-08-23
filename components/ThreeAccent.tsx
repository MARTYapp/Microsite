"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import type { Object3D } from "three";
import { Suspense } from "react";

type GLTFWithScene = { scene: Object3D };

function Model() {
  try {
    const gltf = useGLTF("/models/brain.glb") as unknown as GLTFWithScene;
    return <primitive object={gltf.scene} scale={1.1} />;
  } catch {
    return (
      <mesh rotation={[0.2, 0.4, 0]}>
        <torusKnotGeometry args={[0.7, 0.22, 128, 24]} />
        <meshStandardMaterial metalness={0.6} roughness={0.2} />
      </mesh>
    );
  }
}

// Preload when available (no-op if not supported)
(useGLTF as unknown as { preload?: (p: string) => void }).preload?.("/models/brain.glb");

export default function ThreeAccent() {
  return (
    <div className="w-full h-56 sm:h-64 md:h-80 rounded-2xl border border-gray-300 dark:border-gray-800 bg-white dark:bg-black">
      <Canvas camera={{ position: [2, 1.5, 2.5], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5,5,5]} intensity={1} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.6} />
      </Canvas>
    </div>
  );
}
