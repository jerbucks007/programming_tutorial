import React, { useState, useEffect, useRef } from 'react';

function UseRef () {

    const [peoples, setPeople] = useState([]);
    const [id, setId] = useState(0);

    const refAgeContainer = useRef(null);
    const refNameContainer = useRef(null);

    const handleSubmit = (e) => {
        
        console.log(222);

        e.preventDefault();

        const { name: Nname, value: Nvalue } = refNameContainer.current;
        const { name: Aname, value: Avalue } = refAgeContainer.current;

        setId(id=>id+1);
        setPeople(prevPeople => [...prevPeople, {
            [Nname]: Nvalue, [Aname]: Avalue, id 
        }])

    }

    const handleFocus = (e) => {
        refAgeContainer.current.focus();
    }

    return (<React.Fragment>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" ref={refNameContainer}/>
            <input type="number" name="age" ref={refAgeContainer}/>
            <input type="submit" name="submit" value="submit" />
        </form>
        <button onClick={handleFocus}>Click Me To Focus on Age</button>
        <ul>
            {peoples.map(people => {
                const { name, age, id } = people; 
                return <li key={id}><span> Name: {name} </span><span> Age: {age} </span></li>
            })}
        </ul>
    </React.Fragment>);

}

export default UseRef;