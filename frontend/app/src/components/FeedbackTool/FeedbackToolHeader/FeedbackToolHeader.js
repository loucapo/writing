import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import moment from 'moment';
import MLIcon from 'ml-react-cdl-icons';
import styles from './feedbackToolHeader.css';

const Header = ({ homeRoute, draftTitle, submittedDate, instructorName }) => {
  return (
    <header className={styles.header}>
      <div data-id="header-back-button" className={styles.leftContainer}>
        <Link to={`${homeRoute}?display=submissions`}>
          <MLIcon
            className={styles.arrowIcon}
            title="arrow left"
            type="arrow_left"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          />
        </Link>
      </div>
      <div>
        <span data-id="instructor-name" className={styles.instructorName}>{instructorName}</span>
        <div data-id="draft-info" className={styles.draftInfo}>
          {`${draftTitle}, `}
          <span className={styles.italic}>
            {`Submitted ${moment(submittedDate).format('MMMM, Do, YYYY, h:mm:ss a')}`}
          </span>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  homeRoute: PropTypes.string,
  draftTitle: PropTypes.string,
  submittedDate: PropTypes.string,
  instructorName: PropTypes.string
};

export default Header;