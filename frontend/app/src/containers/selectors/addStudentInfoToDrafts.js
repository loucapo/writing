import { addGoalsAndReflectionsToDrafts } from './index';

export default (state, props) => {
  const studentActivity = state.studentActivities[0];
  let studentDraftsInState = state.studentDrafts.filter(
    studentDraft => studentDraft.studentActivityId === (studentActivity ? studentActivity.studentActivityId : undefined)
  );
  let drafts = addGoalsAndReflectionsToDrafts(state, props);
  let finalDraftIndex = drafts.length - 1;

  const getCurrentActiveIndex = studentDrafts => {
    let lastReviewed = studentDrafts.reverse().find(studentDraft => studentDraft.reviewStatus && studentDraft.reviewStatus === 'viewed');

    if (lastReviewed) {
      let lastReviewedIndex = studentDrafts.indexOf(lastReviewed);
      return lastReviewedIndex + 1;
    }

    return 0;
  };

  const getStudentInfo = (draftIndex, studentDraft = {}) => {
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
      disabled: draftIndex > getCurrentActiveIndex(studentDraftsInState)
    };
  };

  return drafts.map(draft => {
    let studentDraft = studentDraftsInState.find(studentDraftInState => studentDraftInState.draftId === draft.draftId);
    let studentInfo = getStudentInfo(draft.index, studentDraft);
    return { ...draft, studentInfo };
  });
};
