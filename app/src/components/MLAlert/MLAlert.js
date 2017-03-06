import React, {PropTypes} from 'react';
import MLIcon from 'ml-react-cdl-icons';

import styles from './mlAlertStyles.css';

const Alert = ({message, alertType, iconType}) => {

  return (
    <div className={ styles['alert_' + (alertType || 'default')] }>
      <span className={ styles['alert_icon_' + (alertType || 'default')] }>
        <MLIcon
          title={alertType}
          type={iconType || 'help_outline'}
          width="24"
          height="24"
          viewBox="0 0 24 20"
        />
      </span>
      <span className={ styles.alert_message }>
        {message}
      </span>
    </div>
  );
};

Alert.propTypes = {
  message: PropTypes.string,
  alertType: PropTypes.string,
  iconType: PropTypes.string
};

export default Alert;
