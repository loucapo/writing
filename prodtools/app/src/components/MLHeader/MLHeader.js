import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import MLIcon from 'ml-react-cdl-icons';
import MLButton from '../MLButton/MLButton.js';

import styles from './mlHeader.css';

const Header = ({title, handleSubmit}) => {

  return (
    <header data-id="prod-tools-header" className={styles.header}>
      { (!title) ? null :
      <div className={styles.wrapper}>
        <div
          data-id="header-back-button"
          className={styles.leftWrapper}
          onClick={browserHistory.goBack}>
          <MLIcon
            className={styles.leftArrow}
            title="arrow left"
            type="arrow_left"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          />
          <div data-id="builder-title" className={styles.title}>
            {title} Builder
          </div>
        </div>
        <div className={styles.rightWrapper}>
          <MLButton
            title="Cancel"
            onClick={browserHistory.goBack}
            dataId="student-preview" />
          <MLButton
            title={`Save ${title}`}
            onClick={handleSubmit}
            color="blue"
            dataId="save-form" />
        </div>
      </div>
      }
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  handleSubmit: PropTypes.func
};

export default Header;
