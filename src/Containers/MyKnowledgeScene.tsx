
import React from 'react';
import BackGround from '../3D Components/BackGround/BackGround';
import SpriteText from '../3D Components/Text/SpriteText';
import useCheckMobileScreen from '../hooks/useCheckMobileScreen';

const RotatingText = () => {

    const isMobile = useCheckMobileScreen();


    return <div style={{ width: isMobile ? "100%" : "60vw", height: isMobile ? "40vh" : "90vh", display: "inline-block" }}>
        <BackGround width={"100%"} height={"100%"} cameraPosition={[-20, 0, 0]} eneableZoom={false} >
            <SpriteText position={[0, 0, 11]} fontSize={100} color="mediumseagreen">
                Typescript
            </SpriteText>
            <SpriteText position={[11, 0, 0]} fontSize={100} color="mediumseagreen">
                React
            </SpriteText>
            <SpriteText position={[-11, 0, 0]} fontSize={100} >
                Flutter
            </SpriteText>
            <SpriteText position={[0, 0, -11]} fontSize={100}>
                C#
            </SpriteText>
            <SpriteText position={[5, 7, -5]} fontSize={100} color="mediumseagreen">
                Redux
            </SpriteText>
            <SpriteText position={[5, -7, 5]} fontSize={100} color="mediumseagreen">
                Zustand
            </SpriteText>
            <SpriteText position={[-5, 7, 5]} fontSize={100}>
                ThreeJs
            </SpriteText>
            <SpriteText position={[-5, -7, -5]} fontSize={100} >
                Java
            </SpriteText>
            <SpriteText position={[-5, 7, -5]} fontSize={100}>
                Thunk
            </SpriteText>
            <SpriteText position={[5, -7, -5]} fontSize={100} color="mediumseagreen">
                Blender
            </SpriteText>
            <SpriteText position={[5, 7, 5]} fontSize={100}>
                WordPress
            </SpriteText>
            <SpriteText position={[-5, -7, 5]} fontSize={100} color="mediumseagreen">
                React-Context
            </SpriteText>
        </BackGround>
    </div>
}

const MyKnowledge: React.FC = () => {

    return <RotatingText />


}
export default MyKnowledge;