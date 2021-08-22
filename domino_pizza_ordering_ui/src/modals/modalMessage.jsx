import React from 'react';
import { Modal, Button, } from 'react-bootstrap';

function ModalError (props) {
    return (
    <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                {props.info.modalTitle}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>
                <h6>
                {props.info.modalDesc}
                </h6>
            </p>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>);
}

export default ModalError;