/* global fetch*/

import Promise from 'bluebird';
// var fetch = require('isomorphic-fetch');

// pull from config
const BASE_URL = 'http://localhost:3001/api/';

export default function makeRequest(endpoint, config) {
    // var _config = Object.assign({}, _config, config);
    return fetch(BASE_URL + endpoint, config)
        .then(({ response }) => {
            if (!response.ok) {
                return Promise.reject(response.text);
            }

            return response;
            // eslint-disable-next-line no-console
        }).catch(err => console.log(err));
}
