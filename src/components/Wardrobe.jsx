import { useGLTF } from '@react-three/drei'

export default function Wardrobe(props) {

    const kermit = useGLTF('/Wardrobe.glb')

    return <primitive object={kermit.scene} scale={3} {...props} />
}
useGLTF.preload('/Wardrobe.glb')