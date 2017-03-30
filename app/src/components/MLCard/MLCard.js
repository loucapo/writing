import React, {PropTypes} from 'react';
import Heading from './Heading/Heading';

import styles from './mlCard.css';

const Card = ({type, title, role, children}) => {
  return (
    <div className={styles.card}>
      <Heading
        type={type}
        title={title}
        role={role}
        sideMenu={children[0]}
      />

      <div className={styles.body}>
        {children[1]}
      </div>
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.array,
  type: PropTypes.string,
  title: PropTypes.string,
  role: PropTypes.string
};


export default Card;
