import { useGLTF } from '@react-three/drei'

export default function Vinyls(props) {

    const kermit = useGLTF('/Vinyls.glb')

    return <primitive object={kermit.scene} scale={3} {...props} />
}
useGLTF.preload('/Vinyls.glb')