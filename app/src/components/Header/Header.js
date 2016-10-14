import React, { PropTypes } from 'react';

const header = require('./header.css');

const Header = (props) => {
  let contentLeft = props ? (props.contentLeft ? props.contentLeft : '') : '';
  let contentRight = props ? (props.contentRight ? props.contentRight : '') : '';
  return (
    <header className={header['top-header']} >
      <h2 className={header.logo}>{contentLeft}</h2>
      <span className={header['course-name']}>{contentRight}</span>
    </header>
  );
};

Header.propTypes = {
  contentLeft: PropTypes.object,  // the left side of the header
  contentRight: PropTypes.object, // the right side
  css: PropTypes.string
};

export default Header;
