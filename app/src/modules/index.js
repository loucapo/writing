import activityReducer from './activityModule';
import draftReducer from './draftModule';
import studentSubmissionReducer from './studentSubmissionModule';

export {activityAction} from './activityModule';
export {fetchStudentSubmissionAction} from './studentSubmissionModule';
export default { activities: activityReducer, drafts: draftReducer, studentSubmissions: studentSubmissionReducer };

