import activityReducer from './activityModule';
import draftReducer from './draftModule';
import rubricReducer from './rubricModule';

export {activityAction} from './activityModule';
export {loadRubric} from './rubricModule';
export default { activities: activityReducer, drafts: draftReducer, rubric: rubricReducer };

