import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import moment from 'moment';
import MLIcon from 'ml-react-cdl-icons';
import styles from './feedbackToolHeader.css';
import { MLButton } from './../../MLComponents/index';

const Header = ({ homeRoute,
                  draftTitle,
                  submittedDate,
                  instructorName,
                  updateReviewStatus,
                  studentActivityId,
                  studentDraftId}) => {

  let done = () => {
    updateReviewStatus(studentActivityId, studentDraftId, 'inProgress', `${homeRoute}?display=submissions`);
  };

  return (
    <header className={styles.header}>
      <div className={styles.leftContainer}>
        <div data-id="header-back-button" className={styles.leftSubContainer}>
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
      </div>
      <div className={styles.rightContainer}>
        <MLButton title="Done" dataId="done" handleClick={done} />
      </div>
    </header>);
};

Header.propTypes = {
  homeRoute: PropTypes.string,
  draftTitle: PropTypes.string,
  submittedDate: PropTypes.string,
  instructorName: PropTypes.string,
  updateReviewStatus: PropTypes.func,
  studentActivityId: PropTypes.string,
  studentDraftId: PropTypes.string
};

export default Header;
