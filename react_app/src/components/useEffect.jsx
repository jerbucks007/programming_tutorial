import React, { useState, useEffect } from 'react';

const UseEffect = () => {
    const [number, setNumber] = useState(0)

    const [triggerUseEffect, functionUseEffect] = useState(0)

    // setting second parameter (dependency array) empty []
    // means that useEffect will run only
    // at the initial render
    //
    // setting dependency array will trigger useEffect
    // everytime that dependency value is change
    // in this case is triggerUseEffect
    //
    // adding return inside useEffect will help you
    // clean up a code before useEffect is triggered again
    useEffect(() => {
        console.log('USE EFFECT TRIGGERED');
        return () => {}
    }, [triggerUseEffect]);

    return (<div>
        <div>
            <span>Number: {number}</span>
            <button onClick={() => setNumber(prevText => prevText+1)}>Click Me!</button>
        </div>
        <div>
            <span>Changing this will trigger UseEffect: {triggerUseEffect}</span>
            <button onClick={() => functionUseEffect(prevText => prevText+1)}>Click Me!</button>
        </div>
    </div>)
}

export default UseEffect;