import { useGLTF } from "@react-three/drei";

export default function Wall(props) {
  const kermit = useGLTF("/Wall.glb");

  return <primitive receiveShadow={true} object={kermit.scene} scale={3} {...props} />;
}
useGLTF.preload("/Wall.glb");
