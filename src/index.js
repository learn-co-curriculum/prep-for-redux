import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';

// REMINDER reducers must be pure functions
// arr = [1,2,3,7,5]
// [1, 2, 3, 7, 5]
// arr[3] = 4 X BAD X T-T
//
// arr
// [1, 2, 3, 4, 5]
// [...arr.slice(0, 3), 7, ...arr.slice(3+1)] GOOD! : )

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
  let newValue;
  switch (action.type) {
    case 'INCREMENT':
      newValue = { count: state[action.index].count + action.amount };
      return [
        ...state.slice(0, action.index),
        newValue,
        ...state.slice(action.index + 1)
      ];
    // return { count: state.count + action.amount };
    case 'DECREMENT':
      console.log();
      newValue = { count: state[action.index].count - action.amount };
      return [
        ...state.slice(0, action.index),
        newValue,
        ...state.slice(action.index + 1)
      ];
    // return { count: state.count - action.amount };
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
  componentWillMount() {
    store.subscribe(() => this.setState({}));
  }

  render() {
    return (
      <div className="App">
        <Header />
        {store.getState().map((counter, index) => <Counter index={index} />)}
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
    store.dispatch({ type: 'INCREMENT', amount, index: this.props.index });
  };

  decrement = amount => {
    store.dispatch({ type: 'DECREMENT', amount, index: this.props.index });
  };

  render() {
    return (
      <div className="Counter">
        <h1>{store.getState()[this.props.index].count}</h1>
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
