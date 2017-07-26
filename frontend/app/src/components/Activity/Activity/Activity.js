import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { ActivityHeader, ActivityMenu } from '../index';
import { ActivityTitleContainer, ActivityPromptContainer, ActivityRubricSelectorContainer } from '../../../containers';
import { MLMessage } from '../../MLComponents';

import styles from './activity.css';

const Activity = ({ activity, draftCount, display }) => (
  <div className={styles.page}>
    <ActivityHeader title={activity.course} />
    <div className={styles.container}>
      <div data-id="created-activity-alert" className={styles.spacer}>
        <MLMessage
          options={{
            id: '12345',
            message: 'Activity created on ' +
              moment(activity.createdDate).format('MMMM Do, YYYY') +
              '. This is in draft mode and will not be visible to students until you assign it.',
            type: 'success',
            icon: 'check'
          }}
        />

        <ActivityTitleContainer activityId={activity.activityId} />

        <ActivityPromptContainer activityId={activity.activityId} />

        <ActivityRubricSelectorContainer activityId={activity.activityId} rubricId={activity.rubricId} />

      </div>

      <ActivityMenu draftCount={draftCount} activityId={activity.activityId} display={display} />
    </div>
  </div>
);

Activity.propTypes = {
  activity: PropTypes.object,
  draftCount: PropTypes.number,
  display: PropTypes.string
};

export default Activity;
