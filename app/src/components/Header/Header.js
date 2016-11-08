import React, { PropTypes } from 'react';

const header = require('./header.css');

const Header = (props) => {
  let contentLeft = props.contentLeft ? props.contentLeft : '';
  let dataIdLeft = props.dataIdLeft ? props.dataIdLeft : '';
  let contentRight = props.contentRight ? props.contentRight : '';
  let dataIdRight = props.dataIdRight ? props.dataIdRight : '';

  return (
    <header data-id="header" className={header.top_header} >
      <h2 data-id={dataIdLeft} className={header.logo}>{contentLeft}</h2>
      <span data-id={dataIdRight} className={header.course_name}>{contentRight}</span>
    </header>
  );
};

Header.propTypes = {
  contentLeft: PropTypes.string,  // the left side of the header
  dataIdLeft: PropTypes.string,   // the left side data id
  contentRight: PropTypes.string, // the right side
  dataIdRight: PropTypes.string,  // the right side data id
  css: PropTypes.string
};

export default Header;
