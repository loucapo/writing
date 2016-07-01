import React, { PropTypes } from 'react';
import routes from '../routes';
import DevTools from './DevTools';
import { Router } from 'react-router';
import { connect } from 'react-redux';

const StartUpComponent = ({ appReady, history }) => { // eslint-disable-line arrow-body-style
    return appReady
        ? (
        <div>
            <Router history={history} routes={routes} />
            <DevTools />
        </div>)
        : (
        <div />);
};

StartUpComponent.propTypes = {
    appReady: PropTypes.bool,
    history: PropTypes.object.isRequired
};

const mapStatToProps = (state, ownProps) => ({
    appReady: state.startUp.appReady,
    history: ownProps.history
});

export default connect(mapStatToProps)(StartUpComponent);
