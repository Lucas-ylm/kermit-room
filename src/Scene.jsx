import KermitSwing1 from './components/KermitSwing1.jsx';
import KermitSwing2 from './components/KermitSwing2.jsx';
import KermitSwing3 from './components/KermitSwing3.jsx';
import Shelf from './components/Shelf.jsx';
import Wall from './components/Wall.jsx';
import Desk from './components/Desk.jsx';
import Chair from './components/Chair.jsx';
import SideWall from './components/SideWall.jsx';
import Wardrobe from './components/Wardrobe.jsx';
import WallDeco from './components/WallDeco.jsx';
import Pens from './components/Pens.jsx';
import Text from './components/Text.jsx';
import Display from './components/Display.jsx';
import Coffee from './components/Coffee.jsx';
import Mouse from './components/Mouse.jsx';
import DangerAsset from './components/DangerAsset.jsx';
import DangerText from './components/DangerText.jsx';
import Books from './components/Books.jsx';
import Vinyls from './components/Vinyls.jsx';
import ClownEntity from './components/ClownEntity.jsx';
import Keyboard from './components/Keyboard.jsx';
import KermitSleep from './components/KermitSleep.jsx';
import KermitSit from './components/KermitSit.jsx';
import KermitJump from './components/KermitJump.jsx';

export default function Experience()
{
    return <>
    <directionalLight
        castShadow
        position={ [ 4, 4, 1 ] }
        intensity={ 0.5 }
        shadow-mapSize={ [ 4096*2, 4096*2 ] }
        shadow-camera-near={ 0.01 }
        shadow-camera-far={ 10000 }
        shadow-camera-top={ 10000 }
        shadow-camera-right={ 10000 }
        shadow-camera-bottom={ - 10000 }
        shadow-camera-left={ - 10000 }
    />
    <directionalLight
        castShadow
        position={ [ -4, 4, 1 ] }
        intensity={ 0.5 }
        shadow-mapSize={ [ 4096*2, 4096*2 ] }
        shadow-camera-near={ 0.01 }
        shadow-camera-far={ 10000 }
        shadow-camera-top={ 10000 }
        shadow-camera-right={ 10000 }
        shadow-camera-bottom={ - 10000 }
        shadow-camera-left={ - 10000 }
    />
        <KermitSwing1 />
        <KermitSwing2 />
        <KermitSwing3 />
        <Shelf />
        <Wall />
        <Desk />
        <Chair />
        <SideWall />
        <Wardrobe />
        <WallDeco />
        <Pens />
        <Text />
        <Display />
        <Coffee />
        <Mouse />
        <DangerAsset />
        <DangerText />
        <Books />
        <Vinyls />
        <ClownEntity />
        <Keyboard />
        <KermitSleep />
        <KermitSit />
        <KermitJump />
    </>
}