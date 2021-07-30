import React, { useEffect } from "react";
import { useBox } from "@react-three/cannon";
import { usePhysicsBoxesStore } from "../../Store/PhysicsBoxes.store";
import * as THREE from "three";
import { Vector3 } from "three";

import { getRandomInt } from "../../tools/mathTools";
import { useLoader } from "@react-three/fiber";

interface BoxPhysicsProps {
    id: number;
}

const BoxPhysics: React.FC<BoxPhysicsProps> = (props) => {



    const texture = useLoader(THREE.TextureLoader, "./ci.png")
    let position: [number, number, number] = [0, 0, 0];
    let isDragging = false;
    const [ref, api] = useBox(() => ({
        mass: 1,
        position: [getRandomInt(15), 15 + getRandomInt(15), getRandomInt(15)],
        args: [3, 3, 3]
    }));

    useEffect(() => {

        usePhysicsBoxesStore.subscribe((newPosition: [number, number, number]) => {
            position = newPosition;
            api.position?.copy(new Vector3(position[0], position[1], position[2]));
        }, (state) => state.positions[props.id]);

        usePhysicsBoxesStore.subscribe((value: boolean) => {
            if (value) {
                api.mass?.set(0);
            } else {
                api.mass?.set(1);
            }
        }, (state) => state.dragging === props.id);

    }, []);


    return <mesh ref={ref} castShadow receiveShadow  >
        <boxBufferGeometry args={[3, 3, 3]} />
        <meshPhysicalMaterial map={texture} emissive={new THREE.Color("black")} emissiveIntensity={0.1} transmission={0.7} />
    </mesh>
}

export default React.memo(BoxPhysics);



