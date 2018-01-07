import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
// import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

const increment = () => ({ type: 'INCREMENT' });

const reducer = (state = { count: 100 }, action) => {
  console.log('-------------------');
  console.log('current state is:', state);
  console.log('action:', action);

  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.amount };
    case 'DECREMENT':
      return { count: state.count - action.amount };
    default:
      return state;
  }
};

const myCreateStore = reducer => {
  let state;

  let functionsThatShouldBeCalledWhenTheStateChanges = [];

  const getState = () => {
    return state;
  };

  const dispatch = action => {
    state = reducer(state, action);
    functionsThatShouldBeCalledWhenTheStateChanges.forEach(f => f());
  };

  const subscribe = callback => {
    functionsThatShouldBeCalledWhenTheStateChanges.push(callback);
  };

  dispatch({ type: '@@myRedux/INIT' });

  return {
    getState,
    dispatch,
    subscribe
  };
};

const store = myCreateStore(reducer);

store.subscribe(() => {
  console.log('the new state is', store.getState());
  console.log('------------------');
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
