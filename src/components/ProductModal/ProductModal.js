import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ProductModal = ({ product }) => {
    const { title, price, image, description } = product;
    console.log(product);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Details
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                    <img className='w-50 auto' src={image} alt="" />
                </Modal.Header>
                <Modal.Body className='fw-bolder'>Price: ${price}</Modal.Body>
                <Modal.Body>{description}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ProductModal;