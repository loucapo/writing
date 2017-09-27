import React from 'react';
import PropTypes from 'prop-types';
import MLIcon from 'ml-react-cdl-icons';
import styles from './feedbackMenu.css';

const FeedbackMenu = ({ position, handleClick }) => {
  return (
    <div className={styles.feedbackMenuWrapper} style={{ top: `${position}px` }}>
      <div className={styles.feedbackMenu}>
        Feedback
      </div>
      <ul className={styles.feedbackButtons}>
        <li
          className={styles.feedbackButton + ' feedbackButton'}
          title="Not implemented"
          onClick={handleClick.bind(this, 'draftGoals')}
          data-id="feedback-menu-draft-goals"
        >
          <div>
            <MLIcon
              className={styles.commentIcon}
              title="comment"
              type="comment"
              width="22"
              height="22"
              viewBox="0 0 24 24"
            />
          </div>
          <div className={styles.feedbackButtonText}>Draft Goals</div>
        </li>
        <li
          className={styles.feedbackButton + ' feedbackButton'}
          title="Not implemented"
          onClick={handleClick.bind(this, 'editingMarks')}
          data-id="feedback-menu-editing-marks"
        >
          <div>
            <MLIcon
              className={styles.commentIcon}
              title="comment"
              type="comment"
              width="22"
              height="22"
              viewBox="0 0 24 24"
            />
          </div>
          <div className={styles.feedbackButtonText}>Editing Marks</div>
        </li>
        <li
          className={styles.feedbackButton + ' feedbackButton'}
          onClick={handleClick.bind(this, 'openComment')}
          data-id="feedback-menu-open-comments"
        >
          <div>
            <MLIcon
              className={styles.commentIcon}
              title="comment"
              type="comment"
              width="22"
              height="22"
              viewBox="0 0 24 24"
            />
          </div>
          <div className={styles.feedbackButtonText}>Open Comments</div>
        </li>
      </ul>
    </div>
  );
};

FeedbackMenu.propTypes = {
  position: PropTypes.number,
  handleClick: PropTypes.func
};

export default FeedbackMenu;
