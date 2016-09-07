import roodProd from './Root.prod';
import rootDev from './Root.dev';

export default (process.env.NODE_ENV === 'production')
  ? roodProd
  : rootDev;
