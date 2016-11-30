import activityReducer from './activityModule';
import draftReducer from './draftModule';
import rubricReducer from './rubricModule';
import studentSubmissionReducer from './studentSubmissionModule';

export {activityAction} from './activityModule';
export {loadRubric, rubricOnChange} from './rubricModule';
export {fetchStudentSubmissionAction, submissionOnChange} from './studentSubmissionModule';
export default {
  activities: activityReducer,
  drafts: draftReducer,
  studentSubmissions: studentSubmissionReducer,
  rubric: rubricReducer
};
