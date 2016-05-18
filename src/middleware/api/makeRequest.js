/**
 * Created by rharik on 5/13/16.
 */

//pull from config
const BASE_URL = 'http://localhost:3001/api/';

export default function makeRequest(endpoint, authenticated, config) {

    
    _config = Object.assign({}, _config, config);

    return fetch(BASE_URL + endpoint, _config)
        .then(({ response }) => {
            if (!response.ok) {
                return Promise.reject(response.text)
            }

            return response
        }).catch(err => console.log(err))
}
