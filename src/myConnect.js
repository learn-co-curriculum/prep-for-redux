import React from 'react';
import { PropTypes } from 'prop-types';

const myConnect = (mapStateToProps, mapDispatchToProps = () => ({})) => {
  return WrappedComponent => {
    return class extends React.Component {
      static contextTypes = {
        store: PropTypes.Object
      };

      componentWillMount() {
        this.context.store.subscribe(() => this.setState({}));
      }

      render() {
        return (
          <WrappedComponent
            {...mapStateToProps(this.context.store.getState())}
            {...mapDispatchToProps(this.context.store.dispatch)}
          />
        );
      }
    };
  };
};

export default myConnect;
