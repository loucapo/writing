import React, {PropTypes} from 'react';
import feedbackToolHeaderCss from './feedbackToolHeader.css';

const FeedbackToolHeader = ({toggleRubric}) => {
  return (
    <section className={feedbackToolHeaderCss.headerContainer}>
      <button data-id="header-button" className={feedbackToolHeaderCss.headerButton} onClick={toggleRubric}>Score Rubric</button>
    </section>
  );
};

FeedbackToolHeader.propTypes = {
  toggleRubric: PropTypes.func
};

export default FeedbackToolHeader;
