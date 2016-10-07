import activityReducer from './activityModule';
import draftReducer from './draftModule';
import assignmentReducer from './assignmentModule';

export {activityAction} from './activityModule';
export {assignmentAction} from './assignmentModule';
export default { activities: activityReducer, drafts: draftReducer, assignments: assignmentReducer };

