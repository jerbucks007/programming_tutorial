import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import { Table, Container, InputGroup, FormControl } from 'react-bootstrap';
import KairosPagi from '../components/kairosPagi';

import helperDate from '../helper/helper-dates';

function ViewToppings () {

    const [toppings, setToppings] = useState([]);
    const [curPage, setCurPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [limit, setLimit] = useState(4);

    const getToppings = async (pageNumber) => {
        let uri = `/api/toppings`;
        if(pageNumber){
            uri = `/api/toppings?limit=${limit}&page=${pageNumber}`;
        }
        await axios.get(uri).then(res => {
            console.log(res.data);
            setToppings(res.data);
        });
    }

    const getTotalToppings = async () => {
        let uri = `/api/toppings/total`;
        await axios.get(uri).then(res => {
            setTotalPage(Math.ceil(res.data.total/limit));
        });
    }

    const pageClickHandler = (pageNumber) => {
        setCurPage(pageNumber);
        getToppings(pageNumber);
    };

    useEffect(() => {
        getTotalToppings();
        getToppings(curPage);
    }, []);

    return (
        <KairosPagi
            totalPage={totalPage}
            currentPage={curPage}
            pageClicked={(ele) => {
                pageClickHandler(ele);
            }}>
            <Container>
                <InputGroup className="mb-3" style={{paddingTop: "1rem"}}>
                    <InputGroup.Text id="basic-addon1">Search Here</InputGroup.Text>
                    <FormControl
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Toppings</th>
                            <th>Total</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    {toppings.length > 0 ? (
                        <tbody>
                            {toppings.map((t, i) => {
                                return (<tr key={(i+1)}>
                                    <td > {(i+1)} </td>
                                    <td > {t.toppingsName} </td>
                                    <td > {t.toppingsTotal} </td>
                                    <td > {helperDate.dateMod(t.createdAt)} </td>
                                </tr>)
                            })}
                        </tbody>
                    ) : (
                        <tbody>    
                            <tr>
                                <td colSpan="4">No Order Found</td>
                            </tr>
                        </tbody>)
                    }
                </Table>
            </Container>
        </KairosPagi>
    )
}

export default ViewToppings;