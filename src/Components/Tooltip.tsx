import React from 'react';
import ReactTooltip from "react-tooltip";
import Logo from "../Assets/img/ci.png";



type TooltipProps = {

};

const Tooltip: React.FC<TooltipProps> = () => {

    return <div>
        <div data-tip data-for="registerTip"

            style={{
                width: 150,
                height: 100,
                border: "1px solid red",
                position: "fixed",

                zIndex: 100,
                visibility: "hidden"
            }}>

        </div>

        <ReactTooltip
            id="registerTip"
            place="top"
            effect="solid"
            borderColor="mediumseagreen"
            textColor="mediumseagreen"
            delayHide={1000}
            clickable
            border
        >
            <div>
                <img src={Logo} height={150} width={250} />
            </div>
            <h1>
                ci
            </h1>
        </ReactTooltip>
    </div>
}
export default Tooltip;