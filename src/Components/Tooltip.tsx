import React from 'react';
import ReactTooltip from "react-tooltip";


const Tooltip: React.FC = () => {

    return <>
        <ReactTooltip
            id="cv"
            place="top"
            effect="solid"
            borderColor="mediumseagreen"
            textColor="mediumseagreen"
            clickable
            border
        >
            <h4 className="newfont" style={{ color: "white" }}>
                CV
            </h4>
        </ReactTooltip>

        <ReactTooltip
            id="github"
            place="top"
            effect="solid"
            borderColor="mediumseagreen"
            textColor="mediumseagreen"
            clickable
            border
        >
            <h4 className="newfont" style={{ color: "white" }}>
                Github
            </h4>
        </ReactTooltip>

        <ReactTooltip
            id="language"
            place="top"
            effect="solid"
            borderColor="mediumseagreen"
            textColor="mediumseagreen"
            clickable
            border
        >
            <h4 className="newfont" style={{ color: "white" }}>
                Cambiar Lenguaje (Descripcion)
            </h4>
        </ReactTooltip>

        <ReactTooltip
            id="projects"
            place="top"
            effect="solid"
            borderColor="mediumseagreen"
            textColor="mediumseagreen"
            clickable
            border
        >
            <h4 className="newfont" style={{ color: "white" }}>
                Ver Proyectos en Fila
            </h4>
        </ReactTooltip>


    </>

}
export default Tooltip;