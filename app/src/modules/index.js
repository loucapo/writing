import activityReducer from './activityModule';
import draftReducer from './draftModule';
import assignmentReducer from './assignmentModule';
import studentSubmissionReducer from './studentSubmissionModule';

export {activityAction} from './activityModule';
export {assignmentAction} from './assignmentModule';
export {fetchStudentSubmissionAction} from './studentSubmissionModule';
export default { activities: activityReducer, drafts: draftReducer, assignments: assignmentReducer, studentSubmissions: studentSubmissionReducer };

