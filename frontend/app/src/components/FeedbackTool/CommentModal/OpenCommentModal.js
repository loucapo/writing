import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MLButton } from '../../MLComponents';
import { CommentLevelButtons } from '../index.js';
import styles from './commentModal.css';

class OpenCommentModal extends Component {
  state = {
    comment: null,
    level: null,
    showStaticComment: true,
    options: {
      option1: 'Needs extensive revision',
      option2: 'Needs work',
      option3: 'Nice job!'
    }
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
      showStaticComment: false
    });
  };

  handleCreateFeedback = () => {
    this.props.handleSave(this.state.comment, this.state.level, this.state.showStaticComment);
  };

  render() {
    const showSectionClassName = this.state.level && this.state.showStaticComment ? styles.shown : '';
    return (
      <div className={styles.openCommentModal}>
        <div className={styles.header}>
          Open Comments
        </div>

        <CommentLevelButtons level={this.state.level} handleLevelClick={this.handleLevelClick} />

        <div className={`${styles.sectionContainer} ${showSectionClassName}`}>
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionHeaderText}>
                This is the default comment that will be included
              </div>
              <div className={styles.commentsHeadingLine} />
            </div>
            <div className={styles.commentDescription}>
              {this.state.options[`option${this.state.level}`]}
            </div>
            <div className={styles.removeComment}>
              <a href="#" onClick={this.deleteTag}>remove</a>
            </div>
          </div>
        </div>

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
                handleClick={this.handleCreateFeedback}
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
  createFeedbackError: PropTypes.object
};

export default OpenCommentModal;
