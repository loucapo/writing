import helloReducer from './helloModule';

export {helloAction} from './helloModule';
export {activityAction, activityReducer} from './activityModule';
export default { hello: helloReducer };

