import React, {PropTypes} from 'react';
import Header from '../Header/Header';
import MLAlert from '../MLAlert/MLAlert';
import MLCard from '../MLCard/MLCard';
import ActivityTitle from './ActivityTitle/ActivityTitle';
import ActivityMenu from './ActivityMenu/ActivityMenu';
import PromptContainer from 'Containers/PromptContainer';
import RubricContainer from 'Containers/RubricContainer';

import styles from './activity.css';

const Activity = ({role, activity, drafts}) => {
  return (
    <div className={styles.page}>
      <Header title={activity.course} />

      <div className={styles.container}>
        <div data-id="created-activity-alert" className={styles.spacer}>
          <MLAlert
            message={'Activity created on ' + activity.createdDate +
              '. This is in draft mode and will not be visible to students until you assign it.'}
            alertType="success"
            iconType="circle_check_outline"
          />

          <ActivityTitle role={role} title={activity.title} type={activity.type} />

          <MLCard type="prompt" title="Assignment Prompt" role={role}>
            <PromptContainer activityId={activity.id} />
          </MLCard>

          <MLCard type="rubric" title="Final Rubric" role={role} hideEdit={true}>
            <RubricContainer activityId={activity.id} />
          </MLCard>
        </div>

        <ActivityMenu drafts={drafts} role={role} />
      </div>
    </div>
  );
};

Activity.propTypes = {
  role: PropTypes.string,
  activity: PropTypes.object,
  drafts: PropTypes.array
};

export default Activity;
