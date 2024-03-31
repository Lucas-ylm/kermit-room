import { useGLTF } from '@react-three/drei'

export default function Shelf(props) {

    const kermit = useGLTF('/Shelf.glb')

    return <primitive object={kermit.scene} scale={3} {...props} />
}
useGLTF.preload('/Shelf.glb')