import React, {PropTypes} from 'react';
import ActivitySummary from '../ActivitySummary/ActivitySummary';
import ActivityMenu from '../ActivityMenu/ActivityMenu';
import activityCss from './activity.css';
import coreCss from '../../styles/core.css';

const Activity = ({activity, drafts}) => {
  if (!activity || drafts.length <= 0) {
    return null;
  }
  return (
    <div className={activityCss.activity_container}>
      <ActivitySummary activity={activity} />
      <div className={ coreCss.panel }>
        <ActivityMenu drafts={drafts} />
      </div>
    </div>
  );
};

Activity.propTypes = {
  activity: PropTypes.object,
  drafts: PropTypes.array
};


export default Activity;
