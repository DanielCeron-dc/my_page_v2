import create from "zustand";

interface ModalState {
    show: number;
    id: number;
    useAllWidth: boolean;
    setShowModal: (show: number, id: number, useAllWidth: boolean) => void;
    closeModal: () => void;
}

export const useModalState = create<ModalState>((set) => ({
    show: -1,
    id: -1,
    useAllWidth: false,
    setShowModal: (show: number, id: number, useAllWidth: boolean) => {
        set({ show, id, useAllWidth });
    },
    closeModal: () => {
        set({ show: -1, id: -1, useAllWidth: false });
    }

}));


