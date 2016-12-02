import React, {PropTypes} from 'react';
import ActivityDetails from './ActivityDetails/ActivityDetails';
import ActionButton from '../ActionButton/ActionButton';
import activitySummary from './activitySummary.css';

const ActivitySummary = ({activity}) => {
  return (
    <section className={ activitySummary.wrapper }>
      <ActivityDetails activity={activity} />
      <ActionButton content="Assign to Student" />
    </section>
  );
};

ActivitySummary.propTypes = {
  activity: PropTypes.object
};

export default ActivitySummary;
