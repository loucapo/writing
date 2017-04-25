import React, {PropTypes} from 'react';
import MLIcon from 'ml-react-cdl-icons';
import styles from './mlButton.css';

const Button = ({title, dataId, color, handleClick, id, icon}) => {

  let buttonColor = styles[color] || '';
  let buttonClass = `${styles.button} ${buttonColor}`;

  return (
    <button
      id={id}
      data-id={dataId}
      className={buttonClass}
      onClick={handleClick}
    >
      {(icon)
      ?
        <MLIcon
          className={styles.icon}
          title={icon}
          type={icon}
          width="18"
          height="19"
          viewBox="0 0 24 24"
        />
      :
      null} &nbsp;
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  dataId: PropTypes.string.isRequired,
  color: PropTypes.string,
  handleClick: PropTypes.func,
  id: PropTypes.string,
  icon: PropTypes.string
};

export default Button;
