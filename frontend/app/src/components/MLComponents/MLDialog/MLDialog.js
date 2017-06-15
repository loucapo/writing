import React, {PropTypes} from 'react';
import MLIcon from 'ml-react-cdl-icons';

import styles from './mlDialogStyles.css';

const MLDialog = ({message, children, title, show, close}) => {
  show = show || false;
  let className = styles.alert_container + ((show) ? ' ' + styles.alert_container_show : '');

  let closeDialog = (confirm) => {
    confirm = confirm || false;
    close(confirm);
  };

  return (
    <div className={className}>
      <div className={styles.alert_overlay}>
        <div className={styles.alert}>
          <div className={styles.heading}>
            {title}
            <span onClick={closeDialog}>
              <MLIcon
                className={styles.closeIcon}
                title="close"
                type="x"
                width="18"
                height="19"
                viewBox="0 0 24 24"
              />
            </span>
          </div>
          <div className={styles.content}>
            <div className={styles.message}>
              {message}
            </div>
            <div className={styles.buttons}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MLDialog.propTypes = {
  message: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  title: PropTypes.string,
  show: PropTypes.bool,
  close: PropTypes.func
};

export default MLDialog;
