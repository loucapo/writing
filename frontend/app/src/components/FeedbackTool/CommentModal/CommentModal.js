import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { OpenCommentModal, EditingMarksModal, DraftGoalsModal } from '../index';
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

  componentDidMount = () => {
    document.body.addEventListener('mousedown', this.handleCollapse);
    const modal = document.querySelector(`.${styles.commentModalContainerContainer}`);
    modal.addEventListener('contextmenu', this.handleRightClick);
    //do the repositioning after render()
    this.repositionModal();
  };

  componentWillUnmount = () => {
    document.body.removeEventListener('mousedown', this.handleCollapse);
    const modal = document.querySelector(`.${styles.commentModalContainerContainer}`);
    modal.removeEventListener('contextmenu', this.handleRightClick);
  };

  handleRightClick = event => {
    event.stopPropagation();
  };

  handleCollapse = event => {
    event.stopPropagation();
    let clickedElem = document.querySelector(`.${styles.commentModal}`);
    if (clickedElem && !clickedElem.contains(event.target)) {
      this.props.closeModal();
    }
  };

  repositionModal = () => {
    const modal = document.querySelector(`.${styles.commentModal}`);
    const modalContainer = document.querySelector(`.${styles.commentModalContainerContainer}`);
    modalContainer.style.top = this.calculatePosition(this.props.position, modal.offsetHeight);
  };

  calculatePosition = (position, modalHeight) => {
    // figure out if we're going to display above, below, or in the middle
    let top = null;
    const verticalPadding = 15;
    const topSpace = position.y;
    const bottomSpace = window.innerHeight - position.y - position.height;
    const relativeTop = position.y - position.parentY;
    // if there is more room above the highlight and the modal fits, put it on top
    if (topSpace >= bottomSpace && topSpace > modalHeight) {
      top = relativeTop - modalHeight - verticalPadding;
      // if the top is off the screen, try again
      if (top < 0 && (position.parentY + top) < 80) {
        top = null;
      }
    }
    // if there is more room below the highlight and the modal fits, put it on bottom
    if (top === null && bottomSpace > topSpace && bottomSpace > modalHeight) {
      top = relativeTop + position.height + verticalPadding;
      // not bothering to check if the modal is too low since it's currently not an issue
    }
    // vertically center the modal, obscuring the highlight
    if (top === null) {
      top = Math.floor(relativeTop + (position.height / 2) - (modalHeight / 2));
    }
    return top + 'px';
  };

  render() {
    const ModalType = this.modals[this.state.modalType];
    return (
      <div>
        <div className={styles.commentModalOverlay} />
        <div className={styles.commentModalContainerContainer}>
          <div className={styles.commentModalContainer}>
            <div
              id="commentModal"
              className={styles.commentModal}
            >
              <ModalType
                handleSave={this.props.handleSave}
                closeModal={this.props.closeModal}
                createFeedbackError={this.props.createFeedbackError}
                editingMarks={this.props.editingMarks}
                draftGoals={this.props.draftGoals}
              />
            </div>
          </div>
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
  modalType: PropTypes.string,
  editingMarks: PropTypes.array,
  draftGoals: PropTypes.array
};

export default CommentModal;
