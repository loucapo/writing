import React, {Component, PropTypes} from 'react';
import DraftList from './../DraftList/DraftList';

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
    let drafts = this.props.drafts;
    let display = this.state.display;

    return (
      <div>
        <nav data-id="activity-menu" className={styles.container}>
          <div className={ (display === 'drafts') ? styles.active : '' }>
            <a data-id="drafts" onClick={x => this.toggleSelection('drafts', x)}>Drafts ({drafts.length || 1})</a>
          </div>

          <div className={ (display === 'submissions') ? styles.active : '' }>
            <a data-id="student-submissions" onClick={x => this.toggleSelection('submissions', x)}>Student Submissions</a>
          </div>
        </nav>

        <div className={styles.spacer}>
          {(display === 'drafts')
          ?
            <DraftList
              drafts={drafts}
              role={this.props.role}
              openModal={this.props.openModal}
            />
          : null}
        </div>
      </div>
    );
  }
}

ActivityMenu.propTypes = {
  drafts: PropTypes.array,
  role: PropTypes.string,
  openModal: PropTypes.func
};


export default ActivityMenu;
