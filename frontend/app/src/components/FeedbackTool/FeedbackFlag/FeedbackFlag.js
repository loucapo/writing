import React from 'react';
import PropTypes from 'prop-types';
import MLIcon from 'ml-react-cdl-icons';
import styles from './feedbackFlag.css';

const FeedbackFlag = ({ feedback, flagTop }) => {
  return (
    <div className={styles.flag} style={{ top: `${flagTop}px` }}>
      <div className={styles.flagCaret}>
        <svg width="7px" height="12px" viewBox="0 0 7 12" version="1.1">
          <defs />
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="tooltip-caret" transform="translate(0.000000, 1.000000)">
              <g className={styles.triangle} fill="#faf2a9">
                <polygon points="0.85660335 9.76258269 0.85660335 0.143396646 6.76258269 4.95298967" />
              </g>
              <polyline className={styles.triangleOutline} stroke="#000000" points="1 0 7 5 1 10" />
            </g>
          </g>
        </svg>
      </div>
      <div className={styles.flagTitle}>
        <MLIcon className={styles.icon} title="comment" type="comment" width="18" height="19" viewBox="0 0 24 24" />
        Comment
      </div>

    </div>
  );
};

export default FeedbackFlag;
