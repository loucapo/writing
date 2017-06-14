import React from 'react';
import PropTypes from 'prop-types';
import {
  MLButton
} from './../../MLComponents/index';

import styles from './reflectionQuestionsFormHeader.css';

const Header = ({questionsAreComplete, handleSave, handleSubmit}) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className="flex">
          <MLButton
            title="Save"
            dataId="save-draft"
            bordered={true}
            handleClick={handleSave}
          />
          <MLButton
            title="Submit Draft"
            dataId="submit-draft"
            handleClick={handleSubmit}
            disabled={!questionsAreComplete}
          />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  questionsAreComplete: PropTypes.bool,
  handleSave: PropTypes.func,
  handleSubmit: PropTypes.func
};

export default Header;
