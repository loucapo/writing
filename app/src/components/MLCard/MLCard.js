import React, {PropTypes} from 'react';
import Heading from './Heading/Heading';

import styles from './mlCard.css';

const Card = ({type, title, role, options, children}) => {
  return (
    <div className={styles.card}>
      <Heading
        type={type}
        title={title}
        role={role}
        options={options}
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
  role: PropTypes.string
};


export default Card;
