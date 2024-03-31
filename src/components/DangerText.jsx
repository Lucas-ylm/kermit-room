import { useGLTF } from '@react-three/drei'

export default function DangerText(props) {

    const kermit = useGLTF('/DangerText.glb')

    return <primitive object={kermit.scene} scale={3} {...props} />
}
useGLTF.preload('/DangerText.glb')