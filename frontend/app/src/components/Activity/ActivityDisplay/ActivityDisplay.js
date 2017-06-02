import React from 'react';
import PropTypes from 'prop-types';

import {
  ActivityHeaderDisplay,
  ActivityTitleDisplay,
  ActivityPromptDisplay
} from './../index';

import {
  ActivityRubricDisplayContainer,
  DraftListDisplayContainer
} from './../../../containers/index';

import styles from './activityDisplay.css';

const ActivityDisplay = ({activityId, activity, drafts}) => (
  <div className={styles.page}>
    <ActivityHeaderDisplay
      title={activity.course}
      activityId={activityId}
      drafts={drafts}
    />
    <div className={styles.container}>
      <div className={styles.spacer}>

        <ActivityTitleDisplay title={activity.title} type={activity.type} />

        { activity.prompt
          ? <ActivityPromptDisplay prompt={activity.prompt} />
          : null }

        { activity.rubricId
          ? <ActivityRubricDisplayContainer rubricId={activity.rubricId} />
          : null }

        <div className={styles.studentDraftSpacer}>
          <DraftListDisplayContainer activityId={activity.activityId} />
        </div>
      </div>
    </div>
  </div>
);

ActivityDisplay.propTypes = {
  activityId: PropTypes.string,
  drafts: PropTypes.array,
  activity: PropTypes.object
};

export default ActivityDisplay;
