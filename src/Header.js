import React, { Component } from 'react';
// import { connect } from 'react-redux';
import logo from './logo.svg';
import myConnect from './myConnect';

class Header extends Component {
  renderDescription = () => {
    const remainder = this.props.count % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${this.props.count + upToNext}`;
  };

  render() {
    console.log('Header props', this.props);
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{this.renderDescription()}</h1>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count
});

export default myConnect(mapStateToProps)(Header);
