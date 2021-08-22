import React, { Component, useContext, useState } from 'react';
import UseRef from './useRef';


const PeopleContext = React.createContext();

function UseContext () {

    const [names, setNames] = useState('Herardo Honasan')

    return (<PeopleContext.Provider value={{names, setNames}}>
        <InsideContext />
    </PeopleContext.Provider>
    )
}

function InsideContext () {
    return (<>
        <InsideContext2 />
    </>)
}

function InsideContext2 () {
    
    const {names, setNames} = useContext(PeopleContext);
    return (<>
        <h1>{names}</h1>
        <button onClick={() => setNames(()=>{return 'Change Name'})} >Click Me!</button>
    </>)
}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

async function getUserTransaction(uid, txnType, monthYear){
    
    var url = 'https://jsonmock.hackerrank.com/api/transactions/search?userId='+uid;
    var responses = await httpGet(url);
    console.log(JSON.parse(responses))
    var users = await responses.json();
    
    var user = users.data;

    for(var page = 2; page <= users.total_pages; page++){
        url = 'https://jsonmock.hackerrank.com/api/transactions/search?userId='+uid+'&page='+page;
        responses = await fetch(url);
        users = await responses.json();

        user = user.concat(users.data);
    }

    user = user.filter(u => {
        var d = monthYear.split("-");
        var sdate = (new Date(d[1], parseInt(d[0])-1, 1)).getTime();
        var edate = (new Date(d[1], d[0], 0)).getTime();
        return u.txnType == txnType && sdate < u.timestamp && edate > u.timestamp;
    })

    var avg = 0;
    for(var i in user){
        var amount = user[i].amount;
        amount = amount.replace('$', "");
        amount = amount.replace(',', "");
        avg += Number(amount)
        console.log(Number(amount))
    }

    avg = avg/user.length;
        
    var transThatMatchTheCriteria = [];
    for(var j in user){
        var amnt = user[j].amount;
        amnt = amnt.replace("$","");
        amnt = amnt.replace(",","");
        console.log(amnt, avg)
        if(amnt>avg) transThatMatchTheCriteria.push(user[j].id);
    }
        
    console.log(transThatMatchTheCriteria)

    console.log('avg', avg/user.length);
}

getUserTransaction(4, 'debit', '02-2019');

export default UseContext;