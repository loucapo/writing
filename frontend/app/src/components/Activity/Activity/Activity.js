import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  ActivityHeader,
  ActivityMenu
} from './../index';

import {
  ActivityTitleContainer,
  ActivityPromptContainer,
  ActivityRubricSectorContainer
} from './../../../containers/index';

import { MLMessage } from './../../MLComponents/index';

import styles from './activity.css';

const Activity = ({activity, draftCount}) => (
  <div className={styles.page}>
    <ActivityHeader title={activity.course} />
    <div className={styles.container}>
      <div data-id="created-activity-alert" className={styles.spacer}>
        <MLMessage
          message={'Activity created on ' + moment(activity.createdDate).format('MMMM Do, YYYY') +
          '. This is in draft mode and will not be visible to students until you assign it.'}
          messageType="success"
          iconType="check"
        />

        <ActivityTitleContainer activityId={activity.activityId} />

        <ActivityPromptContainer activityId={activity.activityId} />

        <ActivityRubricSectorContainer activityId={activity.activityId} rubricId={activity.rubricId} />

      </div>

      <ActivityMenu draftCount={draftCount} activityId={activity.activityId} />
    </div>
  </div>
);

Activity.propTypes = {
  activity: PropTypes.object,
  draftCount: PropTypes.number,
  updateActivityRubric: PropTypes.func
};

export default Activity;
