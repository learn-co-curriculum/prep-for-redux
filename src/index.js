import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

const reducer = (state = { count: -97 }, action) => {
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

  return state;
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log('the new state is', store.getState());
  console.log('------------------');
});

// class Counter extends Component {
//   // state = { count: 0 };
//   componentWillMount() {
//     store.subscribe(() => this.setState({}));
//   }
//
//   increment = amount => {
//     store.dispatch({ type: 'INCREMENT', amount });
//     // this.setState(prevState => ({ count: prevState.count + 1 }));
//   };
//
//   decrement = amount => {
//     store.dispatch({ type: 'DECREMENT', amount });
//     // this.setState(prevState => ({ count: prevState.count - 1 }));
//   };
//
//   render() {
//     return (
//       <div className="Counter">
//         <h1>{store.getState().count}</h1>
//         <button onClick={() => this.decrement(1)}> - </button>
//         <button onClick={() => this.increment(1)}> + </button>
//         <button onClick={() => this.increment(2)}> + 2</button>
//         <button onClick={() => this.increment(5)}> + 5</button>
//         {/* <h3>{this.renderDescription()}</h3> */}
//       </div>
//     );
//   }
// }

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
