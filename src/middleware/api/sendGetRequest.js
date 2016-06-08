/**
 * Created by rharik on 5/13/16.
 */

import { normalize } from 'normalizr';
import { camelizeKeys } from 'humps';
import makeRequest from './makeRequest';


export default function sendGetRequest(callAPI, action, config) {

    let {endpoint, types, schema} = callAPI;

    const [ successType, errorType ] = types;
    

    // Passing the authenticated boolean back in our data will let us distinguish between normal and secret quotes
    // call then return action
    return makeRequest(endpoint, config).then(
        response => {
            const camelizedJson = camelizeKeys(response);

            return {
                entities: Object.assign({}, normalize(camelizedJson, schema)),
                type: successType
            };
        },
        error => {
            return {
                error: error.message || 'There was an error.',
                type: errorType
            };
        }
    );
}