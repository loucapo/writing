import React, {PropTypes} from 'react';

import actionButton from './actionButton.css';

const ActionButton = (props) => {
  return (
    <div className={ actionButton['action-button-container'] }>
      <div className={ actionButton['action-button-wrapper'] }>
        <button className={ actionButton['action-button'] }>{props.content}</button>
      </div>
    </div>
  );
};

ActionButton.propTypes = {
  content: PropTypes.string.isRequired
};

export default ActionButton;
