import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import moment from 'moment';
import MLIcon from 'ml-react-cdl-icons';
import styles from './feedbackToolHeader.css';
import { MLButton } from '../../MLComponents/index';

const Header = ({
  homeRoute,
  draftId,
  draftTitle,
  submittedDate
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.leftContainer}>
        <div data-id="header-back-button">
          <Link to={`${homeRoute}?currentDraft=${draftId}`}>
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
          <span data-id="draft-title" className={styles.draftTitle}>{draftTitle}</span>
          <div data-id="draft-info" className={styles.draftInfo}>
            {`Submitted ${moment(submittedDate).format('MMMM, Do, YYYY, h:mm:ss a')}`}
          </div>
        </div>
      </div>
      <MLButton dataId="done" link={`${homeRoute}?currentDraft=${draftId}`} title="Done" />
    </header>
  );
};

Header.propTypes = {
  homeRoute: PropTypes.string,
  draftId: PropTypes.string,
  draftTitle: PropTypes.string,
  submittedDate: PropTypes.string
};

export default Header;
