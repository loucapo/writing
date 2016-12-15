import activityReducer from './activityModule';
import draftReducer from './draftModule';
import rubricReducer from './rubricModule';
import studentSubmissionReducer from './studentSubmissionModule';
import feedbackToolContentItems from './feedbackToolContentModule';
import publisherContent from './publisherContentModule';
import resourceLinks from './resourceLinksModule';

export {activityAction} from './activityModule';
export {loadRubric, rubricOnChange} from './rubricModule';
export {fetchStudentSubmissionAction, submissionOnChange} from './studentSubmissionModule';
export {submitFeedbackToolContentItem} from './feedbackToolContentModule';

export default {
  activities: activityReducer,
  drafts: draftReducer,
  studentSubmissions: studentSubmissionReducer,
  feedbackToolContentItems,
  rubric: rubricReducer,
  publisherContent,
  resourceLinks
};
