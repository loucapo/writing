import React, {PropTypes} from 'react';
import RichTextEditor from 'ml-react-rte';

import FeedbackToolHeader from './FeedbackToolHeader/FeedbackToolHeader';
import RubricContainer from '../../containers/RubricContainer';
import feedbackToolCss from './feedbackTool.css';

const FeedbackTool = ({value, onChange, showRubric, toggleRubric}) => {
  let feedbackToolContent;
  if (showRubric) {
    feedbackToolContent = <RubricContainer showRubric={showRubric}/>
  } else {
    feedbackToolContent = <RichTextEditor onChange={onChange} value={value} readOnly='true' />;
  }
  return (
    <div>
      <FeedbackToolHeader toggleRubric={toggleRubric} />
      {feedbackToolContent}
    </div>
  )
};

FeedbackTool.propTypes = {
  showRubric: PropTypes.bool,
  toggleRubric: PropTypes.func
};

export default FeedbackTool;
