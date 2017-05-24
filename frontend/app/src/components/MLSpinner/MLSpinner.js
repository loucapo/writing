import React, {PropTypes} from 'react';

import styles from './mlspinner.css';


const MLSpinner = ({color}) => {
  return (
    <div className={ styles.container + ' ' + styles[color] }>
      <div className={ styles.rect1 } />
      <div className={ styles.rect2 } />
      <div className={ styles.rect3 } />
      <div className={ styles.rect4 } />
      <div className={ styles.rect5 } />
    </div>
  );
};

MLSpinner.defaultProps = {
  color: 'red'
};

MLSpinner.propTypes = {
  color: PropTypes.string
};

export default MLSpinner;
