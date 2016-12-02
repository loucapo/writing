import React, {PropTypes} from 'react';

import ActivityDetails from './ActivityDetails/ActivityDetails';


const ActivitySummary = ({activity}) => {
  return (
    <ActivityDetails activity={activity} />
  );
};

ActivitySummary.propTypes = {
  activity: PropTypes.object
};

export default ActivitySummary;
