import create from "zustand"; 

interface ModalState {
    show: boolean;
    id: number; 
    setShowModal: (show: boolean, id: number) => void;
}

export const useModalState = create<ModalState>((set) => ({
    show: false,
    id: -1,
    setShowModal: (show: boolean, id:number) => {
        set({show, id});
    }
})); 


