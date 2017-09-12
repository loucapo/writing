import { addGoalsAndReflectionsToDrafts } from './index';
import _ from 'lodash';

export default (state, props) => {
  let drafts = addGoalsAndReflectionsToDrafts(state, props);
  const routingState = state.routing.locationBeforeTransitions;

  const getCurrentActiveIndex = () => {
    let currentIndex = 0;
    state.studentDrafts.map(studentDraft => {
      let draft = drafts.find(draftWithIndex => draftWithIndex.draftId === studentDraft.draftId);
      let nextDraftIndex = draft && draft.index + 1;
      if (studentDraft.reviewStatus === 'viewed' && nextDraftIndex > currentIndex) {
        currentIndex = nextDraftIndex;
      }
    });
    return currentIndex;
  };

  const getStudentInfo = (draftIndex, studentDraft = {}) => {
    const finalDraftIndex = drafts.length - 1;
    const title = draftIndex === finalDraftIndex ? 'Final Paper' : `Draft ${draftIndex + 1}`;
    let buttonText = `Start ${title}`;
    let fromDraftId = _.get(routingState, 'query.fromDraftId');

    if (studentDraft.status === 'active' || (fromDraftId && studentDraft.draftId === fromDraftId)) {
      buttonText = `Return to ${title}`;
    } else if (studentDraft.reviewStatus === 'submitted' || studentDraft.reviewStatus === 'viewed') {
      buttonText = `View ${title} Feedback`;
    } else if (studentDraft.status === 'submitted') {
      buttonText = `View ${title}`;
    }

    return {
      ...studentDraft,
      title,
      buttonText,
      disabled: draftIndex > getCurrentActiveIndex()
    };
  };

  return drafts.map(draft => {
    let studentDraft = state.studentDrafts.find(studentDraftInState => studentDraftInState.draftId === draft.draftId);
    let studentInfo = getStudentInfo(draft.index, studentDraft);
    return { ...draft, studentInfo };
  });
};
