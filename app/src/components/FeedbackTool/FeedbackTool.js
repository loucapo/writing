import React, {PropTypes} from 'react';
import RichTextEditor from 'ml-react-rte';
import SideMenu from './SideMenu/SideMenu';
import FeedbackToolHeader from './FeedbackToolHeader/FeedbackToolHeader';
import RubricContainer from '../../containers/RubricContainer';
import feedbackTool from './feedbackTool.css';

const FeedbackTool = ({value, onChange, showRubric, toggleRubric}) => {
  let feedbackToolContent, sideMenu;
  if (showRubric) {
    feedbackToolContent = <RubricContainer showRubric={showRubric} toggleRubric={toggleRubric} />
    sideMenu = null;
  } else {
    feedbackToolContent = <RichTextEditor onChange={onChange} value={value} readOnly='true' />;
    sideMenu = <SideMenu />;
  }
  return (
  <section className={feedbackTool.feedbackToolContainer}>
    <div className={feedbackTool.editorContainer}>
      <FeedbackToolHeader toggleRubric={toggleRubric} />
      {feedbackToolContent}
    </div>
    {sideMenu}
  </section>
  )
};

FeedbackTool.propTypes = {
  value: PropTypes.object,
  showRubric: PropTypes.bool,
  toggleRubric: PropTypes.func
};

export default FeedbackTool;
