import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MLButton } from '../../MLComponents';
import { CommentLevelButtons } from '../index.js';
import styles from './commentModal.css';

class OpenCommentModal extends Component {
  state = {
    comment: null,
    level: null
  };

  handleCommentChange = e => {
    this.setState({ comment: e.target.value });
  };

  handleLevelClick = (levelId) => {
    this.setState({
      level: levelId
    });
  };

  deleteTag = e => {
    e.preventDefault();
    this.setState({
      level: null
    });
  };

  handleCreateFeedback = (studentActivityId, studentDraftId) => {
    this.props.createFeedback(studentActivityId, studentDraftId, this.state.comment, this.state.level);
  };

  render() {
    return (
      <div>
        <div className={styles.header}>
          Open Comments
        </div>

        <CommentLevelButtons level={this.state.level} handleLevelClick={this.handleLevelClick} />

        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionHeaderText}>Additional Comment</div>
            <div className={styles.commentsHeadingLine} />
          </div>
          <textarea
            className={styles.commentTextWrapper}
            placeholder="Please leave additional feedback here"
            onKeyUp={this.handleCommentChange}
          />

          <div className={styles.controlsWrapper}>
            <div className={styles.controls}>
              {this.props.createFeedbackError && this.props.createFeedbackError.status
                ? <div className={styles.feedbackError}>
                    There was a problem saving your comment, please try again.
                  </div>
                : null}
              <MLButton
                className={styles.addCommentButton}
                dataId="cancel-comment-modal"
                title="Cancel"
                color="red"
                bordered={true}
                handleClick={this.props.closeModal}
              />
              <MLButton
                className={styles.addCommentButton}
                dataId="save-comment-modal"
                title="Save"
                handleClick={this.props.handleSave.bind(this, this.handleCreateFeedback)}
                disabled={!this.state.level}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

OpenCommentModal.propTypes = {
  closeModal: PropTypes.func,
  handleSave: PropTypes.func,
  createFeedbackError: PropTypes.object,
  createFeedback: PropTypes.func
};

export default OpenCommentModal;
