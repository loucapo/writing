import React, {PropTypes} from 'react';
import MLButton from '../MLButton/MLButton.js';
import MLIcon from 'ml-react-cdl-icons';

import styles from './header.css';

const Header = ({title}) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div data-id="header-back-button" className={styles.leftArrowContainer}>
          <MLIcon
            className={styles.leftArrow}
            title="arrow left"
            fill="#ffffff"
            type="arrow_left"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          />
        </div>
        <div data-id="course-title" className={styles.leftSide}>
          {title}
        </div>
        <div className={styles.headerRight}>
          <MLButton title="Student Preview" dataId="student-preview" color="blue" />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
