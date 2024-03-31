import { useGLTF } from '@react-three/drei'

export default function Coffee(props) {

    const kermit = useGLTF('/Coffee.glb')

    return <primitive object={kermit.scene} scale={3} {...props} />
}
useGLTF.preload('/Coffee.glb')