import React, {PropTypes} from 'react';

import ActivitySummary from './ActivitySummary/ActivitySummary';
import ActivityMenu from './ActivityMenu/ActivityMenu';

const Activity = ({activity, drafts}) => {
  if (!activity || drafts.length <= 0) {
    return null;
  }
  return (
    <div>
      <ActivitySummary activity={activity} />
      <ActivityMenu />
    </div>
  );
};

Activity.propTypes = {
  activity: PropTypes.object,
  drafts: PropTypes.array
};


export default Activity;
