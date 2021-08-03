import React from 'react';
import { projects } from '../../tools/informationProjects';
import BoxProject from './BoxProject';

type ProjectContainerProps = {

};

const ProjectContainer: React.FC<ProjectContainerProps> = () => {

    return <div style={{
        display: "flex",
        overflow: "scroll",
        overflowY: "hidden",
        overflowX: "auto",
        width: "100%",
        alignContent: "center",
        justifyContent: "center",
    }}>
        {projects.map((p) => <BoxProject project={p} />)}
    </div>
}
export default ProjectContainer;