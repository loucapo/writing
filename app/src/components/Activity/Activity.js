import React, {PropTypes} from 'react';
import ActivitySummary from '../ActivitySummary/ActivitySummary';
import ActivityMenu from '../ActivityMenu/ActivityMenu';
import activityCss from './activity.css';

const Activity = ({activity, drafts}) => {
  if (!activity || drafts.length <= 0) {
    return null;
  }
  return (
    <div className={activityCss.activity_container}>
      <ActivitySummary activity={activity} />
      <ActivityMenu drafts={drafts} />
    </div>
  );
};

Activity.propTypes = {
  activity: PropTypes.object,
  drafts: PropTypes.array
};


export default Activity;
