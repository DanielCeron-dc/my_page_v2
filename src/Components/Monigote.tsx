import React, { useState } from 'react';
import logo from "../Assets/perfil.gif";
import staticLogo from "../Assets/Perfil0.png";


type MonigoteProps = {
    isActive?: boolean;
};

const Monigote: React.FC<MonigoteProps> = (props) => {

    const [hover, setHover] = useState(false);

    return <div style={{ zIndex: 1, display: "block", width: "30%" }} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>

        {hover ?
            <>
                <img src={logo} alt="Perfil foto" height="90" style={{ borderRadius: 50, }} />

            </>
            :
            <>
                <img src={staticLogo} alt="Perfil foto" height="90" style={{ borderRadius: 50 }} />
            </>}

        <h1 style={{ color: "#23a128 " }}>Mi Portafolio</h1>
        <h2 style={{ color: "white" }} className="newfont">
            Bienvenido, soy un programador front end y en este humilde portafolio te quiero mostrar los diferentes trabajos que he hecho y mis conocimientos :D
        </h2>
    </div>
}
export default Monigote;