import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MLButton } from '../../MLComponents';
import { MLMenuList } from '../../MLComponents';
import { CommentLevelButtons } from '../index.js';
import styles from './commentModal.css';

class DraftGoalsModal extends Component {
  state = {
    comment: null,
    level: null,
    selectedDraftGoal: null,
    showStaticComment: true,
    draftGoals: []
  };

  handleCreateFeedback = () => {
    this.props.handleSave(
      this.state.comment,
      this.state.level,
      this.state.showStaticComment,
      this.state.selectedDraftGoal.goalId
    );
  };

  componentWillMount = () => {
    const draftGoals = this.props.draftGoals.map((draftGoal) => {
      // Parses goalId to generic id so it can be used in MLMenuList
      draftGoal.id = draftGoal.goalId;
      return draftGoal;
    });

    this.setState({
      draftGoals,
      selectedDraftGoal: draftGoals[0]
    });
  }

  handleCommentChange = e => {
    this.setState({ comment: e.target.value });
  };

  handleDraftGoalChange = e => {
    this.setState({
      selectedDraftGoal: this.state.draftGoals.find(goal => {
        return goal.id === e.target.dataset.id;
      })
    });
  };

  handleLevelClick = (levelId) => {
    this.setState({
      level: levelId,
      showStaticComment: true
    });
  };

  deleteTag = e => {
    e.preventDefault();
    this.setState({
      showStaticComment: false
    });
  };

  render() {
    const showSectionClassName = this.state.level && this.state.showStaticComment ? styles.shown : '';
    return (
      <div className={styles.draftGoalsModal}>
        <div className={styles.header}>
          Draft Goals
        </div>

        <div className={styles.modalWrapper}>
          <div>
            <MLMenuList list={this.state.draftGoals} callback={this.handleDraftGoalChange} />
          </div>
          <div className={styles.rightPanel}>
            <div className={styles.commentWrapper}>
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
                    {this.state.selectedDraftGoal[`option${this.state.level}`]}
                  </div>
                  <div className={styles.removeComment}>
                    <a href="#" onClick={this.deleteTag}>remove</a>
                  </div>
                </div>
              </div>

              <div className={styles.section}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionHeaderText}>Comment</div>
                  <div className={styles.commentsHeadingLine} />
                </div>

                <textarea
                  className={styles.commentTextWrapper}
                  placeholder="Please leave additional feedback here"
                  onKeyUp={this.handleCommentChange}
                />
              </div>
            </div>

            {/*TODO: new component here for controls*/}
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

DraftGoalsModal.propTypes = {
  closeModal: PropTypes.func,
  handleSave: PropTypes.func,
  createFeedbackError: PropTypes.object,
  createFeedback: PropTypes.func,
  draftGoals: PropTypes.array
};

export default DraftGoalsModal;
