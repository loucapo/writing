import { SWAGGER_SUCCESS } from './../constants';

const startUp = (state = {}, action) => {
    switch (action.type) {
        case SWAGGER_SUCCESS:
            {
                let appReady = true;
                const result = { ...state, swaggerStarted: true };
                Object.getOwnPropertyNames(result).forEach(s => {
                    if (!s === 'appReady' && !result[s]) {
                        appReady = false;
                    }
                });
                return { ...result, appReady };
            }
        default:
            return state;
    }
};

export {
    startUp
};
