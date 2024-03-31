import { useGLTF } from '@react-three/drei'

export default function ClownEntity(props) {
    const clown = useGLTF('/KermitSleep.glb')

    return <primitive object={clown.scene} scale={3} {...props} />
}

useGLTF.preload('/KermitSleep.glb')