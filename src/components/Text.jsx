import { useGLTF } from '@react-three/drei'

export default function Text(props) {

    const kermit = useGLTF('/Text.glb')

    return <primitive object={kermit.scene} scale={3} {...props} />
}
useGLTF.preload('/Text.glb')