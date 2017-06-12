import React from 'react';
import PropTypes from 'prop-types';

import styles from './CompositionDisplayHeader.css';

const Header = ({ homeRoute }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerRight}>
          <a href={homeRoute}>View Activity Summary</a>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  homeRoute: PropTypes.string
};

export default Header;
