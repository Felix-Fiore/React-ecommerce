import { Modal, Button } from 'react-bootstrap';

export const ProductsModal = ({
    title,
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
                <p>{description}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={callback}>{buttonCardText}</Button>
            </Modal.Footer>
        </Modal>
    );
};
