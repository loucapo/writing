import activityReducer from './activityModule';
import draftReducer from './draftModule';
import rubricReducer from './rubricModule';
import criteria from './criteriaModule';
import studentSubmissionReducer from './studentSubmissionModule';
import feedbackToolContentItems from './feedbackToolContentModule';
import publisherContent from './publisherContentModule';
import resourceLinks from './resourceLinksModule';
import auth from './authModule';

export {activityAction} from './activityModule';
export {fetchStudentSubmissionAction, submissionOnChange} from './studentSubmissionModule';
export {submitFeedbackToolContentItem} from './feedbackToolContentModule';

export default {
  activities: activityReducer,
  drafts: draftReducer,
  criteria,
  studentSubmissions: studentSubmissionReducer,
  feedbackToolContentItems,
  rubric: rubricReducer,
  publisherContent,
  resourceLinks,
  auth
};
