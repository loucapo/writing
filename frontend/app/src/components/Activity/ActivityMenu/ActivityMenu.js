import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  DraftListContainer
} from './../../../containers/index';

import styles from './activityMenu.css';

class ActivityMenu extends Component {
  state = {
    display: 'drafts'
  };

  toggleSelection = (selection) => {
    this.setState({
      display: selection
    });
  };

  render = () => {
    let display = this.state.display;

    return (
      <div>
        <nav data-id="activity-menu" className={styles.container}>
          <div className={ (display === 'drafts') ? styles.active : '' }>
            <a data-id="drafts" onClick={x => this.toggleSelection('drafts', x)}>Drafts ({this.props.draftCount})</a>
          </div>

          <div className={ (display === 'submissions') ? styles.active : '' } >
            <a data-id="student-submissions" onClick={x => this.toggleSelection('submissions', x)}>Student Submissions</a>
          </div>
        </nav>

        <div className={styles.spacer}>
          {(display === 'drafts')
          ? <DraftListContainer activityId={this.props.activityId} />
          : null}
        </div>
      </div>
    );
  }
}

ActivityMenu.propTypes = {
  draftCount: PropTypes.number,
  activityId: PropTypes.string
};


export default ActivityMenu;
