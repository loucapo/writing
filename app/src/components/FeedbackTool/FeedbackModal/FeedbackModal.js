import React, {PropTypes} from 'react';
import MLModal from './../../MLModal/MLModal';
import feedbackModalStyles from './FeedbackModal.css';

const FeedbackToolModal = ({form, position, onClose, isOpen, title}) => {
  const screenHeight = window.screen.height;
  const modalPosition = position;
  if(position && position.top + 400 > screenHeight) {
    const offset = position.top + 400 - screenHeight;
    window.scrollBy(0, offset);
    modalPosition.top = modalPosition.top - offset;
  }
  return (
    <MLModal position={modalPosition} titleBar={{enable: false}} isOpen={isOpen} closeModal={onClose}>
      <h3 className={feedbackModalStyles.heading}>{title}</h3>
      {form}
    </MLModal>
  );
};

FeedbackToolModal.propTypes = {
  form: PropTypes.object,
  position: PropTypes.object,
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  title: PropTypes.string
};

export default FeedbackToolModal;
