import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';

//require('./playground/redux-expensify.js');

const add = ({a, b}, c) => {
    return a + b + c;
};
console.log(add({a:1, b:12}, 100));

// Action generators - functions that return action objects
const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
});

// Prefer action generators over inline action objects

const decrementCount = ({decrementBy = 10} = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy: decrementBy
    };
};

const setCount = ({setCount = 100} = {}) => {
    return {
        type: 'SET',
        count: setCount
    };
};

const resetCount = ({resetCount = 0} = {}) => {
    return {
        type: 'RESET',
        count: resetCount
    }
};

// Reducers 
// 1. Reducers are pure function - work only with input data
// 2. Output is determined only by the input (state & action)
// 3. It changes only within scope (nothing outside) - doesn't interact with any variable/functions outside of scope
// 4. Never change state or action - never reassign/mutate
const countReducer = (state = {count: 0}, action) => {
    console.log('running createStore');

    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy 
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }
};

const store = createStore(countReducer);

//Subscribe
const unsubscribe  = store.subscribe(() => {
    console.log('subscribe -->', store.getState());
});

//Actions 
// Dispatch actions - increment, decrement, 
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

store.dispatch(incrementCount({incrementBy: 5}));


store.dispatch(incrementCount());

store.dispatch(decrementCount({decrementBy: 10}));
console.log('store state 111', store.getState());

store.dispatch(decrementCount());
console.log('store state 222', store.getState());

store.dispatch(decrementCount());
console.log('store state 333', store.getState());

store.dispatch(resetCount());
console.log('store state 444', store.getState());

store.dispatch(setCount({setCount: 200}));
console.log('store state 555', store.getState());

// Destructuring objects

const person = {
    name: 'Ganesh',
    age: 27,
    location: {
        city: 'NYC',
        temp: 76
    }
};

const {name: firstName = 'Anonymous', age} = person;

console.log(`${firstName} is ${age}`);

const {city, temp: temperature} = person.location;

if(typeof temperature === 'number' && city) {
    console.log(`Its ${temperature} in ${city}`);
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher : {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);

// Array Destructuring

const address = ['2987 Ravens ct', 'Philadelphia', 'Pennsylvania', '19147'];

const [, city1, state = 'New York'] = address;

console.log(`You are in ${city1} ${state}`);

const menu = ['Coffee (iced)', '$3', '$3.50', '$3.75'];

const [itemName, , mediumPrice, ] = menu;

console.log(`A medium ${itemName} costs ${mediumPrice}`);

console.log(`A medium ${itemName} costs ${mediumPrice}`);
console.log(`A medium ${itemName} costs ${mediumPrice}`);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
