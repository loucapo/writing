import React, { PropTypes } from 'react';
import RichTextEditor from 'ml-react-rte';
import SideMenu from './SideMenu/SideMenu';
import Flags from './../../containers/FlagContainer/Flags';
import FeedbackToolHeader from './FeedbackToolHeader/FeedbackToolHeader';
import RubricContainer from '../../containers/RubricContainer';
import StudentReflection from './StudentReflection/StudentReflection';
import EndComment from './EndComment/EndComment';
import feedbackTool from './feedbackTool.css';

const FeedbackTool = ({value, onChange, showQuickFeedbackTool, toggleQuickFeedback, showRubric, toggleRubric}) => {
  let badges = [{
    title: 'Integration of Research',
    contentParagraphs: [
      `You do a nice job presenting these two sides; however, you're not staking a claim in this argument.
      Your thesis is buried and unclear.`,
      `I would begin here with your revisions to clarify your thesis statement.`
    ],
    resources: [
      {
        title: 'What is a Thesis',
        url: 'http://www.google.com'
      },
      {
        title: 'Examples of a good Thesis',
        url: 'http://www.facebook.com'
      },
      {
        title: 'Where should I put my Thesis',
        url: 'http://www.yahoo.com'
      }
    ]
  }];
  let feedbackToolContent;
  let sideMenu;
  let studentReflection;
  let endComment;
  if (showRubric) {
    feedbackToolContent = <RubricContainer showRubric={showRubric} toggleRubric={toggleRubric} />;
    sideMenu = null;
    studentReflection = null;
    endComment = null;
  } else {
    feedbackToolContent = <RichTextEditor onChange={onChange} value={value} readOnly={true} />;
    sideMenu = <SideMenu
      toggleQuickFeedback={toggleQuickFeedback}
      showQuickFeedbackTool={showQuickFeedbackTool}
    />;
    studentReflection = <StudentReflection />;
    endComment = <EndComment />;
  }
  return (
    <section className={feedbackTool.feedbackToolContainer}>
      <div className={feedbackTool.editorContainer}>
        <FeedbackToolHeader toggleRubric={toggleRubric} />
        <div className={feedbackTool.scrollContainer} >
          {studentReflection}
          {feedbackToolContent}
          {endComment}
        </div>
      </div>
      <Flags flagElements={badges} />
      {sideMenu}
    </section>
  );
};

FeedbackTool.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func,
  showQuickFeedbackTool: PropTypes.bool,
  toggleQuickFeedback: PropTypes.func,
  showRubric: PropTypes.bool,
  toggleRubric: PropTypes.func,
};

export default FeedbackTool;
