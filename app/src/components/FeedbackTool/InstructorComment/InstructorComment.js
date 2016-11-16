import React from 'react';
import instructorComment from './instructorComment.css';

const InstructorComment = () => {
  return (
    <div className={instructorComment.instructorCommentContainer}>
      <h5>End Comment (Optional)</h5>
      <textarea>Write any concluding remarks you want to tell the student...</textarea>
    </div>
  );
};

export default InstructorComment;

