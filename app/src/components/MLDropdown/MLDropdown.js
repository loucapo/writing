import React, {PropTypes} from 'react';
import MLIcon from 'ml-react-cdl-icons';

import styles from './mldropdown.css';

const Dropdown = ({title}) => {
  return (
    <a className={styles.dropDownContainer} href="#">
      {title}
      <MLIcon
        className={styles.dropdownCaret}
        title="caret down"
        type="caret_down"
        width="12"
        height="12"
        viewBox="0 0 24 24"
        />
    </a>
  );
};

Dropdown.propTypes = {
  title: PropTypes.string
};

export default Dropdown;
