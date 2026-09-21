import { useFrame, useThree } from "@react-three/fiber";
import type { MutableRefObject } from "react";

interface CameraRigProps {
  progressRef: MutableRefObject<number>;
}

export default function CameraRig({ progressRef }: CameraRigProps) {
  const { camera } = useThree();

  useFrame(() => {
    const p = progressRef.current;
    camera.position.z = 7 - p * 4.2;
    camera.position.y = p * 0.8;
    camera.lookAt(0, 0, 0);
  });

  return null;
}
