import React, { Component } from 'react';

class ConditionalRender extends Component {

    state = { lists: ["Jerard", "Joseph", "Buencamino"] };

    ifRender() {
        if(this.state.lists.length === 0) return <span> No list Found </span>;

        return <ul> { this.state.lists.map(list => <li key={list}> {list} </li>) } </ul>
    };
    
    render() { 
        return ( <div>{ this.ifRender() }</div> );
    }
}
 
export default ConditionalRender;