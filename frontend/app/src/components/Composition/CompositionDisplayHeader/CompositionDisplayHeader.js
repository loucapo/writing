import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import styles from '../CompositionHeader/compositionHeader.css';

const Header = ({ homeRoute }) => {
  return (
    <header className={styles.header}>
      <Link data-id="header-activity-link" to={homeRoute}>
        View Activity Summary
      </Link>
    </header>
  );
};

Header.propTypes = {
  homeRoute: PropTypes.string
};

export default Header;
