import { useGLTF } from '@react-three/drei'

export default function Wall(props) {

    const kermit = useGLTF('/Desk.glb')

    return <primitive castShadow object={kermit.scene} scale={3} {...props} />
}
useGLTF.preload('/Desk.glb')