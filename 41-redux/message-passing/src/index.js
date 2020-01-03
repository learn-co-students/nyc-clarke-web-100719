import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store'

// it is the thing that controls the state
// it has methods for controlling what goes in and out of state
// getState -> returns the state
// dispatch -> changes the state

// createStore requires the reducer function as its argument
// console.log("BEFORE", store.getState())

// // dispatch takes one argument: an object that we call an action
// // the action, at a minimum, must have a key of type that will be used to decide which case to invoke (how to change state)
// store.dispatch({
//   type: "CHANGE_TEXT", 
//   payload: {newText: "Beefy McSteaker"}
// })

// store.dispatch({
//   type: "ADD_THANG"
// })

// console.log("AFTER", store.getState())


ReactDOM.render(<App />, document.getElementById('root'));



