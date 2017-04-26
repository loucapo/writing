import React from 'react';
import PropTypes from 'prop-types';
import MLModal from '../MLModal';

const DemoModal = ({closeModal, isOpen}) => {
  return isOpen
    ?
      (<MLModal
        title="Demo Modal"
        closeModal={closeModal}>
        <p>This Modal is for demo purpose only.</p>
        <p>Clicking on the 'x' icon or anywhere outside of modal will close it.</p>
      </MLModal>)
    : null;
};

DemoModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};

export default DemoModal;
