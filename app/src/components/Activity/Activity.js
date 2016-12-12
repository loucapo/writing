import React, {PropTypes} from 'react';
import ActivitySummary from '../ActivitySummary/ActivitySummary';
import ActivityMenu from '../ActivityMenu/ActivityMenu';
import activityCss from './activity.css';
import coreCss from '../../styles/core.css';
import Rubric from '../Rubric/Rubric';

const Activity = ({activity, drafts, rubric, selectCell}) => {
  if (!activity || drafts.length <= 0) {
    return null;
  }
  return (
    <div className={activityCss.activity_container}>
      <ActivitySummary activity={activity} />
      <Rubric
        rubric={rubric}
        showRubric={false}
        selectCell={selectCell}
      />
      <div className={ coreCss.panel }>
        <ActivityMenu drafts={drafts} />
      </div>
    </div>
  );
};

Activity.propTypes = {
  activity: PropTypes.object,
  rubric: PropTypes.object,
  drafts: PropTypes.array,
  selectCell: PropTypes.func
};


export default Activity;
