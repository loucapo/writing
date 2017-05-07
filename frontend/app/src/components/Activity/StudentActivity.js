import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header/StudentHeader';
import ActivityTitleDisplay from './ActivityTitle/ActivityTitleDisplay';
import StudentPromptContainer from 'Containers/StudentPromptContainer';
import StudentRubricSectionContainer from 'Containers/StudentRubricSectionContainer';
import StudentDraftListContainer from './../../containers/StudentDraftListContainer';

import styles from './activity.css';

const StudentActivity = ({activity, drafts}) => (
  <div className={styles.page}>
    <Header
      title={activity.course}
      activityId={activity.activityId}
      drafts={drafts}
    />
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
  studentActivityId: PropTypes.string,
  drafts: PropTypes.array,
  activity: PropTypes.object
};

export default StudentActivity;
