import React, {PropTypes} from 'react';
import styles from './mlButton.css';

const Button = ({title, dataId, color, onClick}) => {

  let buttonColor = styles[color] || '';
  let buttonClass = `${styles.button} ${buttonColor}`;

  return (
    <button
      data-id={dataId}
      className={buttonClass}
      onClick={onClick}>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  dataId: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
