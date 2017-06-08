import React from 'react';
import PropTypes from 'prop-types';
import { ActivityHeaderDisplay, ActivityTitleDisplay, ActivityPromptDisplay } from '../index';
import { DraftListDisplay } from '../../Draft';
import { ActivityRubricDisplayContainer } from '../../../containers';
import { MLMessage } from '../../MLComponents';
import styles from './activityDisplay.css';

const ActivityDisplay = ({ activityId, activity, drafts, submitDraftMessage }) => (
  <div className={styles.page}>
    <ActivityHeaderDisplay title={activity.course} activityId={activityId} drafts={drafts} />
    <div className={styles.container}>

      <div className={styles.spacer}>

        {submitDraftMessage && submitDraftMessage.status ?
          <MLMessage
            options={{
              id: '09876',
              message: `${submitDraftMessage.draftName} was successfully submitted on ${submitDraftMessage.modified}.`,
              type: submitDraftMessage.status || 'default',
              icon: 'check'
            }}
          />
          : null}

        <ActivityTitleDisplay title={activity.title} type={activity.type} />

        {activity.prompt ? <ActivityPromptDisplay prompt={activity.prompt} /> : null}

        {activity.rubricId ? <ActivityRubricDisplayContainer rubricId={activity.rubricId} /> : null}

        <div className={styles.studentDraftSpacer}>
          <DraftListDisplay drafts={drafts} activityId={activity.activityId} />
        </div>
      </div>
    </div>
  </div>
);

ActivityDisplay.propTypes = {
  activityId: PropTypes.string,
  drafts: PropTypes.array,
  activity: PropTypes.object,
  submitDraftMessage: PropTypes.object
};

export default ActivityDisplay;
