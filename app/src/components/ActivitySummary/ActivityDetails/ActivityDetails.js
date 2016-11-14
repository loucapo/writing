import React, {PropTypes, Component} from 'react';

import activityDetails from './activityDetails.css';
import MLModal from './../../MLModal/MLModal';

class ActivityDetails extends Component {
  constructor() {
    super();
    this.state = {isOpen:false};
    this.onClick = this.onClick.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  onClick() {
    this.setState({isOpen:true})
  }

  onClose() {
    this.setState({isOpen:false})
  }

  render() {
    const {activity} = this.props;
    return (
      <div className={ activityDetails.summary }>
        <button onClick={this.onClick} > click me </button>
        <h1 data-id="activity-title" className={ activityDetails.title }>
          {activity.title}
        </h1>
        <div data-id="activity-desc" className={activityDetails.typeAndCourse}>
          {activity.desc}
        </div>
        <div data-id="activity-rhetoric-rubric" className={activityDetails.rhetoricAndRubric}>
      <span className={activityDetails.label}>
      Rhetoric Genre:
      </span>
          <span data-id="activity-rhetorical-genre">{activity.rhetoricalGenre}</span>
          <br />
      <span className={activityDetails.label}>
    Rubric:
      </span>
          <a data-id="activity-rubric" href="#">{activity.rubric}</a>
        </div>
        <div className={ activityDetails['prompt-summary'] }>
          <div className={activityDetails.label}>
            Prompt:
          </div>
          <span data-id="activity-prompt">{activity.prompt}</span>
        </div>
        <a data-id="edit-activity" href="#">Edit Activity Information</a>
        <MLModal titleBar={{enable:true}} isOpen={this.state.isOpen} closeModal={this.onClose} >
          <input type="textarea" />
        </MLModal>
      </div>
    )
  };
}

ActivityDetails.propTypes = {
  activity: PropTypes.object.isRequired
};

export default ActivityDetails;
