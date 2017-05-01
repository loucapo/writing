import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getRubricList } from './../modules/rubricModule';
import { connect } from 'react-redux';
import RubricSelector from '../components/Activity/RubricSelector/RubricSelector';
import { updateActivityRubric } from './../modules/activityModule';

class RubricSectionContainer extends Component {

  componentWillMount() {
    this.props.getRubricList();
  }

  render() {
    return (<RubricSelector {...this.props} />);
  }
}

RubricSectionContainer.propTypes = {
  activityId: PropTypes.string,
  rubricId: PropTypes.string,
  rubricOptions: PropTypes.array,
  getRubricList: PropTypes.func,
  getCriteriaForRubric: PropTypes.func,
  updateRubric: PropTypes.func
};

const mapStateToProps = (state, props) => {
  const role = state.auth.role;
  let newRubric;

  if (props.rubricId) {
    let rubric = state.rubric.find(x => x.rubricId === props.rubricId);
    if(rubric && rubric.criteria) {
      newRubric = {...rubric};
      newRubric.criteria = rubric.criteria.map(x => state.criteria.find(y => y.criteriaId === x));
    }
  }

  return {
    role,
    rubric: newRubric,
    rubricOptions: state.rubric.map(x => {
      return {
        id: x.rubricId,
        value: x.title
      };
    })
  };
};

export default connect(mapStateToProps, { getRubricList, updateActivityRubric })(RubricSectionContainer);
