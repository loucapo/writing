import activityReducer from './activityModule';
import draftReducer from './draftModule';
import rubricReducer from './rubricModule';
import studentSubmissionReducer from './studentSubmissionModule';
import feedbackToolReducer from './feedbackToolModule';

export {activityAction} from './activityModule';
export {loadRubric, rubricOnChange} from './rubricModule';
export {fetchStudentSubmissionAction, submissionOnChange} from './studentSubmissionModule';
export {submitOtherComment} from './feedbackToolModule';
export default {
  activities: activityReducer,
  drafts: draftReducer,
  studentSubmissions: studentSubmissionReducer,
  feedbackTool: feedbackToolReducer,
  rubric: rubricReducer
};
