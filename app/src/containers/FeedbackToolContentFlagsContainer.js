import { connect } from 'react-redux';
import FeedbackToolContentFlags from '../components/FeedbackTool/FeedbackToolContentFlags/FeedbackToolContentFlags';

const mapStateToProps = (state, props) => {
  let feedbackToolContentItems = state.feedbackToolContentItems.filter(x => x.submissionId === props.submissionId);
  return {
    feedbackToolContentItems
  };
};

export default connect(mapStateToProps)(FeedbackToolContentFlags);
