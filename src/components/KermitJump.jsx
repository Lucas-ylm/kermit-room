import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect } from 'react'
import { LoopOnce } from 'three';

export default function ClownEntity(props) {
    const kermit = useGLTF('/KermitJump.glb')
    const animations = useAnimations(kermit.animations, kermit.scene)

    useEffect(() => {
        const kermitAction = animations.actions['KermitAction5'];
        if (kermitAction) {
            kermitAction.setLoop(LoopOnce, 1);
            kermitAction.play();
        }
    }, [animations.actions['KermitAction5']]);

    return <primitive object={kermit.scene} scale={3} {...props} />
}

useGLTF.preload('/KermitJump.glb')