import React from 'react';
import PropTypes from 'prop-types';
import { MLButton } from '../../MLComponents/index';

import styles from '../CompositionHeader/compositionHeader.css';

const Header = ({ homeRoute }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerRight}>
          <MLButton
            title="View Activity Summary"
            dataId="header-activity-link"
            bordered={true}
            color="white"
            link={homeRoute}
          />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  homeRoute: PropTypes.string
};

export default Header;
