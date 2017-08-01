import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRubricList } from '../modules/rubricModule';
import { getRubricScores, updateRubricScores } from '../modules/rubricScoresModule';
import { Rubric, RubricDisplay } from '../components/Rubric';
import { addCriteriaToRubric } from './selectors';

class RubricContainer extends Component {
  componentWillMount() {
    this.props.getRubricList();
    this.props.getRubricScores(this.props.studentDraftId);
  }

  render() {
    if (this.props.rubricScores.length > 0) {
      return <RubricDisplay {...this.props} />;
    }
    else {
      return <Rubric {...this.props} />;
    }
  }
}

RubricContainer.propTypes = {
  studentDraftId: PropTypes.string,
  studentActivityId: PropTypes.string,
  rubric: PropTypes.object,
  rubricScores: PropTypes.array,
  getRubricList: PropTypes.func,
  getRubricScores: PropTypes.func,
  updateRubricScores: PropTypes.func
};

const mapStateToProps = state => {
  let rubric = addCriteriaToRubric(state);
  let rubricScores = state.rubricScores.map(score => ({
    criteriaId: score.criteriaId,
    score: score.score
  }));

  return {
    rubric,
    rubricScores
  };
};

export default connect(mapStateToProps, { getRubricList, getRubricScores, updateRubricScores })(RubricContainer);
