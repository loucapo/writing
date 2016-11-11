import React, {PropTypes} from 'react';
import RichTextEditor from 'react-rte';
import SideMenu from './SideMenu/SideMenu';
import feedbackTool from './feedbackTool.css';

const FeedbackTool = ({document, showQuickFeedbackTool, toggleQuickFeedback}) => {
  return (
    <section>
      <div className={feedbackTool.editorContainer}>
        <RichTextEditor value={document} readOnly={true} />
      </div>
      <SideMenu
        toggleQuickFeedback={toggleQuickFeedback}
        showQuickFeedbackTool={showQuickFeedbackTool}
      />
    </section>
  );
}

FeedbackTool.propTypes = {
  document: PropTypes.object,
  showQuickFeedbackTool: PropTypes.bool,
  toggleQuickFeedback: PropTypes.func
};

export default FeedbackTool;
