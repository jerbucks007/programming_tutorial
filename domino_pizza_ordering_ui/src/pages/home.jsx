import React, { Component, useState, useEffect, useReducer } from 'react';
import FileUpload from './fileUpload';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from '../components/footer';
import Navi from '../components/navi';
import ViewOrders from './viewOrders';
import ViewToppings from './viewToppings';
import OrderContext from '../contexts/OrderContext';
import InputOrders from './inputOrders';
import ModalMessage from '../modals/modalMessage';
import { Container, Button, Form, Row, Col, Card } from 'react-bootstrap';

function Home () {


    return (
        <>
        <Container style={{paddingTop:'40px'}}>
            <Card body>
                <div><h1 style={{textAlign:'center', fontSize:'50px'}}>Welcome to</h1></div>
                <div><h1 style={{textAlign:'center', fontSize:'70px'}}>DOMINO'S PIZZA</h1></div>
                <div><h1 style={{textAlign:'center'}}>ordering system</h1></div>
            </Card>
        </Container>
        </>
    );
}

export default Home;