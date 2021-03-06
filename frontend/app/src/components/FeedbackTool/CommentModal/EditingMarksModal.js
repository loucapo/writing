import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MLButton, MLMenuList } from '../../MLComponents';
import styles from './commentModal.css';

class EditingMarksModal extends Component {
  state = {
    comment: null,
    editingMarks: [],
    selectedEditingMark: null
  };

  handleEditingMarkChange = e => {
    let editingMarkId = e.target.dataset.id;
    let selectedEditingMark = this.state.editingMarks.find(mark => mark.id === editingMarkId);
    this.setState({ selectedEditingMark });
  };

  handleCommentChange = e => {
    this.setState({ comment: e.target.value });
  };

  handleCreateFeedback = () => {
    this.props.handleSave(
      this.state.comment,
      null,
      true,
      null,
      this.state.selectedEditingMark.editingMarkId
    );
  };

  componentWillMount = () => {
    const editingMarks = this.props.editingMarks.map(mark => {
      // Parses editingMarkId to generic id so it can be used in MLMenuList
      mark.id = mark.editingMarkId;
      return mark;
    });

    this.setState({
      editingMarks,
      selectedEditingMark: editingMarks[0]
    });
  };

  render() {
    return (
      <div className={styles.editingMarksModal}>
        <div className={styles.header}>
          Editing Marks
        </div>

        <div className={styles.modalWrapper}>
          <div>
            <MLMenuList list={this.state.editingMarks} callback={this.handleEditingMarkChange} />
          </div>
          <div className={styles.rightPanel}>
            <div className={styles.commentWrapper}>

              <div className={styles.section}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionHeaderText}>Automatic Comment</div>
                  <div className={styles.commentsHeadingLine} />
                </div>
                <div className={styles.commentDescription}>
                  {this.state.selectedEditingMark.description}
                </div>
              </div>

              <div className={styles.section}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionHeaderText}>Additional Comment</div>
                  <div className={styles.commentsHeadingLine} />
                </div>
                <textarea
                  className={styles.commentTextWrapper}
                  placeholder="Optional"
                  onKeyUp={this.handleCommentChange}
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
                handleClick={this.handleCreateFeedback}
                disabled={!this.state.selectedEditingMark}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

EditingMarksModal.propTypes = {
  closeModal: PropTypes.func,
  handleSave: PropTypes.func,
  createFeedbackError: PropTypes.object,
  editingMarks: PropTypes.array
};

export default EditingMarksModal;
