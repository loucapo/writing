import React from 'react';
import PropTypes from 'prop-types';
import { ActivityHeaderDisplay, ActivityTitleDisplay, ActivityPromptDisplay, ActivityRubricDisplay } from '../index';
import { DraftListDisplay } from '../../Draft';
import { MLMessage } from '../../MLComponents';
import styles from './activityDisplay.css';

const ActivityDisplay = ({ activityId, activity, drafts, draftMessage }) => {
  const getLatestDraftWithFeedback = () => {
    let reversedDrafts = drafts.slice().reverse();
    return reversedDrafts.find(draft => draft.studentInfo.reviewStatus === 'submitted');
  };

  const renderMessages = message => {
    let draftWithFeedback = getLatestDraftWithFeedback();

    if (message && message.status === 'success') {
      return (
        <MLMessage
          options={{
            id: '09876',
            message: `${message.draftName} was successfully submitted on ${message.modified}.`,
            type: message.status,
            icon: 'check'
          }}
        />
      );
    } else if (draftWithFeedback) {
      return (
        <MLMessage
          options={{
            id: '998877',
            message: `Your instructor has submitted feedback for your ${draftWithFeedback.studentInfo.title}.`,
            link: `/studentDraft/${draftWithFeedback.studentInfo.studentDraftId}/feedbackdisplay`,
            linkText: 'View Feedback',
            type: 'default'
          }}
        />
      );
    }
  };

  return (
    <div className={styles.page}>
      <ActivityHeaderDisplay title={activity.course} activityId={activityId} drafts={drafts} />
      <div className={styles.container}>

        <div className={styles.spacer}>
          {renderMessages(draftMessage)}

          <ActivityTitleDisplay title={activity.title} type={activity.type} />

          <ActivityPromptDisplay prompt={activity.prompt} />

          {activity.rubricId ? <ActivityRubricDisplay /> : null}

          <div className={styles.studentDraftSpacer}>
            <DraftListDisplay drafts={drafts} activityId={activity.activityId} />
          </div>
        </div>
      </div>
    </div>
  );
};

ActivityDisplay.propTypes = {
  activityId: PropTypes.string,
  drafts: PropTypes.array,
  activity: PropTypes.object,
  draftMessage: PropTypes.object,
  reviewMessage: PropTypes.object
};

export default ActivityDisplay;
