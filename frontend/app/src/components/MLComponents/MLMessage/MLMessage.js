import React from 'react';
import PropTypes from 'prop-types';
import MLIcon from 'ml-react-cdl-icons';
import { Link } from 'react-router';
import styles from './mlMessage.css';

const MLMessage = ({ options }) => {
  return (
    <div className={styles[`message_${options.type || 'default'}`]}>
      <div className={styles.leftContainer}>
        {options.icon ?
          <MLIcon
            className={styles[`message_icon_${options.type || 'default'}`]}
            title={options.type || 'default'}
            type={options.icon}
            width="24"
            height="24"
            viewBox="0 0 24 20"
          />
          : null
        }
        <span className={styles.message}>
          {options.message}
        </span>
      </div>

      {options.link ?
        <Link to={options.link} data-id="dialog-link">
          {options.linkText}
        </Link> :
        null
      }
    </div>
  );
};

MLMessage.propTypes = {
  options: PropTypes.object
};

export default MLMessage;
