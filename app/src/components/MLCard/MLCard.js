import React, {PropTypes} from 'react';
import Heading from './Heading/Heading';

import styles from './mlCard.css';

const Card = ({type, title, role, children, hideEdit, hideDelete}) => {

  return (
    <div className={styles.card}>
      <Heading type={type} title={title} role={role} hideEdit={hideEdit} hideDelete={hideDelete} />

      <div className={styles.body}>
        {children}
      </div>
    </div>
  );
};

Card.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  role: PropTypes.string,
  children: PropTypes.object,
  hideEdit: PropTypes.bool,
  hideDelete: PropTypes.bool
};

export default Card;
