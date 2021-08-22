import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users';

function UseEffect2 () {

    const [users , setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
    }

    useEffect(() => {
        getUsers();
    }, [])
    

    return (<>
        <h3>Github Users</h3>
        <div>
            {users.map(user => <div key={user.id}>
                <img style={{width:'100px', height:'100px'}} src={user.avatar_url}></img>
                <span>{user.login}</span>
            </div>)}
        </div>
    </>);    

}

export default UseEffect2;