import { createContext, useEffect, useState } from 'react';
import { ProductsModal } from '../components/ProductsModal';

export const ModalContext = createContext({
    showModal: false,
    handleOpenModal: () => {},
    handleCloseModal: () => {},
    setTitle: () => {},
    setDescription: () => {},
    setButtonCardText: () => {},
    setCallback: () => {},
});

export const ModalContextProvider = ({ children }) => {
    const [title, setTitle] = useState('');

    const [description, setDescription] = useState('');

    const [buttonCardText, setButtonCardText] = useState('');

    const [callback, setCallback] = useState(() => {});

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    useEffect(() => {
        console.log(showModal);
    }, [showModal]);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <ModalContext.Provider
            value={{
                showModal,
                handleOpenModal,
                handleCloseModal,
                setTitle,
                setDescription,
                setButtonCardText,
                setCallback,
            }}
        >
            <ProductsModal
                title={title}
                description={description}
                callback={callback}
                buttonCardText={buttonCardText}
                show={showModal}
                onHide={handleCloseModal}
            ></ProductsModal>
            {children}
        </ModalContext.Provider>
    );
};
