import { createContext, useState } from 'react';
import { ProductsModal } from '../components/ProductsModal';

export const ModalContext = createContext({
    showModal: false,
    handleOpenModal: () => {},
    handleCloseModal: () => {},
    setTitle: () => {},
    setDescription: () => {},
    setPrice: () => {},
    setButtonCardText: () => {},
    setCallback: () => {},
    setImage: () => {},
});

export const ModalContextProvider = ({ children }) => {
    const [title, setTitle] = useState('');

    const [image, setImage] = useState();

    const [description, setDescription] = useState('');

    const [price, setPrice] = useState('');

    const [buttonCardText, setButtonCardText] = useState('');

    const [callback, setCallback] = useState(() => {});

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

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
                setPrice,
                setButtonCardText,
                setCallback,
                setImage,
            }}
        >
            <ProductsModal
                title={title}
                image={image}
                description={description}
                price={price}
                callback={callback}
                buttonCardText={buttonCardText}
                show={showModal}
                onHide={handleCloseModal}
            ></ProductsModal>
            {children}
        </ModalContext.Provider>
    );
};
