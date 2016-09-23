import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import configureStore from './store/configureStore';

import index from './styles/index.css';
document.body.classList.add(index.body);

const store = configureStore();

render(<Root store={store} />,
  document.getElementById('root')
);

