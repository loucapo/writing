import React, {PropTypes} from 'react';

import ActivitySummary from './ActivitySummary/ActivitySummary';
import DraftSection from './DraftSection/DraftSection';

const Activity = ({activity, drafts}) => {
  if (!activity || drafts.length <= 0) {
    return null;
  }
  return (
    <div>
      <ActivitySummary activity={activity} />
      <DraftSection drafts={drafts} />
    </div>
  );
};

Activity.propTypes = {
  activity: PropTypes.object,
  drafts: PropTypes.array
};


export default Activity;
