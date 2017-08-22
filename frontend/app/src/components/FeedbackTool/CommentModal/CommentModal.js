import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MLButton } from '../../MLComponents';
import styles from './commentModal.css';

class CommentModal extends Component {
  state = {
    comment: null
  };

  handleChange = event => {
    let trimmedComment = event.target.value.trim();
    this.setState({ comment: trimmedComment });
  };

  handleBackgroundClick = event => {
    if (event.target === event.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div>
        <div className={styles.commentModalOverlay} onClick={this.handleBackgroundClick} />
        <div
          id="commentModal"
          className={styles.commentModal}
          style={{ top: `${this.props.position.top}px`, left: `${this.props.position.left}px` }}
        >
          <div className={styles.header}>
            Comment
          </div>

          <div className={styles.fixedComments}>
            <div className={styles.buttonsHeader}>
              Please select one and leave your comment below
            </div>

            <div className={styles.buttons}>
              <MLButton
                className={styles.addCommentButton}
                dataId="good-job-comment-modal"
                title="Good Job"
                bordered={true}
              />
              <MLButton
                className={styles.addCommentButton}
                dataId="needs-work-comment-modal"
                title="Needs Work"
                bordered={true}
              />
              <MLButton
                className={styles.addCommentButton}
                dataId="needs-extensive-work-comment-modal"
                title="Needs Extensive Work"
                bordered={true}
              />
            </div>
          </div>

          <div className={styles.comments}>
            <textarea onChange={this.handleChange} placeholder="Please leave additional feedback here" />
          </div>

          <div className={styles.controls}>
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
              handleClick={this.props.handleSave.bind(this, this.state.comment)}
              disabled={!this.state.comment}
            />
          </div>
        </div>
      </div>
    );
  }
}

CommentModal.propTypes = {
  position: PropTypes.object,
  closeModal: PropTypes.func,
  handleSave: PropTypes.func
};

export default CommentModal;
