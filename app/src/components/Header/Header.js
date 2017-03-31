import React, {PropTypes} from 'react';

import styles from './header.css';

const Header = ({title}) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div data-id="prod-tools-header" className={styles.leftSide}>
          {title}
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
