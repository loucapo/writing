import React, {PropTypes} from 'react';
import MLDropdown from '../../MLDropdown/MLDropdown';

import styles from './rubricSelector.css';

const Rubric = () => {
  return (
    <div className={styles.rubric} >
      <span data-id="rubric-dropdown">
        <MLDropdown title="Select Rubric" onChange={()=>{}} />
      </span>
      <a data-id="create-rubric" href="#">Create Custom Rubric</a>
    </div>
  );
};

Rubric.propTypes = {
  rubric: PropTypes.object
};

export default Rubric;
