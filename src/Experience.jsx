import { OrbitControls } from "@react-three/drei";
import Lights from "./Lights.jsx";
import Scene from "./Scene.jsx";

export default function Experience() {
  return (
    <>
      <OrbitControls
        makeDefault
        target={[-0, 8, -10]}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-4}
        maxAzimuthAngle={-3.5}
        frameRate={60}
        enableRotate={true}
        enableDamping={true}
        dampingFactor={0.005}
        enableZoom={false}
        enablePan={false}
      />
      <Lights />
      <Scene />
    </>
  );
}
