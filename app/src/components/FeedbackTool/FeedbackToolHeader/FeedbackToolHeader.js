import React, {PropTypes} from 'react';
import ActionButton from '../../ActionButton/ActionButton';
import MLIcon from 'ml-react-cdl-icons';
import feedbackToolHeaderCss from './feedbackToolHeader.css';
import actionButton from '../../ActionButton/actionButton.css';

const FeedbackToolHeader = ({toggleRubric}) => {
  return (
    <header className={feedbackToolHeaderCss.headerContainer}>
      <div className={feedbackToolHeaderCss.leftArrowContainer}>
        <MLIcon
          className={feedbackToolHeaderCss.left_arrow}
          iconTitle="arrow left"
          iconFill="#ffffff"
          iconType="arrow_left"
          iconWidth="24"
          iconHeight="24"
          viewBox="0 0 24 24"
        />
      </div>
      <div className={feedbackToolHeaderCss.leftSide}>
        <div className={ feedbackToolHeaderCss.studentName }>
          &nbsp;
        </div>
        <div data-id="course-name" className={ feedbackToolHeaderCss.courseName }>
          Final Draft, Submitted Jan 15, 2016, 11:43 am
        </div>
      </div>
      <div className={ feedbackToolHeaderCss.headerRight }>
        <span className={feedbackToolHeaderCss.finalGradeSelect}>Final Grade: Select</span>
        <MLIcon
          className={feedbackToolHeaderCss.dropdown_caret}
          iconTitle="caret down"
          iconFill="#ffffff"
          iconType="caret_down"
          iconWidth="12"
          iconHeight="12"
          viewBox="0 0 24 24"
        />
        <ActionButton dataId="draft-revision-history-button" content="Draft Revision History" css={actionButton.action_button_blue} />
        <ActionButton dataId="score-rubric-button" content="Score Rubric" css={actionButton.action_button_blue} onClick={toggleRubric} />
        <ActionButton dataId="done-button" content="Done" css={actionButton.action_button_green} />
      </div>
    </header>
  );
};

FeedbackToolHeader.propTypes = {
  toggleRubric: PropTypes.func
};

export default FeedbackToolHeader;
