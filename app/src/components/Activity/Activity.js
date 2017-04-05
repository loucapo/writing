import React, {Component, PropTypes} from 'react';
import moment from 'moment';
import Header from '../Header/Header';
import MLAlert from '../MLAlert/MLAlert';
import MLCard from '../MLCard/MLCard';
import MLIcon from 'ml-react-cdl-icons';
import ActivityTitle from './ActivityTitle/ActivityTitle';
import ActivityMenu from './ActivityMenu/ActivityMenu';
import PromptContainer from 'Containers/PromptContainer';
import RubricContainer from 'Containers/RubricContainer';

import styles from './activity.css';

class Activity extends Component {
  render() {
    let role = this.props.role;
    let activity = this.props.activity;
    let drafts = this.props.drafts;

    return (
      <div className={styles.page}>
        <Header title={activity.course} />

        <div className={styles.container}>
          <div data-id="created-activity-alert" className={styles.spacer}>
            <MLAlert
              message={'Activity created on ' + moment(activity.createdDate).format('MMMM Do, YYYY') +
                '. This is in draft mode and will not be visible to students until you assign it.'}
              alertType="success"
              iconType="circle_check_outline"
            />

            <ActivityTitle role={role} title={activity.title} type={activity.type} />

            <PromptContainer activityId={activity.id} role={role} />

            <MLCard type="rubric" title="Final Rubric" role={role}>
              <menu>
                <a data-id="rubric-delete">
                  <MLIcon
                    className={styles.deleteIcon}
                    title="trash"
                    type="trash"
                    width="18"
                    height="19"
                    viewBox="0 0 24 24"
                  />
                </a>
              </menu>
              <RubricContainer activityId={activity.id} />
            </MLCard>
          </div>

          <ActivityMenu drafts={drafts} role={role} openDraftFocusModal={this.props.openDraftFocusModal}/>
        </div>
      </div>
    );
  }
};

Activity.propTypes = {
  role: PropTypes.string,
  activity: PropTypes.object,
  drafts: PropTypes.array
};

export default Activity;
