import React from 'react';
import Button from './Button/Button';
import { useModalState } from '../Store/Modal.store';
import CVIcon from "../Assets/cv.svg"


const CVButton: React.FC = () => {

    const { setShowModal } = useModalState();

    return <Button onClick={() => setShowModal(2, -1, true)} style={{ paddingBottom: 2 }} data-tip data-for="cv" >
        <img src={CVIcon} alt="Hoja de vida Icono" />
    </Button>
}
export default CVButton;