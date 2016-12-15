import React, {PropTypes} from 'react';
import MLModal from './../../MLModal/MLModal';


const FeedbackToolModal = ({form, position, onClose, isOpen}) => {
  const screenHeight = window.screen.height;
  const modalPosition = position;
  if(position && position.top + 400 > screenHeight) {
    const offset = position.top + 400 - screenHeight;
    window.scrollBy(0, offset);
    modalPosition.top = modalPosition.top - offset;
  }
  return (
    <MLModal position={modalPosition} titleBar={{enable: false}} isOpen={isOpen} closeModal={onClose}>
      {form}
    </MLModal>
  );
};

FeedbackToolModal.propTypes = {
  form: PropTypes.object,
  position: PropTypes.object,
  onClose: PropTypes.func,
  isOpen: PropTypes.bool
};

export default FeedbackToolModal;
