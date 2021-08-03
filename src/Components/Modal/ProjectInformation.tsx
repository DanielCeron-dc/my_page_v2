import React from 'react';
import { useModalState } from '../../Store/Modal.store';
import { projects } from '../../tools/informationProjects';

type ProjectInformationProps = {


};

const ProjectInformation: React.FC<ProjectInformationProps> = () => {

    const { id } = useModalState();

    return id !== -1 ? <div
        id="si"
        style={{ position: "absolute" }}
    > <img src={projects[id].img} width={"100%"} alt={projects[id].name} />
        <h1 style={{ color: "mediumseagreen" }}>{projects[id].name}</h1>
        <p style={{ color: "white" }} className="newfont">
            {projects[id].description}
        </p> </div> : <></>
}
export default ProjectInformation;