import React from 'react';
import PropTypes from 'prop-types';
import { MLButton } from '../../MLComponents';
import styles from './commentModal.css';

const CommentModal = ({ position, closeModal }) => {
  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <div>
      <div className={styles.commentModalOverlay} onClick={handleBackgroundClick} />
      <div id="commentModal" className={styles.commentModal} style={{ top: `${position.top}px`, left: `${position.left}px` }}>
        <div className={styles.header}>
          Comment
        </div>

        <div className={styles.fixedComments}>
          <div className={styles.buttonsHeader}>
            Please select one and leave your comment below
          </div>

          <div className={styles.buttons}>
            <MLButton
              className={styles.addCommentButton}
              dataId="good-job-comment-modal"
              title="Good Job"
              bordered={true}
            />
            <MLButton
              className={styles.addCommentButton}
              dataId="needs-work-comment-modal"
              title="Need Work"
              bordered={true}
            />
            <MLButton
              className={styles.addCommentButton}
              dataId="needs-extensive-work-comment-modal"
              title="Needs Extensive Work"
              bordered={true}
            />
          </div>
        </div>

        <div className={styles.comments}>
          <textarea placeholder="Please leave additional feedback here" />
        </div>

        <div className={styles.controls}>
          <MLButton
            className={styles.addCommentButton}
            dataId="cancel-comment-modal"
            title="Cancel"
            color="red"
            bordered={true}
            handleClick={closeModal}
          />
          <MLButton
            className={styles.addCommentButton}
            dataId="save-comment-modal"
            title="Save"
          />
        </div>
      </div>
    </div>
  );
};

CommentModal.propTypes = {
  position: PropTypes.object,
  closeModal: PropTypes.func
};

export default CommentModal;
