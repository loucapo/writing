import { connect } from 'react-redux';
import { setDraftGoals } from '../modules/draftModule';
import { DraftGoalsSelectorModal } from '../components/Draft/index';

const mapStateToProps = (state, props) => {

  const goals = state.goal.map(goal => (
    {
      id: goal.goalId,
      title: goal.title,
      description: goal.description,
      option1: goal.option1,
      option2: goal.option2,
      option3: goal.option3
    }
  ));

  const draft = props.draftId ? state.drafts.find(x => x.draftId === props.draftId) : {};
  const selectedGoals = draft.goals ? draft.goals.map(goalId => (
    {
      title: state.goal.find(goal => goalId === goal.goalId).title,
      id: goalId
    }
  )) : [];

  return {
    goals,
    selectedGoals};
};

export default connect(mapStateToProps, {setDraftGoals})(DraftGoalsSelectorModal);

