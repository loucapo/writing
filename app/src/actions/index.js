import { CALL_API } from 'redux-api-middleware';

export const helloAction = () => {
  console.log('helloAction');
  return {
    [CALL_API]: {
      endpoint: 'http://localhost:8080',
      method: 'GET',
      types: [
        'REQUEST',
        'SUCCESS',
        'FAILURE'
      ]
    }
  };
};
