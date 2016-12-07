import { connect } from 'react-redux';
import { fetchStudentSubmissionAction, submissionOnChange, submitOtherComment } from './../modules';
import FeedbackTool from '../components/FeedbackTool/FeedbackTool';

const mapStateToProps = (state, props) => {
  let studentSubmission = state.studentSubmissions.filter(x => x.id === props.params.id)[0];
  return {
    submissionId: studentSubmission.id,
    document: studentSubmission.document
  };
};

export default connect(mapStateToProps,
  {fetchStudentSubmissionAction,
    submissionOnChange,
    submitOtherComment})(FeedbackTool);
