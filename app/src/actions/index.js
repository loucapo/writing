import { CALL_API } from 'redux-api-middleware';

export const helloAction = () => {
  console.log('helloAction');
  return {
    [CALL_API]: {
      endpoint: 'http://localhost:10080/api/',
      method: 'GET',
      types: [
        'REQUEST',
        'SUCCESS',
        'FAILURE'
      ]
    }
  };
};
