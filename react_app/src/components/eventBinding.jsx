import React, { Component } from 'react';

class EventBinding extends Component {
    state = { counter: 0 };

    // Old passion approach to bind event
    constructor(){
        super();
        this.incrementHandler = this.incrementHandler.bind(this);
    }
    incrementHandler(){
        this.setState({counter: this.state.counter+1});
    }

    // using es6 to bind event
    incrementHandlerEs6 = (e) =>{
        // setState is needed for react to update the value in the state
        // the benefits of using setState of react is that it updates only the DOM in where the this.state.counter is being use
        this.setState({counter: this.state.counter+1});
        // enclosing an event handler function with a user defined function can help to pass a parameter when event is triggered
        console.log(e);
    } 

    getState(){
        return this.state.counter;
    }

    render() { 
        //return ( <div><button className="btn btn-primary" onClick={this.incrementHandler}>{this.getState()}</button></div> );
        return ( <div><button className="btn btn-primary" onClick={() => this.incrementHandlerEs6('passing param in event')}>{this.getState()}</button></div> );
    }
}
 
export default EventBinding;