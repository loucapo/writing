import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRubricList } from '../modules/rubricModule';
import { getCriteria } from '../modules/criteriaModule';
import { RubricDisplay } from '../components/Rubric';
import { addCriteriaToRubric } from './selectors';

class RubricDisplayContainer extends Component {
  componentWillMount() {
    this.props.getRubricList();
    this.props.getCriteria();
    if (this.props.studentDraftId) {
      this.props.getRubricScores(this.props.studentDraftId);
    }
  }

  render() {
    return this.props.rubric ? <RubricDisplay {...this.props} /> : null;
  }
}

RubricDisplayContainer.propTypes = {
  rubric: PropTypes.object,
  getRubricList: PropTypes.func,
  getCriteria: PropTypes.func,
  getRubricScores: PropTypes.func,
  studentDraftId: PropTypes.string
};

const mapStateToProps = state => {
  let rubric = addCriteriaToRubric(state);

  return {
    rubric
  };
};

export default connect(mapStateToProps, { getRubricList, getCriteria })(RubricDisplayContainer);
