import React, { Component, useRef, useState, useContext } from 'react';
import { Container, Button, Form, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import ViewOrderFormat from '../components/viewOrderFormat';
import OrderContext from '../contexts/OrderContext';

function FileUpload() {

    const fileRef = useRef(null);
    const [File, setFile] = useState();
    const { Order, setOrder, modalState, modalDispatch } = useContext(OrderContext);

    const handleSubmit = () => {

        const formData = new FormData();
        formData.append('file', fileRef.current.files[0]);

        axios.post('/api/upload', formData, {
            headers: {'Content-Type':'multipart/form-data'}
        }).then(res => {
            if(res.data.error){
                modalDispatch({modalDesc: res.data.error, modalTitle: "Error Message", modalShow: true})
            }else{
                modalDispatch({modalDesc: "Order Successfully Added", modalTitle: "Success Message", modalShow: true})
                setOrder(res.data.orderData.order);
            }
        });

    }

    return (
        <Container>
        <Row>
            <Col xs={12} md={5}>
                <Form.Group controlId="formFile" className="mb-3" style={{paddingTop: "1rem"}}>
                    <Form.Label>Please Choose A Valid PML File</Form.Label>
                    <Form.Control type="file" ref={fileRef}/>
                </Form.Group>
                <div>
                    <Button variant="primary" onClick={() => handleSubmit()}>Submit</Button>
                </div>
            </Col>
            <Col xs={12} md={7}>
                
                    <Card style={{marginTop: "1rem"}}>
                    <Card.Header>Order View</Card.Header>
                        { Order.id ? (
                                <Card.Body style={{maxHeight:"400px", overflowY: "scroll"}}>
                                    <div>Order {Order.id.number}:</div>
                                    <ViewOrderFormat Order={Order} />
                                </Card.Body>
                        ) : (
                            <div></div>
                        )}
                    </Card>
                
            </Col>
        </Row>          
        </Container>
    )
}

export default FileUpload;