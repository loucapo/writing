import makeRequest from './makeRequest';

export default function sendPostRequest(callAPI, action, config) {
    const { endpoint, types } = callAPI;
    const [successType, errorType] = types;
    // Passing the authenticated boolean back in our data will let us distinguish between normal and secret quotes
    // call then return action
    return makeRequest(endpoint, config).then(
        response => ({
            // maybe tidy up data here
            response,
            type: successType
        }),
        error => ({
            error: error.message || 'There was an error.',
            type: errorType
        })
    );
}
