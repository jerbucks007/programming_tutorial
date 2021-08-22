import React, { Component } from 'react';
import Counter from './counter';
import Label from './noExtends';
import doKnow from './noExtends2';

class Counters extends Component {
    state = { 
        lists : [
            {id: 1, value: 5},
            {id: 2, value: 0},
            {id: 3, value: 10},
            {id: 4, value: 1}
        ]
    }

    onHandleReset = () => {
        this.setState({ lists : [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
         ] });
    }

    onHandleDelete = id => {
        this.setState({lists: this.state.lists.filter(list => list.id != id)});
    }

    onIncrementValue = counter => {
        const cloneLists = [...this.state.lists];
        const idx = this.state.lists.indexOf(counter);
        cloneLists[idx].value++;
        this.setState({lists: cloneLists});
    }

    render() { 
        // adding attributes in the tag/element can be access in the Component thru this.props
        return (
        <div>
            <button 
                onClick={this.onHandleReset}
                className="btn btn-primary btn-sm m-2">RESET</button>
            <Label value="hello world!" component={doKnow}/>
            {this.state.lists.map(list => 
                <Counter 
                    key={list.id} 
                    counter={list}
                    onIncrementValue = {() => this.onIncrementValue(list)} 
                    onDelete={() => this.onHandleDelete(list.id)}>
                        <h4>Counter #{list.id}</h4>
                </Counter>)}
        </div>);
    }
}
 
export default Counters;