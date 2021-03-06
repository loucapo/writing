import activityReducer from './activityModule';
import draftReducer from './draftModule';
import rubric from './rubricModule';
import criteria from './criteriaModule';
import goal from './goalModule';
import editingMarks from './editingMarksModule';
import feedback from './feedbackModule';
import publisherContent from './publisherContentModule';
import resourceLinks from './resourceLinksModule';
import auth from './authModule';
import defaults from './defaultsModule';
import studentActivities from './studentActivityModule';
import studentDrafts from './studentDraftsModule';
import studentDraft from './studentDraftModule';
import reflectionQuestions from './reflectionQuestionsModule';
import reflectionAnswers from './reflectionAnswersModule';
import messaging from './messagingModule';
import submissionStatuses from './submissionStatusesModule';
import rubricScores from './rubricScoresModule';

export {activityAction} from './activityModule';

export default {
  activities: activityReducer,
  drafts: draftReducer,
  criteria,
  goal,
  editingMarks,
  feedback,
  rubric,
  publisherContent,
  resourceLinks,
  auth,
  defaults,
  studentDraft,
  studentDrafts,
  studentActivities,
  reflectionQuestions,
  reflectionAnswers,
  messaging,
  submissionStatuses,
  rubricScores
};
