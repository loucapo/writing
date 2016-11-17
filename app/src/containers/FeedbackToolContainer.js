import React, { Component, PropTypes } from 'react';
import RichTextEditor from 'ml-react-rte';
import { connect } from 'react-redux';
import { fetchStudentSubmissionAction, submissionOnChange } from './../modules';
import FeedbackTool from '../components/FeedbackTool/FeedbackTool';

class FeedbackToolContainer extends Component {
  constructor() {
    super();
    this.state = {showQuickFeedbackTool: false};
    this.toggleQuickFeedback = () => {
      this.setState({showQuickFeedbackTool: !this.state.showQuickFeedbackTool});
    };
  }
  componentWillMount() { this.loadData(); }

  componentWillReceiveProps(newProps) { this.loadData(); } // eslint-disable-line no-unused-vars

  loadData() {
    this.props.fetchStudentSubmissionAction(this.props.params.id);
    this.setState({value:this.props.document});
  }

  onChange = (value) => {
    this.setState({value});
  };

  render() {
    if (this.props.isFetching) {
      return (<p style={{ 'padding-top': '100px' }}> Loading... </p>);
    }
    if (this.props.errorMessage) {
      return (<p style={{ 'padding-top': '100px' }}>ERROR! -> {this.props.errorMessage}</p>);
    }

    return (
      <FeedbackTool
        value={this.state.value} onChange={this.onChange}
        showQuickFeedbackTool={this.state.showQuickFeedbackTool}
        toggleQuickFeedback={this.toggleQuickFeedback}
      />
    );
  }
}

FeedbackToolContainer.propTypes = {
  url: PropTypes.string,
  id: PropTypes.string,
  isFetching: PropTypes.string,
  errorMessage: PropTypes.string,
  params: PropTypes.object,
  fetchStudentSubmissionAction: PropTypes.func
};

const mapStateToProps = (state, props) => {
  let studentSubmission = state.studentSubmissions.filter(x => x.id === props.params.id)[0];
  return {
    document: RichTextEditor.createValueFromString(studentSubmission ? studentSubmission.document : '', 'html')
  };
};

export default connect(mapStateToProps, {fetchStudentSubmissionAction, submissionOnChange})(FeedbackToolContainer);


