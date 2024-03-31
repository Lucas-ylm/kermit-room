import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect } from 'react'
import { LoopOnce } from 'three';

export default function KermitSwing2(props) {

    const kermit = useGLTF('/KermitSwing2.glb')
    const animations = useAnimations(kermit.animations, kermit.scene)

    useEffect(() => {
        const kermitAction = animations.actions.KermitAction1;
        if (kermitAction) {
            kermitAction.setLoop(LoopOnce, 1);
            kermitAction.clampWhenFinished = true;
            kermitAction.play();
        }
    }, [animations.actions.KermitAction1]);

    return <primitive object={kermit.scene} scale={3} {...props} />
}
useGLTF.preload('/KermitSwing2.glb')