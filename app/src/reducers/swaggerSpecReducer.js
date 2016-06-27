import { SWAGGER_SUCCESS } from './../constants';

function swagger(state = {}, action = null) {
    if (action.type === SWAGGER_SUCCESS) {
        const api = action.payload;
        const swag = { definitions: api.definitions, paths: {} };
        Object.keys(api.paths).forEach(path => {
            const pathObj = api.paths[path];
            Object.keys(pathObj).forEach(verb => {
                const pathVerbObj = pathObj[verb];
                const name = pathVerbObj['x-name'];
                if (name) {
                    swag.paths[name] = pathVerbObj;
                    swag.paths[name].path = path;
                    delete swag.paths[name]['x-name'];
                }
            });
        });
        return Object.assign({}, state, swag);
    }
    return state;
}

export { swagger };
