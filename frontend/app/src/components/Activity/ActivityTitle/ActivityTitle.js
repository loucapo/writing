import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MLIcon from 'ml-react-cdl-icons';
import {
  MLButton
} from './../../MLComponents/index';

import styles from './activityTitle.css';

class ActivityTitle extends Component {
  state = {
    editable: false,
    title: this.props.title
  };

  toggleEditable = () => {
    this.setState({editable: !this.state.editable});
  };

  handleCancel = () => {
    this.setState({
      editable: false,
      title: this.props.title
    });
  };

  handleSave = () => {
    this.props.updateActivityTitle(this.props.activityId, {title: this.state.title});
    this.setState({editable: false});
  };

  handleChange = (event) => {
    this.setState({title: event.target.value});
  };

  render() {
    let charCount = 140 - this.state.title.length;
    let charCountClass = (charCount === 0) ? styles.charLimit : '';

    return (
      <div className={styles.titleContainer}>
        {(this.state.editable)
          ? <div data-id="activity-title-editField" className={styles.title}>
            <input
              className={styles.editField}
              type="text"
              value={this.state.title}
              onChange={this.handleChange}
              maxLength="140"
            />
            <div className="flex">
              <MLButton
                title="Cancel"
                dataId="title-cancel"
                handleClick={this.handleCancel}
                bordered={true}
              />
              <MLButton
                title="Save"
                dataId="title-save"
                handleClick={this.handleSave}
              />
            </div>
          </div>
          : <div data-id="activity-title" className={styles.title}>
            {this.state.title}
            <a onClick={this.toggleEditable}>
              <MLIcon
                className={styles.editIcon}
                title="edit"
                type="edit"
                width="18"
                height="19"
                viewBox="0 0 24 24"
              />
            </a>
          </div>
        }

        <div className={styles.subheader}>
          <div data-id="activity-type" className={styles.type}>
            Drafting and Revising Activity
          </div>

          {(this.state.editable)
            ? <div data-id="char-limit-count" className={charCountClass}>
              {charCount} characters left
            </div>
          : null
          }
        </div>
      </div>
    );
  }
}

ActivityTitle.propTypes = {
  activityId: PropTypes.string,
  title: PropTypes.string,
  updateActivityTitle: PropTypes.func
};

export default ActivityTitle;
