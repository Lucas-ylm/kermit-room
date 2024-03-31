import { useGLTF } from '@react-three/drei'

export default function Books(props) {

    const kermit = useGLTF('/Books.glb')

    return <primitive object={kermit.scene} scale={3} {...props} />
}
useGLTF.preload('/Books.glb')