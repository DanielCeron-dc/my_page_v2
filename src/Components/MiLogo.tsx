import React from 'react';
import logodc from "../Assets/png/MiLogo.png";
import Fire from './fire/Fire';


const MiLogo: React.FC = () => {

    return <div>
        <Fire />
        <img src={logodc} alt="MI Logo" height="50" style={{ borderRadius: 50, position: "fixed", bottom: 0, right: 0, margin: 38, zIndex: 2 }} />
    </div>
}
export default MiLogo;