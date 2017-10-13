import React from 'react';
import PropTypes from 'prop-types';
import MLIcon from 'ml-react-cdl-icons';
import moment from 'moment';
import { DraftDisplay } from '../index';
import { MLButton, MLCard } from '../../MLComponents';
import styles from './studentDraftDisplay.css';

const StudentDraftDisplay = ({ draft, activityId }) => {
  let link = `/activity/${activityId}/draft/${draft.draftId}`;
  if (draft.studentInfo.reviewStatus === 'submitted' || draft.studentInfo.reviewStatus === 'viewed') {
    link = `/studentDraft/${draft.studentInfo.studentDraftId}/feedbackdisplay`;
  } else if (draft.studentInfo.status === 'submitted') {
    link = `/studentDraft/${draft.studentInfo.studentDraftId}/display`;
  }

  return (
    <MLCard key={draft.draftId} type="draft" title={draft.studentInfo.title} disabled={draft.studentInfo.disabled}>
      <div className={styles.side}>
        {draft.studentInfo.status === 'submitted'
          ?
            <span data-id="submitted-date" className={styles.submittedDate}>
              <MLIcon
                className={styles.checkIcon}
                title="check"
                type="check"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              />
              <strong>Submitted</strong> {moment(draft.submittedDate).format('MMMM Do, YYYY')}
            </span>
          : null}
        {!draft.studentInfo.disabled ?
          <MLButton
            id="startDraft"
            title={draft.studentInfo.buttonText}
            dataId="start-draft"
            bordered={draft.studentInfo.reviewStatus === 'submitted' || draft.studentInfo.reviewStatus === 'viewed'}
            disabled={draft.studentInfo.disabled}
            link={link}
          />
          : null
        }
      </div>
      <DraftDisplay
        activityId={activityId}
        cardTitle={draft.studentInfo.title}
        draft={draft}
        key={draft.draftId}
        disabled={draft.studentInfo.disabled}
      />
    </MLCard>
  );
};

StudentDraftDisplay.propTypes = {
  draft: PropTypes.object,
  activityId: PropTypes.string,
  studentActivityId: PropTypes.string
};

export default StudentDraftDisplay;
