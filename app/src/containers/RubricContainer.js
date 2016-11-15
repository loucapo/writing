import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadRubric } from './../modules';
// import Activity from '../components/Activity';
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
    console.log('rubric');
console.log(this.props.rubric);
    return (<Rubric categories={this.props.categories} headings={this.props.headings} />);
  }
}

RubricContainer.propTypes = {
  rubric: PropTypes.object,
  categories: PropTypes.array,
  headings: PropTypes.array,
  loadRubric: PropTypes.func
};

const mapStateToProps = (state, props) => {
  console.log('state');
  console.log(state);
  return {
    categories: state.rubric.categories,
    headings: state.rubric.headings
  };
};

export default connect(mapStateToProps, {loadRubric})(RubricContainer);


