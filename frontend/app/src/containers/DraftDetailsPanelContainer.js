import { connect } from 'react-redux';
import { updateActivityPrompt } from './../modules/activityModule';
import DraftDetailsPanel from '../components/Draft/DraftDetailsPanel/DraftDetailsPanel';

const mapStateToProps = (state, props) => {
  const activity = state.activities.find(
    x => x.activityId === props.activityId
  );

  let draft;
  if (props.studentDraft) {
    draft = state.drafts.find(
      x => x.draftId === props.studentDraft.draftId
    );
  }

  let newRubric;

  if (activity.rubricId) {
    let rubric = state.rubric.find(x => x.rubricId === activity.rubricId);
    if (rubric && rubric.criteria) {
      newRubric = {...rubric};
      newRubric.criteria = rubric.criteria.map(x => state.criteria.find(y => y.criteriaId === x));
    }
  }
  let studentReflectionQuestions = [];
  let goals = [];
  if (draft) {
    draft.studentReflectionQuestions.forEach(x => {
      let item = state.studentReflectionQuestions
        .find(y => y.studentReflectionQuestionId === x);
      if (item) {
        studentReflectionQuestions.push(item);
      }
    });

    goals = draft.goals ? draft.goals.map(goalId => (
      state.criteria.find(goal => goalId === goal.criteriaId).title
    )) : [];
  }

  return {
    activity,
    draft,
    newRubric,
    studentReflectionQuestions,
    goals
  };
};

export default connect(mapStateToProps, {updateActivityPrompt})(DraftDetailsPanel);
