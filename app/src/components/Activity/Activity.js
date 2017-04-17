import React, {PropTypes} from 'react';
import moment from 'moment';
import Header from '../Header/Header';
import MLAlert from '../MLAlert/MLAlert';
import ActivityTitle from './ActivityTitle/ActivityTitle';
import ActivityMenu from './ActivityMenu/ActivityMenu';
import PromptContainer from 'Containers/PromptContainer';
import RubricSectionContainer from 'Containers/RubricSectionContainer';

import styles from './activity.css';

const Activity = ({role, activity, draftCount}) => (
  <div className={styles.page}>
    <Header title={activity.course} />
    <div className={styles.container}>
      <div data-id="created-activity-alert" className={styles.spacer}>
        <MLAlert
          message={'Activity created on ' + moment(activity.createdDate).format('MMMM Do, YYYY') +
          '. This is in draft mode and will not be visible to students until you assign it.'}
          alertType="success"
          iconType="circle_check_outline"
        />

        <ActivityTitle role={role} title={activity.title} type={activity.type} />

        <PromptContainer activityId={activity.id} role={role} />

        <RubricSectionContainer activityId={activity.id} rubricId={activity.rubricId} role={role} />

      </div>

      <ActivityMenu draftCount={draftCount} activityId={activity.id} />
    </div>
  </div>
);

Activity.propTypes = {
  role: PropTypes.string.isRequired,
  activity: PropTypes.object,
  draftCount: PropTypes.number,
  updateActivityRubric: PropTypes.func
};

export default Activity;
