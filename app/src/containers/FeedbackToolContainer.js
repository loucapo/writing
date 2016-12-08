import { connect } from 'react-redux';
import { fetchStudentSubmissionAction, submissionOnChange } from './../modules';
import {submitFeedbackToolContentItem} from './../modules/feedbackToolContentModule';

import FeedbackTool from '../components/FeedbackTool/FeedbackTool';

const mapStateToProps = (state, props) => {
  let studentSubmission = state.studentSubmissions.filter(x => x.id === props.params.id)[0];
  return {
    submissionId: studentSubmission.id,
    document: studentSubmission.document
  };
};

export default connect(mapStateToProps,
  {fetchStudentSubmissionAction, submitFeedbackToolContentItem,
    submissionOnChange})(FeedbackTool);
