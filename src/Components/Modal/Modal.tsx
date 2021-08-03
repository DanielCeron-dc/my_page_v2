import React, { ReactNode } from 'react';
import { AnimatePresence, motion, Variants } from "framer-motion";
import classes from "./Modal.module.css";

import { useModalState } from '../../Store/Modal.store';

import useCheckMobileScreen from '../../hooks/useCheckMobileScreen';
import Button from '../Button/Button';
import ProjectInformation from './ProjectInformation';
import ProjectContainer from './ProjectContainer';
import PdfViewer from './PdfViewer';

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
        y: "5vh",
        opacity: 1,
        transition: { delay: 0.5 }
    }
}

const modals: ReactNode[] = [
    <ProjectInformation />,
    <ProjectContainer />,
    <PdfViewer />
];

const Modal: React.FC = () => {

    const { show, useAllWidth, closeModal } = useModalState();
    const isMobile = useCheckMobileScreen();

    return <AnimatePresence exitBeforeEnter>
        {show !== -1 && <motion.div
            className={classes.backdrop}
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={closeModal}
        ><div
            id="modal-overlay"
            style={{
                width: useAllWidth || isMobile ? "100%" : "50%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <motion.div
                    onClick={(e) => e.stopPropagation()}
                    className={classes.modal}
                    variants={modal}
                    style={{
                        width: useAllWidth || isMobile ? "97%" : "70%",
                    }}
                >
                    <div style={{
                        overflowY: "auto",
                        position: "relative",
                        alignContent: "center",
                        justifyContent: "center",
                        display: "inline-grid",
                        width: "100%",
                        height: "100%",
                        placeContent: "center"
                    }}>
                        {modals[show]}
                    </div>
                    <Button
                        onClick={closeModal}
                        style={{ position: "fixed", zIndex: 100, bottom: 0, right: 0, margin: 40 }}>
                        Cerrar
                    </Button>
                </motion.div>
            </div>
        </motion.div>}
    </AnimatePresence>
}





export default Modal;