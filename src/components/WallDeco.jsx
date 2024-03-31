import { useGLTF } from '@react-three/drei'

export default function WallDeco(props) {

    const kermit = useGLTF('/WallDeco.glb')

    return <primitive object={kermit.scene} scale={3} {...props} />
}
useGLTF.preload('/WallDeco.glb')