import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MLIcon from 'ml-react-cdl-icons';
import { MLButton } from '../../MLComponents';
import styles from './activityTitle.css';

class ActivityTitle extends Component {
  state = {
    title: this.props.title,
    editable: false,
    warning: false
  };

  toggleEditable = () => {
    this.setState({ editable: !this.state.editable });
  };

  handleCancel = () => {
    this.setState({
      title: this.props.title,
      editable: false,
      warning: false
    });
  };

  handleSave = () => {
    let trimmedTitle = this.state.title.trim();

    // Display warning if user is trying to save blank title.
    if (trimmedTitle === '') {
      this.setState({
        tite: this.props.title,
        warning: true
      });
      return;
    }

    this.props.updateActivityTitle(this.props.activityId, { title: trimmedTitle });
    this.setState({ title: trimmedTitle, editable: false });
  };

  handleChange = event => {
    this.setState({
      title: event.target.value,
      warning: false
    });
  };

  renderWarning = () => {
    let charCount = 140 - this.state.title.length;
    let charCountClass = charCount === 0 ? styles.redFont : '';

    if (this.state.editable) {
      return this.state.warning ?
        <span data-id="blank-title-warning" className={styles.redFont}>
          Title cannot be blank
        </span>
        :
        <span data-id="char-limit-count" className={charCountClass}>
          {charCount} characters left
        </span>;
    }
  };

  render() {
    let fieldBorder = this.state.warning ? styles.redBorder : null;
    return (
      <div className={styles.titleContainer}>
        {this.state.editable ?
          <div data-id="activity-title-editField" className={styles.title}>
            <input
              className={`${styles.editField} ${fieldBorder}`}
              type="text"
              value={this.state.title}
              onChange={this.handleChange}
              maxLength="140"
            />
            <div className="flex">
              <MLButton title="Cancel" dataId="title-cancel" handleClick={this.handleCancel} bordered={true} />
              <MLButton title="Save" dataId="title-save" handleClick={this.handleSave} />
            </div>
          </div>
          :
          <div data-id="activity-title" className={styles.title}>
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
          </div>}

        <div className={styles.subheader}>
          <div data-id="activity-type" className={styles.type}>
            Drafting and Revising Activity
          </div>

          {this.renderWarning()}
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
