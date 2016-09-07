import { getSwaggerSpec } from './swaggerActions';

// add more startup actions here
const bootstrapApp = store => {
  store.dispatch(getSwaggerSpec());
};

export {
  bootstrapApp
};

