import { connect } from 'react-redux';
import { OpenCommentModal } from '../components/FeedbackTool';
import { createFeedback } from '../modules/feedbackModule';

export default connect(null, {createFeedback})(OpenCommentModal);
