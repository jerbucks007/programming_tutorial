import React, { useState, useEffect, useReducer, useRef } from 'react';
import ReducerModal from './useReducerModal';

function UseReducer () {

    const defaults = {
        people: [],
        showModal: false,
        modalMessage: 'helow pow'
    }

    const refInput = useRef(null);

    const Reducer = (state, action) => {

        const value = refInput.current ? refInput.current.value : state.modalMessage;

        if(action.show){
            return {...state, showModal:true, modalMessage:value};
        }else{
            return {...state, showModal:false, modalMessage:value};
        }
    }

    const [ state, dispatch ] = useReducer(Reducer, defaults);

    return (<div>
        {(state.showModal) && <ReducerModal modalMessage={state.modalMessage} />}
        <form>
            <input type="text" name="text" ref={refInput} />
            <input type="submit" name="submit" value="Submit" />
        </form>
        <button onClick={() => dispatch({show:true})}>Show Modal</button>
        <button onClick={() => dispatch({show:false})}>Hide Modal</button>
    </div>)
}

export default UseReducer;