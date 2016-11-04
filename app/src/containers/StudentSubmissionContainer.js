import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { studentSubmissionAction } from './../modules';
import { StudentSubmission } from './../components/StudentSubmission';

class StudentSubmissionContainer extends Component {
  componentDidMount() { this.loadData(); }

  componentWillRecieveProps(newProps) { this.loadData(); }

  loadData() { this.props.studentSubmissionAction(this.props.params.id); }

  render() {
    if (this.props.isFetching) {
      return (<p style={{ 'padding-top': '100px' }}> Loading... </p>);
    }
    if (this.props.errorMessage) {
      return (<p style={{ 'padding-top': '100px' }}>ERROR! -> {this.props.errorMessage}</p>);
    }
    return (<StudentSubmission{...this.props} />);
  }
}

StudentSubmissionContainer.propTypes = {
  url: PropTypes.string,
  id: PropTypes.string,
  isFetching: PropTypes.string,
  errorMessage: PropTypes.string,
  params: PropTypes.object
};

const mapStateToProps = (state, props) => {
  return {
    studentDraft: state.studentDrafts.filter(x => x.id === props.id)
  };
};

export default connect(mapStateToProps)(studentSubmissionContainer);


