import React, { Component, useState, useEffect, useReducer } from 'react';
import FileUpload from '../pages/fileUpload';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './footer';
import Navi from './navi';
import ViewOrders from '../pages/viewOrders';
import ViewToppings from '../pages/viewToppings';
import OrderContext from '../contexts/OrderContext';
import InputOrders from '../pages/inputOrders';
import ModalMessage from '../modals/modalMessage';
import Home from '../pages/home';

function Index () {

    const modalInfo = {
        modalTitle: 'Error Message',
        modalDesc: 'Invalid data'
    }

    const [ Order, setOrder ] = useState({});
    const [ visibility, setVisibility ] = useState(false);

    const modalReducer = (modalState, funcData) => {
        setVisibility(funcData.modalShow);
        setTimeout(() => {
            setVisibility(false);
        }, 2000);
        return {...modalState, ...funcData};
    }

    const [ modalState, modalDispatch ] = useReducer(modalReducer, modalInfo);

    return (
        <>
        <OrderContext.Provider value={{Order, setOrder, modalState, modalDispatch}} >
            <ModalMessage show={visibility} onHide={() => modalDispatch(false)} info={modalState}></ModalMessage>
            <Router>
                <Navi></Navi>
                <Switch>
                    <Route path="/uploadOrders" >
                        <FileUpload />
                    </Route>
                    <Route path="/inputOrders">
                        <InputOrders />
                    </Route>
                    <Route path="/viewOrders">
                        <ViewOrders />
                    </Route>
                    <Route path="/viewToppings">
                        <ViewToppings />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
                <Footer></Footer>
            </Router>
        </OrderContext.Provider>  
        </>
    );
}

export default Index;