import { connect } from 'react-redux';
import { setDraftGoals } from '../modules/draftModule';
import DraftGoalModal from '../components/MLModal/Modals/DraftGoalModal';

const mapStateToProps = (state, props) => {
  const goals = state.criteria.map(goal => (
    {
      id: goal.id,
      title: goal.title,
      description: goal.description,
      goalOption1: goal.goalOption1,
      goalOption2: goal.goalOption2,
      goalOption3: goal.goalOption3
    }
  ));

  const draft = props.draftId ? state.drafts.find(x => x.id === props.draftId) : {};

  const selectedGoals = draft.goals ? draft.goals.map(goalId => (
    {
      title: goals.find(goal => goalId === goal.id).title,
      id: goalId
    }
  )) : [];

  return {
    goals,
    selectedGoals
  };
};

export default connect(mapStateToProps, {setDraftGoals})(DraftGoalModal);

