import React from 'react';
import PropTypes from 'prop-types';
import MLButton from '../../MLButton/MLButton.js';

import styles from './header.css';

const Header = ({draftIsEmpty}) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerRight}>
          <MLButton
            title="Save"
            dataId="save-draft"
            disabled={true}
            bordered={true}
          />
          <MLButton
            title="Done, Start Reflection"
            dataId="start-reflection"
            disabled={draftIsEmpty}
          />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  draftIsEmpty: PropTypes.bool
};

export default Header;
