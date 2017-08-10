import { addGoalsAndReflectionsToDrafts } from './index';

export default (state, props) => {
  let drafts = addGoalsAndReflectionsToDrafts(state, props);

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
    let finalDraftIndex = drafts.length - 1;
    let title = draftIndex === finalDraftIndex ? 'Final Paper' : `Draft ${draftIndex + 1}`;
    let buttonText = `Start ${title}`;

    if (studentDraft.reviewStatus === 'submitted' || studentDraft.reviewStatus === 'viewed') {
      buttonText = `View ${title} Feedback`;
    } else if (studentDraft.status === 'submitted') {
      buttonText = `View ${title}`;
    } else if (studentDraft.status === 'active') {
      buttonText = `Return to ${title}`;
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
