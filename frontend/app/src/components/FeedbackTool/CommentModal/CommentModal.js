import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { OpenCommentModal, DraftGoalsModal, EditingMarksModal } from '../index';
import styles from './commentModal.css';

class CommentModal extends Component {
  state = {
    modalType: this.props.modalType
  };

  modals = {
    openComment: OpenCommentModal,
    draftGoals: DraftGoalsModal,
    editingMarks: EditingMarksModal
  };

  handleBackgroundClick = event => {
    if (event.target === event.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    const ModalType = this.modals[this.state.modalType];
    return (
      <div>
        <div className={styles.commentModalOverlay} onClick={this.handleBackgroundClick} />
        <div
          id="commentModal"
          className={styles.commentModal}
          style={{ top: `${this.props.position.top}px`, left: `${this.props.position.left}px` }}
        >
          <ModalType
            handleSave={this.props.handleSave}
            closeModal={this.props.closeModal}
            createFeedbackError={this.props.createFeedbackError}
          />
        </div>
      </div>
    );
  }
}

CommentModal.propTypes = {
  position: PropTypes.object,
  handleSave: PropTypes.func,
  closeModal: PropTypes.func,
  createFeedbackError: PropTypes.object,
  modalType: PropTypes.string
};

export default CommentModal;
