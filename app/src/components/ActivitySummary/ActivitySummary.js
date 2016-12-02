import React, {PropTypes} from 'react';

import ActivityDetails from './ActivityDetails/ActivityDetails';

import activitySummary from './activitySummary.css';

const ActivitySummary = ({activity}) => {
  return (
    <section className={ activitySummary.wrapper }>
      <ActivityDetails activity={activity} />
    </section>
  );
};

ActivitySummary.propTypes = {
  activity: PropTypes.object
};

export default ActivitySummary;
