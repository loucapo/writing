import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import ActivityTitleDisplay from './ActivityTitle/ActivityTitleDisplay';
import StudentPromptContainer from 'Containers/StudentPromptContainer';
import StudentRubricSectionContainer from 'Containers/StudentRubricSectionContainer';
import StudentDraftListContainer from './../../containers/StudentDraftListContainer';

import styles from './activity.css';

const StudentActivity = ({activity}) => (
  <div className={styles.page}>
    <Header title={activity.course} />
    <div className={styles.container}>
      <div className={styles.spacer}>

        <ActivityTitleDisplay title={activity.title} type={activity.type} />

        {
          activity.prompt ?
            <StudentPromptContainer activityId={activity.activityId} />
          : null
        }

        {
          activity.rubricId ?
            <StudentRubricSectionContainer rubricId={activity.rubricId} />
          : null
        }

        <div className={styles.studentDraftSpacer}>
          <StudentDraftListContainer activityId={activity.activityId} />
        </div>
      </div>
    </div>
  </div>
);

StudentActivity.propTypes = {
  activity: PropTypes.object
};

export default StudentActivity;
