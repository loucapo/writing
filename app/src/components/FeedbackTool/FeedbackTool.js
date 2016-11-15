import React, {PropTypes} from 'react';

import RichTextEditor from 'react-rte';
import SideMenu from './SideMenu/SideMenu';
import Flags from './Flags/Flags';

import feedbackTool from './feedbackTool.css';

const FeedbackTool = ({document, showQuickFeedbackTool, toggleQuickFeedback}) => {
  let badges = [{
    title: 'Integration of Research',
    contentParagraphs: [
      `You do a nice job presenting these two sides; however, you're not staking a claim in this argument.
      Your thesis is buried and unclear.`,
      `I would begin here with your revisionsto clarify your thesis statement.`
    ],
    resources: [
      {
        title: 'what is a Thesis',
        url: 'http://www.google.com'
      },
      {
        title: 'Examples of a good thesis',
        url: 'http://www.facebook.com'
      },
      {
        title: 'Where should I put my Thesis',
        url: 'http://www.yahoo.com'
      }
    ]
  }];

  return (
    <section>
      <div className={feedbackTool.editorContainer}>
        <RichTextEditor value={document} readOnly={true} />
      </div>
      <Flags flagElements={badges} />
      <SideMenu
        toggleQuickFeedback={toggleQuickFeedback}
        showQuickFeedbackTool={showQuickFeedbackTool}
      />
    </section>
  );
};

FeedbackTool.propTypes = {
  document: PropTypes.object,
  showQuickFeedbackTool: PropTypes.bool,
  toggleQuickFeedback: PropTypes.func
};

FeedbackTool.propTypes = {
  document: PropTypes.object
};

export default FeedbackTool;
