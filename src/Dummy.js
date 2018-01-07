import React from 'react';

const withIsSnowing = WrappedComponent => {
  return class extends React.Component {
    render() {
      return <WrappedComponent {...this.props} isSnowing={false} />;
    }
  };
};

const withAuth = WrappedComponent => {
  return class extends React.Component {
    componentDidMount() {
      // ....
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

const Dummy = props => {
  console.log('Props in Dummy', props);
  return <h1>Hello</h1>;
};

export default withIsSnowing(Dummy);
