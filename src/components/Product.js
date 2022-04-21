import { Card, Button } from 'react-bootstrap';
import { ModalContext } from '../context/ModalContext';
import { useContext } from 'react';

export const Product = ({ image, name, description, price }) => {
    const {
        handleOpenModal,
        setTitle,
        setImage,
        setDescription,
        setPrice,
        setCallback,
        setButtonCardText,
    } = useContext(ModalContext);

    const handleClick = () => {
        setTitle(name);
        setImage(image);
        setDescription(description);
        setPrice(price);
        setCallback();
        setButtonCardText('Agregar al carrito');
        handleOpenModal();
    };

    return (
        <>
            <Card
                style={{
                    width: '20rem',
                }}
            >
                <Card.Img variant="top" src={image} />
                <Card.Body
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>{price}</Card.Text>
                    <Button variant="primary" onClick={handleClick}>
                        Más Info
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
};
