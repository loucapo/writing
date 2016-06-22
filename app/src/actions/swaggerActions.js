import { CALL_API } from 'redux-api-middleware';

const getSwaggerSpec = () => ({
    [CALL_API]: {
        endpoint: 'http://localhost:10080/api/documentation',
        method: 'GET',
        types: ['SWAGGER_REQUEST', 'SWAGGER_SUCCESS', 'SWAGGER_FAILURE']
    }
});

export {
    getSwaggerSpec
};
