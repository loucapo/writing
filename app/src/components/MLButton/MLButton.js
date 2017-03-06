import React, {PropTypes} from 'react';
import styles from './mlButton.css';

const Button = ({title, dataId, color}) => {

  let buttonColor = styles[color] || '';
  let buttonClass = `${styles.button} ${buttonColor}`;

  return (
    <button data-id={dataId} className={buttonClass}>{title}</button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  dataId: PropTypes.string,
  color: PropTypes.string
};

export default Button;
