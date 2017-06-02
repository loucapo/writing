import React from 'react';
import { MLButton } from './../../MLComponents/index';
import MLIcon from 'ml-react-cdl-icons';

import styles from './activityHeader.css';

const ActivityHeader = () => {
  return (
    <header className={styles.header}>
      <div data-id="header-back-button" className={styles.leftContainer}>
        <MLIcon
          className={styles.arrowIcon}
          title="arrow left"
          type="arrow_left"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        />
      </div>
      <div className={styles.rightContainer}>
        <MLButton title="Student Preview" dataId="student-preview" />
      </div>
    </header>
  );
};

export default ActivityHeader;
