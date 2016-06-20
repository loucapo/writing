
import { SWAGGER_SUCCESS } from './../constants';

function swagger(state = {}, action = null) {
    if (action.type === SWAGGER_SUCCESS) {
        const api = action.payload;
        const swag = { definitions: api.definitions, paths: {} };

        Object.keys(api.paths).forEach(path =>
            Object.keys(path).forEach(verb => {
                if (verb['x-name']) {
                    swag.paths['x-name'] = path;
                }
            })
        );
        return Object.assign({}, state, swag);
    }
    return state;
}

export { swagger };
