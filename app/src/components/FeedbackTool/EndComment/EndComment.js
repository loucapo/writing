import React from 'react';
import endComment from './endComment.css';

const EndComment = () => {
  return (
    <div data-id="endComment" className={endComment.endCommentContainer}>
      <h4>End Comment (Optional)</h4>
      <textarea placeholder="Write any concluding remarks you want to tell the student..."/>
    </div>
  );
};

export default EndComment;

