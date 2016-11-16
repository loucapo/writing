import React from 'react';
import endComment from './endComment.css';

const EndComment = () => {
  return (
    <div className={endComment.endCommentContainer}>
      <h4>End Comment (Optional)</h4>
      <textarea>Write any concluding remarks you want to tell the student...</textarea>
    </div>
  );
};

export default EndComment;

