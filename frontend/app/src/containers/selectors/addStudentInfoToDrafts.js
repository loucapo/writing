import { denormalizeDrafts } from './index';

export default (state, props) => {
  const studentActivity = state.studentActivities.find(x =>
  x.activityId === props.activityId
  && x.studentId === state.auth.id);

  let studentDrafts = state.studentDraft.filter(x =>
    x.studentActivityId === studentActivity ? studentActivity.studentActivityId : undefined);

  let drafts = denormalizeDrafts(state, props)
    .map(x => {
      let studentDraft = studentDrafts.find(sd => sd.draftId === x.draftId);
      let studentInfo;
      if (studentDraft) {
        if (studentDraft.submitted) {
          studentInfo.status = 'submitted';
        } else if (studentDraft.active) {
          studentInfo.status = 'active';
        } else if (studentDraft.completed) {
          studentInfo.status = 'completed';
        }
      }

      return studentInfo ? {...x, studentInfo} : x;
    });

  if (drafts.length <= 0) {
    return drafts;
  }

  let lastDraft = drafts.filter(x => x.studentInfo).reverse()[0];
  if (lastDraft
    && lastDraft.index < drafts.length
    && lastDraft.studentInfo.status === 'completed') {
    drafts.find(x => x.index === lastDraft.index++).studentInfo = {status: 'notStarted'};
  } else {
    drafts[0].studentInfo = {status: 'notStarted'};
  }
  return drafts;
};
