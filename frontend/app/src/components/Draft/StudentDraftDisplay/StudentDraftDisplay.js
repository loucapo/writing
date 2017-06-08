import React from 'react';
import PropTypes from 'prop-types';
import MLIcon from 'ml-react-cdl-icons';
import moment from 'moment';
import { DraftDisplay } from '../index';
import { MLButton, MLCard } from '../../MLComponents';
import styles from './studentDraftDisplay.css';

const StudentDraftDisplay = ({ draft, activityId }) => {
  let finalInstruct = draft.index > 0 && !draft.studentInfo
    ? `You will be able to view and start this draft once you've received feedback on Draft ${draft.index}`
    : '';

  return (
    <MLCard key={draft.draftId} type="draft" title={draft.studentInfo.title} disabled={draft.studentInfo.disabled}>
      <div className={styles.side}>
        {draft.studentInfo.status === 'submitted' ?
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
        <MLButton
          id="startDraft"
          title={draft.studentInfo.buttonText}
          dataId="start-draft"
          disabled={draft.studentInfo.disabled}
          link={draft.studentInfo ? `/activity/${activityId}/draft/${draft.draftId}` : ''}
        />
      </div>
      <DraftDisplay
        activityId={activityId}
        cardTitle={draft.studentInfo.title}
        draft={draft}
        key={draft.draftId}
        draftNote={finalInstruct}
        disabled={draft.studentInfo.disabled}
      />
    </MLCard>
  );
};

StudentDraftDisplay.propTypes = {
  draft: PropTypes.object,
  activityId: PropTypes.string,
  finalDraft: PropTypes.bool
};

export default StudentDraftDisplay;
