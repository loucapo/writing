import activityReducer from './activityModule';
import draftReducer from './draftModule';
import feedbackToolReducer from './feedbackToolModule';

export {activityAction} from './activityModule';
export {feedbackToolAction} from './feedbackToolModule';
export default { activities: activityReducer, drafts: draftReducer, feedbackTool: feedbackToolReducer };

