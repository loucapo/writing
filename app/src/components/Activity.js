import React, {PropTypes} from 'react';

import Header from './Header/Header';
import AssignmentSection from './AssignmentSection/AssignmentSection';
import DraftSection from './DraftSection/DraftSection';

const Activity = props => {
  return (
    <div className="app-wrapper">
      <Header />
      <AssignmentSection Activity={props.Activity} />
      <DraftSection Drafts={props.Drafts} />
    </div>
  );
};

Activity.propTypes = {
  Activity: PropTypes.object,
  Drafts: PropTypes.array
};


export default Activity;
