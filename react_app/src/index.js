import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/counter';
import ConditionalRender from './components/conditionalRender';
import EventBinding from './components/eventBinding';
import Counters from './components/counters';
import UseState from './components/useState';
import UseEffect from './components/useEffect';
import UseEffect2 from './components/useEffect2';
import UseRef from './components/useRef';
import UseReducer from './components/useReducer';
import UseContext from './components/useContext';


// ReactDOM.render(<Counter />, document.getElementById('root'));
// ReactDOM.render(<Counters />, document.getElementById('root'));
// ReactDOM.render(<ConditionalRender />, document.getElementById('root'));
// ReactDOM.render(<EventBinding />, document.getElementById('root'));
// ReactDOM.render(<UseState />, document.getElementById('root'));
// ReactDOM.render(<UseEffect />, document.getElementById('root'));
// ReactDOM.render(<UseEffect2 />, document.getElementById('root'));
// ReactDOM.render(<UseRef />, document.getElementById('root'));
// ReactDOM.render(<UseReducer />, document.getElementById('root'));
ReactDOM.render(<UseContext />, document.getElementById('root'));

// const element = <h1>Hello world</h1>;
// ReactDOM.render(element, document.getElementById('root'));