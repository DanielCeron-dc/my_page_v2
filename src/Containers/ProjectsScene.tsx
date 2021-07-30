import React from 'react';
import { Physics } from "@react-three/cannon";
import BackGround from '../3D Components/BackGround/BackGround';
import PhysicsPlane from '../3D Components/ThreejsWithCannon/PhysicsPlane';
import BoxexPhysicsDragable from '../3D Components/ThreejsWithCannon/BoxPhysicsDragable';
import PointLight from '../3D Components/PointLight';
import Torus from '../3D Components/Torus';


type ProjectsSceneProps = {

};

const ProjectsScene: React.FC<ProjectsSceneProps> = () => {

    return <div style={{ width: "50vw", height: "70vh" }}>
        <BackGround isOrbitControls={false} cameraPosition={[19, 12, 10]} rotateSpeed={0.1} width={"100%"} height={"100%"} >
            <Physics>
                <PointLight position={[0, 12, 0]} intensity={7} colorHexadecimal={"green"} />

                <BoxexPhysicsDragable />
                <PhysicsPlane width={30} height={1} depth={30} position={[0, -1, 0]} />

                {/* Walls */}
                <PhysicsPlane width={1} height={100} depth={100} position={[15, 0, 0]} color={"red"} transparent />
                <PhysicsPlane width={1} height={100} depth={100} position={[-15, 0, 0]} color={"red"} transparent />
                <PhysicsPlane width={100} height={100} depth={1} position={[0, 0, 15]} color={"red"} transparent />
                <PhysicsPlane width={100} height={100} depth={1} position={[0, 0, -15]} color={"red"} transparent />
                {/* Walls */}

            </Physics>
        </BackGround>


    </div>





}
export default ProjectsScene;