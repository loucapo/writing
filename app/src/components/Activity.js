import React, {PropTypes} from 'react';

import AssignmentSummary from './AssignmentSummary/AssignmentSummary';
import DraftSection from './DraftSection/DraftSection';

const Activity = ({activity, drafts}) => {
  if (!activity || drafts.length <= 0) {
    return null;
  }
  return (
    <div>
      <AssignmentSummary activity={activity} />
      <DraftSection drafts={drafts} />
    </div>
  );
};

Activity.propTypes = {
  activity: PropTypes.object,
  drafts: PropTypes.array
};


export default Activity;
