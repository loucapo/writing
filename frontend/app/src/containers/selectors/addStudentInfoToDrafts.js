import { addGoalsAndReflectionsToDrafts } from './index';

export default (state, props) => {
  const studentActivity = state.studentActivities.find(
    activity => ((activity.activityId === state.auth.activity.activityId) && (activity.studentId === state.auth.id))
  );
  let studentDraftsInState = state.studentDrafts.filter(
    studentDraft => studentDraft.studentActivityId === (studentActivity ? studentActivity.studentActivityId : undefined)
  );
  let drafts = addGoalsAndReflectionsToDrafts(state, props);
  let finalDraftIndex = drafts.length - 1;

  const getCurrentActiveIndex = studentDrafts => {
    let lastStarted = studentDrafts.filter(studentDraft => studentDraft.status && studentDraft.status !== 'notStarted').reverse()[0];
    if (lastStarted) {
      let index;
      let matchDraft = drafts.find(draft => draft.draftId === lastStarted.draftId);
      if (lastStarted.reviewStatus !== 'submitted') {
        index = matchDraft && matchDraft.index || 0;
      } else {
        index = matchDraft.index + 1;
      }
      return index;
    }
    return 0;
  };

  const getStudentInfo = (draftIndex, studentDraft = {}) => {
    let title = draftIndex === finalDraftIndex ? 'Final Paper' : `Draft ${draftIndex + 1}`;
    let buttonText = `Start ${title}`;

    if (studentDraft.reviewStatus === 'submitted') {
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
