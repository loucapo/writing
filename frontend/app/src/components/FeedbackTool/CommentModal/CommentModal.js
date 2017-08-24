import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MLButton, MLTag } from '../../MLComponents';
import styles from './commentModal.css';

class CommentModal extends Component {
  state = {
    comment: null,
    level: null
  };

  handleChange = event => {
    let trimmedComment = event.target.lastChild.textContent.trim();
    this.setState({ comment: trimmedComment });
  };

  handleBackgroundClick = event => {
    if (event.target === event.currentTarget) {
      this.props.closeModal();
    }
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
                bordered={this.state.level !== 'Good Job'}
                handleClick={this.handleLevelClick}
              />
              <MLButton
                className={styles.addCommentButton}
                dataId="needs-work-comment-modal"
                title="Needs Work"
                bordered={this.state.level !== 'Needs Work'}
                handleClick={this.handleLevelClick}
              />
              <MLButton
                className={styles.addCommentButton}
                dataId="needs-extensive-work-comment-modal"
                title="Needs Extensive Revision"
                bordered={this.state.level !== 'Needs Extensive Revision'}
                handleClick={this.handleLevelClick}
              />
              <span className={styles.required}>(required)</span>
            </div>
          </div>

          <div className={styles.comments}>
            <div
              className={styles.commentText}
              placeholder="Please leave additional feedback here"
              contentEditable={true}
              onKeyUp={this.handleChange}
              suppressContentEditableWarning={true}
            >
              {this.state.level
                ? <MLTag text={this.state.level} deleteTag={this.deleteTag} />
                : null
              }
            </div>
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
              handleClick={this.props.handleSave.bind(this, this.state.comment, this.state.level)}
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
