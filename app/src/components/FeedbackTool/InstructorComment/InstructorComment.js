import React from 'react';
import instructorComment from './instructorComment.css';

const InstructorComment = () => {
  return (
    <div className={instructorComment.instructorCommentContainer}>
      <h4>End Comment (Optional)</h4>
      <textarea>Write any concluding remarks you want to tell the student...</textarea>
    </div>
  );
};

export default InstructorComment;

