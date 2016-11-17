import activityReducer from './activityModule';
import draftReducer from './draftModule';
import studentSubmissionReducer from './studentSubmissionModule';
import submissionOnChange from './studentSubmissionModule';
import feedbackToolReducer from './feedbackToolModule';

export {activityAction} from './activityModule';
export {fetchStudentSubmissionAction, submissionOnChange} from './studentSubmissionModule';
export {submitOtherComment} from './feedbackToolModule';
export default { activities: activityReducer, drafts: draftReducer, studentSubmissions: studentSubmissionReducer, feedbackTool: feedbackToolReducer };

