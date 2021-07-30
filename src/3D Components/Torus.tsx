import { MeshProps } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';


type TorusProps = {
    position: [number, number, number]
};

const Torus: React.FC<TorusProps> = (props) => {


    const ref = useRef<MeshProps>(null);

    useEffect(() => {
        ref.current?.rotateY && ref.current.rotateY(Math.PI / 2); // rotate the torus
    }, [])


    return <mesh position={props.position} ref={ref} castShadow receiveShadow>
        <torusBufferGeometry args={[13, 1, 10, 200]} />
        <meshPhysicalMaterial />
    </mesh>
}
export default Torus;