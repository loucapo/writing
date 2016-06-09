/**
 * Container:
 * takes data from store and applies a transform function to it
 * and passes the data to component as props
 */

import { connect } from 'react-redux';

module.exports = (storeKeys = [], trans, actions) => (component) => {
    const transform = trans || ((dataFromStore) => (dataFromStore));

    const mapStateToProps = (state, ownProps) => {
        const storeDataObjs = storeKeys.map(key => ({ [key]: state[key] }));
        const storeObj = Object.assign({}, ...storeDataObjs);

        return transform(storeObj, ownProps);
    };

    return connect(mapStateToProps, actions)(component);
};

