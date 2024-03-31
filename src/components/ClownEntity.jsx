import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect } from 'react'
import { LoopOnce } from 'three';

export default function ClownEntity(props) {
    const clown = useGLTF('/ClownAction.glb')
    const animations = useAnimations(clown.animations, clown.scene)

    useEffect(() => {
        const clownAction = animations.actions['the-game-masterAction'];
        if (clownAction) {
            clownAction.play();
        }
    }, [animations.actions['the-game-masterAction']]);

    return <primitive object={clown.scene} scale={3} {...props} />
}

useGLTF.preload('/ClownAction.glb')
