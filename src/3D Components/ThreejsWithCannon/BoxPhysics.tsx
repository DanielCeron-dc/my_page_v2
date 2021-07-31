import React, { useEffect } from "react";
import { useBox } from "@react-three/cannon";
import { usePhysicsBoxesStore } from "../../Store/PhysicsBoxes.store";
import * as THREE from "three";
import { Vector3 } from "three";

import { getRandomInt } from "../../tools/mathTools";
import { useFrame, useLoader } from "@react-three/fiber";
import { useModalState } from "../../Store/Modal.store";

import { projects } from "../../tools/informationProjects";



interface BoxPhysicsProps {
    id: number;
}

let timeOutFunction: NodeJS.Timeout;


const BoxPhysics: React.FC<BoxPhysicsProps> = (props) => {

    const { setShowModal } = useModalState();

    const texture = useLoader(THREE.TextureLoader, projects[props.id].img);
    let position: [number, number, number] = [0, 0, 0];
    const [ref, api] = useBox(() => ({
        mass: 1,
        position: [getRandomInt(13), 15 + getRandomInt(15), getRandomInt(13)],
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

    return <mesh ref={ref} castShadow receiveShadow
        onClick={() => setShowModal(true, props.id)}
    >
        <boxBufferGeometry args={[3, 3, 3]} />
        <meshBasicMaterial map={texture} />
    </mesh>
}

export default React.memo(BoxPhysics);



