"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
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
        {/* Subtle emissive so it picks up the glow */}
        <meshStandardMaterial
          color="#c084fc"
          metalness={0.6}
          roughness={0.2}
          emissive="#7c3aed"
          emissiveIntensity={0.25}
        />
      </mesh>
    );
  }
}

// Preload when available (no-op if not supported)
(useGLTF as unknown as { preload?: (p: string) => void }).preload?.("/models/brain.glb");

export default function ThreeAccent() {
  return (
    <div className="relative w-full h-56 sm:h-64 md:h-80 rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#0d0f1a] via-[#12172d] to-[#0b0b12]">
      {/* cinematic radial glow */}
      <div
        className="pointer-events-none absolute -inset-1 opacity-40"
        style={{
          background:
            "radial-gradient(120% 80% at 20% 0%, rgba(168,85,247,.25) 0%, rgba(0,0,0,0) 45%)," +
            "radial-gradient(120% 80% at 100% 60%, rgba(236,72,153,.20) 0%, rgba(0,0,0,0) 55%)",
          mixBlendMode: "screen",
        }}
      />
      {/* soft vignette */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.6)]" />

      <Canvas camera={{ position: [2, 1.5, 2.5], fov: 50 }}>
        {/* lighting with brand hues */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.9} color="#a78bfa" />
        <directionalLight position={[-3, 2, -4]} intensity={0.6} color="#f472b6" />

        <Suspense fallback={null}>
          <Model />
          {/* subtle environment reflections */}
          <Environment preset="city" />
        </Suspense>

        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.6} />
      </Canvas>

      {/* top hairline */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-white/10" />
    </div>
  );
}