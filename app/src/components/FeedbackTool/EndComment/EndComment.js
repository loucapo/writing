import React from 'react';
import ActionButton from '../../ActionButton/ActionButton';
import MLIcon from 'ml-react-cdl-icons';
import classnames from 'classnames';

import coreCss from './../../../styles/index.css';
import endComment from './endComment.css';
import actionButton from './../../ActionButton/actionButton.css';

const EndComment = () => {
  return (
    <div data-id="endComment" className={ coreCss.panel }>
      <h1>
        <span>
          <MLIcon
            iconTitle="minus"
            iconFill="#000000" // black
            iconType="minus"
            iconWidth="12"
            iconHeight="12"
            viewBox="0 0 24 24"
          />
          <span className={ coreCss.headingText }>
            End Comment
          </span>
          <span className={ endComment.optional }>(optional)</span>
        </span>
      </h1>
      <div className={ endComment.form }>
        <textarea placeholder="Add comment" />
        <ActionButton
          dataId="end-comment-add-button"
          css={ classnames( actionButton.action_button_blue, endComment.button ) }
          content="Add Comment"
        />
      </div>
    </div>
  );
};

export default EndComment;

