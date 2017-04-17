import React, {PropTypes} from 'react';
import styles from './mlButton.css';

const Button = ({title, dataId, color, handleClick, id}) => {

  let buttonColor = styles[color] || '';
  let buttonClass = `${styles.button} ${buttonColor}`;

  return (
    <button
      id={id}
      data-id={dataId}
      className={buttonClass}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  dataId: PropTypes.string.isRequired,
  color: PropTypes.string,
  handleClick: PropTypes.func,
  id: PropTypes.string
};

export default Button;
