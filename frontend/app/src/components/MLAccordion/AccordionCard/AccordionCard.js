import React from 'react';
import PropTypes from 'prop-types';

import styles from './accordionCard.css';

const AccordionCard = ({ content }) => {
  return (
    <div className={styles.content}>
      {content}
    </div>
  );
};

AccordionCard.propTypes = {
  content: PropTypes.string
};

export default AccordionCard;
