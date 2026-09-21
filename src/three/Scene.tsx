import { Canvas } from "@react-three/fiber";
import type { MutableRefObject } from "react";
import GoldObject from "./GoldObject";
import CameraRig from "./CameraRig";

interface SceneProps {
  progressRef: MutableRefObject<number>;
  motion: boolean;
  isMobile?: boolean;
}

export default function Scene({ progressRef, motion, isMobile = false }: SceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 40 }}
      dpr={[1, isMobile ? 1.3 : 1.7]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 3, 5]} intensity={2.2} color="#ffe4b8" />
      <directionalLight position={[-4, -2, -3]} intensity={0.5} color="#c9a15a" />
      <GoldObject progressRef={progressRef} motion={motion} />
      <CameraRig progressRef={progressRef} />
    </Canvas>
  );
}
