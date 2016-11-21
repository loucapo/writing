import React, { Component, PropTypes } from 'react';
import RichTextEditor from 'ml-react-rte';
import { connect } from 'react-redux';
import { fetchStudentSubmissionAction, submissionOnChange } from './../modules';
import FeedbackTool from '../components/FeedbackTool/FeedbackTool';

class FeedbackToolContainer extends Component {
  componentWillMount() { this.loadData(); }

  componentWillReceiveProps() { this.loadData(); }

  loadData() {
    this.props.fetchStudentSubmissionAction(this.props.params.id);
    this.setState({value: this.props.document});
  }

  onChange(value) {
    this.setState({value});
  }

  render() {
    if (this.props.isFetching) {
      return (<p style={{ 'padding-top': '100px' }}> Loading... </p>);
    }
    if (this.props.errorMessage) {
      return (<p style={{ 'padding-top': '100px' }}>ERROR! -> {this.props.errorMessage}</p>);
    }
    return (<FeedbackTool value={this.state.value} onChange={this.onChange.bind(this)} />);
  }
}

FeedbackToolContainer.propTypes = {
  url: PropTypes.string,
  id: PropTypes.string,
  isFetching: PropTypes.string,
  errorMessage: PropTypes.string,
  params: PropTypes.object,
  document: PropTypes.object,
  fetchStudentSubmissionAction: PropTypes.func
};

const mapStateToProps = (state, props) => {
  let studentSubmission = state.studentSubmissions.filter(x => x.id === props.params.id)[0];
  return {
    document: RichTextEditor.createValueFromString(studentSubmission ? studentSubmission.document : '', 'html')
  };
};

export default connect(mapStateToProps, {fetchStudentSubmissionAction, submissionOnChange})(FeedbackToolContainer);


