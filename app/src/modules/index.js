import activityReducer from './activityModule';
import draftReducer from './draftModule';

export {activityAction} from './activityModule';
export default { activities: activityReducer, drafts: draftReducer };

