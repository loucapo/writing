import React, {PropTypes} from 'react';
import InstructorControlsContainer from '../../InstructorControlsContainer/InstructorControlsContainer';
import MLIcon from 'ml-react-cdl-icons';

import styles from './heading.css';

const Heading = ({type, title, role, hideEdit, hideDelete}) => {
  let editIcon = (<MLIcon
    className={styles.editIcon}
    title="edit"
    type="edit"
    width="18"
    height="19"
    viewBox="0 0 24 24"
  />);

  let deleteIcon = (<MLIcon
    className={styles.deleteIcon}
    title="trash"
    type="trash"
    width="18"
    height="19"
    viewBox="0 0 24 24"
  />);

  return (
    <h1 data-id={`${type}-section`}>
      <span>
        <MLIcon
          className={styles.collapseIcon}
          title="minus"
          type="minus"
          width="12"
          height="12"
          viewBox="0 0 24 24"
        />
        <span className={styles.headingText}>
          {title}
        </span>
      </span>

      <InstructorControlsContainer role={role}>
        <div>
          <span data-id={`${type}-edit`}>{(!hideEdit) ? editIcon : null}</span>
          <span data-id={`${type}-delete`}>{(!hideDelete) ? deleteIcon : null}</span>
        </div>
      </InstructorControlsContainer>
    </h1>
  );
};

Heading.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  role: PropTypes.string,
  hideEdit: PropTypes.bool,
  hideDelete: PropTypes.bool
};

export default Heading;
