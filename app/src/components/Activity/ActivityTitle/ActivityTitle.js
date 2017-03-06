import React, {PropTypes} from 'react';
import InstructorControlsContainer from '../../InstructorControlsContainer/InstructorControlsContainer';
import MLIcon from 'ml-react-cdl-icons';

import styles from './activityTitle.css';

const ActivityTitle = ({role, title, type}) => {

  return (

    <div className={styles.titleContainer}>
      <div data-id="activity-title" className={styles.title}>
        {title}

        <InstructorControlsContainer role={role}>
          <MLIcon
            className={styles.editIcon}
            title="edit"
            type="edit"
            width="18"
            height="19"
            viewBox="0 0 24 24"
          />
        </InstructorControlsContainer>

      </div>

      <div data-id="activity-type" className={styles.type}>
        {type || 'Drafting and Revising Activity'}
      </div>
    </div>

  );
};

ActivityTitle.propTypes = {
  role: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string
};

export default ActivityTitle;
