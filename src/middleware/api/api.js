/**
 * Created by rharik on 5/13/16.
 */

import sendGetRequest from './sendGetRequest';
import sendPostRequest from './sendPostRequest';

export const CALL_API = Symbol('Call API');

export default store => next => action => {
    const callAPI = action[CALL_API];

    // So the middleware doesn't get applied to every single action
    if (typeof callAPI === 'undefined') {
        return next(action);
    }

    const {method, entityType, expression, types, authenticated} = callAPI;

    let token = localStorage.getItem('id_token') || null;
    let config = {};

    if(authenticated) {
        if(token) {
            config = {
                headers: { 'Authorization': `Bearer ${token}` }
            }
        }
        else {
            throw "No token saved!"
        }
    }

    function actionWith(data) {
        const finalAction = Object.assign({}, action, data);
        delete finalAction[CALL_API];
        return finalAction;
    }
    // send action to say call pending
    next(actionWith({ type: types.requestType }));

    var responseAction;
    switch(method){
        case 'get':{
            var tryCache = cache(store, entityType, expression);
            if(tryCache){
                responseAction = Promise.resolve({type:types.successType, response:tryCache})
            }else {
                responseAction = sendGetRequest(callAPI, action, config);
            }
            break;
        }
        case 'post':{
            responseAction = sendPostRequest(callAPI, action, config);
            break;
        }
    }

    responseAction.then(action=>next(actionWith(action)));
}