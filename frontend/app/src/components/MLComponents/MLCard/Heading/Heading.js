import React from 'react';
import PropTypes from 'prop-types';
import MLIcon from 'ml-react-cdl-icons';

import styles from './heading.css';

const Heading = ({disabled, type, title, children}) => {
  let disabledClass = (disabled) ? ` ${styles.collapseIconDisabled}` : '';
  let iconClass = `${styles.collapseIcon}${disabledClass}`;

  return (
    <h1 className={styles.heading} data-id={`${type}-section`}>
      <span>
        <MLIcon
          className={iconClass}
          title="minus"
          type="minus"
          width="12"
          height="12"
          viewBox="0 0 24 24"
        />
        <span className={styles.headingText}>
          {title}
        </span>
      </span>
      {children}
    </h1>);
};

Heading.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  options: PropTypes.object,
  children: PropTypes.object,
  disabled: PropTypes.bool
};

export default Heading;
