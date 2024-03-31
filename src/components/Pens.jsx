import { useGLTF } from '@react-three/drei'

export default function Pens(props) {

    const kermit = useGLTF('/Pens.glb')

    return <primitive object={kermit.scene} scale={3} {...props} />
}
useGLTF.preload('/Pens.glb')