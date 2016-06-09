
import sendGetRequest from './sendGetRequest';
import sendPostRequest from './sendPostRequest';
import cache from './../../utilities/cache';
import Promise from 'bluebird';

export const CALL_API = Symbol('Call API');

export default store => next => action => {
    const callAPI = action[CALL_API];
    var responseAction; // eslint-disable-line no-var
    // So the middleware doesn't get applied to every single action
    if (typeof callAPI === 'undefined') {
        return next(action);
    }

    const { method, entityType, types, authenticated } = callAPI;
    const [requestType, successType] = types;

    const token = localStorage.getItem('id_token') || null;
    let config = {};

    if (authenticated) {
        if (token) {
            config = {
                headers: { Authorization: `Bearer ${token}` }
            };
        } else {
            throw new Error('No token saved!');
        }
    }

    function actionWith(data) {
        const finalAction = Object.assign({}, action, data);
        delete finalAction[CALL_API];
        return finalAction;
    }
    // send action to say call pending
    next(actionWith({ type: requestType }));

    switch (method) {
    case 'GET':
        {
            responseAction = cache(store.getState(), entityType, action.id)
                ? Promise.resolve({
                    entities: { result: [action.id] },
                    fromCache: true,
                    type: successType
                })
                : responseAction = sendGetRequest(callAPI, action, config);
            break;
        }
    case 'POST':
        {
            responseAction = sendPostRequest(callAPI, action, config);
            break;
        }
    default:
        {
            break;
        }
    }

    return responseAction.then(a => next(actionWith(a)));
};
