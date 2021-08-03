import React from 'react';
import { Physics } from "@react-three/cannon";

import gridIcon from "../Assets/gridIcon.svg";

import BackGround from '../3D Components/BackGround/BackGround';
import PhysicsPlane from '../3D Components/ThreejsWithCannon/PhysicsPlane';
import BoxexPhysicsDragable from '../3D Components/ThreejsWithCannon/BoxPhysicsDragable';
import PointLight from '../3D Components/PointLight';
import useCheckMobileScreen from '../hooks/useCheckMobileScreen';
import Button from '../Components/Button/Button';
import { useModalState } from '../Store/Modal.store';


const ProjectsScene: React.FC = () => {

    const isMobile = useCheckMobileScreen();
    const { setShowModal } = useModalState();

    return <div style={{ width: isMobile ? "100%" : "60vw", height: isMobile ? "40vh" : "90vh", display: "block", position: "relative" }}>
        <BackGround
            isOrbitControls={false}
            cameraPosition={isMobile ? [19, 7, 1] : [19, 12, 5]}
            rotateSpeed={0.1} width={"100%"}
            height={"100%"}
        >
            <Physics>
                <PointLight position={[0, 12, 0]} intensity={6} colorHexadecimal={"mediumseagreen"} />
                <BoxexPhysicsDragable />
                <PhysicsPlane width={30} height={1} depth={30} position={[0, -1, 0]} />

                {/* Walls */}
                <PhysicsPlane width={1} height={100} depth={100} position={[13, 0, 0]} color={"red"} transparent />
                <PhysicsPlane width={1} height={100} depth={100} position={[-13, 0, 0]} color={"red"} transparent />
                <PhysicsPlane width={100} height={100} depth={1} position={[0, 0, 13]} color={"red"} transparent />
                <PhysicsPlane width={100} height={100} depth={1} position={[0, 0, -13]} color={"red"} transparent />
                {/* Walls */}

            </Physics>
        </BackGround>
        <Button
            data-tip data-for="projects"
            onClick={() => setShowModal(1, -1, true)}
            style={{ position: "absolute", bottom: 50, left: 50, paddingBottom: 2 }}
        >
            <img src={gridIcon} alt="mostrar en grid icon" />
        </Button>

    </div>





}
export default ProjectsScene;