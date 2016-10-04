import React, { PropTypes } from 'react';

const header = require('./header.css');

const Header = (props) => {
  let contentLeft = props ? (props.contentLeft ? props.contentLeft : '') : '';
  let contentRight = props ? (props.contentRight ? props.contentRight : '') : '';
  return (
    <header className={header['top-header']} >
      <div>{contentLeft}</div>
      <div>{contentRight}</div>
    </header>
  );
};

Header.propTypes = {
  contentLeft: PropTypes.object, // the left side of the header
  contentRight: PropTypes.object // the right side
};

export default Header;
