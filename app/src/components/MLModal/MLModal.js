import React from 'react';
import PropTypes from 'prop-types';
import MLIcon from 'ml-react-cdl-icons';

import styles from './mlmodal.css';

const MLModal = (props) => {
  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      props.closeModal();
    }
  };

  return (
    <div
      data-id="modal"
      className={styles.modalContainer}
      onClick={handleBackgroundClick}>

      <div className={styles.modalWrapper}>
        <h1 data-id="modal-heading" className={styles.heading}>
          {props.title}

          <a data-id="close-modal" onClick={props.closeModal}>
            <MLIcon
              className={styles.closeIcon}
              title="close"
              type="x"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            />
          </a>
        </h1>

        <div className={styles.modalContent}>
          {props.children}
        </div>
      </div>
    </div>
  );
};

MLModal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string
  ]).isRequired,
  closeModal: PropTypes.func
};

export default MLModal;
