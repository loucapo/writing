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
    return (<Rubric rubric={this.props.rubric} showRubric={this.props.showRubric} toggleRubric={this.props.toggleRubric} />);
  }
}

RubricContainer.propTypes = {
  rubric: PropTypes.object,
  loadRubric: PropTypes.func,
  toggleRubric: PropTypes.func
};

const mapStateToProps = (state, props) => {
  return {
    rubric: state.rubric
  };
};

export default connect(mapStateToProps, {loadRubric})(RubricContainer);


