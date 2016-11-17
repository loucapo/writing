import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadRubric } from './../modules';
import Rubric from '../components/Rubric/Rubric';

class RubricContainer extends Component {
  componentDidMount() { this.loadData(); }

  // TODO: this should load from redux usint a rubric action in a rubric module. see activity module
  loadData() {
    this.props.loadRubric();
  }

  render() {
    if (this.props.isFetching) {
      return (<p style={{ 'padding-top': '100px' }}> Loading... </p>);
    }
    if (this.props.errorMessage) {
      return (<p style={{ 'padding-top': '100px' }}>ERROR! -> {this.props.errorMessage}</p>);
    }
    return (<Rubric categories={this.props.categories} categoryNames={this.props.categoryNames} />);
  }
}

// todo: first 2 proptypes needed here?
RubricContainer.propTypes = {
  rubric: PropTypes.object,
  loadRubric: PropTypes.func
};

const mapStateToProps = (state, props) => {
  return {
    rubric: state.rubric
  };
};

export default connect(mapStateToProps, {loadRubric})(RubricContainer);


