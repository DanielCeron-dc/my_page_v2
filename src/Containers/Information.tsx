import React, { useState } from 'react';
import logo from "../Assets/perfil.gif";
import staticLogo from "../Assets/Perfil0.png";
import Button from '../Components/Button/Button';
import CVButton from '../Components/CVButton';
import GithubButton from '../Components/GithubButton';
import LanguageButton from '../Components/LanguageButton';
import useCheckMobileScreen from '../hooks/useCheckMobileScreen';



type MonigoteProps = {
    isActive?: boolean;
    setShowProjects: React.Dispatch<React.SetStateAction<boolean>>;
    showProjects: boolean;
};

const Monigote: React.FC<MonigoteProps> = (props) => {

    const [hover, setHover] = useState(false);
    const [english, setEnglish] = useState(false);
    const isMobile = useCheckMobileScreen();

    return <div style={{ zIndex: 1, display: "block", width: isMobile ? "100%" : "30%", height: "auto" }}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
    >
        {hover ?
            <>
                <img src={logo} alt="Perfil foto" height="90" style={{ borderRadius: 50 }} />
            </>
            :
            <>
                <img src={staticLogo} alt="Perfil foto" height="90" style={{ borderRadius: 50 }} />
            </>}

        <h1 style={{ color: "mediumseagreen" }}>Mi Portafolio</h1>
        <h3 style={{ color: "white", padding: "20px" }} className="newfont">
            {!english ?
                "Bienvenido, soy un programador front end y en este humilde portafolio" +
                " te quiero mostrar los diferentes trabajos que he hecho y mis conocimientos :D"
                :
                "Welcome, i'm a Front end developer, in this humble portfolio I want to show you the different jobs I have done and my knowledge :D"
            }
        </h3>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Button
                onClick={() => props.setShowProjects((current) => !current)}
                style={{ color: "black" }}
            >{props.showProjects ? "Habilidades" : "Proyectos"}</Button>
            <LanguageButton onClick={() => setEnglish((current) => !current)} />
            <GithubButton />
            <CVButton />
        </div>
    </div>
}
export default Monigote;