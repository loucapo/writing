import React, { Component, PropTypes } from 'react';
import RichTextEditor from 'react-rte';
import { connect } from 'react-redux';
import { fetchStudentSubmissionAction } from './../modules';
import FeedbackTool from '../components/FeedbackTool/FeedbackTool';

class FeedbackToolContainer extends Component {
  constructor() {
    super();
    this.state = {showQuickFeedbackTool: false};
  }
  componentWillMount() { this.loadData(); }

  componentWillReceiveProps(newProps) { this.loadData(); }

  loadData() { this.props.fetchStudentSubmissionAction(this.props.params.id); }

  render() {
    if (this.props.isFetching) {
      return (<p style={{ 'padding-top': '100px' }}> Loading... </p>);
    }
    if (this.props.errorMessage) {
      return (<p style={{ 'padding-top': '100px' }}>ERROR! -> {this.props.errorMessage}</p>);
    }
    return (
      <FeedbackTool
        {...this.props}
        showQuickFeedbackTool={this.state.showQuickFeedbackTool}
        toggleQuickFeedback={this.toggleQuickFeedback}
      />
    );
  }

  toggleQuickFeedback = (event) => {
    this.setState({showQuickFeedbackTool: ! this.state.showQuickFeedbackTool});
  };
}

FeedbackToolContainer.propTypes = {
  url: PropTypes.string,
  id: PropTypes.string,
  isFetching: PropTypes.string,
  errorMessage: PropTypes.string,
  params: PropTypes.object
};

const mapStateToProps = (state, props) => {
  let studentSubmission = state.studentSubmissions.filter(x => x.id === props.params.id)[0];
  return {
    document: RichTextEditor.createValueFromString(studentSubmission ? studentSubmission.document : '', 'html')
  };
};

export default connect(mapStateToProps, {fetchStudentSubmissionAction})(FeedbackToolContainer);


