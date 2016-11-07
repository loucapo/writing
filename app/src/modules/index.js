import activityReducer from './activityModule';
import draftReducer from './draftModule';
import assignmentReducer from './assignmentModule';
import feedbackToolReducer from './feedbackToolModule';

export {activityAction} from './activityModule';
export {assignmentAction} from './assignmentModule';
export {feedbackToolAction} from './feedbackToolModule';
export default { activities: activityReducer, drafts: draftReducer, assignments: assignmentReducer, feedbackTool: feedbackToolReducer };

