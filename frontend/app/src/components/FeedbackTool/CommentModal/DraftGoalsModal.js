import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MLButton, MLTag } from '../../MLComponents';
import { MLMenuList } from '../../MLComponents';
import { CommentLevelButtons } from '../index.js';
import styles from './commentModal.css';

class DraftGoalsModal extends Component {
  state = {
    comment: null,
    level: null,
    draftGoal: null
  };

  /* TODO: https://macmillanlearning.atlassian.net/browse/WRITE-1517 will make this load from actual data insted of
     being hard coded like this
  */
  dummyDraftGoals = [
    { title: 'Thesis', id: '1' },
    { title: 'Reason and Support', id: '2' },
    { title: 'Paragraph Development', id: '3' },
    { title: 'Intrepretation/Analysis', id: '4' },
    { title: 'Integration of Research', id: '5' },
    { title: 'Counterarguments', id: '6' },
    { title: 'Ideas/Content', id: '7' },
    { title: 'Topic Sentence', id: '8' },
    { title: 'Logical Appeals', id: '9' },
    { title: 'Evidence', id: '10' },
    { title: 'Style/Voice', id: '11' },
    { title: 'Conclusion', id: '12' }
  ];

  handleCommentChange = e => {
    this.setState({ comment: e.target.textContent.trim() });
  };

  handleDraftGoalChange = e => {
    this.setState({ draftGoal: e.target.textContent });
  };

  handleLevelClick = e => {
    this.setState({
      level: e.target.innerText
    });
  };

  deleteTag = e => {
    e.preventDefault();
    this.setState({
      level: null
    });
  };

  render() {
    return (
      <div>
        <div className={styles.header}>
          Draft Goals
        </div>

        <div className={styles.modalWrapper}>
          <MLMenuList list={this.dummyDraftGoals} callback={this.handleDraftGoalChange} />

          <div className={styles.commentWrapper}>
            <CommentLevelButtons level={this.state.level} handleLevelClick={this.handleLevelClick} />

            <div className={styles.comments}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionHeaderText}>Comment</div>
                <div className={styles.commentsHeadingLine} />
              </div>
              <div className={styles.commentTextWrapper}>
                {this.state.level ? <MLTag text={this.state.level} deleteTag={this.deleteTag} /> : null}
                <div
                  placeholder="Please leave additional feedback here"
                  contentEditable={true}
                  suppressContentEditableWarning={true}
                  onKeyUp={this.handleCommentChange}
                  className={styles.commentText}
                />
              </div>
            </div>

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
                handleClick={this.props.handleSave.bind(this, this.state.comment, this.state.level)}
                disabled={!this.state.level}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DraftGoalsModal.propTypes = {
  closeModal: PropTypes.func,
  handleSave: PropTypes.func,
  createFeedbackError: PropTypes.object
};

export default DraftGoalsModal;
