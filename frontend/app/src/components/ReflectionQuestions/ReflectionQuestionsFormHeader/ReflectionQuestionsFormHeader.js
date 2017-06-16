import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';
import { MLButton, MLDialog } from './../../MLComponents/index';

import styles from './reflectionQuestionsFormHeader.css';

class Header extends Component {
  state = {
    showDialog: false
  };

  closeDialog = () => {
    this.setState({
      showDialog: false
    });
  };

  checkForUnsavedChanges = () => {
    if (this.props.unsavedAnswers) {
      this.setState({
        showDialog: true
      });
    } else {
      browserHistory.push(`/activity/${this.props.activityId}/draft/${this.props.draftId}`);
    }
  };

  render() {
    return (
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.flex}>
            <div className={styles.linkContainer}>
              <span
                onClick={this.checkForUnsavedChanges}
                data-id="return-to-draft-from-reflection-questions"
                className={styles.draftLink}
              >
                View Draft
              </span>
            </div>
            <MLDialog
              title={'Do you want to leave this page?'}
              message={
                'Any unsaved work will be lost if you leave the page. Stay on the page and use the save button to save your work.'
              }
              show={this.state.showDialog}
              close={this.closeDialog.bind(this)}
            >
              <MLButton
                title="Leave"
                bordered={true}
                color="red"
                dataId="reflection-questions-dialog-leave"
                link={`/activity/${this.props.activityId}/draft/${this.props.draftId}`}
              />
              <MLButton
                title="Stay"
                handleClick={this.closeDialog.bind(this)}
                dataId="reflection-questions-dialog-stay"
              />
            </MLDialog>
            <MLButton title="Save" dataId="save-draft" bordered={true} handleClick={this.props.handleSave} />
            <MLButton
              title="Submit Draft"
              dataId="submit-draft"
              handleClick={this.props.handleSubmit}
              disabled={!this.props.questionsAreComplete}
            />
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  activityId: PropTypes.string,
  draftId: PropTypes.string,
  questionsAreComplete: PropTypes.bool,
  handleSave: PropTypes.func,
  handleSubmit: PropTypes.func,
  unsavedAnswers: PropTypes.bool
};

export default Header;
