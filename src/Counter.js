import React, { Component } from 'react';
import { connect } from 'react-redux';

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

const mapDispatchToProps = something => {
  return {
    increment: () => {
      something({ type: 'INCREMENT', amount: 1 });
    },
    decrement: () => {
      something({ type: 'DECREMENT', amount: 1 });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
