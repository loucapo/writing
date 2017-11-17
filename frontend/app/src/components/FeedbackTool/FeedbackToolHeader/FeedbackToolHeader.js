import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { MLButton } from '../../MLComponents/index';
import styles from './feedbackToolHeader.css';

const Header = ({ draftTitle, submittedDate, checkUnsavedChanges }) => {
  return (
    <header className={styles.header}>
      <div className={styles.leftContainer}>
        <div>
          <span data-id="draft-title" className={styles.draftTitle}>
            {draftTitle}
          </span>
          <div data-id="draft-info" className={styles.draftInfo}>
            {`Submitted ${moment(submittedDate).format('MMMM, Do, YYYY, h:mm:ss a')}`}
          </div>
        </div>
      </div>
      <MLButton dataId="done" handleClick={checkUnsavedChanges} title="Done" />
    </header>
  );
};

Header.propTypes = {
  draftTitle: PropTypes.string,
  submittedDate: PropTypes.string,
  checkUnsavedChanges: PropTypes.func
};

export default Header;
