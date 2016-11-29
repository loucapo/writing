import React, { PropTypes } from 'react';
import RichTextEditor from 'ml-react-rte';
import SideMenu from './SideMenu/SideMenu';
import FeedbackToolHeader from './FeedbackToolHeader/FeedbackToolHeader';
import RubricContainer from '../../containers/RubricContainer';
import StudentReflection from './StudentReflection/StudentReflection';
import EndComment from './EndComment/EndComment';
import feedbackTool from './feedbackTool.css';

const FeedbackTool = ({value, onChange, showRubric, toggleRubric}) => {
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
    sideMenu = <SideMenu />;
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
      {sideMenu}
    </section>
  );
};

FeedbackTool.propTypes = {
  value: PropTypes.object,
  showRubric: PropTypes.bool,
  toggleRubric: PropTypes.func,
  onChange: PropTypes.func
};

export default FeedbackTool;
