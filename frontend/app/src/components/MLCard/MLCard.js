import React from 'react';
import PropTypes from 'prop-types';
import Heading from './Heading/Heading';

import styles from './mlCard.css';

const Card = ({type, title, options, children, disabled}) => {
  let disabledClass = (disabled) ? ` ${styles.disabled}` : '';
  let cardClass = `${styles.card}${disabledClass}`;
  return (
    <div className={cardClass} data-id={'MLCard-' + title.split(' ').join('-')}>
      <Heading
        type={type || title}
        title={title}
        options={options}
        disabled={disabled}
      />

      <div className={styles.body}>
        {children}
      </div>
    </div>
  );
};

Card.propTypes = {
  options: PropTypes.element,
  children: PropTypes.element,
  type: PropTypes.string,
  title: PropTypes.string,
  disabled: PropTypes.bool
};

export default Card;
