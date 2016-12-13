import React, {PropTypes} from 'react';
import ActionButton from '../../ActionButton/ActionButton';
import feedbackToolHeaderCss from './feedbackToolHeader.css';
import actionButton from '../../ActionButton/actionButton.css';

const FeedbackToolHeader = ({toggleRubric}) => {
  return (
    <header className={feedbackToolHeaderCss.headerContainer}>
      <div className={ feedbackToolHeaderCss.headerLeft }>
        <div data-id="activity-type" className={ feedbackToolHeaderCss.activity }>
          &nbsp;
        </div>
        <div data-id="course-name" className={ feedbackToolHeaderCss.courseName }>
          Final Draft, Submitted Jan 15, 2016, 11:43 am
        </div>
      </div>
      <div className={ feedbackToolHeaderCss.headerRight }>
        <span>Final Grade: Select</span>
        <ActionButton content="Draft Revision History" css={actionButton.action_button_blue} />
        <ActionButton content="Score Rubric" css={actionButton.action_button_blue} onClick={toggleRubric} />
        <ActionButton content="Done" css={actionButton.action_button_green} />
      </div>
    </header>
  );
};

FeedbackToolHeader.propTypes = {
  toggleRubric: PropTypes.func
};

export default FeedbackToolHeader;
