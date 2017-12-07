import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  render() {
    console.log('PROPS in Counter', this.props);
    return (
      <div className="Counter">
        <h1>{this.props.count}</h1>
        <button
          onClick={() => {
            this.props.dispatch({ type: 'DECREMENT' });
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            this.props.dispatch({ type: 'INCREMENT' });
            // something like this for CHALLENGE
            // this.props.dispatch({ type: 'INCREMENT', index: this.props.index });
          }}
        >
          +
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(Counter);
