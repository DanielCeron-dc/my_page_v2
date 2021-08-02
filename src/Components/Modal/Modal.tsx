import React from 'react';
import { AnimatePresence, motion, Variants } from "framer-motion";
import classes from "./Modal.module.css";

import { useModalState } from '../../Store/Modal.store';


import { projects } from "../../tools/informationProjects";
import useCheckMobileScreen from '../../hooks/useCheckMobileScreen';
import Button from '../../Button/Button';

const backdrop: Variants | undefined = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
}

const modal: Variants | undefined = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "10vh",
        opacity: 1,
        transition: { delay: 0.5 }
    }
}

const Modal: React.FC = () => {

    const { setShowModal, show, id } = useModalState();
    const isMobile = useCheckMobileScreen();

    return <AnimatePresence exitBeforeEnter>
        {show && <motion.div
            className={classes.backdrop}
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={() => setShowModal(false, -1)}
        ><div style={{
            width: isMobile ? "100%" : "60vw",
            height: "100%"
        }}>
                <motion.div
                    onClick={(e) => e.stopPropagation()}
                    className={classes.modal}
                    variants={modal}
                    style={{
                        width: isMobile ? "90%" : undefined,
                    }}
                >
                    <img src={projects[id].img} width={"100%"} alt={projects[id].name} />
                    <h1 style={{ color: "mediumseagreen" }}>{projects[id].name}</h1>
                    <p style={{ color: "white" }} className="newfont">
                        {projects[id].description}
                    </p>
                    <Button
                        onClick={() =>
                            setShowModal(false, -1)}
                        style={{ position: "absolute", bottom: 0, right: 0, margin: 20 }}>
                        Cerrar
                    </Button>
                </motion.div>
            </div>
        </motion.div>}
    </AnimatePresence>
}
export default Modal;