import React from 'react';
import PropTypes from 'prop-types';
import { DraftDisplay } from './../index';
import {
  MLButton,
  MLCard
} from './../../MLComponents/index';

const StudentDraftDisplay = ({draft, finalDraft, activityId}) => {
  let cardTitle = finalDraft ? 'Final Paper' : 'Draft ' + (draft.index + 1);
  let buttonText = `Start ${cardTitle}`;
  if (draft.studentInfo && draft.studentInfo.status === 'submitted') {
    buttonText = `view ${cardTitle}`;
  } else if(draft.studentInfo && draft.studentInfo.status === 'submitted') {
    buttonText = `continue ${cardTitle}`;
  }

  let finalInstruct = draft.index > 0 && !draft.studentInfo
    ? `You will be able to view and start this draft once you've received feedback on Draft ${draft.index}`
    : '';

  return (
    <MLCard
      key={draft.draftId}
      type="draft"
      title={cardTitle}
      disabled={!draft.studentInfo} >
      <MLButton
        id="startDraft"
        title={buttonText}
        dataId="start-draft"
        disabled={!draft.studentInfo}
        link={draft.studentInfo ? `/activity/${activityId}/draft/${draft.draftId}` : ''}
      />
      <DraftDisplay
        activityId={activityId}
        cardTitle={cardTitle}
        draft={draft}
        key={draft.draftId}
        draftNote={finalInstruct}
        disabled={!draft.studentInfo}
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
