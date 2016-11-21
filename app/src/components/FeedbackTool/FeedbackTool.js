import React, {PropTypes} from 'react';
import RichTextEditor from 'ml-react-rte';
import SideMenu from './SideMenu/SideMenu';
import FeedbackToolHeader from './FeedbackToolHeader/FeedbackToolHeader';
import RubricContainer from '../../containers/RubricContainer';
import feedbackTool from './feedbackTool.css';

const FeedbackTool = ({value, onChange, showRubric, toggleRubric}) => {
  let feedbackToolContent;
  if (showRubric) {
    feedbackToolContent = <RubricContainer showRubric={showRubric}/>
  } else {
    feedbackToolContent = <RichTextEditor onChange={onChange} value={value} readOnly='true' />;
  }
  return (
  <section className={feedbackTool.feedbackToolContainer}>
    <div className={feedbackTool.editorContainer}>
      <FeedbackToolHeader toggleRubric={toggleRubric} />
      {feedbackToolContent}
    </div>
    <SideMenu />
  </section>
  )
};

FeedbackTool.propTypes = {
  value: PropTypes.object,
  showRubric: PropTypes.bool,
  toggleRubric: PropTypes.func
};

export default FeedbackTool;
