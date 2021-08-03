import React, { CSSProperties, useState } from 'react';
import { IProjects } from '../../tools/informationProjects';

type BoxProjectProps = {
    project: IProjects;
};

const style: CSSProperties = {
    display: "inline-block",
    position: "relative",
    width: 250,
    height: 400,
    border: "1px solid mediumseagreen",
    margin: 10,
}

const hoverStyle: CSSProperties = {
    backgroundColor: "rgba(60, 179, 114, 0.137)",
}


const BoxProject: React.FC<BoxProjectProps> = ({ project }) => {

    const [hover, setHover] = useState(false);

    return <div
        style={hover ? { ...style, ...hoverStyle } : style}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
    >
        <img src={project.img} alt={project.name} width={250} />
        <h1 style={{ color: "mediumseagreen" }}>{project.name}</h1>
        <h4 className={"newfont"} style={{ color: "white" }}>{project.description}</h4>
    </div>
}
export default BoxProject;