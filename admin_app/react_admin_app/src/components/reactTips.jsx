import React, { createContext, useContext, useEffect, useReducer, useRef, useState } from 'react';

const ComponentContext = createContext();

function ReactTips() {

    // useRef
    const textRef = useRef(null);
    const focusHandler = () => {
        textRef.current.focus();
    }

    // useState
    const [text, setText] = useState(0);
    const clickHandler = () => {
        setText(text => text + 1);
    }

    // useEffect
    const [number, setNumber] = useState(0);
    const clickNumberHandler = () => {
        setNumber(number => number + 1);
    }
    useEffect(() => {
        if(number === 5) setNumber(0);
        return () => {};
    }, [number]);    

    // useReducer
    const defaults = {
        showDefault: false,
        messageTrue: 'I am Showing',
        messageFalse: 'I am Hiding'
    }
    const reducer = (state, action) => {
        if(action.show){
            return {...state, showDefault: true}
        }else{
            return {...state, showDefault: false}
        }   
    }
    const [state, dispacher] = useReducer(reducer, defaults)

    // fetch to backend
    const [ employees, setEmployees ] = useState({});
    useEffect(() => {
        fetch('/api/employees')
            .then(res => { if(res.ok) { return res.json() } })
            .then(jsoRes => setEmployees(employee => jsoRes));
        return () => {};
    }, [])

    return (<>
        <div>
            <input type="text" ref={textRef} />
            <button onClick={focusHandler}> Focus On Text! </button>
        </div>
        <div>
            <label>Total Increamentation: {text}</label>
            <button onClick={clickHandler}>Increament++</button>
        </div>
        <div>
            <label> changing this will trigger use Effect</label>
            <label> Increment to specific number: {number}</label>
            <button onClick={clickNumberHandler}>Increament++</button>
        </div>
        <ComponentContext.Provider value={{text, setText, textRef}}>
            <PasserComponent />
        </ComponentContext.Provider>
        <div>
            {(state.showDefault) ? <label>{state.messageTrue}</label> : <label>{state.messageFalse}</label>}
            <button onClick={() => dispacher({ show: true })}>Show!</button>
            <button onClick={() => dispacher({ show: false })}>Hide!</button>
        </div>
        <div>
            <ul>
                {(employees.length>0) ? employees.map(emp => <li key={emp.name}>{emp.name} : {emp.position}</li>) : <li></li>}
            </ul>
        </div>
    </>)
}

function PasserComponent(){

    // useContext
    const { text, setText, textRef } = useContext(ComponentContext);

    return(<>
        <label >This is the text from ReactTips Component: {text}</label>
        <button onClick={() => textRef.current.focus()}>Focus on the ReactTips Text</button>
    </>)

}

export default ReactTips;