/**
 * Created by rharik on 5/3/16.
 */
import rootProd from './Root.prod';
import rootDev from './Root.dev';

export default (process.env.NODE_ENV === 'production')
    ? rootProd
    : rootDev;

