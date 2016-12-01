import React, { Component, PropTypes } from 'react';
import RichTextEditor from 'ml-react-rte';
import { connect } from 'react-redux';
import { fetchStudentSubmissionAction, submissionOnChange } from './../modules';
import FeedbackTool from '../components/FeedbackTool/FeedbackTool';

class FeedbackToolContainer extends Component {
  constructor() {
    super();
    this.state = {
      showRubric: false,
      showQuickFeedbackTool: false,
      isRubricLoaded: false
    };
    this.toggleQuickFeedback = () => {
      this.setState({showQuickFeedbackTool: !this.state.showQuickFeedbackTool});
    };
    this.toggleIsRubricLoaded = () => {
      this.setState({isRubricLoaded: !this.state.isRubricLoaded});
    };
    this.toggleRubric = () => {
      this.setState({
        showRubric: !this.state.showRubric
      });
    };
  }

  componentWillMount() { this.loadData(); }

  componentWillReceiveProps() { this.loadData(); }

  loadData() {
    this.props.fetchStudentSubmissionAction(this.props.params.id);
    this.setState({
      value: this.props.document
    });
  }

  onChange = (value) => {
    this.setState({value});
  }

  render() {
    if (this.props.isFetching) {
      return (<p style={{ 'padding-top': '100px' }}> Loading... </p>);
    }
    if (this.props.errorMessage) {
      return (<p style={{ 'padding-top': '100px' }}>ERROR! -> {this.props.errorMessage}</p>);
    }
    return (
      <FeedbackTool
        value={this.state.value}
        onChange={this.onChange.bind(this)}
        showQuickFeedbackTool={this.state.showQuickFeedbackTool}
        toggleQuickFeedback={this.toggleQuickFeedback}
        toggleRubric={this.toggleRubric}
        showRubric={this.state.showRubric}
        isRubricLoaded={this.state.isRubricLoaded}
        toggleIsRubricLoaded={this.toggleIsRubricLoaded}
      />);
  }
}

FeedbackToolContainer.propTypes = {
  isFetching: PropTypes.string,
  errorMessage: PropTypes.string,
  document: PropTypes.object,
  params: PropTypes.object,
  fetchStudentSubmissionAction: PropTypes.func
};

const mapStateToProps = (state, props) => {
  let studentSubmission = state.studentSubmissions.filter(x => x.id === props.params.id)[0];
  return {
    document: RichTextEditor.fromRaw(studentSubmission ? studentSubmission.document : '')
  };
};

export default connect(mapStateToProps, {fetchStudentSubmissionAction, submissionOnChange})(FeedbackToolContainer);


