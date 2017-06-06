import React from 'react';
import PropTypes from 'prop-types';
import { DraftDisplay } from './../index';
import {
  MLButton,
  MLCard
} from './../../MLComponents/index';

const StudentDraftDisplay = ({draft, activityId}) => {
  let finalInstruct = draft.index > 0 && !draft.studentInfo
    ? `You will be able to view and start this draft once you've received feedback on Draft ${draft.index}`
    : '';

  return (
    <MLCard
      key={draft.draftId}
      type="draft"
      title={draft.studentInfo.title}
      disabled={draft.studentInfo.disabled} >
      <MLButton
        id="startDraft"
        title={draft.studentInfo.buttonText}
        dataId="start-draft"
        disabled={draft.studentInfo.disabled}
        link={draft.studentInfo ? `/activity/${activityId}/draft/${draft.draftId}` : ''}
      />
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
