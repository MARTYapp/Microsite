"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
function Model() {
  try {
    // @ts-expect-error drei types are fine here
    const { scene } = useGLTF("/models/brain.glb");
    return <primitive object={scene} scale={1.2} />;
  } catch {
    return (
      <mesh rotation={[0.3, 0.4, 0]}>
        <torusKnotGeometry args={[0.7, 0.25, 128, 32]} />
        <meshStandardMaterial metalness={0.6} roughness={0.2} />
      </mesh>
    );
  }
}
export default function ThreeAccent() {
  return (
    <div className="w-full h-64 rounded-2xl border border-gray-800 bg-black">
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
