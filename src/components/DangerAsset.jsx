import { useGLTF } from '@react-three/drei'

export default function DangerAsset(props) {

    const kermit = useGLTF('/DangerAsset.glb')

    return <primitive object={kermit.scene} scale={3} {...props} />
}
useGLTF.preload('/DangerAsset.glb')