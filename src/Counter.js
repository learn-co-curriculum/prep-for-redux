import React, { Component } from 'react';
import myConnect from './myConnect';

class Counter extends Component {
  render() {
    console.log('Counter props', this.props);
    return (
      <div className="Counter">
        <h1>{this.props.counter}</h1>
        <button onClick={this.props.decrement}> - </button>
        <button onClick={this.props.increment}> + </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('state', state);
  return {
    counter: state.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => {
      dispatch({ type: 'INCREMENT', amount: 1 });
    },
    decrement: () => {
      dispatch({ type: 'DECREMENT', amount: 1 });
    }
  };
};

export default myConnect(mapStateToProps, mapDispatchToProps)(Counter);
