import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MLButton, MLTag } from '../../MLComponents';
import { CommentLevelButtons } from '../index.js';
import styles from './commentModal.css';

class OpenCommentModal extends Component {
  state = {
    comment: null,
    level: null
  };

  handleChange = event => {
    this.setState({ comment: event.target.textContent.trim() });
  };

  handleLevelClick = (e) => {
    this.setState({
      level: e.target.innerText
    });
  };

  deleteTag = (e) => {
    e.preventDefault();
    this.setState({
      level: null
    });
  };

  render() {
    return (
      <div>
        <div className={styles.header}>
          Open Comments
        </div>

        <CommentLevelButtons
          level={this.state.level}
          handleLevelClick={this.handleLevelClick}
        />

        <div className={styles.comments}>
          <div
            className={styles.commentTextWrapper}
          >
            {this.state.level
              ? <MLTag text={this.state.level} deleteTag={this.deleteTag} />
              : null
            }
            <div
              placeholder="Please leave additional feedback here"
              contentEditable={true}
              suppressContentEditableWarning={true}
              onKeyUp={this.handleChange}
              className={styles.commentText}
            />
          </div>
        </div>

        <div className={styles.controls}>
          {(this.props.createFeedbackError && this.props.createFeedbackError.status)
            ? <div className={styles.feedbackError}>
                There was a problem saving your comment, please try again.
              </div>
            : null
          }
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
            handleClick={this.props.handleSave.bind(this, this.state.comment, this.state.level)}
            disabled={!this.state.level}
          />
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
