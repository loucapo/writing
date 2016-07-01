import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import StartUpContainer from './StartUpContainer';

const Root = ({ store, history }) => (<Provider store={store} >
    <StartUpContainer history={history} />
</Provider>);

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default Root;
