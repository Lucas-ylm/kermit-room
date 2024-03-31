import { useGLTF } from '@react-three/drei'

export default function Display(props) {

    const kermit = useGLTF('/Display.glb')

    return <primitive object={kermit.scene} scale={3} {...props} />
}
useGLTF.preload('/Display.glb')