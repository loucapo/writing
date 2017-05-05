import React from 'react';
import MLButton from '../../MLButton/MLButton.js';

import styles from './header.css';

const Header = () => {
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
            disabled={true}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
