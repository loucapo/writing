import React from 'react';
import PropTypes from 'prop-types';
import MLIcon from 'ml-react-cdl-icons';

import styles from './draftGoalsDisplay.css';

const DraftGoalsDisplay = ({goals}) => {
  return goals && goals.length > 0
    ? (<div className={styles.container}>
      <div className={styles.heading}>
        <div className={styles.title}>
          Draft Goals
        </div>
      </div>

      <ul data-id="drafts-goal-list" className={styles.goalsList}>
        {
          goals.map((title, index) => (
            <li key={index}>
              <MLIcon
                className={styles.commentIcon}
                title="comment"
                type="comment"
                width="23"
                height="24"
                viewBox="0 0 24 24"
              />
              {title}
            </li>
          ))
        }
      </ul>

    </div>)
    : null;
};

DraftGoalsDisplay.propTypes = {
  goals: PropTypes.array
};

export default DraftGoalsDisplay;
