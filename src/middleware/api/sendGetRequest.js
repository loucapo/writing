/**
 * Created by rharik on 5/13/16.
 */

import makeRequest from './makeRequest';

export default function sendGetRequest(callAPI, action, config) {

    let {endpoint, types} = callAPI;

    const [ successType, errorType ] = types;
    

    // Passing the authenticated boolean back in our data will let us distinguish between normal and secret quotes
    // call then return action
    return makeRequest(endpoint, authenticated, config).then(
        response => {
            return {
                //maybe tidy up data here    
                response,
                type: successType
            }
        },
        error => {
            return {
                error: error.message || 'There was an error.',
                type: errorType
            }
        }
    )
};