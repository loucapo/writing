/**
 * Created by rharik on 5/17/16.
 */

/**
 * Container:
 * takes data from store and applies a transform function to it
 * and passes the data to component as props
 */

import { connect } from 'react-redux';

module.exports = (storeKeys = [], transform, actions) => (component) => {
    transform = transform || ((dataFromStore) => { return dataFromStore;});

    const mapStateToProps = (state, ownProps) => {
        const storeDataObjs = storeKeys.map(key => ({ [key]: state[key] }));
        const storeObj = Object.assign({}, ...storeDataObjs);

        return transform(storeObj, ownProps);
    };

    return connect( mapStateToProps, actions )(component);
};

