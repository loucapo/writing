/**
 * Created by rharik on 5/13/16.
 */

//pull from config
var fetch = require('isomorphic-fetch');
    
const BASE_URL = 'http://localhost:3001/api/';

export default function makeRequest(endpoint, authenticated, config) {
    return fetch(BASE_URL + endpoint, config)
        .then(response =>
        //apparently fetch returns a stream and has a json() method that will parse that and return a promise
            response.json().then(json => ({ json, response }))
        ).then(({ json, response }) => {
            if (!response.ok) {
                return Promise.reject(json)
            }

            return json
        }).catch(err => console.log(err))
}
