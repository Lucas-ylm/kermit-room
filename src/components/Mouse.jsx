import { useGLTF } from '@react-three/drei'

export default function Mouse(props) {

    const kermit = useGLTF('/Mouse.glb')

    return <primitive object={kermit.scene} scale={3} {...props} />
}
useGLTF.preload('/Mouse.glb')