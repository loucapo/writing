import { denormalizeDrafts } from './index';

export default (state, props) => {
  const studentActivity = state.studentActivities.find(x =>
  x.activityId === state.auth.activity.activityId
  && x.studentId === state.auth.id);
  let studentDrafts = state.studentDraft.filter(x =>
  x.studentActivityId === (studentActivity ? studentActivity.studentActivityId : undefined));
  let denormalizedDrafts = denormalizeDrafts(state, props);

  let finalDraftIndex = denormalizedDrafts.length;

  let getCurrentActiveIndex = (drafts) => {
    let lastStarted = drafts.filter(x => x.status && x.status !== 'notStarted').reverse()[0];
    if (lastStarted) {
      return lastStarted.status !== 'completed'
        ? lastStarted.index
        : lastStarted.index++;
    }
    return 0;
  };

  const currentActiveIndex = getCurrentActiveIndex(denormalizedDrafts);

  const getStudentInfo = (draft, studentDraft) => {
    let title = draft.index === finalDraftIndex ? 'Final Paper' : 'Draft ' + (draft.index + 1);

    let buttonText = `Start ${title}`;
    if (studentDraft && studentDraft.status === 'submitted') {
      buttonText = `view ${title}`;
    } else if (studentDraft && studentDraft.status === 'active') {
      buttonText = `continue ${title}`;
    }
    return {
      status: studentDraft ? studentDraft.status : 'notStarted',
      title,
      buttonText,
      disabled: draft.index > currentActiveIndex
    };
  };

  return denormalizedDrafts.map(x => {
    let studentDraft = studentDrafts.find(sd => sd.draftId === x.draftId);
    let studentInfo = getStudentInfo(x, studentDraft);
    return {...x, studentInfo};
  });

};
