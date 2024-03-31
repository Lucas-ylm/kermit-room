import { useGLTF } from '@react-three/drei'

export default function Chair(props) {

    const kermit = useGLTF('/Chair.glb')

    return <primitive object={kermit.scene} scale={3} {...props} />
}
useGLTF.preload('/Chair.glb')