import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import configureStore from './store/configureStore';

const store = configureStore();

const RootWrapper = React.createClass({
  render() {
    return (
      <Root store={store} />
    );
  }
});

render(<RootWrapper />,
  document.getElementById('root')
);
