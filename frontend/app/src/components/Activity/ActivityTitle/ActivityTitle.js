import React from 'react';
import PropTypes from 'prop-types';
import MLIcon from 'ml-react-cdl-icons';

import styles from './activityTitle.css';

const ActivityTitle = ({title, type}) => {

  return (

    <div className={styles.titleContainer}>
      <div data-id="activity-title" className={styles.title}>
        {title}

        <MLIcon
          className={styles.editIcon}
          title="edit"
          type="edit"
          width="18"
          height="19"
          viewBox="0 0 24 24"
        />

      </div>

      <div data-id="activity-type" className={styles.type}>
        {type || 'Drafting and Revising Activity'}
      </div>
    </div>

  );
};

ActivityTitle.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string
};

export default ActivityTitle;
