import { useGLTF } from '@react-three/drei'

export default function SideWall(props) {

    const kermit = useGLTF('/SideWall.glb')

    return <primitive object={kermit.scene} scale={3} {...props} />
}
useGLTF.preload('/SideWall.glb')