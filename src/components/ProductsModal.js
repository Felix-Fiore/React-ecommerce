import { Modal, Button } from 'react-bootstrap';

export const ProductsModal = ({
    title,
    image,
    price,
    description,
    buttonCardText,
    callback,
    ...props
}) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <img
                        style={{
                            width: 400,
                        }}
                        src={image}
                        alt="product"
                    />
                </div>
                <div
                    style={{
                        marginTop: 30,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <p>{description}</p>
                    <p>{price}</p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={callback}>{buttonCardText}</Button>
            </Modal.Footer>
        </Modal>
    );
};
