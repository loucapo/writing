import { connect } from 'react-redux';
import StudentRubric from '../components/Activity/RubricSelector/StudentRubric';

const mapStateToProps = (state, props) => {
  let newRubric;

  if (props.rubricId) {
    let rubric = state.rubric.find(x => x.rubricId === props.rubricId);
    if(rubric && rubric.criteria) {
      newRubric = {...rubric};
      newRubric.criteria = rubric.criteria.map(x => state.criteria.find(y => y.criteriaId === x));
    }
  }
  return {
    rubric: newRubric
  };
};

export default connect(mapStateToProps)(StudentRubric);
