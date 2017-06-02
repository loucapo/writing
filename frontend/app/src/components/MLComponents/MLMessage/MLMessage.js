import React, {PropTypes} from 'react';
import MLIcon from 'ml-react-cdl-icons';

import styles from './mlMessageStyles.css';

const MLMessage = ({message, messageType, iconType}) => {

  return (
    <div className={ styles['message_' + (messageType || 'default')] }>
      <span className={ styles['message_icon_' + (messageType || 'default')] }>
        <MLIcon
          title={messageType || 'default'}
          type={iconType || 'help_outline'}
          width="24"
          height="24"
          viewBox="0 0 24 20"
        />
      </span>
      <span className={ styles.message }>
        {message}
      </span>
    </div>
  );
};

MLMessage.propTypes = {
  message: PropTypes.string,
  messageType: PropTypes.string,
  iconType: PropTypes.string
};

export default MLMessage;
