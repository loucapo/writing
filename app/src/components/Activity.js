import React, {PropTypes} from 'react';

import AssignmentSection from './AssignmentSection/AssignmentSection';
import DraftSection from './DraftSection/DraftSection';

const Activity = ({activity, drafts}) => {
  if (!activity) {
    return null;
  }
  return (
    <div>
      <AssignmentSection activity={activity} />
      <DraftSection drafts={drafts} />
    </div>
  );
};

Activity.propTypes = {
  activity: PropTypes.object,
  drafts: PropTypes.array
};


export default Activity;
