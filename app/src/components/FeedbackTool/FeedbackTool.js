import React, {PropTypes} from 'react';

import RichTextEditor from 'react-rte';
import SideMenu from './SideMenu/SideMenu';

import feedbackTool from './feedbackTool.css';

const FeedbackTool = ({document, showQuickFeedbackTool, toggleQuickFeedback}) => {
  return (
    <section>
      <div className={feedbackTool.editorContainer}>
        <RichTextEditor value={document} readOnly={true}/>
      </div>
      <SideMenu
        toggleQuickFeedback={toggleQuickFeedback}
        showQuickFeedbackTool={showQuickFeedbackTool}
      />
    </section>
  )
};

export default FeedbackTool;
