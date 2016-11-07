import React, { Component, PropTypes } from 'react';
import RichTextEditor from 'react-rte';
import { connect } from 'react-redux';
import { studentSubmissionAction } from './../modules';
import StudentSubmission from '../components/StudentSubmission/StudentSubmission';

class StudentSubmissionContainer extends Component {
  componentWillMount() {
    console.log("componentWillMount");
    this.loadData();
  }

  componentWillReceiveProps(newProps) { this.loadData(); }

  loadData() { this.props.studentSubmissionAction(this.props.params.id); }

  render() {
    console.log(StudentSubmission);
    if (this.props.isFetching) {
      return (<p style={{ 'padding-top': '100px' }}> Loading... </p>);
    }
    if (this.props.errorMessage) {
      return (<p style={{ 'padding-top': '100px' }}>ERROR! -> {this.props.errorMessage}</p>);
    }
    return (<StudentSubmission {...this.props} />);
  }
}

StudentSubmissionContainer.propTypes = {
  url: PropTypes.string,
  id: PropTypes.string,
  isFetching: PropTypes.string,
  errorMessage: PropTypes.string,
  params: PropTypes.object
}

const mapStateToProps = (state, props) => {
  let studentSubmission = state.studentSubmissions.filter(x => x.id === props.id);

  return {
    studentDraft: RichTextEditor.createValueFromString(studentSubmission[0] ? studentSubmission[0].draft : '', 'html')
  };
};

export default connect(mapStateToProps, {studentSubmissionAction})(StudentSubmissionContainer);


