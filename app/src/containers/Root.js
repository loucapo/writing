import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import HelloContainer from './HelloContainer';

const Root = ({ store }) => (
  <Provider store={store} >
    <HelloContainer />
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;

