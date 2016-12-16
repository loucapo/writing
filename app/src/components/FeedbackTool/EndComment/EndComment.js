import React from 'react';
import ActionButton from '../../ActionButton/ActionButton';
import coreCss from './../../../styles/core.css';
import endComment from './endComment.css';
import actionButton from '../../ActionButton/actionButton.css';

const EndComment = () => {
  return (
    <div data-id="endComment" className={ coreCss.panel }>
      <h1><span>End Comment <span className={ endComment.optional }>(optional)</span></span></h1>
      <div className={ endComment.form }>
        <textarea placeholder="Add comment" />
        <ActionButton dataId="end-comment-add-button" css={ actionButton.action_button_blue } content="Add Comment" />
      </div>
    </div>
  );
};

export default EndComment;

