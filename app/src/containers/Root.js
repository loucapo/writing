import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import Activity from './../components/Activity';

const Root = ({ store }) => (
  <Provider store={store} >
    <Activity />
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;

