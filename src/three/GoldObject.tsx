import { useRef, useMemo, type MutableRefObject } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface GoldObjectProps {
  progressRef: MutableRefObject<number>;
  motion: boolean;
}

export default function GoldObject({ progressRef, motion }: GoldObjectProps) {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  const goldMat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#c9a15a", metalness: 1, roughness: 0.25, emissive: "#5a4213", emissiveIntensity: 0.15 }),
    []
  );

  const facets = useMemo(
    () =>
      Array.from({ length: 10 }, (_, i) => {
        const angle = (i / 10) * Math.PI * 2;
        const radius = 2.4;
        return {
          pos: [Math.cos(angle) * radius, Math.sin(angle * 1.4) * 0.6, Math.sin(angle) * radius] as [number, number, number],
          scale: 0.16 + (i % 3) * 0.06,
        };
      }),
    []
  );

  useFrame((_, delta) => {
    const group = groupRef.current;
    const core = coreRef.current;
    if (!group || !core) return;
    const progress = progressRef.current;
    if (motion) {
      group.rotation.y += delta * 0.15;
      core.rotation.x += delta * 0.1;
      core.rotation.y += delta * 0.12;
    }
    group.rotation.y = group.rotation.y + progress * 0.001;
    group.rotation.x = progress * 0.6;
    core.scale.setScalar(1 + progress * 0.5);
  });

  return (
    <group ref={groupRef}>
      <mesh ref={coreRef} material={goldMat}>
        <torusKnotGeometry args={[1.1, 0.32, 180, 24, 2, 3]} />
      </mesh>
      {facets.map((f, i) => (
        <mesh key={i} position={f.pos} material={goldMat}>
          <octahedronGeometry args={[f.scale, 0]} />
        </mesh>
      ))}
    </group>
  );
}
