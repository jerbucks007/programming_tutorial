import React, {useEffect, useState, useContext, useRef} from 'react';
import axios from 'axios';
import { Table, Container, InputGroup, FormControl, Button, Row, Col } from 'react-bootstrap';

import KairosPagi from '../components/kairosPagi';
import OrderContext from '../contexts/OrderContext';
import ViewOrderFormat from '../components/viewOrderFormat';

import helperDate from '../helper/helper-dates';

function ViewOrders () {

    const [order, setOrder] = useState([]);
    const [curPage, setCurPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [limit, setLimit] = useState(5);
    const searchRef = useRef(null);
    const searchToppingsRef = useRef(null);

    const getOrder = async (pageNumber, search, toppings) => {
        if(search == undefined) search ="";
        let uri = `/api/orders?limit=${limit}&page=${pageNumber}&search=${search}&toppings=${toppings}`;
        await axios.get(uri).then(res => {
            //console.log('res.data.total', res.data.total, uri);
            setOrder(res.data.list);
            setTotalPage(Math.ceil(res.data.total/limit));
        });
    }

    const searchHandler = () => {
        setCurPage(1);
        getOrder(1, searchRef.current.value, searchToppingsRef.current.value)
    }

    // const searchToppingHandler = () => {
    //     setCurPage(1);
    //     getOrder(1, searchRef.current.value, searchToppingsRef.current.value)
    // }

    const pageClickHandler = (pageNumber) => {
         setCurPage(pageNumber);
         getOrder(pageNumber, searchRef.current.value, searchToppingsRef.current.value);
    };

    useEffect(() => {
        getOrder(curPage);
    }, []);

    return (
        <KairosPagi
            totalPage={totalPage}
            currentPage={curPage}
            pageClicked={(i) => {
                pageClickHandler(i);
            }}
            >
                <Container>
                <Row>
                    <Col xs={12} md={8}>
                        <InputGroup className="mb-3" style={{paddingTop: "1rem"}}>
                            <FormControl
                                placeholder="Search Size, Crust, Type Here"
                                aria-describedby="basic-addon2"
                                ref={searchRef}
                            />
                            <Button variant="outline-secondary" id="button-addon2" onClick={searchHandler}>
                                Search
                            </Button>
                        </InputGroup>
                    </Col>
                    <Col xs={12} md={4}>
                        <InputGroup className="mb-3" style={{paddingTop: "1rem"}}>
                            <FormControl
                                placeholder="Search Number of Toppings Here"
                                aria-describedby="basic-addon2"
                                ref={searchToppingsRef}
                            />
                            <Button variant="outline-secondary" id="button-addon2" onClick={searchHandler}>
                                Search
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Order Number</th>
                            <th>Pizza Number</th>
                            <th>Size</th>
                            <th>Crust</th>
                            <th>Type</th>
                            <th>Toppings</th>
                            <th>Order Date</th>
                        </tr>
                    </thead>
                    {order.length > 0 ? (
                        <tbody>
                            {order.map((o, i) => {
                                return (<tr key={(i+1)}>
                                    <td > {(i+1)} </td>
                                    <td > {o.orderNumber} </td>
                                    <td > {o.pizzaNumber} </td>
                                    <td > {o.size} </td>
                                    <td > {o.crust} </td>
                                    <td > {o.type} </td>
                                    <td > 
                                        <div style={{maxHeight:'120px', maxWidth:'300px', overflowY: 'scroll'}}>
                                        { o.toppingsWhole.length> 0 ? (<div> <div style={{fontWeight:600}}>Whole:</div> {o.toppingsWhole.join(",")}</div>) : (<></>) }
                                        { o.toppingsFirst.length> 0 ? (<div> <div style={{fontWeight:600}}>First Half:</div> {o.toppingsFirst.join(",")}</div>) : (<></>) }
                                        { o.toppingsSecond.length> 0 ? (<div> <div style={{fontWeight:600}}>Second Half:</div> {o.toppingsSecond.join(",")}</div>) : (<></>) }
                                        </div>
                                    </td>
                                    <td > {helperDate.dateMod(o.orderDate)} </td>
                                </tr>)
                            })}
                        </tbody>
                    ) : (
                        <tbody>    
                            <tr>
                                <td colSpan="8">No Order Found</td>
                            </tr>
                        </tbody>)
                    }
                </Table>
            </Container>
        </KairosPagi>
    );
}

export default ViewOrders;