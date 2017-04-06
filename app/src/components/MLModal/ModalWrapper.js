import React, {PropTypes} from 'react';
import MLIcon from 'ml-react-cdl-icons';

import styles from './modalWrapper.css';

const ModalWrapper = (props) => {
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
        <h1>
          {props.title}

          <a onClick={props.closeModal}>
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

ModalWrapper.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string
  ]).isRequired,
  closeModal: PropTypes.func
};

export default ModalWrapper;
