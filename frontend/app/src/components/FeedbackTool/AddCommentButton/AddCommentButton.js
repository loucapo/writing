import React from 'react';
import PropTypes from 'prop-types';
import MLIcon from 'ml-react-cdl-icons';
import styles from './addCommentButton.css';

const AddCommentButton = ({ position }) => {
  let handleMouseDown = event => {
    event.preventDefault();
  };

  return (
    <div
      id="addCommentButton"
      className={styles.addComment}
      onMouseDown={handleMouseDown}
      style={{ top: `${position - 10}px` }}
    >
      <MLIcon
        className={styles.commentIcon}
        title="comment"
        type="comment"
        width="22"
        height="22"
        viewBox="0 0 24 24"
      />
      Add a Comment
    </div>
  );
};

AddCommentButton.propTypes = {
  position: PropTypes.number
};

export default AddCommentButton;
