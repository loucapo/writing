import activityReducer from './activityModule';
import draftReducer from './draftModule';
import rubricReducer from './rubricModule';
import criteria from './criteriaModule';
import feedbackToolContentItems from './feedbackToolContentModule';
import publisherContent from './publisherContentModule';
import resourceLinks from './resourceLinksModule';
import auth from './authModule';
import defaults from './defaultsModule';
import studentActivities from './studentActivityModule';
import studentDraft from './studentDraftModule';
import reflectionQuestions from './reflectionQuestionsModule';
import reflectionAnswers from './reflectionAnswersModule';
import messaging from './messagingModule';

export {activityAction} from './activityModule';
export {submitFeedbackToolContentItem} from './feedbackToolContentModule';

export default {
  activities: activityReducer,
  drafts: draftReducer,
  criteria,
  feedbackToolContentItems,
  rubric: rubricReducer,
  publisherContent,
  resourceLinks,
  auth,
  defaults,
  studentDraft,
  studentActivities,
  reflectionQuestions,
  reflectionAnswers,
  messaging
};
