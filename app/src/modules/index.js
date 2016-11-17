import activityReducer from './activityModule';
import draftReducer from './draftModule';
import studentSubmissionReducer from './studentSubmissionModule';
import submissionOnChange from './studentSubmissionModule';

export {activityAction} from './activityModule';
export {fetchStudentSubmissionAction, submissionOnChange} from './studentSubmissionModule';
export default { activities: activityReducer, drafts: draftReducer, studentSubmissions: studentSubmissionReducer };

