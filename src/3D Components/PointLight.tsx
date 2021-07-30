import React from 'react';
import * as THREE from 'three';

export interface PointLightProps {

    position?: [number, number, number];
    colorHexadecimal?: string;
    intensity?: number;
}

const PointLight: React.FC<PointLightProps> = (props) => {

    const color = new THREE.Color(props.colorHexadecimal);

    return <mesh position={props.position}>

        <meshPhongMaterial emissive={color} refractionRatio={0.1} />
        <pointLight castShadow color={props.colorHexadecimal} intensity={props.intensity} distance={18} />
    </mesh>
}
export default PointLight;