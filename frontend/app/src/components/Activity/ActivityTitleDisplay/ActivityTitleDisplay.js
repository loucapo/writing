import React from 'react';
import PropTypes from 'prop-types';

import styles from './activityTitleDisplay.css';

const ActivityTitleDisplay = ({title, type}) => {

  return (

    <div className={styles.titleContainer}>
      <div data-id="activity-title" className={styles.title}>
        {title}
      </div>

      <div data-id="activity-type" className={styles.type}>
        {type || 'Writing Activity'}
      </div>
    </div>

  );
};

ActivityTitleDisplay.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string
};

export default ActivityTitleDisplay;
