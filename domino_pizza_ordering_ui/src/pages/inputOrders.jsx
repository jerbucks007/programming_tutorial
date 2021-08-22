import React, { useContext, useRef } from 'react';
import { Container, Button, Form, Row, Col, Card } from 'react-bootstrap';
import ViewOrderFormat from '../components/viewOrderFormat';
import OrderContext from '../contexts/OrderContext';
import axios from 'axios';

function InputOrders () {

    const textAreaRef = useRef(null);
    const { Order, setOrder, modalState, modalDispatch } = useContext(OrderContext);

    const handleSubmit = () => {

        const formData = new FormData();
        formData.append('textarea', textAreaRef.current.value);

        axios.post('/api/textarea', formData, {
            headers: {'Content-Type':'multipart/form-data'}
        }).then(res => {
            if(res.data.error)
                modalDispatch({modalDesc: res.data.error, modalTitle: "Error Message", modalShow: true})
            else{
                modalDispatch({modalDesc: "Order Successfully Added", modalTitle: "Success Message", modalShow: true});
                setOrder(res.data.orderData.order);
            }
        });
    }

    return (
        <Container>
        <Row>
            <Col xs={12} md={5}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style={{paddingTop: "1rem"}}>
                    <Form.Label>Please Input A Valid PML format</Form.Label>
                    <Form.Control as="textarea" rows={3} ref={textAreaRef} style={{minHeight: '200px'}} />
                </Form.Group>
                <div>
                    <Button variant="primary" onClick={() => handleSubmit()} >Submit</Button>
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
    );
}

export default InputOrders;