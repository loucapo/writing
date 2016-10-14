import React, {PropTypes} from 'react';

import actionButton from './actionButton.css';

const ActionButton = (props) => {
  console.log('============ props ============');
  console.log(props);
  console.log('=================================');
  return (
    <div className={ actionButton['action-button-container'] + ' ' + props.css}>
      <div className={ actionButton['action-button-wrapper'] }>
        <button className={ actionButton['action-button'] }>{props.content}</button>
      </div>
    </div>
  );
};

ActionButton.propTypes = {
  content: PropTypes.string.isRequired,
  css: PropTypes.string
};

export default ActionButton;
