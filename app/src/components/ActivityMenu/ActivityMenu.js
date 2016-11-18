import React, { Component, PropTypes } from 'react';

import DraftSection from '../DraftSection/DraftSection';
import SubmissionSection from '../SubmissionSection/SubmissionSection';
import activityMenu from './activityMenu.css';

class ActivityMenu extends Component {
  constructor() {
    super();
    this.renderContent = this.renderContent.bind(this);
    this.toggleSelection = this.toggleSelection.bind(this);
    this.state = {
      toggle: 'drafts'
    };
  }

  toggleSelection(selection, e) {
    e.preventDefault();
    this.setState({
      toggle: selection
    });
  }

  renderContent() {
    if (this.state.toggle === 'drafts') {
      return (<DraftSection drafts={this.props.drafts} />);
    }
    return (<SubmissionSection />);
  }

  render() {
    return (
      <div>
        <header data-id="activity-menu" className={activityMenu.container}>
          <div className={ (this.state.toggle === 'drafts') ? activityMenu.active : '' }>
            <a data-id="drafts" href="#" onClick={x => this.toggleSelection('drafts', x)}>Drafts</a>
          </div>
          <div className={ (this.state.toggle === 'submissions') ? activityMenu.active : '' }>
            <a data-id="student-submissions" href="#" onClick={x => this.toggleSelection('submissions', x)}>Student Submissions</a>
          </div>
        </header>
        { this.renderContent() }
      </div>);
  }
}

ActivityMenu.propTypes = {
  drafts: PropTypes.object
};

export default ActivityMenu;
