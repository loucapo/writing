import RichTextEditor from 'ml-react-rte';
import { connect } from 'react-redux';
import { fetchStudentSubmissionAction, submissionOnChange, submitOtherComment } from './../modules';
import FeedbackTool from '../components/FeedbackTool/FeedbackTool';

const mapStateToProps = (state, props) => {
  let studentSubmission = state.studentSubmissions.filter(x => x.id === props.params.id)[0];
  return {
    document: RichTextEditor.fromRaw(studentSubmission ? studentSubmission.document : '')
  };
};

export default connect(mapStateToProps,
  {fetchStudentSubmissionAction,
    submissionOnChange,
    submitOtherComment})(FeedbackTool);
