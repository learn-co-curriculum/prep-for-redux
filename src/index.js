import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';

// const reducer = (state = { count: 0 }, action) => {
//   console.log('-------------------');
//   console.log('current state is:', state);
//   console.log('action:', action);
//
//   switch (action.type) {
//     case 'INCREMENT':
//       return { count: state.count + action.amount };
//     case 'DECREMENT':
//       return { count: state.count - action.amount };
//     default:
//       return state;
//   }
//
//   return state;
// };

const initialState = [
  { count: 0 },
  { count: 0 },
  { count: 0 },
  { count: 0 },
  { count: 0 }
];

const reducer = (state = initialState, action) => {
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

// debugger;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {store.getState().map(counter => <Counter />)}
      </div>
    );
  }
}

class Header extends Component {
  componentWillMount() {
    store.subscribe(() => this.setState({}));
  }

  // renderDescription = () => {
  //   const remainder = store.getState().count % 5;
  //   const upToNext = 5 - remainder;
  //   return `The current count is less than ${store.getState().count +
  //     upToNext}`;
  // };

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to Redux</h1>
      </header>
    );
  }
}

class Counter extends Component {
  // state = { count: 0 };
  componentWillMount() {
    store.subscribe(() => this.setState({}));
  }

  increment = amount => {
    store.dispatch({ type: 'INCREMENT', amount });
    // this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  decrement = amount => {
    store.dispatch({ type: 'DECREMENT', amount });
    // this.setState(prevState => ({ count: prevState.count - 1 }));
  };

  render() {
    return (
      <div className="Counter">
        <h1>{0}</h1>
        <button onClick={() => this.decrement(1)}> - </button>
        <button onClick={() => this.increment(1)}> + </button>
      </div>
    );
  }
}

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

ReactDOM.render(<App />, document.getElementById('root'));
