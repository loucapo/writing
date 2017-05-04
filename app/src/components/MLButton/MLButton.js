import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import MLIcon from 'ml-react-cdl-icons';
import styles from './mlButton.css';

const Button = ({
  title,
  dataId,
  color,
  handleClick,
  id,
  icon,
  link,
  disabled}) => {
  let buttonColor = disabled ? styles.disabled : (styles[color] || '');
  let buttonClass = `${styles.button} ${buttonColor}`;

  const renderIcon = () => {
    if (icon) {
      return (<MLIcon
        className={styles.icon}
        title={icon}
        type={icon}
        width="18"
        height="19"
        viewBox="0 0 24 24"
      />);
    }
    return null;
  };

  const renderButton = () => (
    <button
      id={id}
      data-id={dataId}
      className={buttonClass}
      onClick={disabled ? '' : handleClick} >
      {renderIcon()}
      {title}
    </button>
  );

  const renderLink = () => (
    <Link
      to={disabled ? '' : link}
      data-id={dataId}
      className={buttonClass} >
      {title}
    </Link>);

  return link ? renderLink() : renderButton();

};

Button.propTypes = {
  title: PropTypes.string,
  dataId: PropTypes.string.isRequired,
  color: PropTypes.string,
  handleClick: PropTypes.func,
  id: PropTypes.string,
  icon: PropTypes.string,
  link: PropTypes.string,
  disabled: PropTypes.bool
};

export default Button;
