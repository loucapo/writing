import React, {PropTypes} from 'react';
import ActivitySummary from '../ActivitySummary/ActivitySummary';
import ActivityMenu from '../ActivityMenu/ActivityMenu';
import Rubric from '../Rubric/Rubric';
import MLIcon from 'ml-react-cdl-icons';

import activityCss from './activity.css';
import coreCss from 'Styles/index.css';

const Activity = ({activity, drafts, rubric, selectCell}) => {
  if (!activity || drafts.length <= 0) {
    return null;
  }
  return (
    <div className={ activityCss.activityPage }>
      <header className={ activityCss.header }>
        <div className={ activityCss.headerContainer }>
          <div className={activityCss.leftArrowContainer}>
            <MLIcon
              className={activityCss.left_arrow}
              title="arrow left"
              fill="#ffffff"
              type="arrow_left"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            />
          </div>
          <div className={activityCss.leftSide}>
            <div data-id="course-name" className={ activityCss.courseName }>
              ENG 101: Introduction to Writing
            </div>
            <div data-id="activity-type" className={ activityCss.activity }>
              Argument Essay
            </div>
          </div>
          <div className={ activityCss.headerRight }>
            <div data-id="due-date" className={ activityCss.assignDate }>
              Assigned:  Mon. Feb 23, 2017
            </div>
          </div>
        </div>
      </header>
      <div className={activityCss.activity_container}>
        <ActivitySummary activity={activity} />
        <Rubric
          rubric={rubric}
          showRubric={false}
          selectCell={selectCell}
          showHeaderOnly={true}
        />
        <div className={ coreCss.panel }>
          <ActivityMenu drafts={drafts} />
        </div>
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
