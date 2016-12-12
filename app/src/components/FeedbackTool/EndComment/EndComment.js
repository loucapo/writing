import React from 'react';
import coreCss from './../../../styles/core.css';
import endComment from './endComment.css';

const EndComment = () => {
  return (
    <div data-id="endComment" className={ coreCss.panel }>
      <h1><span>End Comment <span className={ endComment.optional }>(optional)</span></span></h1>
      <div className={ endComment.form }>
        <textarea placeholder="Add comment" />
      </div>
    </div>
  );
};

export default EndComment;

