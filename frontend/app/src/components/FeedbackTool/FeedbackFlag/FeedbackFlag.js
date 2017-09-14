import React from 'react';
import PropTypes from 'prop-types';
import MLIcon from 'ml-react-cdl-icons';
import styles from './feedbackFlag.css';

const FeedbackFlag = ({feedback, flagTop, handleFlagClick, expandedId}) => {
  let preClass = (feedback.level === 'Good Job') ? ` ${styles.flagGreen}` : '';
  let expandedClass = (expandedId) ? ` ${styles.expanded}` : '';
  let flagClass = styles.flag + preClass + expandedClass;

  return (
    <div
      className={flagClass}
      style={{top: `${flagTop}px`}}
      data-id={feedback.feedbackId}
      onClick={handleFlagClick.bind(this, feedback.feedbackId)}
    >
      <div className={styles.flagCaret}>
        <svg width="7px" height="12px" viewBox="0 0 7 12" version="1.1">
          <defs />
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(0.000000, 1.000000)">
              <g className={styles.triangle}>
                <polygon points="0.85660335 9.76258269 0.85660335 0.143396646 6.76258269 4.95298967" />
              </g>
              <polyline className={styles.triangleOutline} stroke="#000000" points="1 0 7 5 1 10" />
            </g>
          </g>
        </svg>
      </div>

      <div className={styles.flagTitle}>
        <MLIcon className={styles.icon} title="comment" type="comment" width="24" height="24" viewBox="0 0 24 24" />
        Comment
      </div>

      {expandedId ?
        <div className={styles.feedback}>
          <div className={styles.feedbackLabel}>
            {feedback.level}
          </div>
          <div>
            {feedback.content}
          </div>
        </div>
        : null
      }
    </div>
  );
};

FeedbackFlag.propTypes = {
  feedback: PropTypes.object,
  flagTop: PropTypes.number,
  handleFlagClick: PropTypes.func,
  expandedId: PropTypes.bool
};

export default FeedbackFlag;
