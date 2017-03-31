import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Criteria from '../components/Criteria/Criteria';
import { fetchCriteriaListAction } from '../modules/criteriaModule';

class CriteriaContainer extends Component {
  componentWillMount() {
    this.loadData();
  }

  loadData() {
    this.props.fetchCriteriaListAction();
  }

  render() {
    //TODO: error handling and zero-state
    return (<Criteria {...this.props} />);
  }
}

CriteriaContainer.propTypes = {
  fetchCriteriaListAction: PropTypes.func
};

const mapStateToProps = (state) => {
  const role = (state.auth && state.auth.role) ? state.auth.role : null;
  const criteriaList = state.criteria || null;

  return {
    role,
    criteriaList
  };
};

export default connect(mapStateToProps, {fetchCriteriaListAction})(CriteriaContainer);
