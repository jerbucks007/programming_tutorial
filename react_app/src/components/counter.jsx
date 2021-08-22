import React, { Component } from 'react';
import path from 'path';

class Counter extends Component {

    // attribute == this.props

    styles = {
        fontSize: 16,
        fontWeight: 'bold'
    }

    getBadgeClasses(){
        const badgeClass = (this.props.counter.value === 0) ? `warning` : `primary`;
        return `badge badge-${badgeClass} m-2`;
    }

    getValue() {
        const {value} = this.props.counter;
        return (value === 0) ? 'Zero' : value;  
    }

    render() { 
        return (
            // React.Frament is a tag that will not be rendered on the html page, 
            // this is only use enclose all tags that need to be render in the page <React.Fragment>
            //
            // use array.mapping to iterate list
            //
            // to pass children of the Tag we can call this.props.children to show 
            <div>
            <span style={this.styles} className={this.getBadgeClasses()}>{this.getValue()}</span>
            <button 
                style={{fontSize:14}} 
                className="btn btn-secondary btn-sm"
                onClick={this.props.onIncrementValue}>Increment</button>
            <button 
                className="btn btn-danger btn-sm m-2"
                onClick={this.props.onDelete}>Delete</button>
            {this.props.children}
            </div>
        );
    }


}
 
export default Counter;