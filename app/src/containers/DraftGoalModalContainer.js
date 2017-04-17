import { connect } from 'react-redux';
import { setDraftGoals } from './../modules/draftModule';
import DraftGoalModal from '../components/MLModal/Modals/DraftGoalModal';

const mapStateToProps = (state, props) => {
  const goals = state.criteria.map(x => {
    return {
      id: x.id,
      title: x.title,
      description: x.description,
      goalOption1: x.goalOption1,
      goalOption2: x.goalOption2,
      goalOption3: x.goalOption3
    };
  });

  const draft = props.draftId ? state.drafts.find(x => x.id === props.draftId) : {goals: []};

  return {
    goals,
    selectedGoals: draft.goals ? draft.goals.map(x=> x.id) : []
  };
};

export default connect(mapStateToProps, {setDraftGoals})(DraftGoalModal);


