import React, { useMemo } from 'react';
import { useLoader, useThree } from "@react-three/fiber";
import * as THREE from 'three';

type BackGroundTextureProps = {

};

const BackGroundTexture: React.FC<BackGroundTextureProps> = (props) => {

    const texture = useLoader(THREE.TextureLoader, '/autoshop.jpg');
    const { gl } = useThree();


    const formatted = useMemo(() =>
        new THREE.WebGLCubeRenderTarget(
            texture.image.height
        ).fromEquirectangularTexture(gl, texture).texture
        , [texture, gl])


    return <primitive attach="background" object={formatted} />

}
export default BackGroundTexture;