import React, { Component, useState } from 'react';
let InterVals = null;
const UseState = () => {

    const [text, setText] = useState("Default Text");
    const [counter, setCounter] = useState(0);
    
    const handleChangeText = () => {
        setText('I was Click')
    } 

    const handleCounterIncrease = () => {
        setCounter(prevCounter => (prevCounter+1));
    }

    const handleCountUp = () => {
        InterVals = setInterval(() => {
            setCounter(prevCounter => (prevCounter+1));
        }, 1000);     
    }

    const handleResetTimer = () => {
        setCounter(0);
    }

    const handleStopTimer = () => {
        clearInterval(InterVals);
    }

    return ( <div>
            <span>{text}</span>
            <button onClick={() => handleChangeText()}>
                Click Me!
            </button>
            <span>Counter: {counter}</span>
            <button onClick={() => handleCounterIncrease()}>
                Click Me to increase counter
            </button>
            <button onClick={() => handleCountUp()}>
                Click Me to start Count up
            </button>
            <button onClick={() => handleResetTimer()}>
                Click Me to Reset Timer
            </button>
            <button onClick={() => handleStopTimer()}>
                Click Me to Stop Timer
            </button>
        </div> );

}
 
export default UseState;