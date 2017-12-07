import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';

// TERMINOLOGY
// Redux store: object that holds our state and allows us to
//  manipulate state thru a function called dispatch (state is just a js object)
// Action: plain js object with a 'type' property
// Dispatch: actions are dispatched to the store
// Reducer: is our state chnaging functions, returns the new state

// starting state -> dispatch and action -> flows through our reducer -> return new state

const initalState = { count: 100 };

// CHALLENGE
// const initalState = {
//   counters: [0, 0, 0, 0]
// };
// inital state is an array of numbers
// when we dispatch an action to a reducer, send along the index of the num you ae incrementing

// in the App component, use map to render an array of Counter components

const reducer = (state = initalState, action) => {
  //
  console.log('-----------------');
  console.log('current state is ', state);
  console.log('action', action);

  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log('the new state is ', store.getState());
  console.log('-----------------');
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
