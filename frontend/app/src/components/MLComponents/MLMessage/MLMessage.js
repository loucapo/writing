import React from 'react';
import PropTypes from 'prop-types';
import MLIcon from 'ml-react-cdl-icons';

import styles from './mlMessageStyles.css';

const MLMessage = ({options}) => {

  return (
    <div className={ styles['message_' + (options.type || 'default')] }>
      <span className={ styles['message_icon_' + (options.type || 'default')] }>
        <MLIcon
          title={options.type || 'default'}
          type={options.icon || 'help_outline'}
          width="24"
          height="24"
          viewBox="0 0 24 20"
        />
      </span>
      <span className={ styles.message }>
        {options.message}
      </span>
    </div>
  );
};

MLMessage.propTypes = {
  options: PropTypes.object
};

export default MLMessage;
