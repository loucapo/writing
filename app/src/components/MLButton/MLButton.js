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
  icon,
  link,
  disabled,
  bordered}) => {
  let border = bordered ? '_border' : '';
  let buttonColor = color || 'aqua';
  let buttonClass = disabled ? `disabled${border}` : `${buttonColor}${border}`;

  const renderButton = () => (
    <button
      data-id={dataId}
      className={`${styles.button} ${styles[buttonClass]}`}
      onClick={disabled ? '' : handleClick} >
      {icon ?
        <MLIcon
          className={styles.icon}
          title={icon}
          type={icon}
          width="18"
          height="19"
          viewBox="0 0 24 24"
        />
        : null}
      {title}
    </button>
  );

  const renderLink = () => (
    <Link
      to={disabled ? '' : link}
      data-id={dataId}
      className={`${styles.button} ${styles[buttonClass]}`} >
      {title}
    </Link>);

  return link ? renderLink() : renderButton();
};

Button.propTypes = {
  title: PropTypes.string,
  dataId: PropTypes.string.isRequired,
  color: PropTypes.string,
  handleClick: PropTypes.func,
  icon: PropTypes.string,
  link: PropTypes.string,
  disabled: PropTypes.bool,
  bordered: PropTypes.bool
};

export default Button;
