import React, {PropTypes} from 'react';

import actionButton from './actionButton.css';

const ActionButton = (props) => {
  return (
    <div className={actionButton.action_button_container + ' ' + props.css}>
      <div className={actionButton.action_button_wrapper}>
        <button data-id={props.dataId} className={actionButton.action_button}>{props.content}</button>
      </div>
    </div>
  );
};

ActionButton.propTypes = {
  content: PropTypes.string.isRequired,
  css: PropTypes.string,
  dataId: PropTypes.string
};

export default ActionButton;
